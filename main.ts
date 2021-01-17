input.onGesture(Gesture.ThreeG, function () {
    music.ringTone(196)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . . # . .
    . . . . .
    `)
music.playMelody("G B A G C5 B A B ", 120)
basic.forever(function () {
    basic.showNumber(input.temperature())
})
