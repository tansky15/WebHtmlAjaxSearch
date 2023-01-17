$(document).ready(function(){
    $("#inputsearch").keyup(function(){
      if($("#inputsearch").val()!=""){
        $.post("http://127.0.0.1/dev/services.search/search.php",
      {
        name: $("#inputsearch").val()
      },
      function(data){
        res = JSON.parse(data);
        res = "<div class='card'><div class='list border-bottom'><i class='fa fa-fire'></i><div class='d-flex flex-column ml-3'><span>"+res["name"]+"</span><small>"+res["description"]+"</small></div> </div></div>"
        $("#panResults").html(res)
      });
      }
    });
  });