App.HomeView = App.BaseView.extend

	constructor : (geo) ->
		this.geo = geo
		Backbone.View.apply(this, arguments)

	initialize: ->
		@dishCollection = new App.DishCollection(@geo)
		@dishCollection.on 'reset', @onDishReset, @
		@dishCollection.fetch(reset : true)


	onDishReset : (dishcol) ->
		_.each dishcol.models, (dish) ->
			view = new App.DishView model : dish
			@$el.find('.carousel-inner').append(view.render().el)

		, @
		@$el.find('.item').first().addClass('active')

	template: App.templates['home']