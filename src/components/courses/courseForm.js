"use strict";

var React = require('react');
var Input = require('../common/textInput');
var Select = require('../common/selectInput');

var CourseForm = React.createClass({
	propTypes: {
		course:	React.PropTypes.object.isRequired,
        authors: React.PropTypes.array.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
        onSelectChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object		
	},

	render: function() {
		return (
			<form>
				<h1>Manage Course</h1>
				<Input
					name="courseName"
					label="Course Name"
					value={this.props.course.courseName}
					onChange={this.props.onChange}
					error={this.props.errors.courseName} />
                  
                  <Select name="author"  label="Author" authors={this.props.authors} selectedIndex={this.props.course.authorID} onChange={this.props.onSelectChange}/>
                   
                   

				<Input
					name="Location"
					label="Loaction"
					value={this.props.course.Location}
					onChange={this.props.onChange}
					error={this.props.errors.Location} />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = CourseForm;