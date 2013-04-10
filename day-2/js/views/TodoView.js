var TodoView = Backbone.View.extend({
	render: function () {
		var descriptionView = new DescriptionView({collection: this.collection});
		this.$el.append(descriptionView.render().el);

		var todoListView = new TodoListView({collection: this.collection});
		this.$el.append(todoListView.render().el);

		var statsView = new StatsView({collection: this.collection});
		this.$el.append(statsView.render().el);

		return this;
	}
});