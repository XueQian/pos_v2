function CartItem(item,itemCount){

  this.item = item;
  this.itemCount = itemCount || 0;
  this.promotionCount = 0;
  this.promotionTotal = 0.00;
  this.itemTotal = 0.00;

}

CartItem.prototype.getPromotionTotal = function(){
  return this.promotionTotal = this.item.price * this.promotionCount;
}

CartItem.prototype.getItemTotal = function(){
  return this.itemTotal = this.item.price * this.itemCount;
}
