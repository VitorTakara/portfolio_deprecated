// instanciate new modal
var tingle_modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    beforeOpen: function() {
        //Nothing
    },
    onClose: function() {
        tingle_modal.setContent('');
    }
});

function openModal(el){
    let modalTemplateBtn = '';
    let el_info = el.querySelector("._INFO_");
    let modal = {
        title: el_info.querySelector(".title").textContent,
        description: el_info.querySelector(".description").textContent,
        btn_link: el_info.querySelector(".btn-link").textContent
    }

    let modalTemplate = `
        <h2>${modal.title}</h2>
        <p>${modal.description}</p>
    `;

    if(modal.btn_link)
        modalTemplateBtn = `
        <a href="${modal.btn_link}" target="_blank">Visitar</a>
    `

    tingle_modal.setContent(modalTemplate + modalTemplateBtn);
    tingle_modal.open();
}