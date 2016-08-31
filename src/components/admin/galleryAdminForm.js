"use strict";

var React = require('react');
var Input = require('../common/textInput');
var ImageUploader = require('../common/uploadImages');


var AuthorForm = React.createClass({
	propTypes: {
		pic:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<div>
				<h1>Galeria</h1>
				<Input
					name="name"
					label="Name"
					value={this.props.pic.name}
					onChange={this.props.onChange}
					error={this.props.errors.name} />

				<Input
					name="headerInfo"
					label="Header Info"
					value={this.props.pic.headerInfo}
					onChange={this.props.onChange}
					error={this.props.errors.headerInfo} />

				<Input
					name="description"
					label="Descripcion"
					value={this.props.pic.description}
					onChange={this.props.onChange}
					error={this.props.errors.description} />

				<Input
					name="location"
					label="Imagen"
					value={this.props.pic.location}
					onChange={this.props.onChange}
					error={this.props.errors.location} />
                
				<ImageUploader />
     
				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</div>
		);
	}
});

module.exports = AuthorForm;