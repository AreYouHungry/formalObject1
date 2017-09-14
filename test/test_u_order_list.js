var collectiondao=require("../models/u_order_dao.js");

collectiondao.getU_order(function(err,result){
	console.log(err,result);
});
var params=["进行中","2017-9-1","2017-9-1",20000,"银河系","难吃",153,4];
collectiondao.addU_order(params,function(err,result){
	console.log(result);
});

var params=[11];
collectiondao.cancelU_order(params,function(err,result){
	console.log(result);
})
