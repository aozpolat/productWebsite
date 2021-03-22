export const getProducts = async () => {
  const res = await fetch(
    "https://api.jotform.com/form/210521962653049/properties?apiKey=f7653616b251db258a9072a61384ce7b"
  );
  const data = await res.json();

  const products = data.content.products;

  const productsWithImages = products.map((product, index) => {
    return {
      ...product,
      imageUrl: `https://tympanus.net/Blueprints/FilterableProductGrid/images/product${
        index + 1
      }/1.png`,
    };
  });

  const categorizedProducts = productsWithImages.map((product) => {
    let category;
    switch (product.cid) {
      case "2001":
        category = "shoes";
        break;
      case "2002":
        category = "shirts";
        break;
      case "2003":
        category = "jackets";
        break;
      case "2004":
        category = "dresses";
        break;
      case "2005":
        category = "trousers";
        break;
    }
    return {
      ...product,
      category,
    };
  });
  return categorizedProducts;
};

export const getProductByID = async (id) => {
  const res = await getProducts();
  return res[id];
};

export const getProductsForPage = async (page, category) => {
  const productsPerPage = 6;
  const products = await getProducts();
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let currentProducts;
  if (category != "all") {
    const filteredProducts = products.filter((product) =>
      category.includes(product.category)
    );
    currentProducts = filteredProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    return {
      currentProducts,
      productsPerPage,
      length: filteredProducts.length,
    };
  } else {
    currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    return { currentProducts, productsPerPage, length: products.length };
  }
};
