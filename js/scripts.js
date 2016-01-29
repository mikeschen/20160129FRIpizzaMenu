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

$(document).ready(function() {
  $("form#Pizza").submit(function(event) {
    
    $(".result").empty();
    var addSize = $("select#sizeChoice").val();
    var addTopping = $("select#toppingChoice").val();

    var newPizza = new Pizza(addSize);
    newPizza.pizzaToppings.push(addTopping);

    $(".result").append(" $" + sizePrice + toppingPrice + ".00");
    // $(".view").show();
    event.preventDefault();
  });
});


//pepperoni, mushrooms, onions, sausage, bacon, extra cheese, olives, pineapple, spinach
