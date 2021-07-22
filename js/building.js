$(document).ready(function () {


    $('#tab1').click(function () {
        $('#content-1').html(
            `
            <div class="tabs-item">
                <h1 class="title">【建築形式與配置格局】 </h1>
                <div class="item-txt">

                    <h2>一樓平面圖：</h2>
                    <div class="buildingtxt"> 
                        <p><div class="txtchange">1. 牌樓。</div></p>
                        <p><div class="txtchange">2. 圍牆、主入口：</div>廟前方左右兩側築紅色圍牆，牆頂黃色琉璃瓦，牆前築矮灌木，以隔絕內外。圍牆正中開門，是主要出入口。<br></p>
                        <p><div class="txtchange">3. 洞窟內大觀音菩薩像。</div></p>
                        <p><div class="txtchange">4. 金爐亭。</div></p>
                        <p><div class="txtchange">5. 拜殿：</div>拜殿亦稱拜亭，設供桌及香爐，供桌分外供桌及內供桌，桌下供奉虎爺，香爐亦是內、外各一個，外香爐即天公爐，金銅打造，圓形大爐，爐耳外張，爐腳架高底座，爐唇立支柱，上架圓形鑽尖頂。<br></p>
                        <p><div class="txtchange">6. 七爺、八爺：</div>七爺位於正殿外左側，八爺位於正殿外右側。</p>
                        <p><div class="txtchange">7. 正殿：</div>主殿神龕（不開放信眾入內）。</p>
                        <p><div class="txtchange">8. 護龍：</div>左護龍闢為服務辦公處，右護龍則沒開口或開窗。</p>
                        <p><div class="txtchange">9. 洗手間：</div>位於右護龍外側。</p>
                        <br>
                        <p><div class="txtchange">二樓介紹：</div>
                        左護龍服務辦公處旁的樓梯，可通二樓。二樓主室為大雄寶殿，正中主桌供奉三寶佛，大雄寶殿前並設有客誦桌椅。二樓左護龍為會議室，右護龍為餐廳。臺灣省城隍廟的設備功能完善並齊全。</p>
                    </div>
                    <div class="buildpic">
                        <img src="./img1/一樓平面圖.jpg" alt="一樓平面圖" width="550" height="550">
                    </div>         
                </div>
            </div>
        </div>        
   


            `
        )
    })

    $('#tab2').click(function () {
        $('#content-1').html(

            `
            <div class="tabs-item">
                <h1 class="title">【一樓大殿神龕及供像】
                </h1>
                <div class="item-txt">
                    <div class="sidebar2">
                        <div class="lanpa">
                        <div class="ball">
                            <a href="#wenwu"><img src="./img1/文武判官圈圈.png" width="140" height="140" id="wenchunball"></a>
                            <a href="#wenchun"><img src="./img1/文昌圈圈.png" width="140" height="140" id="wenchunball"></a>
                            <a href="#chunhuan"><img src="./img1/城隍夫人圈圈.png" width="140" height="140"
                                    id="wenchunball"></a>
                            <a href="#sansu1"><img src="./img1/東壁三司圈圈.png" width="140" height="140" id="wenchunball"></a>
                            <a href="#sansu2"><img src="./img1/西壁三司.png" width="140" height="140" id="wenchunball"></a>
                            <a href="#chiya"><img src="./img1/七爺八爺圈圈.png" width="140" height="140" id="wenchunball"></a>
                        </div>
                        </div>
                        <h2> 一、正殿南壁</h2>
                        <h3>（一）正中神龕</h3>
                        <p>城隍廟正殿神龕內，以藍色的牆面，鑲崁著金黃色的騰龍，翻滾於雲端波濤間，內安置神明像，一字排開。神龕正中部份，向前推出以木作屋形加上捲文雕花為飾的神龕，內供奉著主神省城隍爺坐像，神龕外圍雕琢複繁，左右有蟠龍柱，東西兩側柱上均嵌有對聯。
                        </p>
                        <hr>
                    </div>
                    <div class="main-areap2">
                        <img src="./img1/一樓大殿.jpg" height="370px">
                        <figure class="figurestyle">一樓大殿</figure>
                    </div>

                    <div class="sidebar2">
                        <h3 id="wenwu">（二）神龕內供像</h3>

                        <p>而神龕內中央部分，總計供奉著三尊城隍爺及兩對文武判官。其中居於木造屋形神鑫內位居正中者，是為鎮殿城隍爺，是最原始的主尊。另兩尊則為副駕及軟身城隍，共同鎮守內殿。
                        </p>
                        <ol class="txtchange" style="padding-left: 100px;">
                            <li>1. 鎮殿城隍爺神尊</li>
                            <li>2. 鎮殿副駕城隍神尊</li>
                            <li>3. 軟身城隍神尊</li>
                            <li>4. 出巡城隍神尊 </li>
                            <li>5. 文判官</li>
                            <li>6. 武判官</li>
                        </ol>

                    </div>
                    <div class="four">
                        <div class="fourpic">
                            <div class="imgboxp2">
                                <figcaption class="figcaptionstyle">
                                    <img src="./img1/鎮殿文判.png" alt="鎮殿文判官">
                                    <figure class="figurestyle">鎮殿文判官</figure>
                                </figcaption>
                            </div>
                            <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>像作立姿，身長較高，頭戴文官帽，腦後左右伸出雙翅，黑色長鬚垂及胸部，雙手握住笏板，倚向右脅，面相斯文。</p>
                            </div>
                        </div>

                        <div class="fourpic">
                            <div class="imgboxp2">
                                <figcaption class="figcaptionstyle">
                                    <img src="./img1/副駕文判.jpg" alt="副駕文判官">
                                    <figure class="figurestyle">副駕文判官</figure>
                                </figcaption>
                            </div>
                            <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>木製神龕東側，另有一尊木刻文判官，雙足一前一後作丁字型分開，立在六角形木壇上，右手持判官筆，左手持書卷，以表判人生死。</p>
                            </div>
                        </div>
                        <div class="fourpic">
                            <div class="imgboxp2">
                                <figcaption class="figcaptionstyle">
                                    <img src="./img1/鎮殿武判.png" alt="鎮殿武判官">
                                    <figure class="figurestyle">鎮殿武判官</figure>
                                </figcaption>
                            </div>
                            <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>面色錠青，雙目圓睜，細眉貼金，張口露齒，頭戴圓形帽，腦後左右突出桃型翅，身穿帝甲衣袍，右手握長筆，左手持卷軸。</p>
                            </div>
                        </div>
                        <div class="fourpic">
                            <div class="imgboxp2">
                                <figcaption class="figcaptionstyle">
                                        <img src="./img1/副駕武判.jpg" alt="副駕武判官">
                                        <figure class="figurestyle">副駕武判官</figure>
                                </figcaption>
                            </div>
                            <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>面呈墨綠顏色，緊閉雙唇，雙眉粗厚，顧骨貼金，頭戴武士頭眉冠，鎧甲嵌鑲珠寶，左手上舉節棍棒，右手伸出兩指，威武氣勢。</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="sidebar2" id="wenchun">
                    <h3>（三）正龕西側供像</h3>
                    <p>正龕東側的龕壁，底漆淡藍顏色，猶如淡藍色天空，壁上突塑大刀、疏文彩帶、金色葫蘆、雲朵、浪花等紋飾。
                    </p>
                    <ol class="txtchange" style="padding-left: 100px;">
                        <li>1. 文昌帝君</li>
                        <li>2. 魁星</li>
                        <li>3. 濟公禪師</li>
                        <li>4. 太歲斗座 </li>
                    </ol>
                    <hr>
                </div>
                <div class="four">
                    <div class="fourpic">
                        <div class="imgboxp2">
                            <figcaption class="figcaptionstyle">
                                <img src="./img1/文昌帝君.jpg" alt="文昌帝君">
                                <figure class="figurestyle">文昌帝君</figure>
                            </figcaption>
                        </div>
                        <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                            <p>文昌帝君作坐姿，頭戴文官帽。帝君五官俊秀， 氣宇軒昂，黑色長髯長及腰腹，表現出溫文爾雅的文人氣息。</p>
                        </div>
                    </div>
                    <div class="fourpic">
                        <div class="imgboxp2">

                            <figcaption class="figcaptionstyle">
                                <img src="./img1/魁星0.jpg" alt="魁星" >
                                <figure class="figurestyle">魁星</figure>
                            </figcaption>
                        </div>
                        <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                            <p>全身漆黑，頭頂突起，兩鬢生角，眉骨高聳，上身裸裎，下著褲裳，右手高舉長筆，左手緊握經卷，右足踩鱉魚，左足懸空踢斗。 </p>
                        </div>
                    </div>
                    <div class="fourpic">
                        <div class="imgboxp2">
                            <figcaption class="figcaptionstyle">
                                <img src="./img1/濟公禪師.jpg" alt="濟公禪師" >
                                <figure class="figurestyle">濟公禪師</figure>
                            </figcaption>
                        </div>
                        <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                            <p>頭戴僧帽，面部鼓腮張口露齒，滿臉笑意，身穿交領右衽服，服長掩膝，腰身繫帶，右手執扇，左手托葫蘆。 </p>
                        </div>
                    </div>
                    <div class="fourpic">
                        <div class="imgboxp2">
                            <figcaption class="figcaptionstyle">
                                <div class="fourpic">
                                    <img src="./img1/太歲斗座.jpg" alt="太歲斗座">
                                    <figure class="figurestyle">太歲斗座</figure>
                            </figcaption>
                        </div>
                        <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                            <p>濟公座像之旁，供有太歲斗座，座內插有劍、尺、扇、鏡、秤稱、剪刀、燈、米等，以及值年太歲牌位。 </p>
                        </div>
                    </div>
                </div>
                <div class="sidebar2" id="chunhuan">
                    <h3>（四）正龕東側神龕及供像</h3>
                    <p>東側神龕內供主神為兩尊城隍夫人，其中接近木造主尊神鑫者，身形體積尺度較小，是與鎮殿城隍神尊同時塑作，稱為「鎮殿城隍夫人」，
                        至於身旁體形較大者，是與鎮殿副駕城隍神尊同組的木刻作品，「副駕城隍夫人」。</p>
                    <hr>
                </div>

                <div class="two">
                    <div class="twopic">
                        <div class="imgboxp2">
                            <figcaption class="figcaptionstyle">
                                <img src="./img1/鎮殿城隍夫人.jpg" alt="鎮殿城隍夫人">
                                <figure class="figurestyle">鎮殿城隍夫人</figure>
                            </figcaption>
                        </div>

                            <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>頭戴圓彩冠，五官端正，耳垂厚實，身穿龍鳳文金色長袍，腰圈硬質綬帶，坐方形寬椅，袍服下端露出三寸金蓮。 </p>
                            </div>
                    </div>
                    <div class="twopic">
                        <div class="imgboxp2">

                            <figcaption class="figcaptionstyle">
                                <img src="./img1/副駕城隍夫人.jpg" alt="副駕城隍夫人">
                                <figure class="figurestyle">副駕城隍夫人</figure>
                            </figcaption>
                        </div>

                        <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                            <p>坐在高廣大椅上，頭戴高廣花釵冠，冠飾垂及雙腿，身穿華貴錦袍，為木雕作品。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="sidebar2">
                    <h2 id="sansu1">二、正殿東壁神龕及神像</h2>
                    <p>正殿東西兩壁，另安置木製櫥櫃式神龕，其中東壁神龕寬155.4 公分，上端寬158 公分。神龕前下桌高86 公分深77
                        公分。神龕內壁以線刻浮雕一隻白色龍首獸身足蹄的神獸像，像上並有金色彩繪，十分亮麗。東龕神龕龕內供三神像，曰「獎善司」、「糾察司」、「陰陽司」。</p>
                    <hr>
                </div>
                <div class="threepic">
                            <img src="./img1/獎善司三司.jpg">
                    <figure class="figurestyle">「獎善司」、「糾察司」、「陰陽司」</figure>

                </div>
                <div class="sidebar2">
                    <h2 id="sansu2">三、正殿西壁神龕及神像</h2>
                    <p>西壁神龕的造形與尺寸，與東壁神龕一式，龕內供三神像，曰：「速報司」、「延壽司」、「罰惡司」。三司神像均頭戴圓形冠帽，身上袍服衣飾，一如東壁三司神像，而整體造像外形姿勢雖一式，但冠帽鬚髮顏色有別，手勢稍有差異，持物亦各不相同。其中「速報司」臉呈黑色，黑鬚垂腹，圓帽頂上，另鉤金冠，雙目圓瞪，右手插腰，右腿橫置，更添威儀。
                    </p>
                    <hr>
                </div>
                <article class="threepic">
                    <img src="./img1/延壽司三司.png">
                    <figure class="figurestyle">「速報司」、「延壽司」、「罰惡司」</figure>
                </article>
                <div class="sidebar2">
                    <h2 id="chiya">四、大殿外神像</h2>
                    <p>大殿左右側門外，尚供奉著兩尊侍神像，即謝將軍與范將軍：</p>
                    <hr>
                </div>
                <div class="two1">
                    <div class="twopic1">
                        <div class="imgboxp2">
                        <figcaption class="figcaptionstyle">
                            <img src="./img1/范將軍.jpg" alt="范將軍">
                            <figure class="figurestyle">范將軍</figure>
                        </figcaption>
                        </div>
                        <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                            <p>俗稱八爺，頭戴大形放射狀珠花冠，身披錦繡彩帶服，面寬廣黝黑，身軀矮短，與七爺身材長短正相對比。坐在高廣大椅上。
                            </p>
                        </div>
                    </div>
                    <div class="twopic1">
                        <div class="imgboxp2">
                        <figcaption class="figcaptionstyle">
                            <img src="./img1/謝將軍.jpg" alt="謝將軍">
                            <figure class="figurestyle">謝將軍</figure>
                        </figcaption>
                        </div>
                        <div class="xd xdp2" style="background-color: rgba(7, 6, 7, 0.26);">
                            <p>俗稱七爺，頭戴大形放射狀珠花冠，雙眼圓睜，面色黝黑，顴骨突出，面呈狹長，張口露齒，身披錦繡彩帶服。
                            </p>
                        </div>

                    </div>
                </div>
        </div>
                
                `

        )

    })
    $('#tab3').click(function () {
        $('#content-1').html(
            `
            <div class="tabs-item">
                <h1 class="title">【二樓大雄寶殿供像】</h1>
                <div class="item-txt">
                    <div class="sidebar2">
                        <div class="ball">
                            <a href="#phozu"><img src="./img1/釋迦摩尼佛圈圈.png" width="150" height="150"
                                    id="wenchunball"></a>
                            <a href="#zun"><img src="./img1/尊者圈圈.png" width="150" height="150" id="wenchunball"></a>
                            <a href="#guan"><img src="./img1/觀世音圈圈.png" width="150" height="150" id="wenchunball"></a>
                            <a href="#ryu"><img src="./img1/呂仙祖圈圈.png" width="150" height="150" id="wenchunball"></a>
                            <a href="#di"><img src="./img1/地藏王圈圈.png" width="150" height="150" id="wenchunball"></a>
                            <a href="#guangon"><img src="./img1/關公圈圈.png" width="150" height="150" id="wenchunball"></a>
                        </div>
                        <h2>一、中央上供桌供像</h2>
                        <h3>1. 釋迦牟尼佛</h3>
                        <p id="phozu">
                            正中主尊供像釋迦牟尼佛，為石質雕像。釋迦牟尼佛為佛教教主，兩千五百年前誕生於印度。此尊佛像端身正坐於供桌正中蓮臺上，坐姿挺拔。佛頭頂肉髻高高突起，五官端正圓滿，兩眼下垂，兩耳及肩。佛身著覆蓋兩肩袍服，胸部敞開，有卍字文。佛右手上舉及肩，作施無畏印，左手置腹前作定印，雙足結跏趺坐。佛身後圓形投光雙圈，外罩火燄紋身光背，全像表現智慧光明，圓滿端莊，威儀具足。
                        </p>
                        <hr>
                    </div>
                    <div class="main-areap3">
                        <img src="./img1/2F釋迦摩尼佛.jpg">
                        <figure class="figurestyle">釋迦摩尼佛</figure>
                    </div>
                    <div class="sidebar2">
                        <h3>2. 三寶佛像</h3>
                        <h3>3. 彌勒佛</h3>

                        <div class="two2">
                            <div class="twopic2">
                                <div class="imgbox">
                                    <figcaption class="figcaptionstyle">
                                        <img src="./img1/2F三寶佛像.jpg" alt="三寶佛像">
                                        <figure class="figurestyle">三寶佛像</figure>
                                    </figcaption>
                                </div>
                                <div class="xd p3" style="background-color: rgba(7, 6, 7, 0.26);">
                                    <p>三尊佛像一式坐姿、手式與服飾，均頂有青粓色螺狀髮文，披蓋兩肩的袍服，敞前胸，兩手交疊在腹前共作法界定印，並有持物。
                                    </p>
                                </div>
                            </div>
                            <div class="twopic2">
                                <div class="imgbox">

                                    <figcaption class="figcaptionstyle">
                                        <img src="./img1/2F彌勒佛.jpg" alt="彌勒佛">
                                        <figure class="figurestyle">彌勒佛</figure>
                                    </figcaption>
                                </div>
                                <div class="xd p3" style="background-color: rgba(7, 6, 7, 0.26);">
                                    <p>彌勒佛光頭無髮，大耳貼肩，顏面是張口露齒現笑容，身軀矮短以袒胸鼓腹露乳為姿。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h3 id="zun">4. 韋馱尊者與伽藍尊者</h3>
                        <p>此二尊護法尊者，神像不大，但十分精緻。中供桌之前的下供桌，呈正方形正中另一小形彌勒佛像，前置香爐供具，左右有鐘罄、木魚等法器。
                        </p>
                    </div>

                    <div class="two1">
                        <div class="twopic1">
                            <div class="imgbox">
                                <figcaption class="figcaptionstyle">
                                    <img src="./img1/2F伽藍尊者.jpg" alt="伽藍尊者">
                                    <figure class="figurestyle">伽藍尊者</figure>
                                </figcaption>
                            </div>
                            <div class="xd p3" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>左立像伽藍尊者，頭戴圓形帽，臉若紅棗，長鬚及至胸腹，手持大刀作武將打扮，有傳統關雲長的架式。
                                </p>
                            </div>
                        </div>
                        <div class="twopic1">
                            <div class="imgbox">

                                <figcaption class="figcaptionstyle">
                                    <img src="./img1/2F韋馱尊者.jpg" alt="韋馱尊者">
                                    <figure class="figurestyle">韋馱尊者</figure>
                                </figcaption>
                            </div>
                            <div class="xd p3" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>中供桌兩側右立像韋馱尊者，面色淡紅，頭戴戰盔，身穿甲冑，手持鐧，姿勢俊秀威武。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar2">
                        <h2 id="guan">二、西側供桌供像</h2>
                        <h3>1. 內側「觀音菩薩」坐像</h3>
                        <p>內側組供桌分上下供桌，上供桌供觀音菩薩像為主尊，觀音頂梳高髮髻，髻上飾化佛冠，髻頂披巾帽，胸前飾瓔珞，兩肩披掛漢式服，袍服寬鬆，兩袖寬闊，觀音右手上舉，持念珠，左手持經卷，雙腿結跏跌坐於大蓮花座上。
                        </p>
                    </div>
                    <article class="main-areap4">
                        <div class="adjust">
                            <div class="imgbox">
                                <img src="./img1/2F主尊觀音.jpg">
                                <figure class="figurestyle">主尊觀音</figure>
                            </div>

                            <!-- <div class="xd p3" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>主尊觀音前上供有木刻跏跌坐觀音，背後頭光、身光均為透雕，全身坐姿莊嚴，雙手結定印，表現了禪定與智慧。此坐姿觀音兩旁，左為青花瓷塑作半跏觀音法像。右為立姿觀音，左手拿淨瓶，右手持念珠，姿態自在。
                                </p>
                            </div> -->
                        </div>
                    </article>
                    <div class="sidebar2">
                        <h3 id="ryu">2. 外側「孚佑帝君」神像</h3>
                        <p>外側組供桌分上下供桌。上供桌正中供奉呂祖，頭戴道帽，身披道服，面容端莊，臉色紅潤，人中以下五絡鬚，右手持拂塵，左手撫膝，袍服覆蓋雙腿，具文官的氣質及道士的威儀。此呂祖的中、小身法像，原是供奉於民間，民國七十四年因故轉供奉至此，原像兩旁尚供有持印侍童及持劍侍童。持印侍童接近文官打扮，手捧寶印。持劍侍童甲胃及身，腰間配劍，面色青綠，是武官形像。
                        </p>
                    </div>
                    <article class="main-areap4">
                        <div class="adjust">
                            <div class="imgbox">
                                <img src="./img1/2F呂仙祖0.jpg">
                                <figure class="figurestyle">呂仙祖</figure>
                            </div>
                            <!-- <div class="xd p3" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>劍童印童，原是泥塑，因部分有損毀，遂於民國九十一年另新雕劍、印二童，稱「劍、印二將軍」。又因供桌較大，廟方遂將呂祖，依原像加大尺寸，重塑一組金身，原印童劍童，藏諸於櫃，新塑侍神與呂祖大中小三尊金身計五尊，同供於供桌上。
                                </p>
                            </div> -->
                        </div>
                    </article>
                    <div class="sidebar2">
                        <h2 id="di">三、東側上供桌供像</h2>
                        <h3>1. 內側「地藏王菩薩」像</h3>
                        <p>東側內側上供桌主尊供像地藏菩薩頭帶毘盧冠，冠上鑲紅色珠寶，五官端莊，兩耳厚重，身披三層袍服，底層白服，中層為金色鑲邊交領袍服，外層為方型袈娑百納衣，左胸掛鉤，雙腿結跏跌坐於束腰仰蓮寶座上。此主尊地藏之前方，尚有一尊小型的木刻地藏尊像，頸後懸光輪，有火焰文，右手持錫杖，
                            左手托摩尼寶珠。</p>
                    </div>
                    <article class="main-areap4">
                        <div class="adjust">
                            <div class="imgbox">
                                <img src="./img1/2F地藏王.jpg">
                                <figure class="figurestyle">地藏王</figure>
                            </div>
                            <!-- <div class="xd p3" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>地藏，梵名乞叉底槃沙（Ksiti-garbha），依大集大乘地藏十輪經曰「安忍不動，猶如大地。靜慮深密，猶如秘藏。」故稱地藏。地藏菩薩在忉利天蒙釋迦佛的囑付，於釋尊涅槃後，至彌勒菩薩成佛之間的無佛時代，發願來娑婆世界教化六道眾生，且自誓渡盡六道眾生方成佛。因有「地獄不空，誓不成佛」的願心誓言，故每逢超渡祖先時，必請出地藏菩薩。
                                </p>
                            </div> -->
                        </div>
                    </article>
                    <div class="sidebar2">
                        <h3 id="guangon">2. 外側「關聖帝君」像</h3>
                        <p>東側外側上供桌主尊供像為關聖帝君，頭頂圓帽，面色紅潤，形如紅案，劍眉軒昂，黑色長鬚及腰，肩披甲胃，腰束硬質綬帶，手握春秋經，身坐於高廣扶手椅之上。
                            左手托摩尼寶珠。關公身前兩側，立著周倉與關平，一位于握環頭七星大刀，黑臉圓睛，虯髯外張，神情威武。一位右手舉寶印，面相溫和，冠服華麗，有文官氣質。</p>
                    </div>
                    <article class="main-areap4" style="padding-bottom: 15px;">
                        <div class="adjust">
                            <div class="imgbox">

                                <img src="./img1/2F關聖帝君.jpg">
                                <figure class="figurestyle">關聖帝君</figure>
                            </div>
                            <!-- <div class="xd p3" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>原名關羽，字雲長，三國時代的武將，與劉備、張飛在桃源結拜為兄弟，為人忠勇信義，統率大軍，轉戰南北，助劉備完成抗曹大業，卒後被封為漢亭侯，後被遵稱為「關聖帝君」。又具佛教文獻所載，關羽死後，曾接受佛法教化，皈依隋代智顗大師，發願守護伽藍信眾，因此在佛寺門前站的伽藍護法尊者，便是關羽。
                                </p>
                            </div> -->
                        </div>
                    </article>


                </div>
            </div>
            `
        )
    })
    $('#tab4').click(function () {
        $('#content-1').html(
            `
            <div class="tabs-item">
                <h1 class="title">【大雄寶殿前供像】</h1>
                <div class="item-txt">
                    <div class="sidebar2">

                        <p>大雄寶殿之前室，另開闢一空間，內置桌椅，可供信徒研讀經典、課誦、禮拜、共修之處所。此室南側，即大雄寶殿門額下方，立著30尊阿彌陀佛。東西兩側壁，另供觀世音菩薩群像，及地藏菩薩群像。
                        </p>
                        <hr>
                    </div>
                    <!-- <article class="main-area">
                        <img src="./img1/大雄寶殿前室南側阿彌陀佛群像.jpg" width="500px" height="200px" style="margin: auto;">
                        <figure class="figurestyle">阿彌陀佛群像</figure>
                    </article> -->
                    <div class="two3">
                        <div class="twopic3">
                            <div class="imgbox">
                                <figcaption class="figcaptionstyle">
                                    <img src="./img1/大雄寶殿前室上端地藏王菩薩群像.jpg" alt="地藏王菩薩">
                                    <figure class="figurestyle">地藏王菩薩群像</figure>
                                </figcaption>
                            </div>
                            <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>室西側上端以木製分隔成五個佛龕，每龕橫置三排，每排供十尊觀音坐像，共計每龕三十尊觀音菩薩，全壁計一百五十尊觀音像。佛龕下端壁面是以一條條紅紙寫上功德主姓名。
                                </p>
                            </div>
                        </div>
                        <div class="twopic3">
                            <div class="imgbox">
                                <figcaption class="figcaptionstyle">
                                    <img src="./img1/大雄寶殿前室上龕觀音菩薩群像.jpg" alt="音菩薩" >
                                    <figure class="figurestyle">觀音菩薩群像</figure>
                                </figcaption>
                            </div>
                            <div class="xd" style="background-color: rgba(7, 6, 7, 0.26);">
                                <p>正中下端供桌上，另供一尊主像觀音，頂戴寶冠，胸垂瓔珞，一手上舉作說法式，像前擺設香爐、燈具、瓶花等，以示供養。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar2">
                        <p>室西側上端以木製分隔成五個佛龕，每龕橫置三排，每排供十尊觀音坐像，共計每龕三十尊觀音菩薩，全壁計一百五十尊觀音像。佛龕下端壁面是以一條條紅紙寫上功德主姓名。正中下端供桌上，另供一尊主像觀音，頂戴寶冠，胸垂瓔珞，一手上舉作說法式，像前擺設香爐、燈具、瓶花等，以示供養。
                        </p>
                    </div>
                    <h1 class="title">【庭院的觀世音菩薩像】</h1>
                    <div class="sidebar2">
                        <p>大約民國七十五年夏天，城隍廟有一女信徒稱住家附近有一尊觀音佛像被棄置路旁，她每天皆前往擦拭維護法相莊嚴，但因即將移居海外，可否將菩薩請至廟內供奉，是日即將"祂"載回，因佛像高大，只能暫時置於廟埕中間，三日後觀音菩薩托夢，謂來者是客，佛像位於廟中央擋住主神城隍爺的視線，非常不敬希望另擇地方安奉，當時因經費關係，以壓克力搭建，將菩薩移奉於廟埕側邊。
                        </p>
                    </div>
                    <article class="main-area">
                                <img src="./img1/庭院觀世音像.jpg" width="400px" height="400px" class="mainimg1">
                                <figure class="figurestyle">庭院觀世音像</figure>
                    </article>
                    
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
        for (var i = 2; i <= 12; i++) {
            $(".row").append
                (
                    // '<li><img src="img/c'+i+'.jepg"></li>'
                    `<li class="gallery__item col" ><a href='#'class="gallery__item-link"><img src="img/c${i}.jpeg" class='gallery__item-image'>`
                )
            $('span').on('click', opentxt);
            function opentxt() {

                $('.txtshow').toggle();
                $('span').text('展開/收回');

            };

        };

    })


})

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.revearl(`.main-areap2`,{
    origin: 'top',
    interval: 100,
})


