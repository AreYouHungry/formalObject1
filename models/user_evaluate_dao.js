var db=require("./database");
var parameter=require("./parameter"); 

module.exports={
	add:function(params,callback){
		db.query("insert into user_evaluate(user_id,c_id,grade,content,c_time) values(?,?,?,?,now())",params,function(err,result){
			callback(err,result);
		});
	},
	del:function(params,callback){
		db.query("DELETE FROM user_evaluate WHERE id = ?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//通过id展示评价订单
		db.query("select * from user_evaluate where 1=1 "+parameter.handleId(params),function(err,result){
			callback(err,result);
		});
	}
}
