$(document).ready(function() {
	/*nav-top中的鼠标移入移出事件*/
	/**当鼠标移入时，要使影藏的div显示出来，并且更改小三角形的方向，通过css()函数来更改样式
	 * 当鼠标移出时，要使显示的div影藏，并且更改小三角形的方向，通过css()函数来更改样式
	 * 由于nav-top中‘我的淘宝’，‘收藏夹’，‘商家支持’，‘网站导航’都具有这个特征，所以应该设置适当的相同class属性，以减少重复操作
	 * 编写中发现需要将mouseenter/mouseleave事件绑定给li元素，而不是a元素
	 * */
	$(".nav_right_two li.first_tog1").mouseenter(function() {
		$(".nav_right_two li.first_tog1 .tog").show();
		$(".nav_right_two li.first_tog1 .hidden").show();
		$(".nav_right_two li.first_tog1 a").css({"color":"#c40000","background":"#fff"});
		$(".nav_right_two li.first_tog1 a .ic1").css({"border-color":"transparent transparent #bbb","top":"12px","right":"4px"});

	});
	$(".nav_right_two li.first_tog1").mouseleave(function(){
		$(".nav_right_two li.first_tog1 .tog").hide();
		$(".nav_right_two li.first_tog1 .hidden").hide();
		$(".nav_right_two li.first_tog1 a").css({"color":"#999","background":"rgb(242, 242, 242)"});
		$(".nav_right_two li.first_tog1 a .ic1").css({"border-color":"#bbb transparent transparent","top":"15px","right":"4px"});
	});
	$(".nav_right_two li.first_tog2").mouseenter(function() {
		$(".nav_right_two li.first_tog2 .tog").show();
		$(".nav_right_two li.first_tog2 .hidden").show();
		$(".nav_right_two li.first_tog2 a").css({"color":"#c40000","background":"#fff"});
		$(".nav_right_two li.first_tog2 a .ic1").css({"border-color":"transparent transparent #bbb","top":"12px","right":"4px"});

	});
	$(".nav_right_two li.first_tog2").mouseleave(function(){
		$(".nav_right_two li.first_tog2 .tog").hide();
		$(".nav_right_two li.first_tog2 .hidden").hide();
		$(".nav_right_two li.first_tog2 a").css({"color":"#999","background":"rgb(242, 242, 242)"});
		$(".nav_right_two li.first_tog2 a .ic1").css({"border-color":"#bbb transparent transparent","top":"15px","right":"4px"});
	});
	$(".nav_right_two li.first_tog3").mouseenter(function() {
		$(".nav_right_two li.first_tog3 .tog").show();
		$(".nav_right_two li.first_tog3 .hidden").show();
		$(".nav_right_two li.first_tog3 .first").css({"color":"#c40000","background":"#fff"});
		$(".nav_right_two li.first_tog3 a .ic1").css({"border-color":"transparent transparent #bbb","top":"12px","right":"4px"});

	});
	$(".nav_right_two li.first_tog3").mouseleave(function(){
		$(".nav_right_two li.first_tog3 .tog").hide();
		$(".nav_right_two li.first_tog3 .hidden").hide();
		$(".nav_right_two li.first_tog3 .first").css({"color":"#999","background":"rgb(242, 242, 242)"});
		$(".nav_right_two li.first_tog3 a .ic1").css({"border-color":"#bbb transparent transparent","top":"15px","right":"4px"});
	});
	$(".nav_right_two li.first_tog4").mouseenter(function() {
		$(".nav_right_two li.first_tog4 .tog").show();
		$(".nav_right_two li.first_tog4 .hidden").show();
		$(".nav_right_two li.first_tog4 .fouth").css({"color":"#c40000","background":"#fff"});
		$(".nav_right_two li.first_tog4 i").css({"background":"#fff"});
		$(".nav_right_two li.first_tog4").css({"background":"#fff"});
		$(".nav_right_two li.first_tog4 a .ic1").css({"border-color":"transparent transparent #bbb","top":"12px","right":"4px"});

	});
	$(".nav_right_two li.first_tog4").mouseleave(function(){
		$(".nav_right_two li.first_tog4 .tog").hide();
		$(".nav_right_two li.first_tog4 .hidden").hide();
		$(".nav_right_two li.first_tog4 .fouth").css({"color":"#999","background":"rgb(242, 242, 242)"});
		$(".nav_right_two li.first_tog4 i").css({"background":"rgb(242, 242, 242)"});
		$(".nav_right_two li.first_tog4").css({"background":"rgb(242, 242, 242)"});
		$(".nav_right_two li.first_tog4 a .ic1").css({"border-color":"#bbb transparent transparent","top":"15px","right":"4px"});
	});
	/*nav-top中的鼠标移入移出事件*/
});


