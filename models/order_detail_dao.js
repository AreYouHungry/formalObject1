var db=require("./database");
var parameter=require("./parameter");

module.exports={
	add:function(params,callback){
		db.query("insert into order_detail(c_id,o_id,price,amount,spec) values(?,?,?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//通过订单id查询
		db.query("select * from order_detail where 1=1 "+parameter.handleCustom(params,"o_id"),function(err,result){
			callback(err,result);
		});
	}
}