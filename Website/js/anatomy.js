

function headOnClick(){
    if(document.getElementById("anatomyHead").src.includes("head.png")){
        document.getElementById("anatomyHead").src="images/humanBody/headCard.png";
    } else if(document.getElementById("anatomyHead").src.includes("headCard.png")){
        document.getElementById("anatomyHead").src="images/humanBody/head.png";
    }
}

function heartOnClick(){
    if(document.getElementById("anatomyHeart").src.includes("heart.png")){
        document.getElementById("anatomyHeart").src="images/humanBody/heartCard.png";
    } else if(document.getElementById("anatomyHeart").src.includes("heartCard.png")){
        document.getElementById("anatomyHeart").src="images/humanBody/heart.png";
    }
}

function sexOnClick(){
    if(document.getElementById("anatomySex").src.includes("sex.png")){
        document.getElementById("anatomySex").src="images/humanBody/sexCard.png";
    } else if(document.getElementById("anatomySex").src.includes("sexCard.png")){
        document.getElementById("anatomySex").src="images/humanBody/sex.png";
    }
}




function openNav() {
    document.getElementById("anatomySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("anatomySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}