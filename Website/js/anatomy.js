

function headOnClick(){
    if(document.getElementById("anatomyHead").src.includes("head.png")){
        document.getElementById("anatomyHead").src="images/humanBody/headCard.png";
    } else if(document.getElementById("anatomyHead").src.includes("headCard.png")){
        document.getElementById("anatomyHead").src="images/humanBody/head.png";
    }
}


function openMenu(){
    document.getElementById("menuDiv").class="menuVisible";
}