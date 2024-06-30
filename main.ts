input.onGesture(Gesture.ScreenUp, function () {
    Tello.RCmode(
    0,
    0,
    0,
    0
    )
    basic.showIcon(IconNames.SmallDiamond)
})
input.onGesture(Gesture.TiltRight, function () {
    Tello.RCmode(
    50,
    0,
    0,
    0
    )
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.A, function () {
    Tello.RCmode(
    0,
    0,
    20,
    0
    )
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    Tello.RCmode(
    -50,
    0,
    0,
    0
    )
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.LogoUp, function () {
    Tello.RCmode(
    0,
    -50,
    0,
    0
    )
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.LogoDown, function () {
    Tello.RCmode(
    0,
    50,
    0,
    0
    )
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    Tello.fly_or_land()
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    Tello.RCmode(
    0,
    0,
    -20,
    0
    )
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
Tello.radiosetgroup(101)
basic.forever(function () {
    Tello.Setorder(1000)
})
