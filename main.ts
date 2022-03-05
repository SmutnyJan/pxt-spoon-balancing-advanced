input.onButtonPressed(Button.A, function () {
    jeHraSpustena = true
    Balancovani.spustitHru(50)
})
let souradnice: number[] = []
let jeHraSpustena = false
jeHraSpustena = false
basic.forever(function () {
    if (jeHraSpustena) {
        souradnice = Balancovani.souradnice()
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
