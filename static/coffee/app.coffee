

App.init = ->
		@router = new this.Router
		@appView = new this.AppView
		Backbone.history.start pushState : true




$ ->
	App.init()