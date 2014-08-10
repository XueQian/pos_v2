function Pos(scanner){

  this.scanner = scanner;
  this.cart = new Cart(this.scanner.scanBarcodes());
  this.promotionCaculator = new PromotionCaculator(this.cart.count());

}

Pos.prototype.getExpectText = function(cartItems){
  var sum = 0;
  var save = 0;
  var expectText = "***<没钱赚商店>购物清单***\n";
  var goodsText = "";
  var giftText = "";
  for(var i = 0; i < cartItems.length; i++){
    var cartItem = cartItems[i];

    goodsText += "名称：" + cartItem.item.name + "，数量：" + cartItem.count
    + cartItem.item.unit + "，单价：" + (cartItem.item.price).toFixed(2) + "(元)，小计：" +
    ((cartItem.count - cartItem.proCount) * (cartItem.item.price)).toFixed(2) + "(元)\n";

    if(cartItem.proCount > 0){
      giftText += "名称：" + cartItem.item.name + "，数量：" + cartItem.proCount
      + cartItem.item.unit + "\n";
    }
    sum += (cartItem.count - cartItem.proCount) * (cartItem.item.price);
    save += cartItem.proCount * cartItem.item.price;
  }
  expectText += "打印时间：" + utils.getDate() + "\n";
  expectText += "----------------------\n";
  expectText += goodsText;
  expectText += "----------------------\n";
  expectText += "挥泪赠送商品：\n";
  expectText += giftText;
  expectText += "----------------------\n" + "总计："+sum.toFixed(2)+"(元)\n" +
  "节省：" + save.toFixed(2) + "(元)\n" + "**********************";

  return expectText;

};
