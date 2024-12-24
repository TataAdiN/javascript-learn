const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
    return products.filter((product) => product.category == category);
}

function findProductById(products, id) {
    return products.find((product) => product.id == id);
}

function calculateTotalPrice(products) {
    return products.reduce((accumulator, product) => accumulator + product.price, 0);
}

function applyDiscount(products, discount) {
    return products.map((product) => {
        return {
            ...product,
            price: product.price - (product.price * (discount / 100))
        };
    });
}

console.log(getProductsByCategory(sampleProducts, 'Electronics'));
console.log(calculateTotalPrice(sampleProducts));
console.log(applyDiscount(sampleProducts, 10));
console.log(findProductById(sampleProducts, 3));