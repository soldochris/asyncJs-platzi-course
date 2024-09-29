import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi){
	return fetch(urlApi);
}

fetchData(`${API}/products`)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		return fetchData(`${API}/products/${data[0].id}`);
	})
	.then(response => response.json())
	.then(data => {
		console.log(data);
		return fetchData(`${API}/categories/${data.category.id}`)
	})
	.then(response => response.json())
	.then(data => console.log(data.name))
	.catch(error => console.log(error))
	.finally(() => console.log("Done"));
