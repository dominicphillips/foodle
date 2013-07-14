App.Router = Backbone.Router.extend

	routes :
		'' : 'index'
		'profile' : 'profile'
		'restaurants' : 'restaurants'

	index: ->
		navigator.geolocation.getCurrentPosition (position) ->
			App.appView.show(new App.LoadingView)
			App.appView.show(new App.HomeView(position))

	profile: ->
		App.appView.show(new App.ProfileView)

	restaurants: ->
		navigator.geolocation.getCurrentPosition (position) ->
			App.appView.show(new App.LoadingView)
			App.appView.show(new App.RestaurantHomeView(position))

