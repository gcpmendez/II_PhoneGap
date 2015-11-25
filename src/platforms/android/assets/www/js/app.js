// This is an ionic wrapper for cordova's
// device ready event.
$ionicPlatform.ready(function() {
  // if we have the keyboard plugin, let use it
  if (window.cordova && window.cordova.plugins.Keyboard) {
    //Lets hide the accessory bar fo the keyboard (ios)
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // also, lets disable the native overflow scroll
    cordova.plugins.Keyboard.disableScroll(true);
  }
  if (window.StatusBar) {
    if (ionic.Platform.isAndroid()) {
      StatusBar.backgroundColorByHexString("#608628");
    } else {
      StatusBar.styleLightContent();
    }
  }
  $timeout(function() {
    navigator.splashscreen.hide();
  }, 500);
});
