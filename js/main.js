

var CheckServer = function()
{

  var parameters =
  {
    "action" : "Checking Server"
  }

  $.post("Server/server.php", parameters, (serverAnswer) => {

    $("#Console").append(serverAnswer);

  })
}

var Start = function(){

this.CheckServer();

}();
