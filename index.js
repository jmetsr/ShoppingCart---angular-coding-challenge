
var app = angular.module('app', []);
app.controller('MainController', function($scope){
	
	Product = function(title, price, imageUrl)  {
		this.title = title
		this.price = price
		this.imageUrl = imageUrl
	}
	p1 = new Product("Activity Ball", 18, "http://placehold.it/150x150")
	p2 = new Product("Booda Rope", 12, "http://placehold.it/150x150")
	p3 = new Product("Buster Cube", 35, "http://placehold.it/150x150")
	p4 = new Product("Exelpet", 2, "http://placehold.it/150x150")
	p5 = new Product("Goodie Grippers", 40, "http://placehold.it/150x150")
	p6 = new Product("Kongs", 12, "http://placehold.it/150x150")
	p7 = new Product("Nylabone", 19, "http://placehold.it/150x150")
	p8 = new Product("Ball of Yarn", 1, "http://placehold.it/150x150")
	p9 = new Product("Bone", 1, "http://placehold.it/150x150")

	$scope.products = [p1, p2, p3, p4, p5, p6, p7, p8, p9]
	$scope.cart = []
	$scope.cart.totals = {}
	$scope.totalCost = 0;

	


	$scope.inc = function(product) {
		$scope.cart.push(product)
		$scope.totalCost += product.price
		if (typeof $scope.cart.totals[product.title] === "undefined"){
			$scope.cart.totals[product.title] = 1;
		}
		else {
			$scope.cart.totals[product.title]++
		}
		

	}

})

