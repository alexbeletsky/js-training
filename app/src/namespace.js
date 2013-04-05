var app = app || {};

app.namespace = (function (global) {
	return function (namespace) {
		var splitted = namespace.split(".");
		return _.reduce(splitted, function(prev, next) {
			if (!prev[next]) prev[next] = { };
			return prev[next];
		}, global);
	};
})(this);