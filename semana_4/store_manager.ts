/**
 * Habilidades intermedias en desarrollo SW - Agencia Distrital Atenea
 * Actividad Promesas Semana 4
 * Enunciado: Con el uso del recurso API fetch, obtener un listado de productos,
 * un listado de pedidos y determinar cuál es el producto más pedido. La salida
 * por consola debe ser el 'nombre del producto' y la 'cantidad de veces que ha
 * sido pedido'
 * @author Alejandro Ruiz Vallejo <ra.ruizv@uniandes.edu.co>
 */

// ============ Definición de estructuras de datos ================

type product =  {
	idproducto: string,
	nombreProducto: string,
	idProveedor: string,
	idCategoria: string,
	cantidadPorUnidad: string,
	precioUnidad: number,
	unidadesEnExistencia: number,
	unidadesEnPedido: number,
	nivelNuevoPedido: string,
	suspendido: string,
	categoriaProducto: string
};

type order = {
    idpedido: string,
    idproducto: string,
    preciounidad: number,
    cantidad: number,
    descuento: number
};

// =========== Estructura por combinar ==============

type productByOrder = {	
	idproducto: string,
	cantidad: number,
	nombreProducto: string
};

/**
 * Función que puede recibir direccion URL y retornar un objeto
 * desde un archivo JSON. Agradecimiento a J. Román a.k.a. Manz
 * por su canal divulgativo URL: https://manz.dev/
 * @param url 
 * @returns 
 */

const getList = async (url: string) => {
    const response = await fetch(url);		
    if (!response.ok)
        throw new Error("Fail comunication!");
    const data = await response.json();
    return data;
}


/**
 *  ============= Función principal ==============
 *  El Testsite de TypeScript sugiere usar esta definición 
 */

async function start_app(): Promise<void> {

	// ========== Def. de arreglos de objetos =============

    let products: product[] = [];
    let orders: order[] = [];
	let productsByOrders: productByOrder[] = [];

	/*
    const options = {
        method: "GET"
    };    
    */

	const urlProductos = 'https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json';
	const urlPedidos = 'https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json';
	products = await getList(urlProductos);
    orders = await getList(urlPedidos);

	/*
	let productByOrder: Object[] = products.map<Object>( (product) => {
		const order = orders.find(o => o.idproducto === product.idproducto);
		return {
			...product,
			...order
		};
	});
	*/

	/**
	 * La función construye un arreglo de objetos combinados con las dos listas
	 * y totaliza la cantidad de pedidos para cada artículo
	 * Esto fue posible a las sugerencias de Michael Liendo, contribuidor
	 * al canal de Discord 'Deivchoiers', y a los desarrolladores de OpenAI (via ChatGPT)	 
	 */
	productsByOrders = products.map((theProduct: product) => {
		const totalArticles: number = orders.reduce((acum: number, theOrder: order) => {
			return theOrder.idproducto === theProduct.idproducto ? acum + (+theOrder.cantidad.toString()) : acum;
		}, 0);
		return {			
			idproducto: theProduct.idproducto,
			cantidad: totalArticles,
			nombreProducto: theProduct.nombreProducto
		}
	});
	
	// ======== Ordena el arreglo por articulos más vendidos (descendente) =============
	productsByOrders.sort((prev, next) => { return next.cantidad - prev.cantidad });
	
	/*
	let mostSoldProduct: number = ordersByProducts.reduce<number>((acum, next) => {
		return acum + (+next)		
	}, 0);
	*/
    /*
	.then((data) => {
		orders.sort((prev, next) => {return prev.idproducto - next.idproducto})                        
		console.log(orders)
	})
	.then((data) => {            
		const suma: number = orders.reduce<number>((acum, next) => {
			return acum + (+next.cantidad.toString())                
		}, 0)
		console.log(suma)                       
	})*/
	//.then(data => console.log(suma))      
    
	//console.log(productByOrder)
	console.log(`El producto más vendido es: ${productsByOrders[0].nombreProducto}`);
	console.log(`Y la cantidad de artículos solicitados es: ${productsByOrders[0].cantidad}`);
	//console.clear();
}

start_app();