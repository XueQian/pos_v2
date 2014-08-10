function Cart(barcodes){
  this.barcodes = barcodes;
  this.cartItems = [];
}

Cart.prototype.count = function(){

  var items = loadAllItems();

  var getItem = function(barcode){

    for(var i = 0; i < items.length; i++){
      if(items[i].barcode === barcode){
        return items[i];
      }
    }
  }

  var isExist = function(currentBarcode,cartItems){

    for(var i = 0; i < cartItems.length; i++){

      var barcode = cartItems[i].item.barcode;

      if(barcode === currentBarcode){
        cartItems[i].count++;
        return true;
      }
    }
    return false;
  }

  for(var i = 0; i < this.barcodes.length; i++){

    if(!isExist(this.barcodes[i],this.cartItems)){

      var cartitem = new CartItem(getItem(this.barcodes[i]),1,0);
      this.cartItems.push(cartitem);

    }
  }

  return this.cartItems;

}
