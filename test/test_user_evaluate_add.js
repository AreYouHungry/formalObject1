var user_evaluatedao=require("../models/user_evaluate_dao.js");

var params=[146,1,99,'难吃到给99分','2017-9-13'];
user_evaluatedao.addEvaluate(params,function(err,result){
	console.log(err,result);
});
