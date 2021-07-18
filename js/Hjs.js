// 服務頁預約JS
function fnsubmit() {
     var customname, customsex, customdate, customzodiac, customaddress, customitem;
     customitem = document.getElementById("service").value;
     customname = document.getElementById("name").value;
     customsex = document.getElementById("sex").value;
     customdate = document.getElementById("date").value;
     customzodiac = document.getElementById("zodiac").value;
     customaddress = document.getElementById("address").value;
     var msg;
     msg = "請再次確認資料" + "\n" + "服務項目：" + customitem + "\n" +  "姓名：" + customname + "\n" +"性別：" + customsex + "\n" + "祈福者出生年分：" + customdate + "\n" + "祈福者生肖：" + customzodiac + "\n" + "祈福者地址：" + customaddress;
     alert(msg);
}
// 和緩的捲到首頁
// $(document).ready(function () {
//      // Add smooth scrolling to all links
//      $("a").on('click', function (event) {

//           // Make sure this.hash has a value before overriding default behavior
//           if (this.hash !== "") {
//                // Prevent default anchor click behavior
//                event.preventDefault();

//                // Store hash
//                var hash = this.hash;

//                // Using jQuery's animate() method to add smooth page scroll
//                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//                $('html, body').animate({
//                     scrollTop: $(hash).offset().top
//                }, 800, function () {

//                     // Add hash (#) to URL when done scrolling (default click behavior)
//                     window.location.hash = hash;
//                });
//           } // End if
//      });
// });