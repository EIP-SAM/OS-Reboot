var os = require("os");
var execFile = require('child_process').execFile,
    rebootW = execFile('cmd.exe', ['/c', 'my.bat']);
var rebootL = require('reboot').rebootImmediately();

module.exports.reboot = function(){
// do the work for windows or linux
};
console.log("Quel est mon système ?");

// OS type
console.log('type : ' + os.type());

// OS platform
// Returns the operating system platform.
// Possible values are 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'.
console.log('platform : ' + os.platform());

reboot()
{
  if (os.platform() == "win32") {
    console.log("Tu es sous Windows");
      rebootW.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
      });

      rebootW.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
      });

      rebootW.on('exit', function (code) {
        console.log('child process exited with code ' + code);
      });}

  else if (os.platform() == "linux"){
    console.log("Tu es sous Linux");
    console.log('loaded.....');
    rebootL.reboot();}
}
