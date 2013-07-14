App.RestaurantHomeView = App.BaseView.extend

	constructor : (geo) ->
		this.geo = geo
		Backbone.View.apply(this, arguments)

	initialize: ->
		@restaurantCollection = new App.RestaurantCollection(@geo)
		@restaurantCollection.on 'reset', @onrestaurantReset, @
		@restaurantCollection.fetch(reset : true)


	onRestaurantReset : (restaurantcol) ->
		_.each restaurantcol.models, (restaurant) ->
			console.log(restaurant)
			view = new App.restaurantView model : restaurant
			@$el.find('#restaurants').append(view.render().el)

		, @

	template: App.templates['restaurant/home']