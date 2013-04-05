var ViewModel = function () {

};

var SomeModule = {

};

function foo () {
	var x = 100;
}

function boo () {
	y = 200;

	f = function () {

	};

	o = {

	};
}

var root = {};

// someWidget.js
root.widgets = root.widget || {};
root.widgets.MyWidget = function () {

};

// MyView.js
root.view = root.view || {};

// MySubView.

root.view = root.view || {};
root.view.subviews =  root.view.subviews || {};

describe('javascript patterns', function () {
	it ('should ViewModel belong to window', function () {
		expect(window.ViewModel).toBeDefined();
	});

	it ('should SomeModule belong to window', function () {
		expect(window.SomeModule).toBeDefined();
	});

	describe('function with var variable', function () {
		beforeEach(function () {
			foo();
		});

		it ('should x not be global variable', function () {
			expect(window.x).not.toBeDefined();
		});
	});

	describe('function without var variable', function () {
		beforeEach(function () {
			boo();
		});

		it ('should y global variable', function () {
			expect(window.y).toBeDefined();
		});
	});

	describe('trying out namespaces', function () {
		it ('widgets contains my widgets', function () {
			expect(root.widgets.MyWidget).toBeDefined();
		});

		describe('with namespace pattern', function () {
			describe('add new object in a namespace', function () {
				beforeEach(function () {
					app.namespace('app.views').MyView = function () {

					};
				});

				it ('should app.views.MyView contains function', function () {
					expect(app.views.MyView).toBeDefined();
				});

				describe('with one more level', function () {
					beforeEach(function() {
						app.namespace('app.views.subviews').MySubView = function () {

						};
					});

					it ('should app.views.MyView contains function', function () {
						expect(app.views.subviews.MySubView).toBeDefined();
					});
				});
			});
		});
	});
});