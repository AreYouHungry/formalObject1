var db=require("./database");
var parameter=require("./parameter");

module.exports={
	add:function(params,callback){
		db.query("insert into attribute(name,price,inventory,c_id) values(?,?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	del:function(params,callback){
		db.query("DELETE FROM attribute WHERE id = ?",params,function(err,result){
			callback(err,result);
		});
	},
	updata:function(params,callback){
		db.query("updata attribute set name=?,price=?,inventory=?,c_id=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){
		db.query("select * from attribute where 1=1 "+parameter.handleCustom(params,"c_id"),function(err,result){
			callback(err,result);
		});
	}
}