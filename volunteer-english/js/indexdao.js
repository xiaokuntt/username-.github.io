<script type="text/javascript">
	  function $(obj){
return document.getElementById(obj);
  }
    //启动网页，初始播放第一张图片
var currentImg=1;
//总共有三张图片需要播放
var maxImg=3;
    //没2000毫秒播放一张图片
var yaya =setInterval("show()",2000);
// 根据传入的数值，判断播放哪一张图片
 
function show(num){
   //判断是否传入的是一个数值（当点击li中内容时候，传入的是数值；否则没有点击Li时候，没有传入数值，判断条件为false）
        if(Number(num)){
//清除定时器
clearTimeout(yaya);
//将当前要播放的图片设置为点击li所要表达的图片，例如如果点击id="img2"的，currentImg=2;
currentImg=num;
}
//currentImg代表的图片显示，其他的不显示
for(var i=1;i<=maxImg;i++){
if (currentImg==i)
{
 var name="img"+i;
 $("myImg").src=""+i+".jpg";
 $(name).className="choosen";
}else{
 var name="img"+i;

 $(name).className="choice";
}
}
//如果当前播放时最后一张图片，currentImg改为第一张
        if(currentImg==maxImg){
currentImg=1;
}
else{
currentImg++; 
}
}


       //光标离开li后，恢复计时器
function out(){
clearTimeout(yaya);
yaya=setInterval("show();",2000);
}
  
//window.onload= setInterval("show();",2000);
	</script>