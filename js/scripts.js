function Pizza(pizzaSize) {
	this.pizzaSize = pizzaSize;
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

$(document).ready(function() {
  $("form#Pizza").submit(function(event) {
    $(".result").empty();

	var addSize = $("select#sizeChoice").val();
	var toppingArray = [];
    $("input:checked").each(function() {
      toppingArray.push($(this).val());
    });

    var newPizza = new Pizza(addSize);

 	var totalSize = newPizza.sizes();
    var totalPrice = totalSize + (toppingArray.length);

    $(".result").append("Your " + addSize + toppingArray + " pizza is $" + totalPrice + ".00");
    $(".view").show();
    event.preventDefault();
  });
});