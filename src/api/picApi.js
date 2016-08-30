"use strict";

//This file is mocking a web API by hitting hard coded data.
var pics = require('./picData').pics;
var galleryPics = require('./picData').galleries;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(pic) {
	return pic.name.toLowerCase() + '-' + pic.location.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var PicApi = {
	getAllPics: function() {
		return _clone(pics); 
	},

    getAllGalleryPics: function(){
		return _clone(galleryPics);
	},
	
	savePic: function(pic) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the pic to the DB via AJAX call...');
		
		if (pic.id) {
			var existingPicIndex = _.indexOf(pics, _.find(pics, {id: pic.id})); 
			pics.splice(existingPicIndex, 1, pic);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			pic.id = _generateId(pic);
			pics.push(pic);
		}

		return _clone(pic);
	},

	deletePic: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(pics, { id: id});
	}
};

module.exports = PicApi;