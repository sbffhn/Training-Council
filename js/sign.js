$(document).ready(function () {
    $('#round2').on('click',round2)
    $('#round3').on('click',round3)

const j = Math.floor(Math.random()*60); 
$('.sign-btn').on('click',function begin(){
    
        console.log(j);
        alert('您抽到的籤為第:'+j+'籤')
        $('.sign-content').toggle();
        $('.sign-txt').html('您籤為第:'+j+'籤<br>')
    })
})

$('#gogo').click(function(){
    $('#sign-txt').append(
        `<img src="./img/sign${j}.png" alt="">`
    )
    $('#sign-txt2').append(
        `<img src="./img/60/no${j}.png" alt="" srcset="">`
    )
    $('#no').append(
        `您的第${j}隻籤，以下為籤詩內容`
    )
})
$('#Again').click(function(){
    // $('#round1').toggle();
    $('#Again').toggle();
    $('#result').empty(); 
    $('.sign-content').toggle();
    $('.process').toggle();

// ＝＝＝＝＝＝第一回合
function round1(){
$('.process').toggle();
var i = Math.floor(Math.random()*3); 
var i = 2;
if(i==2){
    $('#result-img').html(
    `<img src="./img/result${i}.png" alt="">`
    );
    $('#round2').toggle();
    // $('#round1').toggle();
    $('#result').html(
       `恭喜你·獲得1聖杯・還差兩個加油`       
   );                     
   console.log(i); 
                       
}else if(i==0){
    // $('#round1').toggle();
    $('#result-img').html(
        `<img src="./img/result${i}.png" alt="">`
       );
    $('#Again').toggle();
    $('#result').html(
        '好可惜笑杯,再向神明說明仔細點試試看'
    );
    console.log(i);
}else{
    // $('#round1').toggle();
    $('#result-img').html(
        `<img src="./img/result${i}.png" alt="">`
       );
    $('#Again').toggle();
    $('#result').html(
        '陰杯,在跟神明誠心的請求'
    );
    console.log(i);
};    

};
// ＝＝＝＝＝＝第二回合
function round2(){
var i = Math.floor(Math.random()*3); 
var i = 2;
if(i==2){ 
    $('#result-img').html(
        `<img src="./img/result${i}.png" alt="">`
       );
    $('#round2').toggle();
    $('#round3').toggle();
    $('#result').html(
       `太棒了·累積兩個聖杯・還差一個加油>`
   )                      
   console.log(i);
}else if(i==0){
$('#result-img').html(
    `<img src="./img/result${i}.png" alt="">`
   );
$('#round2').toggle();
$('#Again').toggle();
$('#result').html(
       '好可惜笑杯,再向神明說明仔細點試試看'
   )
   console.log(i); 
}else{
$('#result-img').html(
    `<img src="./img/result${i}.png" alt="">`
   );
$('#round2').toggle();
$('#Again').toggle();
$('#result').html(                    
    '陰杯,在跟神明誠心的請求'
   )
   console.log(i);
}       
}
// ＝＝＝＝＝＝第三回合
function round3(){
var i = Math.floor(Math.random()*3); 
var i = 2;
if(i==2){
    
   $('#result').html(
     '達到三個聖杯！！去解籤吧'
   )
   $('#result-img').html(
    `<img src="./img/result${i}.png" alt="">`
   );

   $('#round3').toggle();
   $('#gogo').toggle();
   console.log(i);                     
}else if(i==0){
$('#result-img').html(
    `<img src="./img/result${i}.png" alt="">`
   );
    $('#result').html(
       '好可惜笑杯,再向神明說明仔細點試試看'
     );
     $('#round3').toggle();
     $('#Again').toggle();
    console.log(i);                   
}else{
$('#result-img').html(
    `<img src="./img/result${i}.png" alt="">`
   );
$('#result').html(
   '"陰杯"在跟神明誠心的請求'
   )
   $('#round3').toggle();
$('#Again').toggle();
console.log(i);  
}    
}


    
})
