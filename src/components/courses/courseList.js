"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

var CourseList = React.createClass({
	propTypes: {
		courses: React.PropTypes.array.isRequired
	},

	deleteCourse: function(id, event) {
		event.preventDefault();
		CourseActions.deleteCourse(id);
		toastr.success('Course Deleted');
	},

	render: function() {
		var createCourseRow = function(course) {
			//var authorName = 
			return (
				<tr key={course.id}>
				   <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
					<td><Link to="manageCourse" params={{id: course.id}}>{course.courseName}</Link></td>					
					<td>{course.Location}</td>
					<td>{course.author}</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th></th>
						<th>Name</th>
						<th>Location</th>
						<th>Author</th>
					</thead>
					<tbody>
						{this.props.courses.map(createCourseRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = CourseList;