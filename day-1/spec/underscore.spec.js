describe('using underscore', function () {

	describe('collections', function () {
		var collection;
		describe('for each', function () {
			beforeEach(function () {
				collection = [1, 2, 3, 4, 5];
			});

			beforeEach(function () {
				_.each(collection, function(item, index, collection) {
					collection[index] = ++item;
				});
			});

			it ('should go throught all elements', function () {
				expect(collection[0]).toBe(2);
			});
		});

		describe('map', function () {
			var mapped;

			beforeEach(function () {
				collection = [
					{id: 0, firstName: 'A', lastName: 'B', age: 11},
					{id: 1, firstName: 'aa', lastName: 'uuu', age: 21},
					{id: 2, firstName: 'GG', lastName: 'CC', age: 17}];
			});

			beforeEach(function () {
				mapped = _.map(collection, function (item) {
					return {id: item.id, fullName: item.firstName + ' ' + item.lastName};
				});
			});

			it('should map one value to another', function () {
				expect(mapped[0]).toEqual({id: 0, fullName: 'A B'});
				expect(mapped[1]).toEqual({id: 1, fullName: 'aa uuu'});
				expect(mapped[2]).toEqual({id: 2, fullName: 'GG CC'});
			});
		});

		describe('reduce', function () {
			var totalAge;
			beforeEach(function () {
				collection = [
					{id: 0, firstName: 'A', lastName: 'B', age: 11},
					{id: 1, firstName: 'aa', lastName: 'uuu', age: 21},
					{id: 2, firstName: 'GG', lastName: 'CC', age: 17}];
			});

			beforeEach(function () {
				totalAge = _.reduce(collection, function (memo, item) {
					memo += item.age;
					return memo;
				}, 0);
			});

			it('should return totalAge', function () {
				expect(totalAge).toEqual(49);
			});

			describe('with object as output', function () {
				var summary;
				beforeEach(function () {
					summary = _.reduce(collection, function (memo, item) {
						memo.totalCount++;
						memo.totalAge += item.age;
						return memo;
					}, {totalCount: 0, totalAge: 0});
				});

				it('should be summary object', function () {
					expect(summary.totalCount).toEqual(3);
					expect(summary.totalAge).toEqual(49);
				});
			});
		});

		describe('find', function () {
			var found;
			beforeEach(function () {
				// arrange
				collection = [
					{id: 0, firstName: 'A', lastName: 'B', age: 11},
					{id: 1, firstName: 'aa', lastName: 'uuu', age: 21},
					{id: 2, firstName: 'GG', lastName: 'CC', age: 17}];
			});

			beforeEach(function () {
				// act
				found = _.find(collection, function (item) {
					return item.lastName === 'uuu';
				});
			});

			// assert
			it('should be found', function () {
				expect(found.id).toEqual(1);
			});
		});

		describe('contains', function () {
			beforeEach(function () {
				collection = ['A', 'B', 'C'];
			});

			it('should return true', function () {
				expect(_.contains(collection, 'B')).toBe(true);
			});

			it('should retunr false', function () {
				expect(_.contains(collection, 'F')).toBe(false);
			});

			describe('for compex objects', function () {
				beforeEach(function () {
					collection = [{id: 0, fullName: 'aaa'}, {id: 1, fullName: 'bbb'}];
				});

				it('should return true', function () {
					//expect(_.contains(collection, {id: 1, fullName: 'bbb'})).toBe(true);
				});
			});
		});
	});

	describe('for objects', function () {
		var result;
		describe('extend', function () {
			describe('for options', function () {
				beforeEach(function () {
					var defaultOptions = { x: 100, y: 'some' };
					result = _.extend(defaultOptions, {x: 1});
				});

				it('should use default', function () {
					expect(result.x).toEqual(1);
					expect(result.y).toEqual('some');
				});
			});
		});

		describe('mixin', function () {
			var a, b;

			beforeEach(function () {
				a = {
					methodFromA: function () {
						return 0;
					}
				};

				b = {
					methodFromB: function () {
						return 1;
					}
				};

				c = {
					methodFromC: function () {
						return 3;
					}
				};

				_.extend(b, a, c);
			});

			it('should b contain methodFromA', function () {
				expect(b.methodFromA()).toEqual(0);
				expect(b.methodFromC()).toEqual(3);
			});
		});

		describe('omitting', function () {
			var result;
			var o;

			beforeEach(function () {
				// arrange
				o = {
					a: 1,
					b: 2,
					c: 3
				};

				// act
				result = _.omit(o, 'c', 'b');
			});

			it('should omit c field', function () {
				expect(result.c).not.toBeDefined();
				expect(result.b).not.toBeDefined();
			});
		});
	});

	describe('chain', function () {
		var result, collection;
		beforeEach(function () {
			collection = [1, 2, 3];
		});

		beforeEach(function () {
			result =_.chain(collection)
				.map(function (item) {
					return item * 2;
				})
				.reduce(function (memo, item) {
					memo += item;
					return memo;
				}, 0)
				.value();
		});

		it('should chain', function () {
			expect(result).toEqual(12);
		});
	});

});