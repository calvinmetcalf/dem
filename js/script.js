/* Author:

*/
var deal =  function(data){
    var v = data.query.results.dem.town;
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
     });
      $(".tablesorter").tablesorter(); 
};
var eURL = 'calvinmetcalf.github.com/dem/dem.xml';
var set = 'pop';
 var yqlurl = 'http://query.yahooapis.com/v1/public/yql?format=json&q=select%20*%20from%20xml%20where%20url%3D';
$(function() {
$.get(yqlurl + "'" + encodeURIComponent(eURL) + "'",
function(data){
    deal(data);
    },"jsonp");
   
});
