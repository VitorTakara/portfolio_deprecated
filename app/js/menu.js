  var slideout = new Slideout({
     'panel': document.getElementById('panel'),
     'menu': document.getElementById('menuMobile'),
     'padding': 256,
     'tolerance': 70
  });

  // Toggle button
  document.querySelector('.toggle-button').addEventListener('click', function () {
     slideout.toggle();
  });