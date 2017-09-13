var db=require("./database");
var parameter=require("./parameter"); 

module.exports={
	add:function(params,callback){
		db.query("insert into commodity(name,category,picture) values(?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	del:function(params,callback){
		db.query("DELETE FROM commodity WHERE id = ?",params,function(err,result){
			callback(err,result);
		});
	},
	updata:function(params,callback){
		db.query("updata commodity set name=?,category_id=?,picture=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//菜品名字模糊查找
		db.query("select * from commodity where 1=1 "+parameter.handleName(params),function(err,result){
			callback(err,result);
		});
	}
}
