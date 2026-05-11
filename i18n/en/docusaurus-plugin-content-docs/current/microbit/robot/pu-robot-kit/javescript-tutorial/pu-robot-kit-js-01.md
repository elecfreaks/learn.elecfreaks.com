---
sidebar_position: 1
sidebar_label: 1:Quick Start of JavaScript on Micro:bit
---

# 1:Quick Start of JavaScript on Micro:bit

## Mastering JavaScript on the micro:bit
Transitioning from Blocks to Static TypeScript (STS)—the version of JavaScript used in MakeCode—unlocks the full potential of Robot PU. This guide covers everything from the interface to advanced Object-Oriented Design.

### 1. The Programming Interface
When you open [makecode.microbit.org](makecode.microbit.org), you primarily work in the **Blocks** editor. To switch to JavaScript:

1. Locate the **toggle switch** at the top center of the screen.
2. Click **JavaScript**.
3. The toolbox on the left remains, but clicking a category now provides code snippets instead of blocks.

### 2. Basic JavaScript Syntax
STS is “strongly typed,” meaning it likes to know what kind of data you are using.

- **Variables:** Use `let` for values that change and `const` for values that stay the same.

```js
let speed = 100;
const robotName = "PU";
```

- **Functions:** Wrap reusable logic in functions.

```js
function waveHand() {
    pins.servoWritePin(AnalogPin.P1, 90);
    basic.pause(500);
    pins.servoWritePin(AnalogPin.P1, 0);
}
```
- **Loops:** The `basic.forever` function is a special loop that runs your code repeatedly in the background.

### 3. Object-Oriented Design (OOD)
Classes allow you to group data and behaviors together. This is how we build “drivers” for sensors like the Sonar on PU’s chest.

#### Example: A Simple Robot Component
```js
class LedEye {
    pin: DigitalPin;

    constructor(targetPin: DigitalPin) {
        this.pin = targetPin;
    }

    blink() {
        pins.digitalWritePin(this.pin, 1);
        basic.pause(200);
        pins.digitalWritePin(this.pin, 0);
    }
}

// Create an "instance" of the eye on Pin P16
let leftEye = new LedEye(DigitalPin.P16);
leftEye.blink();
```
### 4. Compilation and Uploading
MakeCode compiles your JavaScript into a **.hex** file—a format the micro:bit hardware understands.

**Step-by-Step Upload:**
1. **Connect:** Plug your micro:bit into your computer via USB.
2. **Download:** Click the purple **Download** button.
3. **Transfer:**
    - **Direct (WebUSB):** If your browser is paired, the code flashes instantly.
    - **Manual:** Drag the `.hex` file from your Downloads folder onto the **MICROBIT** drive on your computer.`
4. **Run:** The yellow light on the back flashes during the transfer. Once it stops, the program starts automatically.
### 5. Tips for Clean and Reusable Code
Writing “clean” code makes it easier for you (and others) to fix bugs later.

- **Use Descriptive Names:** Instead of `let x = 10`, use `let sonarDistance = 10`.
- **The Single Responsibility Principle:** A class or function should do **one** thing well. For example, a `Sonar` class should only handle measuring distance, not playing music.
- **Comment Your Logic:** Use `//` to explain why you are doing something complex.
- **Avoid “Magic Numbers”:** Instead of using 0.0171821 inside your logic, create a variable named `SOUND_SPEED_CONSTANT`.
- **Keep it Modular:** Put your classes at the top of the file or in separate tabs to keep your main `forever` loop tidy.
