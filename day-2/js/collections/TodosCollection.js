var TodosCollection = Backbone.Collection.extend({
	model: Todo,

	localStorage: new Backbone.LocalStorage('todos-backbone'),

	nonCompleted: function () {
		return this.filter(function (todo) {
			return todo.get('completed') === false;
		});
	},

	completed: function () {
		return this.filter(function (todo) {
			return todo.get('completed') === true;
		});
	},

	clearCompleted: function () {
		_.invoke(this.completed(), 'destroy');
	}
});