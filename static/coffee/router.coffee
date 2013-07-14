App.Router = Backbone.Router.extend

	routes :
		'' : 'index'
		'dishes/:id' : 'dish'
		'profile' : 'profile'
		'restaurants' : 'restaurants'

	index: ->
		App.appView.show(new App.LoadingView)
		App.appView.show(new App.HomeView(App.position))

	dish: (id) ->
		model = new App.Dish('_id' : id)
		model.fetch
			url : '/api/dishes/' + id + "/?lng=#{App.position.coords.longitude}&lat=#{App.position.coords.latitude}"
			success: (success) ->
				model.set('stripped', true)
				view = new App.DishView model: model
				App.appView.show(view)

	profile: ->
		App.appView.show(new App.ProfileView)

	restaurants: ->
		App.appView.show(new App.LoadingView)
		App.appView.show(new App.RestaurantHomeView(App.position))

