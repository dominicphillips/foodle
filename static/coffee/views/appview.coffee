App.AppView = App.BaseView.extend

	el: '#app'

	events:
		'click a' : 'onClickLink'
		'click #footer-trigger' : 'onClickFooter'
		'click .filter' : 'onClickFilter'

	onClickFooter: ->
		$footer = $('#footer')
		$trigger = $footer.find('#footer-trigger')
		if !$footer.hasClass('open')
			$trigger.removeClass('fui-plus').addClass('fui-cross')
			$("html, body").animate
				scrollTop:150
			$footer.animate
				height:150
		else
			$trigger.removeClass('fui-cross').addClass('fui-plus')
			$footer.animate
				height:50

		$footer.toggleClass('open')

	onClickFilter: (e) ->

		$target = $(e.currentTarget)
		$switch = $target.find('.switch-animate')
		if $switch.hasClass 'switch-off'
			$switch.removeClass 'switch-off'
			$switch.addClass 'switch-on'
		else
			$switch.removeClass 'switch-on'
			$switch.addClass 'switch-off'


	showModal: (view) ->
		modal = $('.modal')
		modal.html(view.render().el).modal('show')
		view.onAfterRender?()



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
		view.onAfterRender?()


