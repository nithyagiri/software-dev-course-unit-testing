
//js file fro the function calculateDiscount nd filter products
function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number')
       {  
            return null;
       }
    if (discountRate < 0 || discountRate > 1) 
        {
            return null;
        }
    const disAmt = price * discountRate;
    return price - disAmt;
    return null;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') 
        {
            return [];
        }
    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string')
        {
          return [];
        }
    return inventory.slice().sort((a,b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    })
}

module.exports ={ calculateDiscount, filterProducts, sortInventory};
