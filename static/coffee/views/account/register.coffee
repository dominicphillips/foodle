App.RegisterView = App.BaseView.extend

	template: App.templates['account/register']

	events:
		'click button' : 'onSubmit'


	onSubmit: (e) ->
		# e.preventDefault()
		# do validation
