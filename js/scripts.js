function Pizza(pizzaSize, pizzaToppings) {
	this.pizzaSize = pizzaSize;
	this.pizzaToppings = pizzaToppings;
	this.pizzaArray = [];
};

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
		this.pizzaArray.push(this.pizzaToppings);
		return this.pizzaArray[0];
};

$(document).ready(function() {
  $("form#Pizza").submit(function(event) {
    $(".result").empty();
    var addSize = $("select#sizeChoice").val();
    var addTopping = parseInt($("select#toppingChoice").val());

    var newPizza = new Pizza(addSize, addTopping);
    var totalSize = newPizza.sizes();
    var totalToppings = newPizza.toppings();
    var totalPrice = totalSize + totalToppings;
    $(".result").append(" $" + totalPrice + ".00");
    $(".view").show();
    event.preventDefault();
  });
});


//pepperoni, mushrooms, onions, sausage, bacon, extra cheese, olives, pineapple, spinach
