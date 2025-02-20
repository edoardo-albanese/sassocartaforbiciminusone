choice = ""
left = ""
right = ""

options = ["S", "C", "F"]

def on_button_pressed_a():
    choice = left

def on_button_pressed_b():
    choice = right

def generate_options():
    left = options[randint(0, len(options))]
    right = options[randint(0, len(options))]

def draw_s(x):
    led.plot(x, 0)
    led.plot(x, 1)
    led.plot(x, 2)
    led.plot(x, 4)
    led.plot(x + 1, 0)
    led.plot(x + 1, 2)
    led.plot(x + 1, 3)
    led.plot(x + 1, 4)

def draw_c(x):
    led.plot(x, 0)
    led.plot(x, 1)
    led.plot(x, 2)
    led.plot(x, 3)
    led.plot(x, 4)
    led.plot(x + 1, 0)
    led.plot(x + 1, 4)

    

generate_options()
input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)

draw_s(0)
draw_c(3)