"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var GalleryStore = require('../../stores/picStore');
var GalleryActions = require('../../actions/picActions');
var GalleryAdminList = require('../../components/admin/galleryAdminList');


var GaleryAdminPage =  React.createClass({
	getInitialState: function() {
		console.log("Admin getInitialState....");
		return {
			gallery: GalleryStore.getAllGalleryPics()
		};
	},

	componentWillMount: function() {

			console.log("Admin componentWillMount....");
		GalleryStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
			console.log("Admin componentWillUnmount....");
		GalleryStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		console.log("Admin _OnChange....");
		this.setState({ gallery: GalleryStore.getAllGalleryPics() });
	},

	render: function() {
		console.log("Admin render:....");
		return (
			<div>
				<h1>Administracion de Galerias</h1>
				<Link to="admin" className="btn btn-default">+ Galeria</Link>
                <GalleryAdminList gallery={this.state.gallery} />
			</div>
		);
	}
});


module.exports = GaleryAdminPage;