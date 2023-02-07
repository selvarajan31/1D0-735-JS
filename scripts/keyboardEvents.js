document.addEventListener('DOMContentLoaded', ()=>{     //$(document).ready
    document.getElementById("output").innerText = 1
    document.body.addEventListener("keydown",function(event){
        document.getElementById("output").innerText = event.key;
        
        const x = event.getModifierState("CapsLock")   //s is the key that will be checked if activated.

        document.getElementById("output").innerText += `. CapsLock is pressed: ${x}`; //String interpolation
    })
}, false);


/*
Modifier keys that are activated only when they are being pressed down:

    Alt
    AltGraph
    Control
    Meta
    Shift

Modifier keys that are activated when they are clicked, and deactivated when they are clicked again:

    CapsLock
    NumLock
    ScrollLock
*/