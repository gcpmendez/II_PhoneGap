$(document).ready(function() {
    /*$.getJSON('http://www.opendatacanarias.es/datos/dataset/06e67b96-c473-43cc-a881-ad4030955eef/resource/415245a0-3213-410c-9839-02b7e00175ef/download/camposdebaloncesto.json', function(datos) {

      var codigo = '';
      $.each(datos, function(index) {
        codigo += '<div data-role="collapsible"><h1><span>' + datos[index].First_NOM_ + '</span></h1></div>';
      });
      $('span').html(codigo);
   });
   var $div = $("#list_view");
   $.getJSON("http://www.opendatacanarias.es/datos/dataset/06e67b96-c473-43cc-a881-ad4030955eef/resource/415245a0-3213-410c-9839-02b7e00175ef/download/camposdebaloncesto.json",function(result){
   var data = result.data;
   for(var item in data){
   var title = datos[intem].First_NOM_;
   content = '<div data-role="collapsible"><h1>' + title + '<h1></div>';
   $div.append(content);
   }

   });*/


   var $div = $("#list_view");
	$.getJSON("http://www.opendatacanarias.es/datos/dataset/06e67b96-c473-43cc-a881-ad4030955eef/resource/415245a0-3213-410c-9839-02b7e00175ef/download/camposdebaloncesto.json",function(result){

  var data = result;
  for(var item in data){
  var title = data[item].First_NOM_,
  content = '<div data-role="collapsible" data-collapsed="false"><h1>' + title + '</h1><p>'+  data[item].First_POB1 +' </p></div>';
  $div.append(content);
  }
  $('#list_view').collapsibleset('refresh');
  });
});
