const fs = Npm.require('fs');
const dirName = process.env.PWD + "/dwindle/"

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
        onFileContent(filename, content);
      });
    });
  });
}
