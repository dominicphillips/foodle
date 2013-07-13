this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};

this["App"]["templates"]["account/login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n\n<div class=\"login\">\n  <div class=\"login-screen col-8 col-offset-2\">\n    <div class=\"login-icon col-3 col-offset-1\">\n      <img src=\"/public/images/rocket.png\" alt=\"Welcome\" />\n      <h4>Welcome to <small>Tracking</small></h4>\n    </div>\n\n    <div class=\"login-form col-6\">\n      <form method=\"POST\" action=\"/Account/Login\" autocomplete=\"off\">\n\n      <div class=\"control-group\">\n        <input type=\"text\" class=\"login-field\" value=\"\" name=\"name\" placeholder=\"Name\" id=\"login-name\" />\n        <label class=\"login-field-icon fui-user\" for=\"login-name\"></label>\n      </div>\n\n      <div class=\"control-group\">\n        <input type=\"password\" class=\"login-field\" value=\"\" name=\"password\" placeholder=\"Password\" id=\"login-pass\" />\n        <label class=\"login-field-icon fui-lock\" for=\"login-pass\"></label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary btn-large btn-block\" href=\"#\">Login</button>\n      <a class=\"login-link\" href=\"#\">Lost your password?</a>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n\n\n</div>";
  });

this["App"]["templates"]["account/profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"span12\">\n          <div class=\"demo-browser\">\n            <div class=\"demo-browser-side\">\n              <div class=\"demo-browser-author\">\n\n\n                  <img src=\"/static/img/face.jpg\" alt=\"\">\n\n\n              </div>\n              <div class=\"demo-browser-action\">\n                <a class=\"btn btn-danger btn-large btn-block\" href=\"http://twitter.com/monstercritic\" target=\"_blank\">\n                  Follow\n                </a>\n              </div>\n              <h5>@dom</h5>\n              <h6>\n                Software Engineer, Munich\n              </h6>\n            </div>\n            <div class=\"demo-browser-content\">\n              <img src=\"/static/img/bento.jpg\" alt=\"\">\n              <img src=\"/static/img/bento.jpg\" alt=\"\">\n              <img src=\"/static/img/bento.jpg\" alt=\"\">\n\n            </div>\n          </div>\n        </div>";
  });

this["App"]["templates"]["account/register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n\n<div class=\"login\">\n  <div class=\"login-screen col-8 col-offset-2\">\n    <div class=\"login-icon col-3 col-offset-1\">\n      <img src=\"/public/images/rocket.png\" alt=\"Welcome\" />\n      <h4>Welcome to <small>Tracking</small></h4>\n    </div>\n\n    <div class=\"login-form col-6\">\n      <form method=\"POST\" action=\"/Account/Register\">\n\n      <div class=\"control-group\">\n        <input type=\"text\" class=\"login-field\" value=\"\" name=\"name\" placeholder=\"Name\" id=\"login-name\" />\n        <label class=\"login-field-icon fui-user\" for=\"login-name\"></label>\n      </div>\n\n      <div class=\"control-group\">\n        <input type=\"password\" class=\"login-field\" value=\"\" name=\"password\" placeholder=\"Password\" id=\"login-pass\" />\n        <label class=\"login-field-icon fui-lock\" for=\"login-pass\"></label>\n      </div>\n\n      <div class=\"control-group\">\n        <input type=\"email\" class=\"login-field\" value=\"\" name=\"email\" placeholder=\"Email\" id=\"login-email\" />\n        <label class=\"login-field-icon fui-mail\" for=\"login-email\"></label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary btn-large btn-block\" href=\"#\">Sign up</button>\n      <a class=\"login-link\" href=\"#\">Terms of Service</a>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n\n\n</div>";
  });

this["App"]["templates"]["dishes/dish"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "    <div class=\"dish\">\n        <div class=\"image-container\">\n          <img src=\"/static/img/bento.jpg\" alt=\"\">\n        </div>\n\n        <div class=\"toolbar\">\n\n        </div>\n    </div>";
  });

this["App"]["templates"]["error/404"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n	<h1>Not Found</h1>\n	<p>:(</p>\n\n</div>";
  });

this["App"]["templates"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n\n   <div id=\"dishes\"></div>\n\n	<div id=\"myCarousel\" class=\"carousel slide\">\n\n	  <!-- Carousel items -->\n	  <div class=\"carousel-inner\">\n	    <div class=\"active item\">\n			<div class=\"dish\">\n			    <div class=\"image-container\">\n			      <img src=\"/static/img/bento.jpg\" alt=\"\">\n			    </div>\n				<div class=\"dish-navigation\">\n\n				    <span class=\"right pass\"  href=\"#myCarousel\" data-slide=\"next\" ><i class=\"icon-angle-right\"></i></span>\n				    <span class=\"left pass\"  href=\"#myCarousel\" data-slide=\"prev\"><i class=\"icon-angle-left\"></i></span>\n				    <p>Dish Name</p><small>with mixed Salad</small>\n\n				</div>\n			    <div class=\"toolbar\">\n\n			    </div>\n			</div>\n\n\n	    </div>\n	    <div class=\"item\">\n		<div class=\"dish\">\n		    <div class=\"image-container\">\n		      <img src=\"/static/img/bento.jpg\" alt=\"\">\n		    </div>\n			<div class=\"dish-navigation\">\n\n			    <span class=\"right pass\"  href=\"#myCarousel\" data-slide=\"next\" ><i class=\"icon-angle-right\"></i></span>\n			    <span class=\"left pass\"  href=\"#myCarousel\" data-slide=\"prev\"><i class=\"icon-angle-left\"></i></span>\n			    <p>Dish Name</p><small>with mixed Salad</small>\n\n			</div>\n		    <div class=\"toolbar\">\n\n		    </div>\n		</div>\n	    </div>\n	    <div class=\"item\">\n			<div class=\"dish\">\n			    <div class=\"image-container\">\n			      <img src=\"/static/img/bento.jpg\" alt=\"\">\n			    </div>\n				<div class=\"dish-navigation\">\n\n				    <span class=\"right pass\"  href=\"#myCarousel\" data-slide=\"next\" ><i class=\"icon-angle-right\"></i></span>\n				    <span class=\"left pass\"  href=\"#myCarousel\" data-slide=\"prev\"><i class=\"icon-angle-left\"></i></span>\n				    <p>Dish Name</p><small>with mixed Salad</small>\n\n				</div>\n			    <div class=\"toolbar\">\n\n			    </div>\n			</div>\n	    </div>\n	  </div>\n\n	</div>\n\n\n";
  });