var TaskView = Backbone.View.extend({
	tagName: 'li',

	template: '\
		<div class="view">\
			<input class="toggle" type="checkbox" <% if (completed) { %>checked<% } %> >\
			<label><%= description %></label>\
			<button class="destroy"></button>\
		</div>\
		<input class="edit" value="Create a TodoMVC template">',

	events: {
		'click input.toggle': 'toggleTask',
		'click button.destroy': 'removeTask'
	},

	initialize: function () {
		this.listenTo(this.model, 'destroy', this.removeView);
	},

	render: function () {
		var content = _.template(this.template, this.model.toJSON());
		this.$el.html(content);

		return this;
	},

	toggleTask: function () {
		this.model.toggle();
	},

	removeTask: function () {
		this.model.destroy();
	},

	removeView: function () {
		this.remove();
	}
});