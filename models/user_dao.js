var db=require("./database");
var parameter=require("./parameter");

module.exports={
	add:function(params,callback){
		db.query("insert into user(name,password,phone,avatar,integral,isfriend) values(?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	del:function(params,callback){
		db.query("DELETE FROM user WHERE id = ?",params,function(err,result){
			callback(err,result);
		});
	},
	updata:function(params,callback){
		db.query("updata user set name=?,password=?,phone=?,avatar=?,integral=?,isfriend=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//通过用户id、拉黑 查询
		db.query("select * from user where 1=1 "+parameter.handleId(params)+parameter.handleCustom(params,"isfriend"),function(err,result){
			callback(err,result);
		});
	}
}//怒加1个一