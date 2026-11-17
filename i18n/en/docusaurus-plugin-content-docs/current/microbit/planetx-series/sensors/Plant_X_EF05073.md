# Air Pump

## Introduction

The air pump is an output module that draws in air. When switched on, it pulls air in through its inlet to create negative pressure. It is suitable for creative projects such as air sampling, simple suction devices, and vacuum demonstrations. Connect the tube to the side where air needs to be drawn in; this module is not designed to blow air out or inflate balloons.

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

In the **Planet X_Basic** category, open **Execute** and use the **Air Pump Module** block. Select the port used by the air pump, then choose whether to turn it on or off. When it is on, the pump draws in air.

Click the **+** on the right of the block to show additional settings:

- **Duration:** The time that the air pump draws in air after it is turned on, in milliseconds. It turns off automatically when this time elapses.
- **Power:** The output power of the air pump, from 0 to 100%.

### Build the Program

Add two **on button pressed** events:

- In the **on button A pressed** event, add an **Air Pump Module J1 turn on** block. Set its duration to `1000` milliseconds and its power to `100%` so the pump draws in air for one second.
- In the **on button B pressed** event, add an **Air Pump Module J1 turn off** block to stop drawing in air.

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

Press button A to draw in air at the selected power for one second; the pump stops automatically. Press button B to stop drawing in air immediately.

## Related Projects

## Technical Documentation
