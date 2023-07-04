---
sidebar_position: 6
sidebar_label: Wukong2040 WuKong2040 Libraries Explanations
---

# WuKong2040 Libraries Explanations

| Functions Definition                                         | Item                                | Parameter                                                    | Return   Value                                          |
| ------------------------------------------------------------ | ----------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| wukong2040 on-board function library                         | WuKong2040                          | No                                                           | Importing on-board function methods and properties      |
| Method for determining whether the status of key A, key B or key AB has been pressed | button_is_pressed(button:"ButtonA") | button:<br />Parameter type: str<br />Default Parameter："ButtonA"<br />Parameter Range：<br />"ButtonA"、\"ButtonB"、\"ButtonAB" | Pressing a key returns True, otherwise it returns False |
| Drive motors M1/M2/M3/M4                                     | motor(m:"M1", speed:0)              | m:<br />Parameter type: str<br />Default Parameter: "M1"<br />Parameter Range: "M1"\"M2"\"M3"\"M4"<br />speed:<br />Parameter type: int<br />Default Parameter: 0<br />Parameter Range: 0~100 | No                                                      |
| Driving rainbow lights to show colours                       | rainbow_led(n:"all", r:0, g:0, b:0) | n:<br />Parameter type: str<br />Default Parameter: "all"<br />Parameter Range: "0"\"1"\"all" | No                                                      |
| Drive buzzer playback                                        | music.play()                        | 1. Built-in music, calling up the built-in music names.<br />For example: music.DADADADUM<br />2. Melody array, a user-defined array of music codes. <br />For example: notes = ['c4:1', 'e', 'g']music.play(notes) | No                                                      |
