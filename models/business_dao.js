var db=require("./database");
var parameter=require("./parameter");

module.exports={
	add:function(params,callback){
		db.query("insert into user(name,password,address,phone,notice,grade) values(?,?,?,?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	del:function(params,callback){
		db.query("DELETE FROM user WHERE id = ?",params,function(err,result){
			callback(err,result);
		});
	},
	updata:function(params,callback){
		db.query("updata user set name=?,password=?,address=?,phone=?,notice=?,grade=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//通过商家id查询
		db.query("select * from user where 1=1 "+parameter.handleId(params),function(err,result){
			callback(err,result);
		});
	}
}