const FrogGame = function(){
    let lvl = 1;
    
    const endLevel = function() {
        for (timer of timers){
            clearTimeout(timer)
            clearInterval(timer)
        }
        if ($("#game > i").length === 0){
            lvl++
            $("#start").trigger("click")
            $("#count-down").css("color", "yellow")
            setTimeout(function(){
                $("#count-down").css("color", "black")
            }, 500)
        } else {
            lvl = 1
            $(".fa-frog").remove()
            $("#game").append(`<div id="lose-msg">You Lost :(</div>`)
            $("#start").text("Restart")
        }
    }

    const getLevel = function() {
        return lvl
    }

    const setLevel = function(level) {
        lvl = level
    }

    return {
        endLevel,
        getLevel,
        setLevel
    }
}