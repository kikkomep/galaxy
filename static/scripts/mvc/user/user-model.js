define(["libs/underscore","libs/backbone/backbone","mvc/base-mvc","utils/localization"],function(a,b,c,d){var e=b.Model.extend(c.LoggableMixin).extend({urlRoot:function(){return Galaxy.options.root+"api/users"},defaults:{id:null,username:"("+d("anonymous user")+")",email:"",total_disk_usage:0,nice_total_disk_usage:"",quota_percent:null,is_admin:!1},initialize:function(a){this.log("User.initialize:",a),this.on("loaded",function(a,b){this.log(this+" has loaded:",a,b)}),this.on("change",function(a,b){this.log(this+" has changed:",a,b.changes)})},isAnonymous:function(){return!this.get("email")},isAdmin:function(){return this.get("is_admin")},loadFromApi:function(a,c){a=a||e.CURRENT_ID_STR,c=c||{};var d=this,f=c.success;return c.success=function(a,b){d.trigger("loaded",a,b),f&&f(a,b)},a===e.CURRENT_ID_STR&&(c.url=this.urlRoot+"/"+e.CURRENT_ID_STR),b.Model.prototype.fetch.call(this,c)},clearSessionStorage:function(){for(var a in sessionStorage)0===a.indexOf("history:")?sessionStorage.removeItem(a):"history-panel"===a&&sessionStorage.removeItem(a)},toString:function(){var a=[this.get("username")];return this.get("id")&&(a.unshift(this.get("id")),a.push(this.get("email"))),"User("+a.join(":")+")"}});e.CURRENT_ID_STR="current",e.getCurrentUserFromApi=function(a){var b=new e;return b.loadFromApi(e.CURRENT_ID_STR,a),b};b.Collection.extend(c.LoggableMixin).extend({model:e,urlRoot:function(){return Galaxy.options.root+"api/users"}});return{User:e}});
//# sourceMappingURL=../../../maps/mvc/user/user-model.js.map