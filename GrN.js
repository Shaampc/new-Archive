//<![CDATA[
/*
Penulis : Abdi Syahputra Harahap
Web : bungabdi.blogspot.com
*/
if (chat_whatsapp=="on") {
sendwhatsapp(number_whatsapp);
function sendwhatsapp(numberphone) {
var style = document.createElement('style');
  style.innerHTML =
 `
/* WIDGET WHATSAPP */
div#widget_whatsapp_bungabdi{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-99;opacity:0;transition:.5s;background:rgba(0,0,0,0.5)}
div#widget_whatsapp_bungabdi.active{z-index:9999;opacity:1}
div#whatsapp{position:fixed;top:50%;left:50%;max-width:480px;width:95%;background:#fff;transform:translate(-50%,-50%);z-index:-1;opacity:0;border-radius:2px;border:0;overflow:hidden;transition:.5s}
div#whatsapp.active{z-index:999999;opacity:1}
.grid-wa {display:grid;grid-gap:10px;}
.grid-wa.rianseo {grid-template-columns: 1fr 1fr;}
#whatsapp .title {display:grid;width: 100%;grid-template-columns: 1fr auto;grid-column-gap: 10px;margin: 0;height: 60px;line-height: 60px;border-bottom: 1px solid rgba(0,0,0,.06);font-size: 14px;background: #fff;font-weight: 400;border-radius: 2px 2px 0 0;}
#whatsapp .title i {color:#2ecc71;font-size: 160%;display: inline-block;vertical-align: middle;margin-right: 10px;}
.wa-title{padding:0 20px;display: block;vertical-align: middle;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;color: #444;font-size: 110%;}
.wa-body{padding:20px;display:flex;flex-wrap:wrap;width:100%;box-sizing:border-box}
.wa-input{width:100%;background:transparent;border:0;margin-bottom:15px;padding:10px 15px;padding-left:40px;font-size:14px;box-shadow:inset 0 -1px 0 0 rgba(0,0,0,.08);outline:0}
a.submit{line-height:24px;padding:10px 15px;width:100%;max-width:200px;text-align:center;background:#2ecc71;margin:0;display:block;color:#fff;border-radius:2px;cursor:pointer}
a.submit:hover {background:#444;}
.wa-x{padding:0 20px;cursor:pointer;font-size:30px;color:#bbb;outline:none;border:none;background: transparent;}
.wa-body label{position:relative;display:block;width:100%;margin:0;padding:0}
.mahir{width:98%;padding:0 3px}
.mahir label{width:100%}
.wa-body i{position:absolute;z-index:0;display:inline-block;vertical-align:top;width:40px;text-align:center;font-size:16px;height:auto;background:transparent;box-shadow:none;color:rgba(0,0,0,.2)}
.wa-input:focus{box-shadow:inset 0 -1px 0 0 #0cc243}
a#wa-icon{font-size:30px;position:fixed;bottom:60px;right:10px;line-height:0;border-radius:30px;background:#fff;padding:0;height:60px;width:60px;line-height:60px;color:#2ecc71;box-shadow:0 5px 15px rgba(0,0,0,.08);z-index:99}
a#wa-icon::before{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
/* CSS TABLE */
 table {max-width: 100%;width: 100%;margin: 0;}
 table {border-collapse: collapse;border-spacing: 0;}
 table {border-collapse: collapse;border-spacing: 0;}
 table, img {max-width: 100%;height:auto;}
 iframe {max-width:100%;}
 .post-body table td {border:0;padding: 5px 0 10px;text-align: left;vertical-align: top;}
 .clear {clear: both;}
 .clear:after {visibility: hidden;display: block;font-size: 0;content: " ";clear: both;height: 0;}
 .count{position:absolute;display:inline-block;top:-2px;right:-2px;background:#fed859;color:rgba(0,0,0,.8);height:20px;line-height:20px;width:20px;border-radius:20px;font-size:10px;text-align:center;font-style:normal;font-weight:600;box-shadow:inset 0 -3px 0 rgba(0,0,0,.08)}
`;
  document.head.appendChild(style);
document.getElementById("send-whatsapp-bungabdi").innerHTML = `
<a class="fab fa-whatsapp" href="javascript:void(0);" id="wa-icon" onclick="openModal()"><span class="count">1</span></a> 
<div class="widget_whatsapp_bungabdi" id="widget_whatsapp_bungabdi"> 
</div> 
<div id="whatsapp" class="">
 <h3 class="title"> <span class="wa-title"><i class="fab fa-whatsapp"></i><b>Send it</b> WhatsApp!</span> <button class="wa-x" onclick="closeModal()">×</button> </h3> 
 <div class="wa-body"> 
   <input class="hubungi" type="hidden" value=`+numberphone+`/>
<div class="grid-wa whatsapp_bungabdi"> 
   <label> <i class="fa fa-user-circle"></i> <input class="nama wa-input bagi" placeholder="Full name.." type="text"/> </label> 
   <label> <i class="fa fa-envelope"></i> <input class="email wa-input bagi" placeholder="Email address.." type="email"/> </label> 
  </div> 
  <div class="mahir"> 
   <label> <i class="fa fa-comment"></i> <input class="pesan wa-input full" placeholder="Write a message.." type="text"/> </label> 
   <a class="submit">Send it <i class="far fa-paper-plane" style="width: 0;padding: 4px;"></i></a>
  </div> 
 </div> 
</div>
`;
}
function closeModal() {
document.getElementById('widget_whatsapp_bungabdi').classList.remove('active')
document.getElementById('whatsapp').classList.remove('active')
}
function openModal() {
document.getElementById('widget_whatsapp_bungabdi').classList.add('active')
document.getElementById('whatsapp').classList.add('active')
}<!--nextpage-->
// Onclick Whatsapp Sent!
$('#whatsapp .submit').click(WhatsApp);
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function WhatsApp() {
  var ph = '';
  if ($('#whatsapp .nama').val() == '') { // Check Name
      ph = $('#whatsapp .nama').attr('placeholder');
      alert('Silahkan tulis ' + ph);
      $('#whatsapp .nama').focus();
      return false;
  } else if ($('#whatsapp .email').val() == '') { // Check Email
      ph = $('#whatsapp .email').attr('placeholder');
      alert('Silahkan tulis ' + ph);
      $('#whatsapp .email').focus();
      return false;
  } else if ($('#whatsapp .pesan').val() == '') { // Check Pesan
      ph = $('#whatsapp .pesan').attr('placeholder');
      alert('Silahkan tulis ' + ph);
      $('#whatsapp .pesan').focus();
      return false;
  }  else if ($('#whatsapp .pesan').val() == '') { // Check Pesan
      ph = $('#whatsapp .pesan').attr('placeholder');
      alert('Silahkan tulis ' + ph);
      $('#whatsapp .pesan').focus();
      return false;
} else if (reg.test($('#whatsapp .email').val()) == false) { // Check Email Validation
      alert('Alamat E-mail tidak valid.');
      $('#whatsapp .email').focus();
       return false;
  } else { if (!confirm("Sudah menginstall WhatsApp?")) {
          window.open("https://www.whatsapp.com/download/");
      } else {
          // Check Device (Mobile/Desktop)
          var url_wa = 'https://web.whatsapp.com/send';
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
              url_wa = 'whatsapp://send/';
          }
          // Get Value
          var hubungi = $('#whatsapp .hubungi').val(),
                  via_url = location.href,
                  nama = $('#whatsapp .nama').val(),
                  email = $('#whatsapp .email').val(),
                  pesan = $('#whatsapp .pesan').val();
          $(this).attr('href', url_wa + '?phone=92 ' + hubungi + '&text=Hello, I am NQnia Visiter*' + nama + '* (' +email + ').. %0A%0A' + pesan + '%0A%0Avia ' + via_url);
          var w = 960,
                  h = 540,
                  left = Number((screen.width / 2) - (w / 2)),
                  tops = Number((screen.height / 2) - (h / 2)),
                  popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
          popupWindow.focus();
          return false;
      }
  }
}
}
//]]>