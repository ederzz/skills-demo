/**瀑布流的每一列宽度固定，高度不限
 * 1.将所有的盒子添加到html结构中
 * 2.遍历所有的盒子，将第一行的所有盒子的高度，都放入一个数组dHeight中，后面的盒子，
 * 放在哪一列就将高度加到数组dHeight相应列的位置上（每次盒子都放在高度最低的列上）
 * 3.每个盒子宽度为200px,上下间距为10px,左右各有5px的外边距*/
window.onload = function(){
//	for(var i = 0;i < 20;i++){
//		var div = document.createElement('div');
//		div.innerHTML = i;
//		div.style.height = Math.floor(Math.random()*250 + 50) + 'px';
//		document.body.appendChild(div);
//	};

//	var img='';
//	for(var i=1;i <= 20;i++){
//		img += '<img src="img/' + i + '.jpg" />';
//	};
//	document.getElementById('con').innerHTML = img;
	
	var divs = document.getElementById('con').getElementsByTagName('img');
	var mar = document.body.clientWidth%210/2;
	var n = Math.floor(document.body.clientWidth / 210);
	var dHeight=[];
	for(var x=0;x<divs.length;x++){
		divs[x].style.height = Math.floor(Math.random()*250 + 50) + 'px';
		var y = x%n;
		if(dHeight.length == n){
			var min = findMin(dHeight);
			divs[x].style.left = mar + 5 + 210*min + 'px'; 
			divs[x].style.top = dHeight[min] + 10 + 'px';
			dHeight[min] += divs[x].offsetHeight + 10;
		}else{
			dHeight[y] = divs[y].offsetHeight + 10;
			divs[x].style.left = mar + 5 + 210*y + 'px'; 
			//这里没写px所以就设置不上top;
			divs[x].style.top = 10 + divs[x].offsetHeight;
			console.log(x);
			console.log(divs[x].style.top);
			console.log(divs[x].offsetHeight);
		};
	};
	function findMin(arr){
		var m = 0;
		for(var n=0;n < arr.length;n++){
			m = Math.min(arr[m],arr[n])==arr[m] ? m:n;
		};
		return m;
	};
};
