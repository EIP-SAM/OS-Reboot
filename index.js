var os = require("os");
var execFile = require('child_process').execFile,

    rebootW = execFile('reboot_windows.bat');

var execFile = require('child_process').execFile,
    rebootL = execFile('./reboot_linux.sh');

var DISPLAY_LOG = FALSE;

if (DISPLAY_LOG)
{
  // OS type
  console.log('OS type : ' + os.type());

  // OS platform
  // Returns the operating system platform.
  // Possible values are 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'.
  console.log('OS platform : ' + os.platform());
}


module.exports = function()
{
  if (os.platform() == "win32") {
      console.log("Your OS is Windows");
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
      console.log("Your OS is Linux");
      console.log('loaded.....');
      }

      rebootL.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
      });

      rebootL.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
      });

      rebootL.on('exit', function (code) {
        console.log('child process exited with code ' + code);
      });
};
