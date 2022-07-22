const yaml = require("js-yaml");
const fs = require("fs");

let doc = yaml.load(fs.readFileSync("./Settings.yml", "utf8"));
doc.on.push.branches = ["dev", "main"];
fs.writeFile("./Settings.yml", yaml.dump(doc), (err) => {
  if (err) {
    console.log(err);
  }
});
