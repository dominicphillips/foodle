App.Router = Backbone.Router.extend

	routes :
		'' : 'index'

	index: ->
		App.appView.show(new App.HomeView)

