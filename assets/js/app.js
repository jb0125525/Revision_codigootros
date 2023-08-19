

/*
1.Se estan declarando dos variables para obtener la info
del url de github.
2.Se seleccionan los elementos del html con sus respectivos id's
pero en el html faltaba un id.



 */
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// para hacer la seleccion en name hace falta un . y a blog
//cambiar el # por un .
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

/* En esta funcion asincrona se va a tomar el nombre de 
usuario como argumento */
async function displayUser(username) {

  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //hay que convert
  const responseJ = await response.json();
  console.log(responseJ);
  console.log(response);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);