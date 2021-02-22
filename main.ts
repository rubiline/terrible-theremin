let y = 0
let x = 0
let dist = 0
let output = 0
let lastoutput = 0
basic.forever(function () {
    dist = Math.map(Math.constrain(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ), 0, 250), 0, 250, 40, 440)
    if (dist != 0) {
        if (dist < 400) {
            serial.writeNumber(dist)
            serial.writeLine("")
            x = Math.map(pins.analogReadPin(AnalogPin.P3), 0, 1023, 0, 1)
            y = Math.map(pins.analogReadPin(AnalogPin.P4), 0, 1023, 0, 1)
            output = Math.constrain(dist * (x * (y * 10)), 100, 2000)
        }
    }
    output = (output + lastoutput) / 2
    music.ringTone(output)
    lastoutput = output
})
