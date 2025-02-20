let choice = ""
let left = ""
let right = ""
let options = ["S", "C", "F"]
function generate_options() {
    let left = options[randint(0, options.length)]
    let right = options[randint(0, options.length)]
}

function draw_s(x: number) {
    led.plot(x, 0)
    led.plot(x, 1)
    led.plot(x, 2)
    led.plot(x, 4)
    led.plot(x + 1, 0)
    led.plot(x + 1, 2)
    led.plot(x + 1, 3)
    led.plot(x + 1, 4)
}

function draw_c(x: number) {
    led.plot(x, 0)
    led.plot(x, 1)
    led.plot(x, 2)
    led.plot(x, 3)
    led.plot(x, 4)
    led.plot(x + 1, 0)
    led.plot(x + 1, 4)
}

generate_options()
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let choice = left
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    let choice = right
})
draw_s(0)
draw_c(3)
