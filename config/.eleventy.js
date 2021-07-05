let Nunjucks = require("nunjucks");

module.exports = function(config) {
  // 11ty configuration
  const
    dev  = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
    now = new Date();

  //module.exports = config => {
  //}

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("../private_html/_includes")
  );
  
  config.setLibrary("njk", nunjucksEnvironment);

  config.addPassthroughCopy("../private_html/js")
  config.addPassthroughCopy("../private_html/css")
  config.addPassthroughCopy("../private_html/img")

  // Exported modules
  //config.addShortcode('imageHandler', require('../Private_html/js/helperfunctions.js'));


  config.setTemplateFormats([
    "md",
    "jpg",
    "png",
    "webp",
    "njk",
    "html",
    "liquid",
    "js"
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
      input: "../private_html",
      output: "../public_html",
      includes: "../private_html/_includes",
      data: "../private_html/_data"
    }
  };
}
