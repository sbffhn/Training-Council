$(document).ready(function () {
    for (var i=1;i<=60;i++) {
        $(".show").append
        (
            `<a id="a${i}" class="show60"href="#click2">第${i}籤</a>`
        )
        $("#a" + i).on("click", { num: i }, fnChange1);
    }
    
    function fnChange1(a) {
        // 取得選取的圖片編號並組成完成圖檔
        var filename = "./img/sign" + a.data.num + ".png"
        var filename2 = "./img/no" + a.data.num + ".png"
        $(".show1").attr("src", filename);
        $(".show2").attr("src", filename2);
    }




    $('#tab1').click(function () {
        $('#content-1').html(
            `
            <div class="tabs-item">
                <h1 class="title">【參拜順序】 </h1>
                <div class="item-txt">
                    <div class="sidebar2">

                        <ol class="txtchange" id="t1" style="text-align: center; font-size: 35px;">
                            <li class="boderadjust"> 步驟一、參拜天公爐</li>
                            <li class="boderadjust"> 步驟二、參拜城隍爺</li>
                            <li class="boderadjust"> 步驟三、參拜觀世音像</li>
                            <li class="boderadjust"> 步驟四、參拜虎爺</li>
                        </ol>


                        <article class="main-area">
                            <img src="./img1/參拜順序.png" width="550px" height="470px" class="mainimg1">
                            <figure class="figurestyle">一樓大殿</figure>
                        </article>

                    </div>




                </div>
            </div>
            `
        )
    })

    $('#tab2').click(function () {
        $('#content-1').html(

            `
            <div class="sign">
            <div class="sign-btnbox">
                <div class="signimg">
                    <img src="./img/Endorsement_after.png" alt="">
                    <img class="stick" src="./img/stick.png" alt="">
                    <img class="before"src="./img/Endorsement_before.png" alt="">
                </div>
                <button class="sign-btn" onclick="begin()">步驟一、抽籤</button>
                
            </div>
            <div class="sign-content">
                <img class="stick2" src="./img/stick.png" alt="">
                <div class="sign-txt"></div>
               <button class="sign-btn2" id='round1'onclick="round1()">步驟二、開始躑杯</button>
            </div>
            <div class="process">
                <!-- ======在這顯示圖片＝＝＝＝＝ -->
                <div id=result-img></div>
                <!-- <input id='round1'  style="display: block;" type="button" value="擲杯"> -->
                <input  id='round2' style="display: none;" type="button" value="第二發">

                <input  id='round3' style="display: none;" type="button" value="尻最後一發">

                <div id="result"></div>

                <input  id='gogo' style="display: none;" type="button" value="解籤去">

                <input  id="Again" style="display: none;"type="button" value="重來">
            </div>
            
        </div>
        <div id="sign-txt"></div>   
                `

        )

    })
    $('#tab3').click(function () {
        $('#content-1').html(
            `
            <div class="tabs-item">
                <h1 class="title">【籤詩解釋】</h1>
                <div class="item-txt">

                    <div id="tablechange">

                        <div class="whole">
                            <table width="30px" border="1" cellspacing="5" cellpadding="10">
                                <tbody class="charset">
                                    <tr>
                                         <td class="hov"><a id="tab-1" href="#">&nbsp第&nbsp01&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-2" href="#">&nbsp第&nbsp02&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-3" href="#">&nbsp第&nbsp03&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-4" href="#">&nbsp第&nbsp04&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-5" href="#">&nbsp第&nbsp05&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-6" href="#">&nbsp第&nbsp06&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-7" href="#">&nbsp第&nbsp07&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-8" href="#">&nbsp第&nbsp08&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-9" href="#">&nbsp第&nbsp09&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-10" href="#">&nbsp第&nbsp10&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-11" href="#">&nbsp第&nbsp11&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-12" href="#">&nbsp第&nbsp12&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-13" href="#">&nbsp第&nbsp13&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-14" href="#">&nbsp第&nbsp14&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-15" href="#">&nbsp第&nbsp15&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-16" href="#">&nbsp第&nbsp16&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-17" href="#">&nbsp第&nbsp17&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-18" href="#">&nbsp第&nbsp18&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-19" href="#">&nbsp第&nbsp19&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-20" href="#">&nbsp第&nbsp20&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-21" href="#">&nbsp第&nbsp21&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-22" href="#">&nbsp第&nbsp22&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-23" href="#">&nbsp第&nbsp23&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-24" href="#">&nbsp第&nbsp24&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-25" href="#">&nbsp第&nbsp25&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-26" href="#">&nbsp第&nbsp26&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-27" href="#">&nbsp第&nbsp27&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-28" href="#">&nbsp第&nbsp28&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-29" href="#">&nbsp第&nbsp29&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-30" href="#">&nbsp第&nbsp30&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-31" href="#">&nbsp第&nbsp31&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-32" href="#">&nbsp第&nbsp32&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-33" href="#">&nbsp第&nbsp33&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-34" href="#">&nbsp第&nbsp34&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-35" href="#">&nbsp第&nbsp35&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-36" href="#">&nbsp第&nbsp36&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-37" href="#">&nbsp第&nbsp37&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-38" href="#">&nbsp第&nbsp38&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-39" href="#">&nbsp第&nbsp39&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-40" href="#">&nbsp第&nbsp40&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-41" href="#">&nbsp第&nbsp41&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-42" href="#">&nbsp第&nbsp42&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-43" href="#">&nbsp第&nbsp43&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-44" href="#">&nbsp第&nbsp44&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-45" href="#">&nbsp第&nbsp45&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-46" href="#">&nbsp第&nbsp46&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-47" href="#">&nbsp第&nbsp47&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-48" href="#">&nbsp第&nbsp48&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-49" href="#">&nbsp第&nbsp49&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-50" href="#">&nbsp第&nbsp50&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-51" href="#">&nbsp第&nbsp51&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-52" href="#">&nbsp第&nbsp52&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-53" href="#">&nbsp第&nbsp53&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-54" href="#">&nbsp第&nbsp54&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-55" href="#">&nbsp第&nbsp55&nbsp籤&nbsp</a></td>
                                    </tr>
                                    <tr>
                                         <td class="hov"><a id="tab-56" href="#">&nbsp第&nbsp56&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-57" href="#">&nbsp第&nbsp57&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-58" href="#">&nbsp第&nbsp58&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-59" href="#">&nbsp第&nbsp59&nbsp籤&nbsp</a></td>
                                         <td class="hov"><a id="tab-60" href="#">&nbsp第&nbsp60&nbsp籤&nbsp</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    
                        <div id="click1">
                            <div class="middleimg">
                                <img src="./img/sign1.png" alt="">
                            </div>
                        </div>

                        <div id="click2">
                            <div class="explaination">
                                <img src="./img/no1.png" alt="" >
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            
            
            `
        )
    })
    $('#tab4').click(function () {
        $('#content-1').html(
            `                        <div class="tabs-item">
            <h1 class="title">【城隍爺商圈】 </h1>
            <div class="item-txt">
                <div class="sidebar2">
                    <h2>交通資訊</h2>
                    <p>
                    <ol>
                        <li><h3>1.火車、高鐵</h3><p>從台北火車站Z10出口，步行約5分鐘即可到達。
                        </li></p>
                        <li><h3>2.捷運</h3>
                            <p>從紅線台大醫院站下車，3號出口步行約8分鐘即可到達。 從藍/綠線西門站下車，5號出口步行約7分鐘即可到達。</li></p>
                        <li><h3>3.自行開車</h3>
                            <p>請導航 廟址：100台北市中正區武昌街一段14號</li></p>
                    </ol>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.356049016393!2d121.51215589708839!3d25.043842686140295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90c9f636f07%3A0x924b008b67b35d8c!2z6Ie654Gj55yB5Z-O6ZqN5buf!5e0!3m2!1szh-TW!2stw!4v1626141688465!5m2!1szh-TW!2stw" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>                        
                </p>
                    
                </div>




            </div>
        </div>

`
        );
        $('span').on('click', opentxt);
        function opentxt() {

            $('.txtshow').toggle();
            $('span').text('展開/收回');

        };
    })
    $('#tab5').click(function () {

        $('#content-1').html
            (
                `
            <div class="charity">
            <div >
              
              <h1 class="title">【慈善公益關懷】</h1>
              <h3 style="margin:20px 0">一、每月慈善機構愛心關懷活動</h3>
              <div class="txtbox">
                <figure>
                    <img src="img/c1.jpeg" alt="紅十字會救生快艇儀式">
                    <figcaption>本廟捐贈紅十字會救生快艇儀式</figcaption>
                </figure>
                <p>
                    臺灣省城隍廟自重興及成立法人以來，即積極透過實際對於慈善機構關懷援助及重大意外災害關懷慰助方式，具體落實城隍信仰對社會弱勢的慈悲救助精神，每月由董監事會代表組成愛心服務隊，親至各慈善機進行關懷，並捐贈善款、物資關懷社會弱勢，傳遞人間大愛精神。每年至少參訪關懷十個以上的慈善機構，歷年累積關懷之機構參訪次數超過早以數百次梯次，曾有臺灣省城隍廟愛心服務隊足跡之慈善機構計有臺安精神病院、臺北傷殘服務中心、嘉昇殘障院<span>閱讀更多....</span> </p>
                    <p class=txtshow>聖安娜之家、伯大尼育幼院、八德教養院、景仁殘障教養院、臺北殘障服務中心、明新啟智中心、台北縣自閉症服務協會、恆安養護中心、廣恩安養院、三峽靜養醫院、三重安養堂、新莊愛心育幼院、新莊盲人重建院、創世基金會、第一社福基金會、廣恩老人院、萬華愛愛院、中壢啟智訓練中心、八里愛心教養院、陽明教養院、新店宏慈療養院、陽明養護中心、桃園弘化懷幼院、宜蘭縣三星聖嘉民啟智中心、桃園縣八德市景仁殘障教養院、福山國小、北區兒童之家、新店屈尺老人之家、真善美啟能發展中心、仁友愛之家、市立浩然敬老院、萬里仁愛之家、新生活發展協會、忠義育幼院、八里樂山療養院、埔里長青村、新屋方舟啟智教養院、中和明新啟智中心、基隆暖暖博愛仁愛之家、真光教養院、鴻德養護中心、陽明養護中心、桃園弘化懷幼院、基隆博愛仁愛之家、世界和平展望會、育成基金會、伯翠新村等機構。</p>
               
                <div style="clear: both;"></div>
              </div>
              <h3 style="margin:20px 0">二、重大天災販濟關懷及公益設施捐助</h3>
              <p>重大天然災害災後復建賑濟關懷亦有「賀伯颱風」受災戶慰問、「九二一大地震」賑災(新臺幣三百萬元)、「桃芝颱風」花蓮大興村災後復建關懷、「象神颱風」中正區受災居民慰問、「八八風災」臺南/南投/臺東災後復建愛心關懷、「海地地震」捐助慈濟功德會服災專戶(新臺幣一百萬)、「東日本大地震」災後救災捐助等。每年並發放臺北市清寒家庭春節/端午節/中秋慰問金、捐助國姓鄉公所公務車、捐助臺北市政府社會局復康巴士、捐助臺北市政府消防局救護車、贈送和平醫院加長型救護車、贊助和平醫院病床設備、捐助臺北捐血中心血液運輸專用車等設施，將城隍信仰的慈悲精神發揮落實於實際生活層次。</p>
              <ul class="row"></ul>
              


  
  
  
            </div>
        </div>
  
            `
            )

    })

    
    $('#round2').on('click',round2)
    $('#round3').on('click',round3)
    $('#gogo').click(function(){
        $('#sign-txt').append(
            `<img src="./img/sign${j}.png" alt="">`
        );
        $('#sign-txt2').append(
            `<img src="./img/no${j}.png" alt="" srcset="">`
        );
        $('#no').append(
            `您的第${j}支籤，以下為籤詩內容`
        );
        $('#Again2').toggle();
        // $('#gogo').off('click');  方法一 缺點按鈕還是可以點擊但沒有功能
        $("#gogo").attr("disabled", true);
    })
    // $('.restart').on('click',function(e){
    //     location.reload(true);//刷新網頁
    //    });
    $('#Again,#Again2').click(function(){
        // $('#round1').toggle();
        // $('#Again').toggle();
        // $('#result').empty(); 
        // $('.sign-content').toggle();
        // $('.process').toggle();  
        window.location.reload() //刷新網頁
})
  
    var j = Math.floor(Math.random()*59)+1; 
    
    $('.sign-btn').on('click',function begin(){

            console.log(j);
            alert('您抽到的籤為第:'+j+'籤')
            $('.sign-content').toggle();
            $('.sign-txt').html('<p style="text-indent:0px;">您的籤為第:'+j+'籤<br></p>');
            // $('.sign-btn').off('click');   方法一 缺點按鈕還是可以點擊但沒有功能
            $(".sign-btn").attr("disabled", true);
            
    });
 


          
});

