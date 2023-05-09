const btn = document.getElementById('btn');

const formulario = document.getElementById('form');

const respuesta = document.getElementById('respuesta');


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
        const jsonresponse = await response.json();

        const {nombre, email, contraseña} = jsonresponse

        
        respuesta.innerHtml = 
        `<ul> 
             ¡Exito! Se guardó la siguiente información:
            <li>email :${email}</li> 
            <li>nombre: ${nombre}</li> 
            <li>contraseña :${contraseña}</li>
        </ul>`
     }

    }
    // fin

    // catch
    catch (error){
        console.log(error);
    }
}
btn.addEventListener('click' ,(event) => {
    event.preventDefault();
    alert("exito")
    Postdata();
    
})

// 
function mostrarpremio (){
    document.getElementById('tablacategoria').style.display = 'block';
}