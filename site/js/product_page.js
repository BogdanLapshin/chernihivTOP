function getIdFromParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}


const product_name = document.querySelector("#name_product");
const product_price = document.querySelector("#price_product");

const id = getIdFromParams();
if (id) {
    getDataFromDB(getIdFromParams(), function(json) {
        const object = json[0];
        product_name.innerText = object.name;
        product_price.innerText = object.price;
    });

} else {
    //Допісать обработку на случай перешел на страніцу товара которого не существует
}