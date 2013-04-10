var TodoListView = Backbone.View.extend({
	template: '<section id="main">\
			<input id="toggle-all" type="checkbox">\
			<label for="toggle-all">Mark all as complete</label>\
			<ul id="todo-list"></ul>\
		</section>',

	initialize: function () {
		this.listenTo(this.collection, 'add', this.todoAdded);
	},

	render: function () {
		var content = _.template(this.template);
		this.$el.html(content);

		this.todoList = this.$('#todo-list');
		this.collection.each(this.todoAdded, this);

		return this;
	},

	todoAdded: function(model) {
		var taskView = new TaskView({model: model});
		this.todoList.append(taskView.render().el);
	}
});