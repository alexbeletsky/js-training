var DescriptionView = Backbone.View.extend({
	template: '<header id="header">\
		<h1>todos</h1>\
			<input id="new-todo" placeholder="What needs to be done?" autofocus>\
		</header>',

	events: {
		'keyup #new-todo': 'createTask'
	},

	render: function () {
		var content = _.template(this.template);
		this.$el.html(content);

		return this;
	},

	createTask: function (e) {
		if (e.keyCode === 13) {
			var description = this.$('#new-todo').val();

			var model = new Todo({description: description});
			this.collection.push(model);

			this.$('#new-todo').val('');
		}
	}
});