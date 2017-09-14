var collectiondao=require("../models/collection_dao.js");

var params=[1,148,'no'];
collectiondao.addCollection(params,function(err,result){
	console.log(err,result);
});
