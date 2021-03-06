this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};

this["App"]["templates"]["account/login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n\n<div class=\"login\">\n  <div class=\"login-screen col-8 col-offset-2\">\n    <div class=\"login-icon col-3 col-offset-1\">\n      <h4>Welcome to <small>Foodle</small></h4>\n    </div>\n\n    <div class=\"login-form col-6\">\n      <form method=\"POST\" action=\"/api/user/login\" autocomplete=\"off\">\n\n      <div class=\"control-group\">\n        <input type=\"text\" class=\"login-field\" value=\"\" name=\"login\" placeholder=\"Name\" id=\"login-name\" />\n        <label class=\"login-field-icon fui-user\" for=\"login-name\"></label>\n      </div>\n\n      <div class=\"control-group\">\n        <input type=\"password\" class=\"login-field\" value=\"\" name=\"password\" placeholder=\"Password\" id=\"login-pass\" />\n        <label class=\"login-field-icon fui-lock\" for=\"login-pass\"></label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary btn-large btn-block\" href=\"#\">Login</button>\n      <a class=\"login-link\" href=\"#\">Lost your password?</a>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n\n\n</div>";
  });

this["App"]["templates"]["account/profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"span12\">\n          <div class=\"demo-browser\">\n            <div class=\"demo-browser-side\">\n              <div class=\"demo-browser-author\">\n\n\n                  <img src=\"/static/img/dimi.png\" alt=\"\">\n\n\n              </div>\n              <div class=\"demo-browser-action\">\n\n\n                <a class=\"btn btn-danger btn-large btn-block\" href=\"#\" target=\"\">\n                  Edit\n                </a>\n              </div>\n              <h5>@Jane Doe</h5>\n              <h6>\n                Software Engineer, Munich\n              </h6>\n            </div>\n            <div class=\"demo-browser-content\">\n\n                <img src=\"/static/food_images/1.jpg\" alt=\"\">\n                <img src=\"/static/food_images/2.jpg\" alt=\"\">\n                <img src=\"/static/food_images/3.jpg\" alt=\"\">\n\n            <div class=\"clearfix\"></div>\n            <h3>Average Food Score</h3>\n            <p>80, wow! You are pretty healthy!</p>\n\n                    <div class=\"progress\">\n                     <div class=\"bar bar-success\" style=\"width: 70%;\"></div>\n                    </div>\n\n            <h3>Badges</h3>\n\n                <img class=\"badg\" src=\"/static/images/icons/Compas@2x.png\" alt=\"Compas\">\n                <img class=\"badg disabled\" src=\"/static/images/icons/Pocket@2x.png\" alt=\"Compas\">\n                <img class=\"badg disabled\" src=\"/static/images/icons/Book@2x.png\" alt=\"Compas\">\n\n            </div>\n\n\n\n\n\n\n\n          </div>\n        </div>";
  });

this["App"]["templates"]["account/register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n\n<div class=\"login\">\n  <div class=\"login-screen col-8 col-offset-2\">\n    <div class=\"login-icon col-3 col-offset-1\">\n      <h4>Welcome to <small>Foodle</small></h4>\n    </div>\n\n    <div class=\"login-form col-6\">\n      <form method=\"POST\" action=\"/api/user/register/\">\n\n      <div class=\"control-group\">\n        <input type=\"text\" class=\"login-field\" value=\"\" name=\"name\" placeholder=\"Name\" id=\"login-name\" />\n        <label class=\"login-field-icon fui-user\" for=\"login-name\"></label>\n      </div>\n\n      <div class=\"control-group\">\n        <input type=\"password\" class=\"login-field\" value=\"\" name=\"password\" placeholder=\"Password\" id=\"login-pass\" />\n        <label class=\"login-field-icon fui-lock\" for=\"login-pass\"></label>\n      </div>\n\n      <div class=\"control-group\">\n        <input type=\"email\" class=\"login-field\" value=\"\" name=\"email\" placeholder=\"Email\" id=\"login-email\" />\n        <label class=\"login-field-icon fui-mail\" for=\"login-email\"></label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary btn-large btn-block\" href=\"#\">Sign up</button>\n      <button type=\"submit\" class=\"btn btn-primary btn-large btn-block\" style=\"background:#2980b9;\" >Facebook Connect</button>\n      <a class=\"login-link\" href=\"#\">Terms of Service</a>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n\n\n</div>";
  });

this["App"]["templates"]["dishes/comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n    <h3>Comments</h3>\n  </div>\n  <div class=\"modal-body\">\n\n    <div id=\"disqus_thread\"></div>\n    <script type=\"text/javascript\">\n        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */\n        var disqus_shortname = 'foodle'; // required: replace example with your forum shortname\n\n        /* * * DON'T EDIT BELOW THIS LINE * * */\n        (function() {\n            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;\n            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';\n            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\n        })();\n    </script>\n\n  </div>\n  <div class=\"modal-footer\">\n    <button data-dismiss=\"modal\"  class=\"btn btn-primary\">Close</button>\n  </div>";
  });

