"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
        <div className="header">

          <div id="site_title" className="container-fluid">
              <Link to="app" >
                <img src="img/logo.png" />
              </Link>
              <ol id="menu" className="simple_menu simple_menu_css horizontal black_menu">
                <li><Link to="home">Inicio</Link></li>
                <li><Link to="galeria">Galeria</Link></li>
                <li><Link to="authors">Authors</Link></li>
                <li><Link to="courses">Courses</Link></li>
                <li><Link to="admin">Administracion</Link></li>
                <li><Link to="about">Acerca de nosotros</Link></li>
              </ol>
          </div>
          
        </div>
		);
	}
});

module.exports = Header;
