input.onButtonPressed(Button.A, function () {
    jeHraSpustena = true
    balancing.playGame(Difficulty.Jednoducha)
})
let souradnice: number[] = []
let jeHraSpustena = false
jeHraSpustena = false
basic.forever(function () {
    if (jeHraSpustena) {
        souradnice = balancing.coordinates()
    }
    if (jeHraSpustena && (souradnice[0] == 0 || souradnice[0] == 4 || souradnice[1] == 0 || souradnice[1] == 4)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # # # #
            # . . . #
            `)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        jeHraSpustena = false
    }
})
