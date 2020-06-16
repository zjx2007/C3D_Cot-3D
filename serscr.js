if (location.href.indexOf("#") == -1) {
	location.href = "http://3d.cotw.top/#"
};
var n = document.getElementById("net");
var noad=document.getElementById('load');
function ax() {
	n.src = location.href.replace("3d.cotw.top/#", "3d-1257086898.cos.ap-guangzhou.myqcloud.com/three.js/") + ((location.href.indexOf("index.html") == -1) ? "index.html": "");
}
window.addEventListener('message',function(e){
	cge(e.data);
},false);
ax();
var urll;
$("#jdis").load("https://3d-1257086898.cos.ap-guangzhou.myqcloud.com/three.js/serhead.html");
var cge=function(dat){
	if(dat=="log"){
		noad.style.setProperty('visibility', 'visible');
	}else if(dat=="delog"){
		noad.style.setProperty('visibility', 'hidden', 'important');
	}else{
		alert(dat);
	}
	location.hash=n.src.replace("http://3d-1257086898.cos.ap-guangzhou.myqcloud.com/three.js/","#");
    //document.getElementById("load").style.display="inline";
}