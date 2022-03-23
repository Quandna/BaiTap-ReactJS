// 1. Làm ví dụ hàm được gọi là callBack
function CallBack1(bien1){
    bien1();
  }
CallBack1(CallBack2);
function CallBack2(bien2){
    console.log("Day La CallBack");
}