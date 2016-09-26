
var $ = function(){
	return new Base();
}
function Base(){
	this.elements = [];
	
	this.getId = function(id){
		this.elements.push(document.getElementById(id));
		return this;
	}

	this.getTagName = function(tag){
		var tags = document.getElementsByTagName(tag);
		for(var i=0; i<tags.length; i++){
			this.elements.push(tags[i]);
		}
		return this;
	}
	
}

	Base.prototype.css = function(attr,value){
		for(var i=0; i<this.elements.length; i++){
			this.elements[i].style[attr] = value;
		}
		return this;
	}

	Base.prototype.html = function(text){
		for(var i=0; i<this.elements.length;i++){
			this.elements[i].innerHTML = text;
		}
		return this;
	}

	Base.prototype.click = function(fn){
		for(var i=0; i<this.elements.length; i++){
			this.elements[i].onclick = fn;
		}
	}

Base.prototype.LOL = function(){
	alert("我想看看成功没")
}