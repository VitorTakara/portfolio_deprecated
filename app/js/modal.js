// instanciate new modal
var tingle_modal = new tingle.modal({
   footer: false,
   stickyFooter: false,
   closeMethods: ['overlay', 'button', 'escape'],
   closeLabel: "Fechar",
   beforeOpen: function () {
      //Nothing
   },
   onClose: function () {
      tingle_modal.setContent('');
   }
});

function closeModal() {
   tingle_modal.close();
}

function openModal(el) {
   let modalTemplateBtn = '';
   let el_info = el.querySelector("._INFO_");
   let modal = {
      title: el_info.querySelector(".title").textContent,
      description: el_info.querySelector(".description").textContent,
      btn_link: el_info.querySelector(".btn-link").textContent,
      videos: [...el_info.querySelector(".video").querySelectorAll('span')].map(i => i.textContent)
   }

   if (modal.btn_link)
      modalTemplateBtn = `
        <a class="visitar" href="${modal.btn_link}" target="_blank">Visitar</a>
    `;

   let modalTemplate = `
        <h2>${modal.title}</h2>
        <p>${modal.description}</p>
        <div class="grid-modal grid masonry">
     
        <div class="modal-video" onclick="document.querySelector('.visitar').click();">
            <video loop autoplay>
                  <source src="${modal.videos[0]}" type="video/mp4">
                  <source src="${modal.videos[1]}" type="video/webm">
                  Seu navegador não suporta vídeo. Para visualizar, por favor utilize o Google Chrome / Firefox / Microsoft Edge.
            </video>
        </div>

        <div class="buttons">
            ${modalTemplateBtn}
        </div>
    `;

    tingle_modal.setContent(modalTemplate);
    tingle_modal.open();
        
}