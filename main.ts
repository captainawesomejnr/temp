radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber,
    55
    )
    basic.pause(2000)
    basic.clearScreen()
    basic.showNumber(receivedNumber)
})
loops.everyInterval(5000, function () {
    radio.setGroup(12.34)
    radio.sendNumber(input.temperature())
})
