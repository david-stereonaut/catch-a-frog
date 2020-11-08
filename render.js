const Renderer = function() {
    const _colorArr = ["#233D4D", "#FE7F2D", "#FCCA46", "#A1C181", "#619B8A"]
    const run = function(level) {
        for (let i = 0; i < level; i++){
            let top = Math.floor(Math.random() * 88)
            $("#game").append(`<i class="fas fa-frog" style="right:${Math.floor(Math.random() * 95)}%; top:${top}%; color:${_colorArr[(Math.floor(Math.random() * 5))]}; font-size:${(top/10) + 1}vh;"></i>`)
        }
    }

    return {
        run
    }
}