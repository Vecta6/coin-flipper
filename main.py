def on_button_pressed_a():
    for i in range(2):
        basic.show_icon(IconNames.DIAMOND)
        basic.show_icon(IconNames.SMALL_DIAMOND)
    if Math.random_boolean():
        basic.show_icon(IconNames.SKULL)
    else:
        basic.show_icon(IconNames.SQUARE)
input.on_button_pressed(Button.A, on_button_pressed_a)
