input.onButtonPressed(Button.A, function () {
    basic.showString("GAME1")
    hand = randint(0, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (hand == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    basic.clearScreen()
})
let angle = 0
let hand = 0
let open = 95
let closed = 175
basic.forever(function () {
    let lichtniveau = 0
    led.plotBarGraph(
    lichtniveau,
    0
    )
    angle = pins.map(
    lichtniveau,
    0,
    255,
    open,
    closed
    )
    pins.servoWritePin(AnalogPin.P0, angle)
})
