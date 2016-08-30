"use strict";

var React = require('react');
var Router = require('react-router');
var GalleryForm = require('./galleryAdminForm');
var GalleryActions = require('../../actions/picActions');
var GalleryStore = require('../../stores/picStore');
var toastr = require('toastr');

var ManageGalleryPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm('Leave without saving?')) {
				transition.abort();
			}
		}
	},

	getInitialState: function() {
		return {
			pic: {id: '', name: '', headerInfo: '', description: '', location: ''},
			errors: {},
			dirty: false
		};
	},

	componentWillMount: function() {
		var picId = this.props.params.id; //from the path '/author:id'
		if (picId) {
			this.setState({pic: GalleryStore.getPicById(picId) });
		}
	},

	setPicState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.pic[field] = value;
		return this.setState({pic: this.state.pic});
	},

	picFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		if (this.state.pic.name.length < 3) {
			this.state.errors.firstName = 'Name must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.pic.headerInfo.length < 3) {
			this.state.errors.headerInfo = 'Header Info must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	savePic: function(event) {
		event.preventDefault();

		if (!this.picFormIsValid()) {
			return;
		}

		if (this.state.pic.id) {
			GalleryActions.updatePic(this.state.pic);
		} else {
			GalleryActions.updatePic(this.state.pic);
		}
		
		this.setState({dirty: false});
		toastr.success('Galeria guardada');
		console.log("savePic....");
		this.transitionTo('admin');
		
	},

	render: function() {
		return (
			<GalleryForm
            
				pic={this.state.pic}
				onChange={this.setPicState}
				onSave={this.savePic}
				errors={this.state.errors} />
		);
	}
});

module.exports = ManageGalleryPage;