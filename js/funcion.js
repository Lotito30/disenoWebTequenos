// FUNCION PARA AGREGAR EL BOTON DE GOOGLE Y HACER QUE E USUARIO VUELVA  A LA PAGINA 

function onSignIn(googleUser) {
  // Recuperar el perfil del usuario.
  var profile = googleUser.getBasicProfile();
  console.log('ID del usuario: ' + profile.getId()); // No se envía al servidor. Utilizar para la verificación del usuario.
  console.log('Nombre completo del usuario: ' + profile.getName());
  console.log('Correo electrónico del usuario: ' + profile.getEmail()); // Este campo puede ser nulo si el usuario no ha permitido el acceso al correo electrónico.
  console.log('URL de imagen del usuario: ' + profile.getImageUrl());
}

gapi.signin2.render('mi-boton-de-inicio-de-sesion-con-google', {
  'scope': 'email',
  'width': 240,
  'height': 50,
  'longtitle': true,
  'theme': 'dark',
  'onsuccess': onSignIn,
  'onfailure': onFailure
});

function init() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: '1031554094428-i6vq0d4b0qammumkb9037huluja93pir.apps.googleusercontent.com'
                  
    });
  });
}

// funcion de boton de facebook

window.fbAsyncInit = function() {
 FB.init({
   appId      : '248213274361969',
   cookie     : true,
   xfbml      : true,
   version    : 'v16.0'
 });
    
 FB.AppEvents.logPageView();   
 };

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

 
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
