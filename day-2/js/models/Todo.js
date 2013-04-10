var Todo = Backbone.Model.extend({
	defaults: {
		completed: false
	},

	toggle: function () {
		var completed = this.get('completed');
		this.set({completed: !completed});
	}
});