function round(){
    $('.process').toggle();
$('#result-img').html(
    `<div id='animation' style="display: flex;">
                <img src="./img/Cover.png" alt="">
                <img src="./img/open.png" alt="">
                
            </div>`
    )
    setTimeout(round1,1000)
}

// ＝＝＝＝＝＝第一回合
function round1(){
    // $('.process').toggle();
    var i = Math.floor(Math.random()*3); 
   if(i==2){
        $('#result-img').html(
        `<img src="./img/result${i}.png" alt="">`
        );
        $('#round2').toggle();
        // $('#round1').toggle();
        $('#result').html(
           `累積一個聖筊・1/3`    
       );        
       console.log(i);                       
   }else if(i==0){
        // $('#round1').toggle();
        $('#result-img').html(
            `<img src="./img/result${i}.png" alt="">`
           );
        $('#Again').toggle();
        $('#result').html(
            '笑筊,再向神明說明仔細點試試看'
        );
        console.log(i);
   }else{
        // $('#round1').toggle();
        $('#result-img').html(
            `<img src="./img/result${i}.png" alt="">`
           );
        $('#Again').toggle();
        $('#result').html(
            '陰筊,再向神明誠心的請求'
        );
        console.log(i);
   };    
   $("#round1").attr("disabled", true);
};


