var jquery = require("jquery");

window.jQuery = window.$ = jquery, require("./jquery/jquery.migrate"), require("./jquery/select2"), 
require("./jquery/jquery.event.hover"), require("./jquery/jquery.form"), require("./jquery/jquery.rating"), 
require("./jquery.sparklines"), require("./bootstrap");

var _ = require("./underscore");

window._ = _;

var Backbone = require("./backbone/backbone");

window.Backbone = Backbone;

var Handlebars = require("./handlebars.runtime");

window.Handlebars = Handlebars, require("../galaxy.base"), require("../galaxy.panels"), 
require("../galaxy.autocom_tagging"), exports.jquery = jquery, exports._ = _, exports.Backbone = Backbone, 
exports.Handlebars = Handlebars;