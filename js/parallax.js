$(document).ready(function() {
 
  // mendapatkan nilai titik scroll bagian atas saat halaman dibuka
  var initScrollTop = $(window).scrollTop();
 
  // mengubah posisi background ketika melakukan scroll
  $(parallax1).css({'background-position-y' : (initScrollTop/4)+'%'});
 
  // Saat user melakukan scroll
  $(window).scroll(function() {
    
    // mendapatkan nilai titik scroll terbaru
    var scrollTop = $(window).scrollTop();
    
    // menentukan posisi background yang baru
    $(parallax1).css({'background-position-y' : (scrollTop/4)+'%'});
    
  });
});