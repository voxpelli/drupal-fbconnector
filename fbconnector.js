function fbconnector_login() {
  jQuery('.connector-fbconnector .form-submit').click();
}

FB.Bootstrap.requireFeatures(["Connect"], function() {
  FB.ensureInit(function () {
    //Facebook wants us to log the user out of Facebook - but if we're in a very small window/iframe we can't show the UI so I found this in the facebook javascript
    if (typeof FB.Connect._logoutMethod_noUI !== 'undefined') {
      FB.Connect._logoutMethod = FB.Connect._logoutMethod_noUI;
    }
    FB.Connect.logout();
  });
  //TODO: Make the popup configurable
  FB.init(Drupal.settings.fbconnector_api_key, Drupal.settings.fbconnector_xd_receiver, {"forceBrowserPopupForLogin":true});
});