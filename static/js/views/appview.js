// Generated by CoffeeScript 1.6.3
App.AppView = App.BaseView.extend({
  el: '#app',
  events: {
    'click a': 'onClickLink'
  },
  onClickLink: function(e) {
    var href, target;
    target = $(e.currentTarget);
    if (target.hasClass('pass')) {
      return;
    }
    e.preventDefault();
    href = target.attr('href');
    return App.router.navigate(href, true);
  },
  show: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    return this.$el.find('#content').html(view.render().el);
  }
});