// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function() {
    console.log(myGameArea.message.docIsReady)
}
// 환경정보를 가진 객체
var myGameArea = {
    canvas = document.createElement("canvas"),
    message : {
        docIsReady: "문서가 준비됬습니다."
    },
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 320;
        //document.body.insertBefore(무엇을,어디에))
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}