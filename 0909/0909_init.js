// 기본환경변수
// var text = "";
var history_arr = [];
var text = "";
var result = "";

function addText(el) {
  var str = el.textContent; // str은 지역변수
  // text = text + str; // text += str
  history_arr.push(str);
  showHist();

  result = result + str;
}

function addNum(el) {
  var str = el.textContent; // str은 지역변수
  history_arr.push(str);
  showHist();

  text = text + str;
}

function addSign(el) {
  var str = el.textContent; // str은 지역변수
  history_arr.push(str);
  showHist();

  if (str === "=") {
    var evalStr = eval(text);
    result = result + evalStr;
    // alert()
    text = "";
  } else {
    text = text + str;
  }
}

function showHist() {
  var el = document.getElementById("textHistory");
  el.innerHTML = history_arr.join("<br>");
}

function showRest() {
  var el = document.getElementById("textRest");
  el.innerHTML = result;
}