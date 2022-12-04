"use strict"

function toggleIcon() {
    $(".icon").on("click", function() {
        $(".icon").toggleClass("active")
        $(".navigation-mobile").slideToggle(300)
    })
}

function closeMobileMenu() {
    $(".navigation-mobile").on("click", "a", function() {
        $(".icon").trigger("click")
    })
}


//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)