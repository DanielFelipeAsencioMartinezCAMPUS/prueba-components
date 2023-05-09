const categoria = `[
    {
     "id":1,
     "name": "electrodomesticos"
    },
    {
     "id": 2,
     "name":  "cafeteria" },
     {
         "id":3,
         "name": "juegos"
     },
     {
         "id": 4,
         "name": "ropa femenina"
     },
     {
         "id":5,
         "name":  "ropa infantil" 
     },
     {
         "id":6,
         "name":  "ferreteria" 
     }
   ]
`
const jsoncambio = JSON.parse(categoria);

console.log(jsoncambio);

console.log(jsoncambio[2]);

const tabla = document.getElementById('tablacategoria');

const contenido = `<table class="mt-5">
<thead>
    <th>id</th>
    <th>categoria</th>
    <th>borrar</th>
</thead>
<tr>
    <td></td>
    <td></td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
</table>`

tabla.innerHTML = contenido