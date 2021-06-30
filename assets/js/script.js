(() => {
    var ciseaux = false;
    var papier = false;
    var pierre = false;
    
    document.getElementById("btn1").addEventListener("click", ()=> {
        ciseaux = true;
        papier = false;
        pierre = false;
        console.log(ciseaux)
        console.log(papier)
        console.log(pierre)
    });
    
    document.getElementById("btn2").addEventListener("click", ()=> {
        ciseaux = false;
        papier = true;
        pierre = false;
        console.log(ciseaux)
        console.log(papier)
        console.log(pierre)
    });
    
    document.getElementById("btn3").addEventListener("click", ()=> {
        ciseaux = false;
        papier = false;
        pierre = true;
        console.log(ciseaux)
        console.log(papier)
        console.log(pierre)
    });

    var img = [`<img class="img" src="assets/img/ciseaux.png" alt="">`, `<img class="img" src="assets/img/papier.png" alt="">`, `<img class="img" src="assets/img/piere.png" alt="">`]

    document.getElementById("btn1").addEventListener("click", ()=> {
        var div = document.createElement("div")
        var choice = document.getElementById("bot")
        div.innerHTML = img[Math.floor(Math.random()*3)]
        document.getElementById("result").insertBefore(div, choice)
        
        
    });
    
})();