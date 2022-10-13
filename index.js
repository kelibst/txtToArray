var fs = require("fs");
var concat = require("concat-stream");

var readStream = fs.createReadStream("sample.txt");
var concatStream = concat(gotPicture);

readStream.on("error", handleError);
readStream.pipe(concatStream);

function gotPicture(txtBuffer) {
  // imageBuffer is all of `cat.png` as a node.js Buffer
  var write = concat(function (data) {});
  write.write(txtBuffer);
  write.end();
  console.log(write);
}

function handleError(err) {
  // handle your error appropriately here, e.g.:
  console.error(err); // print the error to STDERR
  process.exit(1); // exit program with non-zero exit code
}
