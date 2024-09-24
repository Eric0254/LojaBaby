
    function filterProducts() {
    const priceFilter = document.getElementById("filter-price").value;
    const sizeFilter = document.getElementById("filter-size").value;
    const colorFilter = document.getElementById("filter-color").value;

    const products = document.querySelectorAll(".product");
    let visibleCount = 0;

    products.forEach(product => {
        const price = parseFloat(product.getAttribute("data-price"));
        const size = product.getAttribute("data-size");
        const color = product.getAttribute("data-color");

        let showProduct = true;

        if (priceFilter) {
            const [minPrice, maxPrice] = priceFilter.split("-").map(Number);
            if (price < minPrice || price > maxPrice) {
                showProduct = false;
            }
        }

        if (sizeFilter && size !== sizeFilter) {
            showProduct = false;
        }

        if (colorFilter && color !== colorFilter) {
            showProduct = false;
        }

        if (showProduct) {
            product.style.display = "block";
            visibleCount++;
        } else {
            product.style.display = "none";
        }
    });

    const noProductsMessage = document.getElementById("no-products-message");
    if (visibleCount === 0) {
        noProductsMessage.style.display = "block";
    } else {
        noProductsMessage.style.display = "none";
    }
}

document.getElementById("filter-price").addEventListener("change", filterProducts);
document.getElementById("filter-size").addEventListener("change", filterProducts);
document.getElementById("filter-color").addEventListener("change", filterProducts);

document.querySelector(".clear-filters").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("filter-price").value = "";
    document.getElementById("filter-size").value = "";
    document.getElementById("filter-color").value = "";
    filterProducts();
});     
        
        
        
