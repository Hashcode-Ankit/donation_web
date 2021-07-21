var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
   autoplay:true,
   margin: 10,
   autoplayTimeout:1500,
   autoplayHoverPause:true
});
$('.play').on('click',function(){
   owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
   owl.trigger('stop.owl.autoplay')
});
function myMap() {
   var mapProp= {
     center:new google.maps.LatLng(51.508742,-0.120850),
     zoom:8,
   };
   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
   }
