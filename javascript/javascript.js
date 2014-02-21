var hide = document.getElementById ("hide");

function showhide(e) {
    e.preventDefault();
        if (hide.className == ("show")) {
            hide.setAttribute ("class", "hide");
}
    
    else { hide.setAttribute ("class", "show");
    
    }
    
}
    
var knapp = document.getElementById ("dropdown");
knapp.addEventListener("click", showhide);
