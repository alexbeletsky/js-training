$(function() {
	var collection = new TodosCollection();

	var todoView = new TodoView({collection: collection});
	$('#todoapp').html(todoView.render().el);
});
