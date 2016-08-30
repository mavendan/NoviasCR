"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var PicApi = require('../api/picApi');
var ActionTypes = require('../constants/actionTypes');

var PicActions = {
	createPic: function(pic) {
		
		var newPic = PicApi.savePic(pic);

		//Hey dispatcher, go tell all the stores that an author was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_PIC,
			author: newPic
		});
	},

	updatePic: function(pic) {
		var updatedPic = PicApi.savePic(pic);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_PIC,
			pic: updatedPic
		});
	}
};

module.exports = PicActions;