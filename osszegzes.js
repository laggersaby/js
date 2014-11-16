// Canvas -> beginPath();

context.beginPath(); // Új alakzat kezdése


// Canvas -> stroke();

context.stroke(); // alakzat lezárása ha körvonallal dolgozunk


// Canvas -> fill();

context.fill(); // alakzat lezárása ha kitöltéssel dolgozunk


// Canvas -> Text -> Körvonalazott szöveg kitöltés nélkül

context.beginPath();	
context.font = '30px Arial'; // betűk stílusa
context.lineWidth= 3; //pixelben, kihagyható, default: 1
context.strokeStyle = '#000'; // színkód
context.strokeText('Felirat', 100, 200); // szöveg, x kezdő, y kezdőérték
context.stroke(); // az igazi parancs a strokeText, de a végére lezárásul kell stroke() is


// Canvas -> Text -> Színnel kitöltött szöveg

context.beginPath();	
context.font = '30px Arial';
context.lineWidth= 3;
context.fillStyle = '#000'; // színkód
context.fillText('Felirat', 100, 200);
context.fill(); // az egész kód ugyanaz, mint az előző, csak a stroke-ot mindenhol át kell írni fill-re (stroke = körvonal, fill = kitöltés)


// Canvas -> Téglalap 

context.beginPath();
context.fillStyle = '#000'; // színkód
context.fillRect(100,100,200,50); // x kezdő, y kezdő, szélesség, magasság
context.fill();


// Canvas -> Egész kör

context.beginPath();
context.fillStyle = '#000'; // színkód
context.arc(30, 20, 14, 0, 2*Math.PI); // x kezdő, y kezdő, kör sugár,  kör kezdete, kör befejezése (teljes körnél a kör kezdete: 0, a befejezése pedig 2*Math.PI)
context.fill();


// Canvas -> Adott terület törlése a canvas-en

context.clearRect(0, 0, 100, 100); // ugyan az, mint a téglalapnál


// Canvas -> Külső kép betöltése

var imageObj = new Image();
		
imageObj.onload = function() { // Ha a kép betöltött, akkor... jelen esetben a kép kirajzolása
	context.drawImage(imageObj, 100, 100, 400, 300); // kép forrása, x kezdő, y kezdő, kép szélessége, kép magassága
}
imageObj.src = "asd.jpg";



// Canvas-es dolgok vége
//-----------------------------------------------------------------------------------------------------------------------------------


// Audió fájl lejátszása / zene lejátszása

var zene = new Audio("fajlnev.mp3");
	zene.play();
	

// Frissítés setInterval()-lal

setInterval(function(){

	// Ide jön az a kód, amit frissíteni akarsz
	
}, 100); // Frissítési időköz, 1000 = 1 másodperc


// Element adatainak lekérése

document.getElementById('id').width; // szélesség lekérése
document.getElementById('id').width=130; // szélesség változtatása 130px-re (a többinél ugyan így)
	
document.getElementById('id').height; // magasság
	
document.getElementById('id').innerHTML; // adott id-jű elem tartalmának lekérése

document.getElementById('id').value; // érték lekérése pl. inputoknál
	
document.getElementById('id').checked=true; // checkbox bekapcsolása; kikapcsolás = false 
	
document.getElementById('id').disabled=true; //kikapcsolás (nem lehet ráklikkelni), pl. 


// Tömbök JS-ben

var tomb = ['elso','masodik','harmadik']; // fontos a sarkos zárójel


// Saját function() JS-ben

function funkciom() {

	// kódrész
	
}


// Saját function() visszatérő értékkel JS-ben

function erteklekeres(id) {

		return document.getElementById(id).value; 	// return értéket fogja visszaadni ha kiírod, ugyanúgy használhatod, mint egy alap function()-t
													// pl.: var ertek = erteklekeres(id); megegyezik ezzel: var ertek = document.getElementById(id).value; (persze csak a function()-on után)
	
}

