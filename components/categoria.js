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
const jsoncambio = JSON.parse(categoria)

const tabla = document.getElementById('tablacategoria');

const contenido = `<table class="mt-5">
<thead>
    <th>id</th>
    <th>categoria</th>
    <th>borrar</th>
</thead>
<tr>
    <td>${categoria[0[0]]}</td>
    <td>${categoria[0[1]]}</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>${categoria[1[0]]}</td>
    <td>${categoria[1[1]]}</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>${categoria[2[0]]}</td>
    <td>${categoria[2[1]]}</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>${categoria[3[0]]}</td>
    <td>${categoria[3[1]]}</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>${categoria[4[0]]}</td>
    <td>${categoria[4[1]]}</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>${categoria[5[0]]}</td>
    <td>${categoria[5[1]]}</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
</table>`

tabla.innerHTML = contenido