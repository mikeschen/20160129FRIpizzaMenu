describe('Pizza', function() {
	it("creates a new pizza with the given toppings and size", function() {
		var testPizza = new Pizza("small");
		expect(testPizza.pizzaSize).to.equal("small");
		expect(testPizza.pizzaToppings).to.eql([]);
	});

	it("returns price of pizza size", function() {
		var testPizza = new Pizza("small");
		expect(testPizza.totalPrice()).to.equal(10);
	});
});
