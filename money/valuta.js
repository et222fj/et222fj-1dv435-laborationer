function converter(nummer) {
 
 
var euro = 8;   
var dollar = 6;
var dollarSumma;
var euroSumma;
var write = document.getElementById("resultat");
    
if (isNaN(nummer)) {
        
     alert("Ange ett Nummer!");
}
    
else if (nummer > 0) {
        
    dollarSumma = Math.round((nummer/dollar)*100)/100;
    euroSumma = Math.round((nummer/euro)*100)/100;
    write.innerHTML = "<p>" + nummer + " SEK blir " + dollarSumma + " Dollar och " + euroSumma + " Euro." + "</p>" + write.innerHTML;
        
}
    
else {
        
    alert("Fältet är tomt!");
        
}
    
}