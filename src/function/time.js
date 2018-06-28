const getTime = function() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var hours = time.getHours();
    var date = time.getDate()
    var minutes =time.getMinutes();
    var m = minutes<10 ? '0'+minutes : minutes;
    var time_now=year+'年'+month+'月'+date+'日'+hours+':'+m;
    return time_now;
}
export default getTime;
// function test(minutes){
//     var a =minutes<10 ? '0'+minutes : minutes;
//     console.log(a);
// }
// test(4);
// test(5);
// test(10);