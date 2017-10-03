![alt text](https://avatars3.githubusercontent.com/u/15808325?v=4&s=200)

# MATRIX Creator: Zigbee Demo
Purpose: Test app for zigbee capable lights such as philips hue lights. 

You can control this app from the command line or the Matrix dashboard. 

## Command Line
If you dont have the matrix cli tool, you can download it by typing `npm install -g matrix-cli`
You can find a tutorial on the Matrix cli here: https://www.youtube.com/watch?v=ckDD6HEjfAY&list=PLj4YwYToq6gJAFWUMDh-3jYjLLP_qWcjf
or here: https://matrix-io.github.io/matrix-documentation/matrix-os/overview/cli/

- Go to your terminal and type `matrix trigger discover` to tell your matrix to start looking for a device.
- It will try to find a zigbee capable device for 60 seconds.

After you have connected to a zigbee device you can use any of these commands to control the Zigbee Light:
`matrix trigger EVENT`
EVENTS:
```
discover
reset
toggle
off
on
blue
red
green
clear
```

## Matrix Dashboard
- Login in to the dashboard here: https://dash.matrix.one/#/login with your matrix user credentials
- Click your device 
- Go the the ZigbeeDemo app and turn in on with the switch on the app
- Tap the app and the dashboard will appear and you can interact with the lights from there.

Matrix Creator docs:
https://matrix-io.github.io/matrix-documentation/matrix-core/
##### Tutorial video coming soon:
