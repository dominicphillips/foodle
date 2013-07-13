App.DishCollection = Backbone.Collection.extend
	model : App.Dish

	url : '/api/dishes'

	parse: (response) ->
		return response.items