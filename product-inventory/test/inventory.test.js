const {calculateDiscount, filterProducts, sortInventory }= require ('../inventory.js');

describe("Produce-Inventory", function(){

    describe('calculateDiscount', function(){
         test("applies a valid discount rate", () => {
         expect(calculateDiscount(100, 0.1)).toBe(90);
         });
         test("handles an invalid discount rate gracefully", () => {
         expect(calculateDiscount(100, -0.1)).toBe(null);
         });
         test("handles edge case with price of 0", () => {
         expect(calculateDiscount(0, 0.2)).toBe(0);
         });                 
    } )
     describe('filterProducts', function(){
        const sampleProd =[{ name: 'Fridge', instock:true},
                            { name: 'washingmachine', instock:false},
                            { name: 'dishwasher', instock:true}
        ];
         test("filter the products based on the key", () => {
        const result = filterProducts(sampleProd, p => p.instock);
         expect(result).toEqual([{ name: 'Fridge', instock:true},
                            { name: 'dishwasher', instock:true}
                               ]);
         });
         test("handles the scenario if there is no products to filter", () => {
        const result = filterProducts(sampleProd, p => false);
         expect(result).toEqual([]);
         });
         test("handles the case when the array is empty", () => {
         const result = filterProducts([], p => true);
         expect(result).toEqual([]);
         });      
        describe('sortInventory', function(){
            test("sort the products based on the key and produce the result", ()=>{
                const sampleProd =[{ name: 'Fridge', price: 2000},
                            { name: 'washingmachine', price: 3000},
                            { name: 'dishwasher', price: 1000}];
                expect(sortInventory(sampleProd, 'price')).toEqual([{ name: 'dishwasher', price:1000},
                                                              { name: 'Fridge', price:2000},
                                                              { name: 'washingmachine', price:3000}]);
            });
            test("should return empty array for invalid input", ()=>{
                const sampleProd =[{ name: 'Fridge', price: 2000},
                            { name: 'washingmachine', price: 3000},
                            { name: 'dishwasher', price: 1000}];
                expect(sortInventory([], 'price')).toEqual([]);
                 expect(sortInventory(null, 'price')).toEqual([]);
            });
            test("should return empty array for invalid input", ()=>{
                const sampleProd =[{ name: 'Fridge', price: 2000},
                            { name: 'washingmachine', price: 3000},
                            { name: 'unknown'}];
                const result = sortInventory(sampleProd, 'price');
                expect(result[2].price).toBeUndefined()
            });
            });
        })           
    } )