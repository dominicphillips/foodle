App.DishView = App.BaseView.extend

	className : 'item'

	template: App.templates['dishes/dish']


	events:
		'click .tile' : 'onClickTile'

	onClickTile : ->
		App.appView.showModal(new App.MapsView)


	onAfterRender : ->
		score = @model.get('health_score')
		percent = score * 100 / 5
		indicator = 'success'
		if percent < 50
			indicator = 'danger'
		@$el.find('.bar').css(width:percent + '%').addClass('bar-' + indicator)