(() => {
    // var ciseaux = false;
    // var papier = false;
    // var pierre = false;
    
    // document.getElementById("btn1").addEventListener("click", ()=> {
    //     ciseaux = true;
    //     papier = false;
    //     pierre = false;
    //     console.log(ciseaux)
    //     console.log(papier)
    //     console.log(pierre)
    // });
    
    // document.getElementById("btn2").addEventListener("click", ()=> {
    //     ciseaux = false;
    //     papier = true;
    //     pierre = false;
    //     console.log(ciseaux)
    //     console.log(papier)
    //     console.log(pierre)
    // });
    
    // document.getElementById("btn3").addEventListener("click", ()=> {
    //     ciseaux = false;
    //     papier = false;
    //     pierre = true;
    //     console.log(ciseaux)
    //     console.log(papier)
    //     console.log(pierre)
    // });

    var img = [`<img width="100px" class="img" src="assets/img/ciseaux.png" alt="">`, `<img width="100px" class="img" src="assets/img/papier.png" alt="">`, `<img width="100px" class="img" src="assets/img/piere.png" alt="">`]
    var win = 0;
    var botWin = 0;

    document.getElementById("btn1").addEventListener("click", ()=> {
        var div1 = document.createElement("div")
        var you = div1.innerHTML = `<img width="100px" class="img" src="assets/img/ciseaux.png" alt="">`
        document.getElementById("youImg").insertBefore(div1, null)

        var div2 = document.createElement("div")
        var bot = div2.innerHTML = img[Math.floor(Math.random()*3)]
        document.getElementById("botImg").insertBefore(div2, null)
        var p = document.createElement("p")
        if (you == bot) {
            p.innerText = "Egalité"
            document.getElementById("vs").insertBefore(p , null)
        }else if (you.length == bot.length+1){
            p.innerText = "Gagné"
            document.getElementById("vs").insertBefore(p , null)
            win++
        }else{
            p.innerText = "Perdu"
            document.getElementById("vs").insertBefore(p , null)
            botWin++
        }
        
        if (win == 3) {
            alert("you win!")
        }
        
        if (botWin == 3){
            alert("you lose!")
        }
    });

    document.getElementById("btn2").addEventListener("click", ()=> {
        var div1 = document.createElement("div")
        var you = div1.innerHTML = `<img width="100px" class="img" src="assets/img/papier.png" alt="">`
        document.getElementById("youImg").insertBefore(div1, null)

        var div2 = document.createElement("div")
        var bot = div2.innerHTML = img[Math.floor(Math.random()*3)]
        document.getElementById("botImg").insertBefore(div2, null)
        var p = document.createElement("p")
        if (you == bot) {
            p.innerText = "Egalité"
            document.getElementById("vs").insertBefore(p , null)
            console.log("Egalité")
        }else if (you.length == bot.length+1){
            p.innerText = "Gagné"
            document.getElementById("vs").insertBefore(p , null)
            win++
            console.log("Gagné")
        }else{
            p.innerText = "Perdu"
            document.getElementById("vs").insertBefore(p , null)
            console.log("Perdu")
            botWin++
        }
        
        if (win == 3) {
            alert("you win!")
        }
        
        if (botWin == 3){
            alert("you lose!")
        }
    });

    document.getElementById("btn3").addEventListener("click", ()=> {
        var div1 = document.createElement("div")
        var you = div1.innerHTML = `<img width="100px" class="img" src="assets/img/piere.png" alt="">`
        document.getElementById("youImg").insertBefore(div1, null)

        var div2 = document.createElement("div")
        var bot = div2.innerHTML = img[Math.floor(Math.random()*3)]
        document.getElementById("botImg").insertBefore(div2, null)
        var p = document.createElement("p")
        if (you == bot) {
            p.innerText = "Egalité"
            document.getElementById("vs").insertBefore(p , null)
        }else if (you.length+2 == bot.length){
            p.innerText = "Gagné"
            document.getElementById("vs").insertBefore(p , null)
            console.log(you.length)
            console.log(bot.length)
            win++
        }else{
            p.innerText = "Perdu"
            document.getElementById("vs").insertBefore(p , null)
            console.log(you.length)
            console.log(bot.length)
            botWin++
        } 
        
        if (win == 3) {
            alert("you win!")
        }
        
        if (botWin == 3){
            alert("you lose!")
        }
    });
})();