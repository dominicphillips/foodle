

App.init = ->
		@router = new this.Router
		@appView = new this.AppView
		Backbone.history.start pushState : true


$(document).ajaxStart ->
	App.appView.show(new App.LoadingView)





$ ->
	App.init()