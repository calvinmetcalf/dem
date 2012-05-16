/* Author:

*/
var deal =  function(data){
    var v = data.query.results.dem.town;
    var t2000 = 0;
    var t2010 = 0;
    var t2017 = 0;
    var t2020 = 0;
    var t2025 = 0;
    var t2030 = 0;
    var t2035 = 0;
 
     $.each(v,function(i,e){
        
        
    var Town = '<tr><td>' + e.name;
    var County ='</td><td>' + e.county;
    var RPA ='</td><td>' + e.RPA;
    var y2000 ='</td><td>' + e.pop.y2000;
    var y2010 ='</td><td>' + e.pop.y2010;
    var y2017 ='</td><td>' + e.pop.y2017;
    var y2020 ='</td><td>' + e.pop.y2020;
    var y2025 ='</td><td>' + e.pop.y2025;
    var y2030 ='</td><td>' + e.pop.y2030;
    var y2035 ='</td><td>' + e.pop.y2035 + '</td></tr>';
     
    $('.stats').append(Town + County + RPA + y2000 + y2010 + y2017 + y2020 + y2025 + y2030 + y2035);
    t2000 += parseInt(e.pop.y2000);
    t2010 += parseInt(e.pop.y2010);
    t2017 += parseInt(e.pop.y2017);
    t2020 += parseInt(e.pop.y2020);
    t2025 += parseInt(e.pop.y2025);
   t2030 += parseInt(e.pop.y2030);
     t2035 += parseInt(e.pop.y2035);
     });
     $('.headr').append('<tr><td></td><td></td><td>totals</td><td>' + t2000 + '</td><td>' + t2010 + '</td><td>' + t2017 + '</td><td>' + t2020 + '</td><td>' + t2025 + '</td><td>' + t2030 + '</td><td>' + t2035 + '</td></tr>');
      $(".tablesorter").tablesorter({sortList: [[0,0]]}); 
};
var eURL = 'calvinmetcalf.github.com/dem/dem.xml';
//var set = 'pop';
 var yqlurl = 'http://query.yahooapis.com/v1/public/yql?format=json&q=select%20*%20from%20xml%20where%20url%3D';
$(function() {
   
$.get(yqlurl + "'" + encodeURIComponent(eURL) + "'",
function(data){
    deal(data);
    },"jsonp");
   
});
