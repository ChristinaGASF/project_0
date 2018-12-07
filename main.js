// responsive nav bar into hamburger //
function responNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}


//  dropdown for hamburger not working yet//

  function dropDown() {
      document.getElementById("myTopnav").classList.toggle("show");
    }
    window.onclick = function(event) {
    if (!event.target.matches('.icon')) {
    
      var dropdowns = document.getElementsByClassName("topnav");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    }

// highlight section of nav on scroll breaks sticky//
//var sections = $('section')
//  , nav = $('nav')
  //, nav_height = nav.outerHeight();
 
//$(window).on('scroll', function () {
  //var cur_pos = $(this).scrollTop();
 
  //sections.each(function() {
    //var top = $(this).offset().top - nav_height,
      //  bottom = top + $(this).outerHeight();
 
    //if (cur_pos >= top && cur_pos <= bottom) {
      //nav.find('a').removeClass('active');
      //sections.removeClass('active');
 
      //$(this).addClass('active');
      //nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    //}
  //});
//});

// sticky nav bar //
window.onscroll = function() {stickyNav()};
var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// carousel //
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 3500); 
}



// on click form submit validator //

