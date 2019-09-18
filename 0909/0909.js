// var text = "";
var history_arr=[];
var text = "";
var result="";

function addText(el) {
    var str = el.textContent;
    // text += str;
    history_arr.push(str);
    showlist();

    result += str;
}
function showlist() {
    var el = document.getElementById("textHistory");
    el.innerHTML = history_arr.join("")
}
function clearText() {
    var el = document.getElementById("textHistory");
    el.innerHTML ="clear";
    result = "";
    history_arr.pop();
}


function addNum(el) {
    var str = el.textContent;
    history_arr.push(str);
    showlist();

    text = text + str;
}
function addSign(el) {
    var str = el.textContent;
    history_arr.push(str);
    showlist();

    if (str === "="){
      var evalStr = eval(text);
      result += evalStr;
      text ="";
    }else{
    text = text + str;
    }
}
function showResult() {
    var el = document.getElementById("textresult");
    el.innerHTML = result;
}