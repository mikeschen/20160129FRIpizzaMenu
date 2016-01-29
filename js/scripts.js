function Pizza(pizzaSize, pizzaToppings) {
	this.pizzaSize = pizzaSize;
	this.pizzaToppings = [];
}

Pizza.prototype.sizes = function() {
	var sizePrice = 0;
	if (this.pizzaSize === "small") {
		sizePrice = 10;
	}
	if (this.pizzaSize === "medium") {
		sizePrice = 12;
	}
	if (this.pizzaSize === "large") {
		sizePrice = 14;
	}
	return sizePrice;
};



Pizza.prototype.toppings = function() {
	var toppingPrice = 0;
	toppingPrice = (this.pizzaToppings).length * 1;
	return toppingPrice;
};


//pepperoni, mushrooms, onions, sausage, bacon, extra cheese, olives, pineapple, spinach
