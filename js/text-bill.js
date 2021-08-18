var billTypeText = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
var refFactory = Factory();

addToBillBtn.addEventListener('click', function() {
  Factory();
  textBill();
});


function Factory() {
    var call = 0;
    var sms = 0;
    var total = 0;
  
    function textBillTotal(totalData) {
      if (totalData === 'call') {
        call += 2.75;
      }
      if (totalData === 'sms') {
        sms += 0.75;
      }
  
      total = call + sms;
    }
  
    function getCall() {
      return call;
    }
  
    function getSms() {
      return sms;
    }
  
    function getTotal() {
      return total;
    }
  
    return {
      billTotals: textBillTotal,
      allCalls: getCall,
      allSms: getSms,
      grandTotal: getTotal
    }
  }