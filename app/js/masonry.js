let filtrarMasonry;
let openPhotoswiper;

document.addEventListener("DOMContentLoaded", function (event) {

   var grid = document.querySelector('.grid');

   var msnry = new Masonry( grid, {
     itemSelector: '.grid-item',
     columnWidth: '.grid-sizer',
     percentPosition: true
   });
   
   imagesLoaded( grid ).on( 'progress', function() {
     msnry.layout();
   });
   

   function filtrarMasonry_(portfolioType, btn) {
      document.querySelectorAll(".btn-portfolio").forEach(i => i.classList.remove("is-active")); // Limpa todos os botões ativos
      btn.classList.add("is-active"); // Ativa o botão selecionado

      let masonry = document.querySelector(".masonry").querySelectorAll(".grid-item");

      if (portfolioType == "todos")
         masonry.forEach(i => {
            i.classList.add("fadeIn");
            i.classList.remove("display-none");
         })
      else
         masonry.forEach(i => {
            if (!i.classList.contains(portfolioType)) {
               if (i.classList.contains("fadeIn"))
                  i.classList.remove("fadeIn");

               i.classList.add("display-none");
            } else {
               i.classList.add("fadeIn");
               i.classList.remove("display-none");
            }
         })

      msnry = new Masonry(grid, {});
   }

   
   function openPhotoswiper_ (el) {
        let el_info = el.querySelector("._INFO_");
        let images =  Array.from(el_info.querySelector(".images").querySelectorAll('span'));
        let regex = /(.+)\*(\d+)\*(\d+)/;
        
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = images.map(i =>  ({ 'src': regex.exec(i.textContent)[1], w: regex.exec(i.textContent)[2], h: regex.exec(i.textContent)[3] }) ) ;

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, {index: 0});
        gallery.init();
    }

    filtrarMasonry = filtrarMasonry_;
    openPhotoswiper = openPhotoswiper_;

});