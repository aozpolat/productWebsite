export const getProducts = async () => {
    const res = await fetch('https://api.jotform.com/form/210521962653049/properties?apiKey=f7653616b251db258a9072a61384ce7b');
    const data = await res.json();

    const products = data.content.products;

    const productsWithImages = products.map((product , index) => {
            return {...product, imageUrl: `https://tympanus.net/Blueprints/FilterableProductGrid/images/product${index + 1}/1.png`}
    }); 
    return productsWithImages;
    
}

export const getProductByID = async (id) => {
  const res = await getProducts();
  return res[id]
}