/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Pablo
 * Created on: Sep 2024
 * This program messures the disctance of an object 
*/

let disctanceToObject: number = 0

//setup 
basic.showIcon(IconNames.Happy)

//find the disctance of the sonar 
input.onButtonPressed(Button.A, function(){
    basic.clearScreen()
    disctanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(disctanceToObject)
    basic.showIcon(IconNames.Happy)
})