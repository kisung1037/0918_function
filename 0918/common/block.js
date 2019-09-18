// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function() {
    console.log(myGameArea.message.docIsReady);
    myGameArea.start();
    var ctx = myGameArea.canvas.getContext("2d");
    ctx.fillStyle ="red";
    ctx.fillRect(75,75,50,50);
    this.myGamePiece = new Component(175,175,"red",50,50);

}

var myGamePiece;

// 환경정보를 가진 객체
var myGameArea = {
    canvas : document.createElement("canvas"),
    message : {
        docIsReady: "문서가 준비됬습니다."
    },
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        //document.body.insertBefore(무엇을,어디에))
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.context = this.canvas.getContext("2d");
    }
}

// 컴포넌트 생성자함수
function Component(w,h,c,x,y) {
    this.w = w;
    this.h = h;
    this.c = c;
    this.x = x;
    this.y = y;
    ctx.fillStyle = c;
    ctx.fillRect(this.x,this.y,this.w,this.h);
}