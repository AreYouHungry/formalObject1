var db=require("./database");
var parameter=require("./parameter");

module.exports={
	add:function(params,callback){
		db.query("insert into conllection(c_id,user_id,state) values(?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	updata:function(params,callback){//改变收藏状态
		db.query("updata conllection set c_id=?,user_id=?,state=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//菜品id、用户id查找
		db.query("select * from conllection where 1=1 "+parameter.handleCustom(params,"c_id")+parameter.handleCustom(params,"user_id"),function(err,result){
			callback(err,result);
		});
	}
}