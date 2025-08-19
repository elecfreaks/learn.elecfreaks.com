---
sidebar_position: 1
---

# SmartIoT Quick Start

## Introduction

SmartIot is an easy-to-use IoT platform produced by ELECFREAKS. It connects to the Internet of Things in 3 minutes, uploads sensor data at any time, and remotely controls the micro:bit.

Platform portal:[https://www.smartiot.space/](https://www.smartiot.space/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-01.png)

**Please note that when using IoT:bit/Petal series WIFI module/Planet series WIFI module to connect to Wi-Fi network, please make sure your Wi-Fi network is running in 2.4GHz mode.**

## Language Switch

The SmartIoT platform supports multiple languages (machine translation), allowing users to select their preferred language.

Click the language switch button in the upper right corner.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-02.png)

Select the language you want to use.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-03.png)

If the available languages do not meet your needs or the translation is incorrect, you can click Download Template to translate it by yourself.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-04.png)

After the translation is completed, click Upload to upload the translation file yourself. This translation function can only be used on the local machine.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-05.png)


## SmartIoT Account Registration

Go to the SmartIot official website and click Login to enter the account login page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-06.png)

Click Create an Account to enter the page for registering a new account.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-07.png)

Fill in the registration information (email address, username, password) and click Sign Up.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-08.png)

Click Sign Up to register and an email will be sent to the email address of the account you filled in.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-09.png)

Check your inbox or spam folder (it may be identified as spam) and click the URL in the email to activate your account.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_05.png)

Registered Successfully!

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_06.png)



## Log In SmartIot

Enter your account and password under Log in and select Log in.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-10.png)

## SmartIot Platform Device Management

Click Log in to enter the device management page. In the upper left corner are your username and email address. Your User Token is the platform's unique identification code, corresponding to your account. It is unique across the entire network and will not be repeated.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-11.png)

Add a new device (Create new device), Topic is your device identification number (the only device in the account).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-12.png)

You can modify the device name and configure the device (you can only have 10 devices).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-13.png)

Click the icon to rename, clear data, and delete the device; click View Details to enter the device to view information.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-14.png)

## SmartIot Platform Data Upload and Sample Code

The SmartIot platform supports up to eight data uploads.

The table at the top of the device interface displays the uploaded data, while the two-dimensional line graph below shows the data and time.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-15.png)

### Coding

[MicroSoft MakeCode](https://makecode.microbit.org/#)

### Programming

Go to "makecode.microbit.org", click to "Create New Project".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-01.png)

Click "Create" in the pop up window.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-02.png)

Click "Extensions" in the Makecode drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-03.png)

Search with "Petal" and add Petal extensions.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-16.png)


**Note: If you get a message saying that some libraries will be removed due to incompatibility, you can continue as prompted or create a new project in the Project menu.**

#### Code Explanation


Connect to the SmartIot platform. User Token is a unique account identifier that is bound to the account and cannot be modified.
TOPIC is a unique device identifier. You must specify the upload device when connecting. Device numbers (Topic) are listed sequentially.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_12.png)

Get these two data on the SmartIot platform.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-17.png)

Determine whether the platform connection status is successful, success (True), failure (False).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_14.png)

Click the `+` button below the block to add uploaded data. Up to 8 data can be uploaded at the same time.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_17.png)

#### Test Results

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-18.png)

Remotely control the building blocks to run the specified program when the switch on the platform is triggered.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_15.png)

When the platform is connected successfully, you can click this switch to execute these two building blocks.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-19.png)

### Reference Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-20.png)

**Note: Please fill in the wifi information, user token and topic by yourself**

Link: [https://makecode.microbit.org/_8230fd1aL6Y0](https://makecode.microbit.org/_8230fd1aL6Y0)

You may also download it directly:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8230fd1aL6Y0"
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

When the device is turned on, it automatically connects to Wi-Fi and SmartIoT, and randomly uploads integers from 0 to 10 to SmartIoT.

## Device Page Component Management

Click "Add Component" on the left upper corner.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-42.png)

Select the component and size in the pop-up window.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-43.png)


### Line Chart

Up to eight data sets can be displayed, suitable for demonstrating data trends.

The chart's displayed data range can be set using the `Start Time` and `End Time` fields.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-32.png)

Or select the displayed data of the chart through the data label.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-33.png)

Or click `Edit` to enter the settings interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-34.png)

Select the data information to be displayed by checking the tabs.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-35.png)

### Pie Chart

Up to 8 sets of data can be displayed to facilitate the presentation of data proportions.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-44.png)

### Dashboard

1 set of data can be displayed and intuitively key indicators can be suggested.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-45.png)

The dial color can be set for different threshold ranges.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-46.png)

### Data Display

1 set of data can be displayed and accurately present specific data values can be suggested.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-47.png)

### Status Indicator

1 set of data can be displayed to achieve data visualization and early warning.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-48.png)

The color of the LED light can be set at different threshold ranges.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-49.png)

## SmartIot Platform Classrooms Management

Click the class management option to enter the class management page. If you find that you need a teacher account activation code, please contact ELECFREAKS official personnel at email address **support@elecfreaks.com**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-21.png)

Click "Create Class".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-22.png)

Enter the class name and student names on the pop-up page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-23.png)

**Note: Each name can contain up to 15 characters, one name per line (please do not leave any blank lines).**

After creating the class, click the icon to enter the student information management interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-24.png)

Click Add Student to fill in student information.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-25.png)

Click Export to export all student data.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-26.png)

Click the copy icon to copy individual student data.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-27.png)

Click Reset Password to reset the student account password in case the student forgets the password.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-28.png)

Click Delete to delete student information.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-29.png)

## SmartIot Platform Password Reset

Click the icon in the picture below to enter the password reset page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-30.png)

Enter the old and new passwords to change your password.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-31.png)


## SmartIot Configuration Sharing

Click `Copy` or `Import` to export or import device configuration.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-36.png)

## SmartIot Device Sharing

Click `Share` to enter the device sharing page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-37.png)

Click ALL to set the device as a publicly shared device. Anyone with the device's shared link can access the device and view data.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-38.png)

Click `Specified` to set the device as a private shared device. You can share it with a designated account via email. If it is a teacher account, you can also quickly share the device with class members using the options below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-39.png)

Shared devices will be displayed in `Share Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-40.png)

The person being shared only has reading permission and cannot modify the data or chart content.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-41.png)
