var magik = magikcraft.io;

function op(name){
  var sudo = function(cmd){ server.dispatchCommand(server.getConsoleSender(), cmd)}
  var opCmd="pex user " + name + " group set admin";
  sudo(opCmd);
}