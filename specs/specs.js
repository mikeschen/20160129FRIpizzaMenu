describe('Pizza', function() {
	it("creates a new pizza with the given toppings and size", function() {
		var testPizza = new Pizza("small");
		expect(testPizza.pizzaSize).to.equal("small");
		expect(testPizza.pizzaToppings).to.eql([]);
	});

	it("returns price of pizza size small", function() {
		var testPizza = new Pizza("small");
		expect(testPizza.sizes()).to.equal(10);
	});

	it("returns price of pizza size medium", function() {
		var testPizza = new Pizza("medium");
		expect(testPizza.sizes()).to.equal(12);
	});

	it("returns price of pizza size large", function() {
		var testPizza = new Pizza("large");
		expect(testPizza.sizes()).to.equal(14);
	});

	it("returns price of pizza with one toppings", function() {
		var testPizza = new Pizza();
		testPizza.pizzaToppings.push("mushrooms");
		expect(testPizza.toppings()).to.equal(1);
	});
});
