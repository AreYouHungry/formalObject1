var db=require("./database");

module.exports={
	add:function(params,callback){
		db.query("insert into cart(user_id) values(?)",params,function(err,result){
			callback(err,result);
		});
	}
}