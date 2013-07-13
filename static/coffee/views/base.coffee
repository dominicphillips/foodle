App.BaseView = Backbone.View.extend

	render: ->
		this.$el.html(this.template(this.model || {}))
		this