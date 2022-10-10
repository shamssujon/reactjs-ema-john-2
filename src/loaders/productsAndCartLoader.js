import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // Get products
    const productsData = await fetch("products.json");
    const products = await productsData.json();
    // console.log("Products",products);

    // Get cart
    const savedCart = getStoredCart();
    // console.log("saved cart: ", savedCart);

    const initialCart = [];

    for (const productId in savedCart) {
        // console.log(productId);

        const addedProduct = products.find((product) => product.id === productId);
        // console.log(addedProduct);

        if (addedProduct) {
            const quantity = savedCart[productId];
            // console.log(quantity);
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return {products, initialCart};
};
