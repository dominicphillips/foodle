App.AppView = App.BaseView.extend

	el: '#app'

	events:
		'click a' : 'onClickLink'

	onClickLink: (e) ->
		target = $(e.currentTarget)
		if target.hasClass('pass')
			return
		e.preventDefault()
		$collapse = $('.nav-collapse')
		unless !$collapse.hasClass 'in'
			$collapse.collapse('hide')


		href = target.attr('href')
		App.router.navigate(href, true)

	show: (view) ->
		if this.currentView
			this.currentView.remove()

		this.currentView = view
		this.$el.find('#content').html(view.render().el)


