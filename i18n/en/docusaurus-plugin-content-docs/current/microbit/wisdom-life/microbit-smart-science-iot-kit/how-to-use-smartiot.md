---
sidebar_position: 2
---



# Chapter 1: User Guide for SmartIoT Platform
---
SmartIot is a simple and easy-to-use IoT platform from ELECFREAKS, it is able to connect to IoT in 3 minutes, upload data at any time, and implement remote control with the micro:bit.(Chinese/English switching is not available now)

Platform link: [SmartIot platform: https://www.smartiot.space/](https://www.smartiot.space/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_01.png)

**Please note when connecting to a Wi-Fi network using IoT:bit, make sure that your Wi-Fi network is running in 2.4GHz mode**


## Account Registration for SmartIoT Platform
Go to the SmartIot website and click Sign up to register a new account.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_02.png)

Fill in the registration information (email, password) and click Sign Up.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_03.png)

Click Sign Up to register and an email will be sent to your email address.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_04.png)

Check your email inbox or spam folder (it may be recognised as spam) and open the URL in the email to activate your account.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_05.png)

Registration Successfully!

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_06.png)


## SmartIot Log In

Enter your account password and select Login.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_07.png)

## SmartIot Platform Device Management

Click Log in to enter the device management page, the upper left corner is Email for your mailbox, the upper right corner User Token is the platform's unique identification code, corresponding to your account. It is unique in the whole network and will not be repeated.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_08.png)

Add a new device (Create new device), topic is your device identification number (unique device in the account) can change the device name (you can only have 10 devices)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_09.png)

Click the small gear in the upper-right corner to rename, clear data and delete the device; click View Details to view information.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_10.png)


## SmartIot Platform Data Upload and Sample Code

The left side of the device interface shows the uploaded data, and the right side consists of a two-dimensional line graph of data and time.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_11.png)

### Programming

[MicroSoft Makecode](https://makecode.microbit.org/#)

### Coding

Go to "makecode.microbit.org", click to "create new project".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-01.png)

Enter the project name in the pop-up window and click "Create".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-02.png)

Click "extensions" in the code drawer. 

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-03.png)

In the pop-up page, type "IoT", press the Enter key to search, and choose to load the IoT software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-04.png)


**Note: If you get a prompt that some codebase will be removed for incompatibility reasons, you can either follow the prompt and continue, or create a new project.**

#### Code Explanation

To connect to SmartIoT platform, User Token is the unique identification code of the account, which is bound to the account and cannot be modified.
TOPIC is the unique identification code of the device, you need to specify the uploaded device when connecting. The device number (Topic) is sequential.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_12.png)

Get both datas on the SmartIoT platform.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_13.png)

Determines whether the platform connection status is successful or not, success (True), failure (False).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_14.png)

Disconnect from the SmartIoT platform.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_16.png)

Upload data to the SmartIot platform, click `+` underneath the blocks to add uploaded data, up to 8 data can be uploaded at the same time.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_17.png)

#### Test the Result

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_11.png)

Remotely control the blocks, run the specified progra when a switch on the platform is triggered. .

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_15.png)

When the platform is successfully connected, you can click this switch to execute the two blocks.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_18.png)

### Reference Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_19.png)

**Note: Please fill in the wifi information, user token and Topic by yourself.**

Reference link: [https://makecode.microbit.org/_Dvx2VuYHxRep](https://makecode.microbit.org/_Dvx2VuYHxRep)

You can also modify the programme via the following web page:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Dvx2VuYHxRep"
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
---
The device connects to wifi and SmartIoT when power on automatically , and it randomly uploads 0~10 integers to SmartIoT.


## SmartIot Platform Classroom Management

Hover your mouse pointer over your username in the upper right corner, a drop down box will pop up, click on the CLASS option in it to go to the class management screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_20.png)

Click "Create Class" to create classrooms.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_21.png)

Enter the name of the classroom and the students in the pop-up page. 

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_22.png)

**Note: Each name can contain up to 15 characters, one name per line (please do not leave any blank lines).**

Once you have created your class, click on “Students” to access the Student Information Management page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_23.png)

Click “Add Student” to fill in student information

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_24.png)

Click “Export” to export all student data

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_25.png)

Click “Copy" to copy single student data

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_26.png)

Click "Reset Password" to reset your student account password to prevent students from forgetting it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_27.png)

Click "Delete" to remove student information

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_28.png)

## SmartIot Platform Reset Password

Click "Change password" to enter the password reset page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_29.png)

Enter the old and new passwords to change your password.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_30.png)

## SmartIot Data Filtering

You can set the range of data to be displayed on the chart using "Start Time" and "End Time".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_31.png)

Or select the data to be displayed for the chart via the Data tab.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_32.png)

Or click "Edit" to enter the settings page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_33.png)

Choose to display data information by ticking the tabs.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_34.png)

## SmartIot Configuration Sharing

Click "Edit" to enter the settings page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_33.png)

Click `Copy` or `Import` to export or import the device configuration.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_35.png)

## SmartIot Device Sharing

Click `Share` to go to the Device Sharing page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_36.png)

Click `ALL` to set the device as a publicly shared device, which can be accessed by anyone with a shared link to the device to view data.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_37.png)

Click `Specified` to set the device as a private shared device, which can be shared via email by specifying an account, or if it's a teacher account, you can quickly share the device to class members using the option below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_38.png)

Shared devices are displayed in `Share Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_39.png)

The person being shared only has read access and cannot make changes to the content of the data-to-graph.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_40.png)
