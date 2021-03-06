const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 34},
    {id: 4, title: 'Gamepad', price: 56},
    {id: 5, title: 'Chair', price: 120},
];

const renderProduct = (product, img='https://via.placeholder.com/350x150') => {
    return `<div class="product-item">
                <img src="${img}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">купить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join(' ');
};

renderPage(products);
