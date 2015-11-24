$(document).ready(function() {
   var $div = $("#list_view");
	$.getJSON("json/canchas.json",function(result){

  var data = result;
  var data2='';
  var poblacionActual = '';
    for(var item in data){
      var title = data[item].First_POB1;

      if ( poblacionActual.equal(title) ) {
        data2 += '<p>'+  data[item].First_NOM_ +' </p></br>';
      } else {
        data2 += '<p>'+  data[item].First_NOM_ +' </p></br>';
        var content = '<div data-role="collapsible" data-collapsed="false"><h1>' + title +
        '</h1>'+  data2 +'</div>';
      }
      poblacionActual = title;
      if (!poblacionActual.equal(title)) {
          $div.append(content);
      }

    }
  $('#list_view').collapsibleset('refresh');
  });
});
