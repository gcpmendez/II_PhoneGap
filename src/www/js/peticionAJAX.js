$(document).ready(function(){
  var result;
  var $div = $("#peticion");
    $.getJSON("http://navegadoresra.esy.es/canchasBaloncesto/peticion.php", function(data, status){

       	result = data;

	  	}
      var equipo = "";
      var cancha = "";
      //$("#peticion").append(JSON.stringify(data));
      for(var i = 0; i < result.length; i++) {
      equipo = result[i].equipo;
      cancha = result[i].cancha;
      var content = '<div data-role="collapsible" data-collapsed="false"><h1>' + equipo +
      '</h1>'+  cancha +'</div>';
      $div.append(content);
	  	$('#peticion').collapsibleset('refresh');
    });
});
