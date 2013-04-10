var StatsView = Backbone.View.extend({
	tagName: 'footer',

	id: 'footer',

	template: '\
		<span id="todo-count"><strong id="non-compleleted"><%= nonCompleted %></strong> item left</span>\
			<ul id="filters">\
				<li>\
					<a class="selected" href="#/">All</a>\
				</li>\
				<li>\
					<a href="#/active">Active</a>\
				</li>\
				<li>\
					<a href="#/completed">Completed</a>\
				</li>\
			</ul>\
		<button id="clear-completed">Clear completed <span id="completed">(<%= completed %>)</span></button>',

	events: {
		'click #clear-completed': 'clearCompleted'
	},

	initialize: function () {
		this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'remove', this.render);
		this.listenTo(this.collection, 'change:completed', this.render);
	},

	render: function () {
		var content = _.template(this.template, {
			nonCompleted: this.collection.nonCompleted().length,
			completed: this.collection.completed().length
		});

		this.$el.html(content);

		return this;
	},

	clearCompleted: function () {
		this.collection.clearCompleted();
	}
});