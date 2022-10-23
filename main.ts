input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let i = 0; i < 2; i++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Square)
    }
    
})
