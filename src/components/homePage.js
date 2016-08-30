"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var PicStore = require('../stores/picStore');




var Home = React.createClass({

 getInitialState: function() {
		 console.log("getInitialState");
		return {
			
			pics: PicStore.getAllPics(),
			 
		};
	},
	
  componentWillMount: function() {
		PicStore.addChangeListener(this._onChange);
	},


//Clean up when this component is unmounted
   componentWillUnmount: function() {
		PicStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ pics: PicStore.getAllPics() });
	},

	render: function() {
           console.log("Render Page");
       var createPicListElement = function(pic) {
			return (
				 <li> <img src={pic.location} alt="" />
				  <div className="ei-title">
				    <h2>{pic.headerInfo}</h2>
				    <h3>{pic.description}</h3>
				  </div>
				</li>
			);
		};

      var createPicThumbElement = function(pic) {
			return (
				<li><a href="#">{pic.name}</a><img src={pic.location} alt="" /></li>
			);
		};
        
		return (
			<div className="wrapper">
			  <div id="ei-slider" className="ei-slider">
					<ul className="ei-slider-large">
						{this.state.pics.map(createPicListElement, this)}
					</ul>

					<ul className="ei-slider-thumbs">
						<li className="ei-slider-element">Current</li>
						{this.state.pics.map(createPicThumbElement, this)}
					</ul>

			  </div>
			</div>
		);
	}
});

module.exports = Home;