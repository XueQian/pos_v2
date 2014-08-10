function BarcodeScanner(inputs){

  Scanner.call(this);

}

BarcodeScanner.prototype = Object.create(Scanner.prototype);
BarcodeScanner.prototype.constructor = BarcodeScanner;

BarcodeScanner.prototype.scanBarcodes = function(){
  var barcodes = [];

  for(var i = 0; i < this.inputs.length; i++){

    var barcodeArray = this.inputs[i].split('-');
    var barcode = barcodeArray[0];
    var count = barcodeArray[1] || 1;

    for(var x = 0; x < count; x++){
      barcodes.push(barcode);
    }
  }
  return barcodes;
};
