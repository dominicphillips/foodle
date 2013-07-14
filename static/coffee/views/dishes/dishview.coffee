App.DishView = App.BaseView.extend

	className : 'item'

	template: App.templates['dishes/dish']


	events:
		'click .tile' : 'onClickTile'

	onClickTile : (e) ->
		$target = $(e.currentTarget)
		if $target.hasClass('maps')
			App.appView.showModal(new App.MapsView model : @model)
		if $target.hasClass('vote')
			App.appView.showModal(new App.VoteView model : @model)
		if $target.hasClass('comment')
			App.appView.showModal(new App.CommentView model : @model)



	onAfterRender : ->

		score = @model.get('health_score')
		percent = score * 100 / 5
		indicator = 'success'
		if percent < 50
			indicator = 'danger'
		@$el.find('.bar').css(width:percent + '%').addClass('bar-' + indicator)