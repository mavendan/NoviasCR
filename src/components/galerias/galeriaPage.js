"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var GalleryStore = require('../../stores/picStore');



var GaleryPage = React.createClass({
	

    getInitialState: function() {
		return {
			gallery: GalleryStore.getAllGalleryPics()
		};
	},

	componentWillMount: function() {
		GalleryStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		GalleryStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ gallery: GalleryStore.getAllGalleryPics() });
	},

	render: function() {
      var createGalleryElement = function(pic) {
			return (
                <li className="one-fourth web">
                    <p> <a title={pic.headerInfo} href={pic.location} className="portfolio-item-preview" data-rel="prettyPhoto"><img src={pic.location} alt="" width="210" height="145" className="portfolio-img pretty-box"/></a> </p>
                    <h4><a href="#">{pic.headerInfo}</a></h4>
                   <p> {pic.description} </p>
                </li>
			);
		};

     

		return (
         <div id="portfolio">
            <div className="portfolio-container" id="columns">
              <ul>
                  {this.state.gallery.map(createGalleryElement, this)}
              </ul>
            </div>     
        </div>
		);
	}
});

module.exports = GaleryPage;