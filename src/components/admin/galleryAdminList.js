"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var GalleryStore = require('../../stores/picStore');



var GaleryAdminList = React.createClass({
	 propTypes: {
		gallery: React.PropTypes.array.isRequired
	},

   	deletePic: function(id, event) {
		event.preventDefault();
		//AuthorActions.deleteAuthor(id);
		toastr.success('Galeria borrada');
	},


	render: function() {

	  var createGalleryElement = function(pic) {
			return (
                <tr>
                   <td><a href="#">Delete</a></td>				   
				   <td><Link to="manageGallery" params={{id: pic.id}}>{pic.name}</Link></td>
				   <td> <a data-rel="prettyPhoto"><img src={pic.location} alt="" width="80" height="60" className="portfolio-img pretty-box"/></a> </td>
                </tr>
			);
		};

		return (
                <table>
                    <thead>
                        <th></th>
                        <th>Name</th>
                        <th>Imagen</th>
                    </thead> 
                    <tbody>
                        {this.props.gallery.map(createGalleryElement, this)}
                    </tbody>
                </table>
		);
	}
});

module.exports = GaleryAdminList;