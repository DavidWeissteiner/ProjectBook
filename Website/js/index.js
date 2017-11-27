

    $('.menuButton').click(function() {
        $('.menu').animate({
          left: "0px"
        }, 200);

        $('body').animate({
          left: "250px"
        }, 200);
      });

//https://www.codecademy.com/courses/web-beginner-en-zmn0b/0/1?content_from=make-an-interactive-website%3Ayour-first-program




function openNav() {
    document.getElementById("anatomySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("anatomySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}



function anatomyBtnOnClick() {
        location.href = "./anatomy.html";
    };
function selftestBtnOnClick() {
        location.href = "./selftest.html";
    };
function readerBtnOnClick() {
        location.href = "./onlinereader.html";
    };

