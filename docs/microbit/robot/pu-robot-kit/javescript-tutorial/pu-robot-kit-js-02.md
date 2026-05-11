---
sidebar_position: 2
sidebar_label: 2:Swtiching between JavaScript and Block Programming
---

# 2:Swtiching between JavaScript and Block Programming

## Master the “Switch Trick”: Coding JavaScript Faster
While professional developers write code directly in the editor, the most powerful secret for beginners and intermediate users is the **Block-to-JavaScript “Switch Trick.”** This method allows you to use the speed of Blocks to generate the complex syntax of JavaScript instantly.

### 1. How to Switch Between Blocks and JavaScript
The MakeCode editor is designed to be bi-directional. This means any change you make in one view is immediately translated to the other.

1. **The Toggle:** At the top center of your screen, you will see a toggle button that says **Blocks** and **JavaScript (or Python)**.
2. **To JavaScript:** Click “JavaScript” to see your blocks converted into high-quality Static TypeScript code.
3. **Back to Blocks:** Click “Blocks” to see your text code turned back into visual blocks.

**Note: If you write complex JavaScript that the block system doesn’t support (like custom classes), the editor will show those parts as “grey text blocks.”**

### 2. The “Switch Trick” to Program Faster
Writing code from scratch can be slow because you have to remember exact spellings and where the semi-colons go. Use this workflow to triple your programming speed:

**Step 1: Draft in Blocks**
If you need a complex function, like a “Red Alert” siren with specific music, snap it together in Blocks first. It takes seconds to drag a `play melody` block.

**Step 2: Flip the Switch**
Click the **JavaScript** button. MakeCode has now written all the code for you, including the correct pin names (e.g., `DigitalPin.P2`) and the array of notes for the melody.

**Step 3: Refactor and “Power Up”**
Now that the “bones” of your code are there, stay in JavaScript to add advanced features that blocks can’t do easily:

- **Encapsulate:** Wrap that code inside a professional **Class**.
- **Duplicate:** Copy and paste lines quickly to create 10 different moods instead of dragging 10 sets of blocks.
- **Math:** Type out complex equations like `(t * 0.0171821)` much faster than snapping 5 math blocks together.

### 3. Writing Clean and Reusable Code (OOD)
Using the “Switch Trick” helps you get the basic API calls right, but **Object-Oriented Design (OOD)** makes your code professional.

- **Classes as Blueprints:** Instead of writing separate code for PU’s left eye and right eye, write one `Eye` class and create two “instances” of it.
- **Single Responsibility:** Keep your `Sonar` logic separate from your `Talking` logic. This allows you to “copy-paste” your Sonar class into a brand new project next month without bringing all the talking code with it.
- **DRY (Don’t Repeat Yourself):** If you find yourself copying the same block of code three times, it’s time to turn that code into a **Method** inside a class.

### 4. Compilation and Uploading

Once your JavaScript is ready, the process of getting it onto Robot PU is simple:

1. **Connect:** Plug the micro:bit into your computer.
2. **Pair (Optional):** Click the gear icon and “Pair Device” to use **WebUSB**. This allows the “Download” button to flash the code directly.
3. **Manual Flash:** If not paired, clicking **Download** creates a `.hex` file. Drag this file from your computer’s “Downloads” folder onto the **MICROBIT** drive.
