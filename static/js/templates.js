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
  


  return "<div class=\"span12\">\n          <div class=\"demo-browser\">\n            <div class=\"demo-browser-side\">\n              <div class=\"demo-browser-author\">\n\n\n                  <img src=\"/static/img/face.jpg\" alt=\"\">\n\n\n              </div>\n              <div class=\"demo-browser-action\">\n                <a class=\"btn btn-danger btn-large btn-block\" href=\"http://twitter.com/monstercritic\" target=\"_blank\">\n                  Edit\n                </a>\n              </div>\n              <h5>@dom</h5>\n              <h6>\n                Software Engineer, Munich\n              </h6>\n            </div>\n            <div class=\"demo-browser-content\">\n              <img src=\"/static/img/bento.jpg\" alt=\"\">\n              <img src=\"/static/img/bento.jpg\" alt=\"\">\n              <img src=\"/static/img/bento.jpg\" alt=\"\">\n\n            </div>\n          </div>\n        </div>";
  });

this["App"]["templates"]["account/register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n\n<div class=\"login\">\n  <div class=\"login-screen col-8 col-offset-2\">\n    <div class=\"login-icon col-3 col-offset-1\">\n      <img src=\"/public/images/rocket.png\" alt=\"Welcome\" />\n      <h4>Welcome to <small>Tracking</small></h4>\n    </div>\n\n    <div class=\"login-form col-6\">\n      <form method=\"POST\" action=\"/Account/Register\">\n\n      <div class=\"control-group\">\n        <input type=\"text\" class=\"login-field\" value=\"\" name=\"name\" placeholder=\"Name\" id=\"login-name\" />\n        <label class=\"login-field-icon fui-user\" for=\"login-name\"></label>\n      </div>\n\n      <div class=\"control-group\">\n        <input type=\"password\" class=\"login-field\" value=\"\" name=\"password\" placeholder=\"Password\" id=\"login-pass\" />\n        <label class=\"login-field-icon fui-lock\" for=\"login-pass\"></label>\n      </div>\n\n      <div class=\"control-group\">\n        <input type=\"email\" class=\"login-field\" value=\"\" name=\"email\" placeholder=\"Email\" id=\"login-email\" />\n        <label class=\"login-field-icon fui-mail\" for=\"login-email\"></label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary btn-large btn-block\" href=\"#\">Sign up</button>\n      <a class=\"login-link\" href=\"#\">Terms of Service</a>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n\n\n</div>";
  });

this["App"]["templates"]["dishes/dish"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n		    <div class=\"dish\">\n        <div class=\"image-container\">\n        	<a href=\"/dishes/";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        		<img src=\"/static/img/bento.jpg\" alt=\"\">\n        	</a>\n\n        </div>\n    	<div class=\"dish-navigation\">\n\n    	    <span class=\"right pass\"  href=\"#dishes-car\" data-slide=\"next\" ><i class=\"icon-angle-right\"></i></span>\n    	    <span class=\"left pass\"  href=\"#dishes-car\" data-slide=\"prev\"><i class=\"icon-angle-left\"></i></span>\n    	    <p>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p><small>with mixed Salad</small>\n\n    	</div>\n        <div class=\"toolbar\">\n        <div class=\"progress\">\n 		 <div class=\"bar\" style=\"width: 0%;\"></div>\n		</div>\n		<div class=\"row demo-tiles\">\n\n\n		        <div class=\"span3\">\n		          <div class=\"tile\">\n		            <div class=\"fui-chat\"></div>\n		          </div>\n		        </div>\n\n		        <div class=\"span3\">\n		          <div class=\"tile\">\n		            <div class=\"fui-location\"></div>\n		          </div>\n		        </div>\n\n		        <div class=\"span3\">\n		          <div class=\"tile\">\n		            <div class=\"fui-heart\"></div>\n		          </div>\n		        </div>\n\n		        <div class=\"span3\">\n		          <div class=\"tile\">\n		            <div class=\"icon-star\"></div>\n		          </div>\n		        </div>\n\n\n		        </div>\n		      </div>\n\n\n\n\n        </div>\n    </div>\n\n";
  return buffer;
  });

this["App"]["templates"]["error/404"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n	<h1>Not Found</h1>\n	<p>:(</p>\n\n</div>";
  });

this["App"]["templates"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n\n\n\n	<div id=\"dishes-car\" class=\"carousel slide\">\n\n	  <!-- Carousel items -->\n	  <div class=\"carousel-inner\">\n\n\n	  </div>\n\n	</div>\n\n\n";
  });

this["App"]["templates"]["loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"row\">\n<div class=\"loader\"><i class=\"icon-spinner icon-spin icon-large\"></i> </div>\n</div>\n\n\n\n";
  });