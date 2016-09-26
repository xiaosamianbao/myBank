
var $ = function(){
	return new OW();
}
function OW (){
	var elements = [];  //用来保存获取的元素节点
	this.getId = function(id){
		this.elements.push(document.getElementById(id));
		return this;
	}

	this.getTagName = function(tag){
		var Tags = document.getElementsByTageName(tag);
		for(var i=0; i<Tags.length;i++){
			this.elements.push(Tags[i]);
		}
		return this;
	}
}

OW.prototype.css = function(attr,value){
	for(var i=0; i<this.elements.length;i++){
		this.elements[i].style[attr] = value;
	}
	return this;
}

OW.prototype.html = function(text){
	for(var i=0;i<elements.length;i++){
		this.elements[i].innerHTML = text;
	}
	return this;
}

OW.prototype.click =function(fn){
	for(var i=0; i<elements.length;i++){
		this.elements[i].onclick = fn;
	}
}