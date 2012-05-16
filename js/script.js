/* Author:

*/
var l,t2000,t2010,t2017,t2020,t2025,t2030,t2035;
var tq = 'all';
var w ='pop';
var deal =  function(){
   
    t2000 = 0;
     t2010 = 0;
     t2017 = 0;
     t2020 = 0;
     t2025 = 0;
     t2030 = 0;
     t2035 = 0;
 
     $.each(l,function(i,e){
        if((tq=="all")||(tq==e.name)||(tq==e.county)||(tq==e.RPA))
        {
            if(w=='pop'){
             var ww = e.pop;   
            }else if(w=='hh'){
                var ww = e.hh;
            }else if(w=='emp'){
                var ww = e.emp;
            }
    var Town = '<tr><td>' + e.name;
    var County ='</td><td>' + e.county;
    var RPA ='</td><td>' + e.RPA;
    var y2000 ='</td><td>' + ww.y2000;
    var y2010 ='</td><td>' + ww.y2010;
    var y2017 ='</td><td>' + ww.y2017;
    var y2020 ='</td><td>' + ww.y2020;
    var y2025 ='</td><td>' + ww.y2025;
    var y2030 ='</td><td>' + ww.y2030;
    var y2035 ='</td><td>' + ww.y2035 + '</td></tr>';
     
    $('.stats').append(Town + County + RPA + y2000 + y2010 + y2017 + y2020 + y2025 + y2030 + y2035);
    t2000 += parseInt(ww.y2000);
    t2010 += parseInt(ww.y2010);
    t2017 += parseInt(ww.y2017);
    t2020 += parseInt(ww.y2020);
    t2025 += parseInt(ww.y2025);
   t2030 += parseInt(ww.y2030);
     t2035 += parseInt(ww.y2035);
        }
     });
    $('.v2000').empty().append(t2000);
     $('.v2010').empty().append(t2010);
      $('.v2017').empty().append(t2017);
      $('.v2020').empty().append(t2020);
      $('.v2025').empty().append(t2025);
      $('.v2030').empty().append(t2030);
      $('.v2035').empty().append(t2035);
    //  $(".tablesorter").tablesorter({sortList: [[0,0]]}); 
};
var eURL = 'calvinmetcalf.github.com/dem/dem.xml';
//var set = 'pop';
 var yqlurl = 'http://query.yahooapis.com/v1/public/yql?format=json&q=select%20*%20from%20xml%20where%20url%3D';
$(function() {
  
$.get(yqlurl + "'" + encodeURIComponent(eURL) + "'",
function(data){
    l = data.query.results.dem.town;
    $('.pop').button('toggle');
    deal();
    },"jsonp");
   $('.town').change(function () {
       tq = $('.town').val();
       $('.stats').empty();
       deal();
       });
       $('.county').change(function () {
       tq = $('.county').val();
       $('.stats').empty();
       deal();
       });
        $('.RPA').change(function () {
       tq = $('.RPA').val();
       $('.stats').empty();
       deal();
       });
        $('.pop').click(function () {
              $('.pop').button('toggle');
              if(w=='pop'){
                  $('.pop').button('toggle');
                
              }else if(w=='hh'){
                  $('.hh').button('toggle');
              }else if(w=='emp'){
                  $('.emp').button('toggle');
              }
         w='pop';   
        
         $('.stats').empty();
         deal();
        
});
 $('.hh').click(function () {
      $('.hh').button('toggle');
      if(w=='pop'){
                  $('.pop').button('toggle');
                
              }else if(w=='hh'){
                  $('.hh').button('toggle');
              }else if(w=='emp'){
                  $('.emp').button('toggle');
              }
         w='hh';  
        
         $('.stats').empty();
         deal();
});
$('.emp').click(function () {
    $('.emp').button('toggle');
    if(w=='pop'){
                  $('.pop').button('toggle');
                
              }else if(w=='hh'){
                  $('.hh').button('toggle');
              }else if(w=='emp'){
                  $('.emp').button('toggle');
              }
         w='emp';   
         $('.stats').empty();
         deal();
        
});
});
   
