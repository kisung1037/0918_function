// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function() {
    console.log(myGameArea.message.docIsReady);
    myGameArea.start();
    this.myGamePiece = new Component(30,30,"red",0,100);
}

var myGamePiece;
// var myGamePieces;

// 환경정보를 가진 객체
var myGameArea = {
    canvas : document.createElement("canvas"),
    message : {
        docIsReady: "문서가 준비됬습니다."
    },
    key : false,
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        //document.body.insertBefore(무엇을,어디에))
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.context = this.canvas.getContext("2d");
        //타이머 적용
        this.interval = setInterval(updateGameArea, 20); // 초당 50번 updateGameArea를 호출
        //마우스제어
        this.btns = document.querySelectorAll(".controll >button");
        this.btns[1].addEventListener("mousedown",moveLeft);
        this.btns[1].addEventListener("mouseup",moveStop);
        window.addEventListener("keydown", function(e){
            myGameArea.key = e.keyCode;
        });
        window.addEventListener("keyup", function(e){
            myGameArea.key = false;
        });
    },
    clear : function () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
}

// 컴포넌트 생성자함수
function Component(w,h,c,x,y) {
    this.w = w;
    this.h = h;
    this.c = c;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;

    //외부 실행을 위해 함수에 포함
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = c;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

// function refUp() {
//     if (myGamePiece.x = 400) myGamePiece.update();
// }
function moveRight() {
    myGamePiece.x = 1;
}
function moveLeft() {
    myGamePiece.x =-1;
}
function moveStop() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}
//화면 제어를 위한 함수1
function updateGameArea(){
    var mGAkey= myGameArea.key;
    myGameArea.clear();
    // myGamePiece.x += 1;
    if (mGAkey && mGAkey === 37) myGamePiece.speedX = -1;
    if (mGAkey && mGAkey === 39) myGamePiece.speedX = 1;
    if (mGAkey && mGAkey === 38) myGamePiece.speedY = -1;
    if (mGAkey && mGAkey === 40) myGamePiece.speedY = 1;
    if (!mGAkey) moveStop();
    myGamePiece.newPos();
    myGamePiece.update();
    // for (var i=0;i<5;i++) {
    //     myGamePieces.push([]);
    //     for (j=0 ; j<3 ; j++){
    //         myGamePieces[i].push(new Component(100,100,"red",10,10));
    //     }
    // }
}