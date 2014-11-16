setInterval(function(){

	var erteklekeres = document.getElementById('xyz').value; // Érték lekérése tizedmásodpercenként
	
	document.getElementById('divbe_iras').innerHTML= erteklekeres; // Érték kiírása, tizedmásodpercenként

}, 100); // 1 sec = 1000
