describe('template engines', function () {
	var markup, model;
	describe('underscore template', function () {
		var template = '<h1><%= name %></h1>';

		describe('simple case', function () {
			beforeEach(function () {
				model = {name: 'Nick'};
				markup = _.template(template, model);
			});

			it('should produce html', function () {
				expect(markup).toEqual('<h1>Nick</h1>');
			});
		});

		describe('several fields', function () {
			beforeEach(function () {
				template = '<div class="product"><span><%= name %> <%= price %></span></div>';
			});

			beforeEach(function () {
				model = [{name: 'product 1', price: 100}, {name: 'product 2', price: 200}];
			});

			beforeEach(function () {
				markup = '';
				_.each(model, function (item) {
					markup += _.template(template, item);
				});
			});

			it('should create markup', function () {
				expect(markup).toEqual('<div class="product"><span>product 1 100</span></div><div class="product"><span>product 2 200</span></div>');
			});
		});


		describe('several fields from markup', function () {
			beforeEach(function () {
				model = [{name: 'product 1', price: 100}, {name: 'product 2', price: 200}];
			});

			beforeEach(function () {
				markup = '';
				_.each(model, function (item) {
					markup += _.template($('#product-simple').html(), item);
				});
			});

			it('should create markup', function () {
				expect(markup).toEqual('<div class="product"><span>product 1 100</span></div><div class="product"><span>product 2 200</span></div>');
			});
		});

		describe('several item (simplified)', function () {
			beforeEach(function () {
				template = '<% _.each(products, function(product) { %><div class="product"><span><%= product.name %> <%= product.price %></span></div><% }); %>';
			});

			beforeEach(function () {
				model = [{name: 'product 1', price: 100}, {name: 'product 2', price: 200}];
			});

			beforeEach(function () {
				markup = _.template(template, {products: model});
			});

			it('should create markup', function () {
				expect(markup).toEqual('<div class="product"><span>product 1 100</span></div><div class="product"><span>product 2 200</span></div>');
			});
		});

		describe('template from markup', function () {
			beforeEach(function () {
				model = [{name: 'product 1', price: 100}, {name: 'product 2', price: 200}];
			});

			beforeEach(function () {
				markup = _.template($('#product-template').text(), {products: model});
			});

			it('should create markup', function () {
				expect(markup).toEqual('<div class="product"><span>product 1 100</span></div><div class="product"><span>product 2 200</span></div>');
			});
		});
	});
});