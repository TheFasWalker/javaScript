const goods = [
  {artucule:1, title: 'Shirt', price: 150 },
  {artucule:2, title: 'Socks', price: 50 },
  {artucule:3, title: 'Jacket', price: 350 },
  {artucule:4,  },
];

const renderGoodsItem = (title="неизвестный товар", price="нет в наличии",artucule) => 
  `<div class="goods-item">
  <div class="goods__photo">
    место для фото товара
  </div>
  <h3>${title}</h3>
  <p>${price}</p>
  <button class="goods__buy" type="button" data-id =${artucule}>В корзину</button>
  </div>`;


const renderGoodsList = (list = []) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.artucule));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);