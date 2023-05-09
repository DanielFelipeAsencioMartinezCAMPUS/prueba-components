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
    <td>1</td>
    <td>electrodomesticos</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>2</td>
    <td>cafeteria</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>3</td>
    <td>juegos</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>4</td>
    <td>ropa femenina</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>5</td>
    <td>ropa infantil</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
<tr>
    <td>6</td>
    <td>fereteria</td>
    <td><button type="button" class="btn btn-danger w-25">BORRAR</button></td>
</tr>
</table>`

tabla.innerHTML = contenido