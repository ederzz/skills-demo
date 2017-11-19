/*1.每隔2.5秒切换下图片
 *2.点击左右切换按钮，切换图片，当为最后一站图片时按下向右切换牛自动切换到第一张图片
 *3.点击数字按钮切换到相应图片
 */

window.onload = function(){
	var box = document.getElementsByClassName("box_img");
	var pre = document.getElementById("pre");
	var aft = document.getElementById("aft");
	var lis = document.querySelectorAll(".btn_num a");
	
	/*先获取新的left值，判断该图是否是第一张或者最后一张，再做相应处理*/
	function animate(set){
		let new_left = parseInt(box[0].style.left) + set;
		if(new_left === -2400){
			new_left = 0;
		}else if(new_left === 600){
			new_left = -1800;
		};
		box[0].style.left = new_left + "px";
	};
	pre.onclick = function(){
		clearInterval(timer);
		animate(600);
		timer = setInterval(function(){
			let new_left = parseInt(box[0].style.left) - 600;
			if(new_left === -2400){
				new_left = 0;
			};
			box[0].style.left = new_left + "px";
		},2500);
	};
	aft.onclick = function(){
		clearInterval(timer);
		animate(-600);
		timer = setInterval(function(){
			let new_left = parseInt(box[0].style.left) - 600;
			if(new_left === -2400){
				new_left = 0;
			};
			box[0].style.left = new_left + "px";
		},2500);
	};
	for(let i in lis){
		lis[i].onclick = function(){
			clearInterval(timer);
			box[0].style.left = -600 * i + "px";
			timer = setInterval(function(){
				let new_left = parseInt(box[0].style.left) - 600;
				if(new_left === -2400){
					new_left = 0;
				};
				box[0].style.left = new_left + "px";
			},2500);
		};
	};
	//使用定时器进行轮播
	var timer = setInterval(function(){
		let new_left = parseInt(box[0].style.left) - 600;
		if(new_left === -2400){
			new_left = 0;
		};
		box[0].style.left = new_left + "px";
	},2500);
	
};