this["App"]["templates"]["dishes/dish"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n    	    <span class=\"right pass\"  href=\"#dishes-car\" data-slide=\"next\" ><i class=\"icon-angle-right\"></i></span>\n    	    <span class=\"left pass\"  href=\"#dishes-car\" data-slide=\"prev\"><i class=\"icon-angle-left\"></i></span>\n 		 	";
  }

  buffer += "\n		    <div class=\"dish\">\n        <div class=\"image-container\">\n        	<a href=\"/dishes/";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        		<img src=\"";
  if (stack1 = helpers.pic_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pic_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n        	</a>\n\n        </div>\n\n    	<div class=\"dish-navigation\">\n			";
  stack1 = helpers.unless.call(depth0, depth0.stripped, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    	    <p>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p><small>";
  if (stack1 = helpers.note) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.note; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</small>\n\n    	</div>\n        <div class=\"toolbar\">\n        <div class=\"progress\">\n 		 <div class=\"bar\" style=\"width: 0%;\"></div>\n		</div>\n		<div class=\"row demo-tiles\">\n\n\n		        <div class=\"span3 first\">\n		          <div class=\"tile comment\">\n		            <div class=\"fui-chat\"></div>\n		            <small>5</small>\n		          </div>\n		        </div>\n\n		        <div class=\"span3\">\n		          <div class=\"tile maps\">\n		            <div class=\"fui-location\"></div>\n		            <small>"
    + escapeExpression(((stack1 = ((stack1 = depth0.restaurant),stack1 == null || stack1 === false ? stack1 : stack1.distance)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "m</small>\n		          </div>\n		        </div>\n\n		        <div class=\"span3\">\n		          <div class=\"tile\">\n		            <div class=\"icon-euro\"></div>\n		            <small>";
  if (stack2 = helpers.price) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.price; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</small>\n		          </div>\n		        </div>\n\n		        <div class=\"span3 last\">\n		          <div class=\"tile vote\">\n		            <div class=\"icon-star\"></div>\n		            <small>";
  if (stack2 = helpers.user_rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user_rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/5</small>\n		          </div>\n		        </div>\n\n\n		        </div>\n		      </div>\n\n\n\n\n        </div>\n    </div>\n\n";
  return buffer;
  });

this["App"]["templates"]["dishes/maps"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n    <h3>Maps</h3>\n  </div>\n  <div class=\"modal-body\">\n\n    <div id=\"map-canvas\" style=\"height:400px\"></div>\n\n  </div>\n  <div class=\"modal-footer\">\n    <button data-dismiss=\"modal\"  class=\"btn btn-primary\">Close</button>\n  </div>";
  });

this["App"]["templates"]["dishes/vote"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n    <h3>Vote</h3>\n  </div>\n  <div class=\"modal-body\">\n\n\n<div class=\"vote\">\n\n  <h2>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n  <h3>@"
    + escapeExpression(((stack1 = ((stack1 = depth0.restaurant),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n      <div class=\"vote-img\">\n    <img src=\"";
  if (stack2 = helpers.pic_url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pic_url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" alt=\"\">\n  </div>\n\n  <div class=\"rating\">\n    <span class=\"icon-star\"></span>\n    <span class=\"icon-star\"></span>\n    <span class=\"icon-star\"></span>\n    <span class=\"icon-star\"></span>\n    <span class=\"icon-star\"></span>\n</div>\n\n\n</div>\n\n\n\n\n\n\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"/\" data-dismiss=\"modal\"  class=\"btn btn-primary\">Close</a>\n  </div>";
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

this["App"]["templates"]["restaurant/home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"accordion\" id=\"accordion2\">\n\n\n</div>\n\n\n";
  });

this["App"]["templates"]["restaurant/restaurant"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "    <div class=\"accordion-heading\">\n      <a class=\"accordion-toggle pass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n		";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n\n      </a>\n    </div>\n    <div id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"accordion-body collapse in\">\n      <div class=\"accordion-inner\">\n		<div class=\"span3\">\n		  <div class=\"tile maps\">\n		    <div class=\"fui-location\"></div>\n		    <small>";
  if (stack1 = helpers.distance) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.distance; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "m</small>\n		  </div>\n		</div>\n\n		<img width=\"100%\" src=\"";
  if (stack1 = helpers.pic_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pic_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n\n		<div class=\"accordion-footer\">\n			<div class=\"address pull-left\">\n\n				<span class=\"fui-location\"></span>\n				"
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.street)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ",\n				"
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.zip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n				"
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n\n\n\n			</div>\n\n			<a class=\"btn btn-danger btn-large pull-right\" href=\"/restaurants/";
  if (stack2 = helpers._id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0._id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"\">\n			    <i class=\"icon-food\"></i>\n			</a>\n\n		</div>\n\n\n\n\n\n\n      </div>\n    </div>\n\n";
  return buffer;
  });