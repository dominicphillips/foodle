App.HomeView = App.BaseView.extend

	initialize: ->
		@dishCollection = new App.DishCollection
		@dishCollection.on 'reset', @onDishReset, @
		@dishCollection.fetch(reset : true)

	onDishReset : (dishcol) ->
		_.each dishcol.models, (dish) ->
			view = new App.DishView model : dish
			@$el.find('#dishes').append(view.render().el)

		, @

	template: App.templates['home']