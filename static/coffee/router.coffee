App.Router = Backbone.Router.extend

	routes :
		'' : 'index'
		'profile' : 'profile'

	index: ->
		App.appView.show(new App.HomeView)

	profile: ->
		App.appView.show(new App.ProfileView)

