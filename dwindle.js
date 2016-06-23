
const fs = Npm.require('fs');
const dirName = process.env.PWD + "/dwindle/"

function scanFile(filename, content, callback) {
  console.log('scanFilee');

  var idRegex = new RegExp('vv(.*)Q(.*)vv', 'ig');

  var exec = idRegex.exec(content);

  while(exec != null) {
    console.log(exec[1]);
    console.log(exec[2]);

    exec = idRegex.exec(content);
  }

  callback(filename, content);
}

export function scan(onFileContent, onError) {
  fs.readdir(dirName, (err, filenames) => {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(filename => {
      fs.readFile(dirName + filename, 'utf-8', (err, content) => {
        if (err) {
          onError(err);
          return;
        }
        scanFile(filename, content, onFileContent);
      });
    });
  });
}
