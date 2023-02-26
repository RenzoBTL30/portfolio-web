let formulario = document.querySelector('#formulario');
let screenLoad = document.querySelector('#screen-load-send-contact')

formulario.addEventListener('submit', async (evento) => {
    screenLoad.classList.add('display');
    evento.preventDefault();
    const dataForm = new FormData(formulario);
    const response = await fetch('https://formspree.io/f/xzbqrnob',{
        method: "POST",
        headers : {
            'Accept':'application/json'
        },
        body : dataForm
    })

    screenLoad.classList.remove('display');

    if (response.ok) {
        formulario.reset();
        Swal.fire(
            'Mensaje enviado',
            `Gracias por contactarte conmigo, te estare respondiendo lo más pronto posible <i class='bx bxs-like like-color'></i>`,
            'success'
        )
    }
})