"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _pics = [];
var _gallery = [];

var PicStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllPics: function() {
		 console.log("getAllPics")
		return _pics;
	},

	getAllGalleryPics: function(){
		return _gallery;
	},

	getPicById: function(id) {
		return _.find(_gallery, {id: id});
	}
	
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_pics = action.initialData.pics;
			_gallery = action.initialData.galleries;			
			PicStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = PicStore;