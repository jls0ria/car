function displayMovement(direction: string) {
    switch (direction) {
        case "Forward":
            basic.showArrow(ArrowNames.North)
            break;
        case "ForwardRight":
            basic.showArrow(ArrowNames.NorthEast)
            break;
        case "ForwardLeft":
            basic.showArrow(ArrowNames.NorthWest)
            break;
        case "Backwards":
            basic.showArrow(ArrowNames.South)
            break;
        case "BackwardsRight":
            basic.showArrow(ArrowNames.SouthEast)
            break;
        case "BackwardsLeft":
            basic.showArrow(ArrowNames.SouthWest)
            break;
        default:
            basic.showString(direction)
    }
}
function stop() {
    displayMovement("S")
    setPower(0, 0)
    setDirection("S")
}

function moveCar(direction: string, speed: number, duration: number) {
    displayMovement(direction)
    setPower(speed, 1000)
    setDirection(direction)
    basic.pause(duration)
    stop()
}
function setPower(speedForPowerMotor: number, steeringAmount: number) {
    pins.analogWritePin(AnalogPin.P0, speedForPowerMotor)
    pins.analogWritePin(AnalogPin.P2, steeringAmount)
}
function setDirection(direction: string) {
    switch (direction) {
        case "Forward":
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            break;
        case "ForwardRight":
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            break;
        case "ForwardLeft":
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            break;
        case "Backwards":
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            break;
        case "BackwardsRight":
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            break;
        case "BackwardsLeft":
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            break;
        default:
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
    }
}
basic.showString("HELLO")
stop()
basic.forever(function () {
    moveCar("Forward", 400, 2000)
    moveCar("ForwardRight", 300, 1000)
    moveCar("ForwardLeft", 300, 1000)
    stop()
    basic.pause(5000)
    moveCar("BackwardsLeft", 300, 1000)
    moveCar("BackwardsRight", 300, 1000)
    moveCar("Backwards", 400, 2000)
    stop()
    basic.pause(5000)
})
