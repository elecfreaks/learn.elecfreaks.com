# Air Pump

## Introduction

The air pump is an output module that moves air. It is ideal for creative projects involving balloon inflation, pneumatic mechanisms, and air circulation.

## Features

The RJ11 connector is keyed to help prevent incorrect connections and make the module easy to use.

## Specifications

Item | Parameter
:-: | :-:
Product name | Air Pump
SKU | EF05073
Connector | RJ11
Interface type | Digital output

## Quick Start

### Required Materials and Wiring

Connect the air pump to the J1 port on a Nezha expansion board or Nezha Pro multi-function expansion case. You may instead use J2, J3, or J4; make sure that the port selected in MakeCode matches the physical connection.

## MakeCode Programming

### Step 1

Click **Advanced** in the MakeCode toolbox to view more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_04.png)

Click **Extensions** at the bottom of the toolbox. In the dialog that opens, search for **PlanetX** and add the extension.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_05.png)

*Note:* If MakeCode warns that some extensions will be removed because they are incompatible, follow the on-screen instructions or create a new project from the project menu.

### Step 2

In the **Planet X_Basic** category, open **Execute** and use the **Air Pump Module** block. Select the port used by the air pump, then choose whether to turn it on or off.

Click the **+** on the right of the block to show additional settings:

- **Duration:** The time that the air pump runs after it is turned on, in milliseconds. It turns off automatically when this time elapses.
- **Power:** The output power of the air pump, from 0 to 100%.

### Build the Program

Add two **on button pressed** events:

- In the **on button A pressed** event, add an **Air Pump Module J1 turn on** block. Set its duration to `1000` milliseconds and its power to `100%`.
- In the **on button B pressed** event, add an **Air Pump Module J1 turn off** block.

### Reference Program

Reference program: [https://makecode.microbit.org/_53DL19CLcfAu](https://makecode.microbit.org/_53DL19CLcfAu)

You can also download and run the program directly from the embedded project below.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_53DL19CLcfAu"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### Result

Press button A to run the air pump at the selected power for one second; it stops automatically. Press button B to stop the air pump immediately.

## Related Projects

## Technical Documentation
