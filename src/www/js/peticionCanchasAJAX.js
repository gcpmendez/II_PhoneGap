$(document).ready(function() {
      var $div = $("#list_view_canchas");
      var $div2 = $("#list_view_poblacion");
	$.getJSON("http://navegadoresra.esy.es/canchasBaloncesto/peticionCanchas.php",function(result){
      var data = result;
      var subContent = "";
      var title = "";
      var subContent2 = "";
      var title2 = "";
      var titleAnterior = "";

      for(var i = 0; i < data.length; i++) {
        title = data[i].First_POB1;
        if (title != titleAnterior) {
          for(var j = 0; j < data.length; j++) {
            titleAnterior = title;
            if(data[j].First_POB1 == title) {
              subContent += '<div data-role="collapsible"><h3>'+  data[j].First_NOM_ +
              '</h3><a href="#" onclick="window.open(\'https://www.google.es/maps?q=\''+data[j].LATDEC+'+'+data[j].LONGDEC
              +'\', \'_system\');"  class="ui-btn"><img src="res/gmaps.png"><p>'
              + data[j].First_DIR_ +'<p></a></div>';
            }
          }
          var content = '<div data-role="collapsible" data-collapsed="false"><h1>' + title +
          '</h1>'+  subContent +'</div>';
          subContent = "";
          $div.append(content);

          title2 = data[i].First_NOM_;
          subContent2 += '<p>'+  data[i].First_POB1 +'</p><p>'+ data[i].First_DIR_ +'</p>';
          var content2 = '<div data-role="collapsible" data-collapsed="false"><h1>' + title2 +
          '</h1>'+  subContent2 +'</div>';
          subContent2 = "";
          $div2.append(content2);
        }
      }
      $('#list_view_canchas').collapsibleset('refresh');
      $('#list_view_poblacion').collapsibleset('refresh');
  });
});
