require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
    let prodIdMap = [];
    let catIdMap = [];

    for(var i = 1; i <= 17; i++) {
        prodIdMap.push({ productId: i });
    }

    catIdMap.push({id: "undefined"});

    for(var i = 1; i <= 3; i++) {
        catIdMap.push({ categoryId: i });
    }

    const paramsConfig = {
      "/product/:productId": prodIdMap,
      "/products/:categoryId": catIdMap
    };

    return (
    new Sitemap(router)
        .applyParams(paramsConfig)
        .build("https://kroonwater.com")
        .save("./public/sitemap.xml")
    );
  }
  
  generateSitemap();