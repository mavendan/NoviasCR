"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback) {
			if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
				transition.about();
			} else {
				callback();
			}
		},
		
		willTransitionFrom: function(transition, component) {
			if (!confirm('Are you sure you want to leave a page that\'s this exciting?')) {
				transition.about();
			}
		}
	},
	render: function () {
		return (
			<div>
				<h1>Sobre nosotros</h1>
				<p>
					Alquiler y venta de vestidos de novia. 
					<ul>
						<li>Puedes ver todos los diseños en </li>
						<li>noviascostarica.com/galerias/</li>
					</ul>
				</p>
			</div>
		); 
	}
});

module.exports = About;