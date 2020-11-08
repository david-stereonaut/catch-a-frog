const renderer = Renderer()
const frogGame = FrogGame()
const timers = []

$("#main-container").on("click", "#start", function() {
    $("#start").text("Restart")
    for (timer of timers){
        clearTimeout(timer)
        clearInterval(timer)
    }
    $(".fa-frog").remove()
    $("#lose-msg").remove()
    renderer.run(frogGame.getLevel())
    $("#level").text(`Level ${frogGame.getLevel()}`)
    $("#frog-count").text(`${frogGame.getLevel()} Frogs Left`)
    let time = frogGame.getLevel() + 1
    $("#count-down").text(`${time} Seconds Left`)
    time--
    timers.push(setInterval(function(){
        $("#count-down").text(`${time} Seconds Left`)
        if (time <= 3){
            $("#count-down").css("color", "red")
            setTimeout(function(){
                $("#count-down").css("color", "black")
            }, 500)
        }
        time--
    }, 1000))
    timers.push(setTimeout(frogGame.endLevel, ((frogGame.getLevel() + 1) * 1000)));
    
})

$("#game").on("click", ".fa-frog", function() {
    $(this).remove()
    if ($("#game > i").length === 0){
        frogGame.endLevel()
    }
    $("#frog-count").text(`${$("#game > i").length} Frogs Left`)
})

