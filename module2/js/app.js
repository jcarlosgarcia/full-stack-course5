(function () {
'use strict';
    
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
    
    var toBuyList = this;
    // Initial items
    toBuyList.initialItems = ShoppingListCheckOffService.getInitialItems();
    
    toBuyList.buy = function(itemIndex) {
        ShoppingListCheckOffService.buy(itemIndex);
    }
}
    
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var boughtList = this;
    
    boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();

}
    
function ShoppingListCheckOffService() {
    var service = this;
    
    var initialShoppingList = [
        {name: "Milk", quantity: 12}, 
        {name: "Donuts", quantity: 4}, 
        {name: "Cookies", quantity: 5}, 
        {name: "Chocolate", quantity: 6}, 
        {name: "Peanut Butter", quantity: 2}, 
        {name: "Pepto Bismol", quantity: 2}, 
        {name: "Pepto Bismol (Chocolate flavor)", quantity: 4}, 
        {name: "Pepto Bismol (Cookie flavor)", quantity: 4}
    ];
    
    var toBuyItems = initialShoppingList;
    var boughtItems = [];
    
    service.getInitialItems = function() {
        return initialShoppingList;
    }
    
    service.getBoughtItems = function() {
        return boughtItems;
    }
    
    service.buy = function(itemIndex) {
        
        // Splice returns an array of the removed elements, in this case it contains only one item
        var boughtItem = toBuyItems.splice(itemIndex, 1);
        boughtItems.push(boughtItem[0]);

    }
}
    
})();
