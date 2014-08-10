function printInventory (inputs) {

  var scanner = new BarcodeScanner(inputs);

  var barcodelist = scanner.scanBarcode(inputs);

  var cart = new Cart(barcodes);

  var promotioncalculator = new PromotionCalculator();

  var pos = new Pos(cart);

  console.log(pos.titlePrint() + pos.commonPrint()
              + pos.givePrint() + pos.pricePrint());

}
