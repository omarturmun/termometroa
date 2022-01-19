radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # .
            . # . . .
            . # # # #
            `)
    }
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showNumber(tenplnt)
})
let tenplnt = 0
radio.setGroup(6)
basic.forever(function () {
    tenplnt = input.temperature()
})
