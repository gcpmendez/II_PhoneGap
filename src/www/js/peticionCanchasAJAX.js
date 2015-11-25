$(document).ready(function() {
      var $div = $("#list_view_canchas");
      var $div2 = $("#list_view_poblacion");
	$.getJSON("http://navegadoresra.esy.es/canchasBaloncesto/peticionCanchas.php",function(result){
      var data = result;
      var subContent = "";
      var title = "";
      var titleAnterior = "";

      for(var i = 0; i < data.length; i++) {
        title = data[i].First_POB1;
        if (title != titleAnterior) {
          for(var j = 0; j < data.length; j++) {
            titleAnterior = title;
            if(data[j].First_POB1 == title) {
              subContent += '<div data-role="collapsible"><h3>'+  data[j].First_NOM_ +'</h3><p>'+ data[j].First_DIR_ +'</p></div>';

            }
          }
          var content = '<div data-role="collapsible" data-collapsed="false"><h1>' + title +
          '</h1>'+  subContent +'</div>';
          subContent = "";
          $div.append(content);
        }
      }
      for(var i = 0; i < data.length; i++) {
        title = data[i].First_NOM_;
        subContent += '<p>'+  data[i].First_POB1 +'</p><p>'+ data[i].First_DIR_ +'</p>';
        var content = '<div data-role="collapsible" data-collapsed="false"><h1>' + title +
        '</h1>'+  subContent +'</div>';
        subContent = "";
        $div2.append(content);
      }
      $('#list_view_canchas').collapsibleset('refresh');
      $('#list_view_poblacion').collapsibleset('refresh');
  });
});