// ＝＝＝＝＝＝第二回合
function round2(){
    var i = Math.floor(Math.random()*3); 
    if(i==2){ 
        $('#result-img').html(
            `<img src="./img/result${i}.png" alt="">`
           );
        $('#round2').toggle();
        $('#round3').toggle();
        $('#result').html(
           `累積兩個聖筊・2/3`
       )                      
       console.log(i);
   }else if(i==0){
    $('#result-img').html(
        `<img src="./img/result${i}.png" alt="">`
       );
    $('#round2').toggle();
    $('#Again').toggle();
    $('#result').html(
           '笑筊,再向神明說明仔細點試試看'
       )
       console.log(i); 
   }else{
    $('#result-img').html(
        `<img src="./img/result${i}.png" alt="">`
       );
    $('#round2').toggle();
    $('#Again').toggle();
    $('#result').html(                    
        '陰筊,再向神明誠心的請求'
       )
       console.log(i);
   }   
   $('#round1').off('click');      
}

// ＝＝＝＝＝＝第三回合
function round3(){
    var i = Math.floor(Math.random()*3); 
    
    if(i==2){
        
       $('#result').html(
         '三個聖筊！！去解籤吧'
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
           '笑筊,再向神明說明仔細點試試看'
         );
         $('#round3').toggle();
         $('#Again').toggle();
        console.log(i);                   
   }else{
    $('#result-img').html(
        `<img src="./img/result${i}.png" alt="">`
       );
    $('#result').html(
       '"陰筊"再向神明誠心的請求'
       )
       $('#round3').toggle();
   $('#Again').toggle();
   console.log(i);  
   }    
}




