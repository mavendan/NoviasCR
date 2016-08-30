"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');


var ManageCoursePage = React.createClass({

  mixins: [
		Router.Navigation
	],

  	getInitialState: function() {
		return {
			course: { id: '', courseName: '', Location: '', instructor: '', instructorID: '' },
            authors: AuthorStore.getAllAuthors(),            
			errors: {},
			dirty: false
		};
	},
    componentWillMount: function() {
		var courseId = this.props.params.id; //from the path '/course:id'
		if (courseId) {
			this.setState({course: CourseStore.getCourseById(courseId) });
		}
	},
   setCourseState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.course[field] = value;
		return this.setState({course: this.state.course});
	},
    setAuthorCourseState: function(event) {
        console.log("Selected Text");
        var authorName= event.target.options[event.target.selectedIndex].innerHTML;
        var authorID= event.target.value;
        var fieldName = event.target.id;
        this.state.course[fieldName] = authorName;
        this.state.course["authorID"] = authorID;
	},
   saveCourse: function(){
      event.preventDefault();

      if (this.state.course.id) {
			CourseActions.updateCourse(this.state.course);
		} else {
			CourseActions.createCourse(this.state.course);
		}
     
     this.setState({dirty: false});
     toastr.success('Course saved.');
    this.transitionTo('courses');
   },
  render: function(){
      return (
          <CourseForm
				course={this.state.course}
                authors={this.state.authors}
				onChange={this.setCourseState}
                onSelectChange={this.setAuthorCourseState}
				onSave={this.saveCourse}
				errors={this.state.errors} />
      );
  }
});

module.exports = ManageCoursePage;