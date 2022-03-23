// 2. Làm ví dụ về callback hell
function CBHell1(bien1){
    bien1();
}
function CBHell2(bien2){
    bien2();
}
function CBHell3(bien3){
    bien3();
}
function main() {
    CBHell1(function(){
        CBHell2(function(){
          CBHell3(function(){
            console.log('ThucHienHam');
          });
        });
      });
}
main()