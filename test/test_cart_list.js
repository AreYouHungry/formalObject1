var x=require("../models/cart_dao.js");
x.getCart(function(err,result){
	console.log(result);
})
