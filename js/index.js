function clicked (type){
	document.getElementById("box").innerHTML = document.getElementById("box").innerHTML + type;
	
}

function DE (){
	var a = document.getElementById("box").innerHTML;
	var b = document.getElementById("box").innerHTML.length;
	document.getElementById("box").innerHTML = a.substring(0,b-1);
}
function spacebar (type){
	document.getElementById("box").innerHTML = document.getElementById("box").innerHTML + ' ';
	
}

