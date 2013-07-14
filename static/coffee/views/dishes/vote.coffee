App.VoteView = App.BaseView.extend

	events:
		'click .icon-star' : 'onClickStar'

	onClickStar : (e) ->
		index = $(e.currentTarget).index()
		vote = 5 - index
		$.get "/api/dishes/#{@model.get('_id')}/rate/?rating=#{vote}", =>
			@$el.find('.btn').click()
			App.router.navigate("/dishes/#{@model.get('_id')}", trigger : true)


	template: App.templates['dishes/vote']