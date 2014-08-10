function PromotionCaculator(cartItems){
  this.cartItems = cartItems;
}

PromotionHelper.prototype.getCartItems = function(){
  var promotions = loadPromotions();

  var promotionNum = function(){
    for(var i = 0; i < promotions.length; i++){
      if(promotions[i].type === 'BUY_TWO_GET_ONE_FREE'){
        return 3;
      }
    }
  }
  for(var i = 0; i < this.cartItems.length; i++){
    this.cartItems[i].proCount = parseInt(this.cartItems[i].count/promotionNum());
  }
  return this.cartItems;
}
