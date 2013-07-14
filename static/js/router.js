// Generated by CoffeeScript 1.6.3
App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'profile': 'profile',
    'restaurants': 'restaurants'
  },
  index: function() {
    return navigator.geolocation.getCurrentPosition(function(position) {
      App.appView.show(new App.LoadingView);
      return App.appView.show(new App.HomeView(position));
    });
  },
  profile: function() {
    return App.appView.show(new App.ProfileView);
  },
  restaurants: function() {
    return navigator.geolocation.getCurrentPosition(function(position) {
      App.appView.show(new App.LoadingView);
      return App.appView.show(new App.RestaurantHomeView(position));
    });
  }
});
