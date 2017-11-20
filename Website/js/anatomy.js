

function headOnClick(){
    if(document.getElementById("anatomyHead").src.includes("head.png")){
        document.getElementById("anatomyHead").src="images/humanBody/headCard.png";
    } else if(document.getElementById("anatomyHead").src.includes("headCard.png")){
        document.getElementById("anatomyHead").src="images/humanBody/head.png";
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