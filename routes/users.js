var express = require('express');
var router = express.Router();
var user_dao=require("../models/user_dao");

module.exports = router;

/* GET users listing. */
router.post('/add', function(req, res) {//添加用户
	var rIntegral=100;//初始积分
	var rIsfriend=true;//初始是否拉黑
	var params=[req.body.name,req.body.password,req.body.phone,req.body.avatar,rIntegral,rIsfriend];
	user_dao.add(params,function(e,r){
		var o={};
		o.result=e=null;
		o.msg=o.r?"增加用户成功!":"增加用户失败!";
		res.json(o);
	})
});


router.get("/show/:p",function(req,res){//查询用户
	params=[req.param("p").id,req.param("p").isfriend];
	user_dao.show(params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询用户成功!":"查询用户失败!";
		o.data=result;
		res.json(o);
	});
});

router.get("/del/:p",function(req,res){//删除用户
	params=req.param("p").id
	user_dao.show(params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"删除用户成功!":"查询用户失败!";
		o.data=result;
		res.json(o);
	});
});


router.post('/updata', function(req, res) {//更新用户
	var params=[req.body.name,req.body.password,req.body.phone,req.body.avatar,req.body.integral,req.body.isfriend];
	user_dao.add(params,function(e,r){
		var o={};
		o.result=e=null;
		o.msg=o.r?"更新用户成功!":"更新用户失败!";
		res.json(o);
	})
});


