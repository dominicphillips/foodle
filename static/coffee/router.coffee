App.Router = Backbone.Router.extend

	routes :
		'' : 'index'
		'profile' : 'profile'
		'restaurant' : 'restaurant'

	index: ->
		navigator.geolocation.getCurrentPosition (position) ->
			App.appView.show(new App.LoadingView)
			App.appView.show(new App.HomeView(position))

	profile: ->
		App.appView.show(new App.ProfileView)

	restaurant: ->
		navigator.geolocation.getCurrentPosition (position) ->
			App.appView.show(new App.LoadingView)
			App.appView.show(new App.RestaurantHomeView(position))

