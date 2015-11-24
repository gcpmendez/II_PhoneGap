$(document).ready(function() {
   var $div = $("#list_view");
	$.getJSON("json/canchas.json",function(result){

  var data = result;
  var data2="";
  var title = "";
  var titleAnterior = "";

  for(var i = 0; i < data.length; i++) {
    title = data[i].First_POB1;
    if (title != titleAnterior) {
      for(var j = 0; j < data.length; j++) {
        titleAnterior = title;
        if(data[j].First_POB1 == title) {
          data2 += '<p>'+  data[j].First_NOM_ +' </p>';

        }
      }
      var content = '<div data-role="collapsible" data-collapsed="false"><h1>' + title +
      '</h1>'+  data2 +'</div>';
      data2 = "";
      $div.append(content);
    }
  }
  $('#list_view').collapsibleset('refresh');
  });
});
