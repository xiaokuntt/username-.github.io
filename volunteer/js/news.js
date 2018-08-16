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
	var btn = getClass('tab_btn'); //获取按钮数组
	var div = getClass('tab_div'); //获取div数组
	for(i = 0; i < btn.length; i++) {
		btn[i].onclick = function() { //按钮点击事件
			var index = (this.getAttribute('index') - 0); //获取是第几个按钮按下
			if(btn[index].className.indexOf('curr_btn') >= 0) return; //如果按下的按钮为当前选中的按钮则无反应
			for(i = 0; i < btn.length; i++) {
				if(index == i) {
					btn[i].className = ' partText  tab_btn curr_btn';
					div[i].className = ' text tab_div curr_div';
				} else {
					btn[i].className = 'partText  tab_btn';
					div[i].className = ' text tab_div';
				}
			}
		}
	}
};