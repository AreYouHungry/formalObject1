var collectiondao=require("../models/address_dao.js");

collectiondao.getAddress(function(err,result){
	console.log(err,result);
});