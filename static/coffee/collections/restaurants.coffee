App.RestaurantCollection = Backbone.Collection.extend
	model : App.Dish

	constructor : (geo) ->
		this.long = geo.coords.longitude
		this.lat = geo.coords.latitude
		Backbone.Collection.apply(this, arguments)

	url : ->
		return "/api/restaurants?lng=#{@long}&lat=#{@lat}"

	parse: (response) ->
		return response.items