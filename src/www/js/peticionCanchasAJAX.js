$(document).ready(function() {
   var $div = $("#list_view");
	$.getJSON("http://navegadoresra.esy.es/canchasBaloncesto/peticionCanchas.php",function(result){

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
          data2 += '<div data-role="collapsible"><h3>'+  data[j].First_NOM_ +'</h3><p>'+ data[j].First_DIR_ +'</p></div>';

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
