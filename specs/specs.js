describe('Pizza', function() {
	it("creates a new pizza with the given toppings and size", function() {
		var testPizza = Pizza("small");
		expect(testPizza.pizzaSize).to.equal("small");
		expect(testPizza.pizzaToppings).to.eql([]);
	});
});
