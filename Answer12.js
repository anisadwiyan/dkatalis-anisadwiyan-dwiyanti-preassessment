var fs = require('fs'); //file system module
fs.readFile('Text.txt', function (err, inputText) {

	var text = inputText.toString();
	var replacedText = text.replace(/(\r\n|\n|\r)/g, " ");
	var splitText = replacedText.split(" ");

	var i = 0;
	var totalWords = [];

	while(i < splitText.length) {

		var item = splitText[i];
		item.trim();

		var matchText = item.match(/[A-Za-z0-9]/g);

		if(matchText !== "" && matchText !== null) {
			totalWords.push(matchText);
		}

		i++;
	}

	process.stdout.write("I found " + totalWords.length + " words.\n");
	process.stdout.write( inputText +"\n");
});
