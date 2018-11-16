
document.addEventListener("DOMContentLoaded", function(event) {
   if(!isMobile()){
      // Parallax do Background
      let lFollowX = 0,
      lFollowY = 0,
      x = 0,
      y = 0,
      friction = 1 / 30;

      function moveBackground() {
         x += (lFollowX - x) * friction;
         y += (lFollowY - y) * friction;
         translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
         let bg = document.querySelector('.site-bg') ? document.querySelector('.site-bg') : document.querySelector('.index-bg');
         bg.style.webkitTransform = translate;
         bg.style.MozTransform = translate;
         bg.style.msTransform = translate;
         bg.style.OTransform = translate;
         bg.style.transform = translate;
         window.requestAnimationFrame(moveBackground);
      }

      window.addEventListener('mousemove', function(e) {
         var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
         var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
         lFollowX = (20 * lMouseX) / 100;
         lFollowY = (10 * lMouseY) / 100;
      })

      moveBackground();
   }
});