 const products = [];
 const lorem = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet lobortis massa sit amet ornare. Nulla ac arcu vitae felis molestie lacinia eget vitae ligula. Integer euismod ut nunc non pellentesque. Ut ipsum magna, aliquet ac lacinia vitae, interdum id ante. In placerat varius sem quis hendrerit. Maecenas mauris libero, mollis vitae dolor a, suscipit efficitur velit. Donec dapibus velit arcu, a ornare turpis fermentum non. Nulla interdum ullamcorper porta. Nunc interdum consequat sapien, ut ornare erat volutpat dapibus. Mauris rutrum arcu ac metus scelerisque, non efficitur nunc tincidunt. Nam mollis felis tellus, sit amet euismod ipsum maximus sit amet. Nulla quis leo suscipit, porttitor ex elementum, sagittis ex. Integer sodales libero elit, interdum consequat magna semper non.
            Vestibulum ornare fringilla purus, ut euismod velit egestas eget. Fusce tincidunt sem eu placerat tempus. Integer congue convallis finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ultricies lectus ac risus scelerisque faucibus. Aenean molestie nisl sed accumsan euismod. Mauris consectetur dolor in scelerisque aliquet. Fusce placerat, arcu et pharetra interdum, tortor augue sagittis erat, non iaculis eros lorem quis lectus. 
            Nulla laoreet nulla ac risus semper, eleifend rhoncus mi vulputate. Morbi bibendum, nisl et pellentesque accumsan, est leo mattis risus, in tristique odio lorem ut massa. Donec pretium consequat cursus. Pellentesque euismod nulla nisi, in lobortis nibh bibendum eget. Duis dictum pulvinar velit, ut volutpat felis tincidunt dictum. Vivamus lacinia magna sed magna cursus consequat. Phasellus ultricies lacus fermentum nisl dapibus, nec tristique augue eleifend. In sem eros, aliquam nec semper fringilla, faucibus et lectus. Nulla hendrerit vestibulum nisi ac commodo. Nam pharetra aliquet cursus. Maecenas finibus nunc ac turpis consequat, a varius metus aliquam. Donec interdum orci ipsum, sed bibendum magna pulvinar quis. Donec accumsan dui sed rutrum porttitor. Pellentesque ac rhoncus tellus. Curabitur ornare neque lacus, vitae commodo magna gravida at. Curabitur ultrices tellus nec est malesuada, pretium tristique turpis faucibus.`
for(let i=1; i<=10; i++){
  let product={};
  product.id = i;
  product.title = "Product " + i;
  product.detail = i + lorem;
  products.push(product);
}

export const getProducts = () => {
  return products;
}

export const getProductByID = (id) => {
  return products[id]
}

  