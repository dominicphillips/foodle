// Generated by CoffeeScript 1.6.3
App.VoteView = App.BaseView.extend({
  events: {
    'click .icon-star': 'onClickStar'
  },
  onClickStar: function(e) {
    var index, vote,
      _this = this;
    index = $(e.currentTarget).index();
    vote = 5 - index;
    return $.get("/api/dishes/" + (this.model.get('_id')) + "/rate/?rating=" + vote, function() {
      _this.$el.find('.btn').click();
      return App.router.navigate("/dishes/" + (_this.model.get('_id')), {
        trigger: true
      });
    });
  },
  template: App.templates['dishes/vote']
});
