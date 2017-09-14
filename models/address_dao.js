var db=require("./database");//究极无敌惊天大草
var parameter=require("./parameter");

module.exports={
	add:function(params,callback){
		db.query("insert into address(address,tag,isDefault,user_id) values(?,?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	del:function(params,callback){
		db.query("DELETE FROM address WHERE id = ?",params,function(err,result){
			callback(err,result);
		});
	},
	updata:function(params,callback){
		db.query("updata category set address=?,tag=?,isDefault=?,user_id=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//id、标签、isDefault、user_id查找
		db.query("select * from category where 1=1 "+parameter.handleId(params)+parameter.handleCustom(params,"tag")+parameter.handleCustom(params,"isDefault")+parameter.handleCustom(params,"user_id"),function(err,result){
			callback(err,result);
		});
	}
}//111