App.HomeView = App.BaseView.extend

	initialize: ->
		@dishCollection = new App.DishCollection
		@dishCollection.on 'reset', @onDishReset, @
		@dishCollection.fetch(reset : true)

	onDishReset : (dishcol) ->
		_.each dishcol.models, (dish) ->
			console.log dish
			view = new App.DishView model : dish
			@$el.find('.carousel-inner').append(view.render().el)

		, @
		@$el.find('.item').first().addClass('active')

	template: App.templates['home']