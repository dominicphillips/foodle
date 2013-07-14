App.VoteView = App.BaseView.extend

	events:
		'click .icon-star' : 'onClickStar'

	onClickStar : (e) ->
		index = $(e.currentTarget).index()
		vote = 5 - index
		@$el.html(new App.LoadingView)
		$.get "/api/dishes/#{@model.get('_id')}/rate/?rating=#{vote}", =>
			@$el.modal('hide')


	template: App.templates['dishes/vote']