var txt = document.getElementById("txt");
txt.onfocus = function(){
	if(txt.value = "请输入要搜索的商品"){
		txt.value = "";
	}else{
		txt.value = txt.value;
	}
}
txt.onblur = function(){
	if(txt.value != ""){
		txt.value = txt.value;
	}else{
		txt.value = txt.value="请输入要搜索的商品";
	}
}
// 轮播
//获取大盒子
let scroll = document.getElementById("takeimg");
//获取ul
let ul = document.getElementById("takeimgul");
//获取ul中的li
let ulLis = ul.children;
//获取每个li的宽度
let liWidth = ulLis[0].offsetWidth;

//1.克隆元素
ul.appendChild(ulLis[0].cloneNode(true));


function animate(obj,target){
	clearInterval(obj.timer);
	let speed = obj.offsetLeft < target ? 15 : -15;
	obj.timer = setInterval(()=>{
		
		obj.style.left = obj.offsetLeft + speed + 'px';
		if(Math.abs(target - obj.offsetLeft) <= Math.abs(speed)){
			clearInterval(obj.tiemr);
			obj.style.left = target + 'px';
		}
	},30);
}

var timer = null;
var key = 0; //控制播放的数量
var circle = 0;
var ol = document.getElementById("takeimgol")
var olLis = ol.children;
timer = setInterval(autoPlay,3000);
function autoPlay(){
	key ++;
	if(key >= ulLis.length ){
	ul.style.left = 0;
	key = 0;
	}
	animate(ul,-key * liWidth);

	circle ++;
	if(circle > olLis.length - 1){
	circle = 0;
	}
	for(var i = 0,len = olLis.length;i < len;i ++){
	olLis[i].className = '';
	}
	olLis[circle].className = 'current';
}
