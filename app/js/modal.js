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
      btn_link: el_info.querySelector(".btn-link").textContent
   }

   if (modal.btn_link)
      modalTemplateBtn = `
        <a class="visitar" href="${modal.btn_link}" target="_blank">Visitar</a>
    `;

   let modalTemplate = `
        <h2>${modal.title}</h2>
        <p>${modal.description}</p>
        <div class="grid-modal grid masonry">
     

        <div class="modal-grid-layout">

            <div class="modal-grid-item span-2">
               <img src="https://via.placeholder.com/315x315" />
            </div>
            <div class="modal-grid-item">
               <img src="https://via.placeholder.com/150x150" />
            </div>
            <div class="modal-grid-item">
               <img src="https://via.placeholder.com/150x150" />
            </div>
         </div>


        <div class="buttons">
            ${modalTemplateBtn}
        </div>
    `;

    tingle_modal.setContent(modalTemplate);
    tingle_modal.open();
        
}