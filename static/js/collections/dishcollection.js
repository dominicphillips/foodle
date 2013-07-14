// Generated by CoffeeScript 1.6.3
App.DishCollection = Backbone.Collection.extend({
  model: App.Dish,
  constructor: function(geo) {
    this.long = geo.coords.longitude;
    this.lat = geo.coords.latitude;
    return Backbone.Collection.apply(this, arguments);
  },
  url: function() {
    return "/api/dishes?lng=" + this.long + "&lat=" + this.lat;
  },
  parse: function(response) {
    return response.items;
  }
});
