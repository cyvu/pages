let Nunjucks = require("nunjucks");

module.exports = function(config) {
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("../Private_html/_includes")
  );
  
  config.setLibrary("njk", nunjucksEnvironment);

  config.addPassthroughCopy("../Private_html/js")
  config.addPassthroughCopy("../Private_html/css")
  config.addPassthroughCopy("../Private_html/img")

  config.setTemplateFormats([
    "md",
    "jpg",
    "png",
    "webp",
    "njk",
    "html",
    "liquid"
  ]);

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: false,
    
    dir: {
      input: "../Private_html",
      output: "../Public_html",
      includes: "../Private_html/_includes",
      data: "../Private_html/_data"
    }
  };
}
