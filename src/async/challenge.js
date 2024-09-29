import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi){
	const response = await fetch(urlApi);
	const data = await response.json();
	return data;
}

const anotherFn = async (urlApi) => {
	try{
		const products = await fetchData(`${urlApi}/products`);
		const product = await fetchData(`${urlApi}/products/${products[0].id}`);
		const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
		console.log("getting products:");
		console.log(products);
		console.log("getting product:");
		console.log(product.title);
		console.log("getting category:");
		console.log(category.name);
	}catch{
		console.log("ups something went wrong");
	}
}

anotherFn(API);
