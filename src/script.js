$(document).ready(function() {
    $("#scroll-top").click(function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })
    $(".arrow-down").click(function() {
        document.getElementById("work").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    })
    $("#nav-work").click(function() {
        document.getElementById("work").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    })
    $("#nav-about").click(function() {
        document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    })
    $("#nav-contact").click(function() {
        document.getElementById("contact").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    })
})
