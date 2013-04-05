app.namespace('app.utils').StringCalculator = (function () {
	// implementation details
	var pasteInput = function (input) {
		return 10;
	};

	var addNumbers = function (parser) {
		var x = 5;
		return 5;
	};

	// public interface
	return {
		add: function () {
			return pasteInput() + addNumbers();
		}
	};

})();

app.namespace('app.utils').SomeUtil = function () {
	this.x = 0;
};

app.namespace('app.utils').SomeUtil.prototype = (function () {
	var myPrivateFunction = function () {
		return 100;
	};

	return {
		myFunction: function () {
			return myPrivateFunction ();
		}
	};
})();



describe('module pattern', function () {
	var calculator;
	describe('module should expose public methods', function () {
		beforeEach(function () {
			calculator = app.utils.StringCalculator;
		});

		it('should contain method add', function () {
			expect(calculator.add).toBeDefined();
		});

		it('should not contain method addNumbers', function () {
			expect(calculator.addNumbers).not.toBeDefined();
		});

		it('should return', function () {
			expect(calculator.add()).toBe(15);
		});
	});

	describe('using contsructor functions', function () {
		var object;

		beforeEach(function () {
			object = new app.utils.SomeUtil();
		});

		it('should be initialize', function () {
			expect(object).toBeDefined();
		});

		it('should contain state', function () {
			expect(object.x).toBe(0);
		});

		it('should contain myFunction', function () {
			expect(object.myFunction).toBeDefined();
		});

		it('should return 100', function () {
			expect(object.myFunction()).toBe(100);
		});
	});

	describe('class keyword', function () {
		it ('it should use class', function () {
			// var class = 100;
			// expect(class).toBe(100);
		});
	});

	describe('inheritance', function () {
		var F = function () {
		};

		F.prototype.method = function () {
			return 1;
		};

		var instance;

		beforeEach(function () {
			instance = new F();
		});

		it ('should return 1', function () {
			expect(instance.method()).toBe(1);
		});

		describe('prototype inhertance', function () {
			var M = function () {

			};

			M.prototype = F.prototype;

			beforeEach(function () {
				instance = new M();
			});

			it ('should return 1', function () {
				expect(instance.method()).toBe(1);
			});
		});
	});
});