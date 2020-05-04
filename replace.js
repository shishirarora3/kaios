console.log("starting")
var fs = require('fs');
const replace = (someFile=__dirname + "/build/asset-manifest.json",
                 replacement = `(function(){try {return this === global;}catch(e){return false;}})()`,
                 search= `new Function("try {return this === global;}catch(e){return false;}")()`,
                  ) =>{
    const someFileString = fs.readFileSync(someFile);

    const json = JSON.parse(someFileString);
    const loc = `${__dirname}/build/${json.files["main.js"]}`;

    fs.readFile(loc, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(search, replacement);

        fs.writeFile(loc, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}
replace();