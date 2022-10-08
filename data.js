const data = {
  name: "root",
  isFolder: true,
  file: [
    {
      name: "public",
      isFolder: true,
      file: [
        {
          name: "index.html",
          isFolder: false
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      file: [
        {
          name: "App.js",
          isFolder: false
        },
        {
          name: "index.js",
          isFolder: false
        },
        {
          name: "style.css",
          isFolder: false
        }
      ]
    }
  ]
};

export default data;
