$(document).ready(function() {
    $("#scroll-top").click(function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })
    $(".arrow-down").click(function() {
        document.getElementById("scroll-to").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    })
})
