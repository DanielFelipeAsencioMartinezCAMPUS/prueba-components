const formulario = document.querySelector('#form');
const btn = document.querySelector('#boton');
const respuesta = document.querySelector('#respuesta');


const procesa = () => {

    const datos = new FormData(formulario);
    const datosCompletos = Object.fromEntries(datos.entries());
    formulario.reset();

    return datosCompletos;

}

const Postdata = async () =>{
    const nuevosUsuarios = procesa();
    // try
    try{
        const response = await fetch('http://localhost:3000/users' , {
            method : 'POST', 
            Headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(nuevosUsuarios)
        });

     if(response.ok){
        const respuesta = await response.json();

        const {nombre,email,contraseña} = respuesta;
        respuesta.innerHtml = 
        `<p>datos almacenados con exito</p>`
     }

    }
    // fin

    // catch
    catch (error){
        window.alert(error);
    }
}
btn.addEventListener('click' ,(event) => {
    event.preventDefault();
    alert("exito")
    Postdata();
})