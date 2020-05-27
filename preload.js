var thumbnails = [];
let images = [];
function preLoad() {
  headerFont = loadFont("assets/fonts/roboto/bold.ttf");
  bodyFont = loadFont("assets/fonts/roboto/reg.ttf");

  githubImage = loadImage("assets/github.png");
  images[0] = githubImage;
  githubIcon = 0;

  youtubeImage = loadImage("assets/youtube.png");
  images[1] = youtubeImage;
  youtubeIcon = 1;

    for (var i = 0; i < projectTitles.length; i++) {
    thumbnails[i] = loadImage(("assets/projectThumbs/" + str(projectThumbnails[i])));
    images[i + 2] = thumbnails[i];
  }
}
