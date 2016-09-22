var os = require("os");
var path = require('path');
var execFile = require('child_process').execFile;

var DISPLAY_LOG = false;

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
      rebootW = execFile(path.join(__dirname, 'reboot_windows.bat'));
      rebootW.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
      });

      rebootW.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
      });

      rebootW.on('exit', function (code) {
        console.log('child process exited with code ' + code);
      });
    }

  else if (os.platform() == "linux"){
    rebootL = execFile(path.join(__dirname, 'reboot_linux.sh'));
    rebootL.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    rebootL.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    rebootL.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });
    }
};
