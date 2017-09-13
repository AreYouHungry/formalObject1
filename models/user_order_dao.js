var db=require("./database");
var parameter=require("./parameter");

module.exports={
	add:function(params,callback){
		db.query("insert into user_order(state,s_time,e_time,total,address,evaluate,user_id,b_id) values(?,now(),?,?,?,?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	updata:function(params,callback){
		db.query("updata user_order set state=?,e_time=?,address=?,avatar=?,integral=?,isfriend=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//通过订单状态、开始时间、用户id、商家id
		db.query("select * from user_order where 1=1 "+parameter.handleCustom(params,"state")+parameter.handleTime(params,"s_time"),parameter.handleTime(params,"user_id"),parameter.handleTime(params,"b_id"),function(err,result){
			callback(err,result);
		});
	}
}