"use strict";

//This file is mocking a web API by hitting hard coded data.
var courses = require('./courseData').courses;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(course) {
	var id = course.courseName.toLowerCase() + '-' + course.Location.toLowerCase();
    console.log(id);
	return id;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var CourseApi = {
	getAllCourses: function() {
		return _clone(courses); 
	},

	getCourseById: function(id) {
		var course = _.find(course, {id: id});
		return _clone(course);
	},
	
	saveCourse: function(course) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		
		if (course.id) {
			var existingCourseIndex = _.indexOf(courses, _.find(courses, {id: course.id})); 
			courses.splice(existingCourseIndex, 1, course);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			course.id = _generateId(course);
			courses.push(course);
		}
        console.log("SavedToDB");
		return _clone(course);
	},

	deleteCourse: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(courses, { id: id});
	}
};

module.exports = CourseApi;