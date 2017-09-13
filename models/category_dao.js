var db=require("./database");
var parameter=require("./parameter");

module.exports={
	add:function(params,callback){
		db.query("insert into category(name) values(?)",params,function(err,result){
			callback(err,result);
		});
	},
	del:function(params,callback){
		db.query("DELETE FROM category WHERE id = ?",params,function(err,result){
			callback(err,result);
		});
	},
	updata:function(params,callback){
		db.query("updata category set name=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//通过菜品类别id进行查询
		db.query("select * from category where 1=1 "+parameter.handleId(params),function(err,result){
			callback(err,result);
		});
	}
}