exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  console.log("Page- ", page.path);
  if (page.path.match(/\/postingan/)) {
    page.matchPath = "/postingan/*";
    console.log(page);

    createPage(page);
  }

  if (page.path.match(/\/auth/)) {
    page.matchPath = "/auth/*";
    console.log(page);

    createPage(page);
  }
};
