let hand = 0
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
basic.forever(function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sawtooth,
    input.acceleration(Dimension.X),
    input.compassHeading(),
    0,
    255,
    375,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.UntilDone)
})
