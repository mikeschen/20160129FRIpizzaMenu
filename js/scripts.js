function Pizza(pizzaSize) {
	this.pizzaSize = pizzaSize;
	this.pizzaToppings = [];
}

Pizza.prototype.totalPrice = function() {
	if (this.pizzaSize === "small") {
		this.price = 10;
	}
	if (this.pizzaSize === "medium") {
		this.price = 12;
	}
	if (this.pizzaSize === "large") {
		this.price = 14;
	}

	return this.price;
};

//pepperoni, mushrooms, onions, sausage, bacon, extra cheese, olives, pineapple, spinach
