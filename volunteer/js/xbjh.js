function getClass(className) { //className指class的值

	var tagname = document.getElementsByTagName('*'); //获取指定元素
	var tagnameAll = []; //这个数组用于存储所有符合条件的元素
	for(var i = 0; i < tagname.length; i++) { //遍历获得的元素
		if(tagname[i].className.indexOf(className) >= 0) { //如果获得的元素中的class的值等于指定的类名，就赋值给tagnameAll
			tagnameAll[tagnameAll.length] = tagname[i];
		}
	}
	return tagnameAll;

}
window.onload = function() { //载入事件
	var btn1 = getClass('tab_btn1'); //获取按钮数组
				var div1 = getClass('tab_div1'); //获取div数组
				for(i = 0; i < btn1.length; i++) {
					btn1[i].onclick = function() { //按钮点击事件
						var index1 = (this.getAttribute('index1') - 0); //获取是第几个按钮按下
						if(btn1[index1].className.indexOf('curr_btn1') >= 0) return; //如果按下的按钮为当前选中的按钮则无反应
						for(i = 0; i < btn1.length; i++) {
							if(index1 == i) {
								btn1[i].className = ' bth  tab_btn1 curr_btn1';
								div1[i].className = ' xbjhPart2 tab_div1 curr_div1';
							} else {
								btn1[i].className = ' bth  tab_btn1';
								div1[i].className = ' xbjhPart2 tab_div1';
							}
						}
					}
				}
				
				var btn2 = getClass('tab_btn2'); //获取按钮数组
				var div2 = getClass('tab_div2'); //获取div数组
				for(j = 0; j < btn2.length; j++) {
					btn2[j].onclick = function() { //按钮点击事件
						var index2 = (this.getAttribute('index2') - 0); //获取是第几个按钮按下
						if(btn2[index2].className.indexOf('curr_btn2') >= 0) return; //如果按下的按钮为当前选中的按钮则无反应
						for(j = 0; j < btn2.length; j++) {
							if(index2 == j) {
								btn2[j].className = ' bth  tab_btn2 curr_btn2';
								div2[j].className = ' xbjhPart2 tab_div2 curr_div2';
							} else {
								btn2[j].className = ' bth  tab_btn2';
								div2[j].className = ' xbjhPart2 tab_div2';
							}
						}
					}
				}
};