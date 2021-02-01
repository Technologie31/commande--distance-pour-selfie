input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})
input.onButtonPressed(Button.AB, function () {
    devices.tellCameraTo(MesCameraEvent.LaunchPhotoMode)
})
input.onButtonPressed(Button.B, function () {
    devices.tellCameraTo(MesCameraEvent.ToggleFrontRear)
})
input.onGesture(Gesture.Shake, function () {
    devices.tellCameraTo(MesCameraEvent.StopPhotoMode)
})
basic.forever(function () {
	
})
