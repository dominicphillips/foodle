App.VoteView = App.BaseView.extend

	events:
		'click .icon-star' : 'onClickStar'

	onClickStar : (e) ->
		index = $(e.currentTarget).index()
		vote = 5 - index
		$.get "/api/dishes/#{@model.get('_id')}/rate/?rating=#{vote}", =>
			@$el.modal('hide')
			App.router.navigate('/', true)


	template: App.templates['dishes/vote']