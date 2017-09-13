var db=require("./database");
var parameter=require("./parameter");

module.exports={
	add:function(params,callback){
		db.query("insert into cart_detail(cart_id,c_id,amount) values(?,?,?)",params,function(err,result){
			callback(err,result);
		});
	},
	del:function(params,callback){
		db.query("DELETE FROM cart_detail WHERE id = ?",params,function(err,result){
			callback(err,result);
		});
	},
	updata:function(params,callback){
		db.query("updata cart_detail set cart_id=?,c_id=?,amount=? where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	show:function(params,callback){//通过菜品类别id进行查询
		db.query("select * from cart_detail where 1=1 "+parameter.handleCustom(params,"cart_id"),function(err,result){
			callback(err,result);
		});
	}
}