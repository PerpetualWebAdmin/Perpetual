function SliderTimer() {
  //Url's
  const imageURL = {
    url1: ".../News-Updates/image/2024/12.png",
    url2: ".../News-Updates/image/2024/autonomous.png",
  };

  const newImage = new Image();
  const newImage2 = new Image();

  newImage.src = imageURL.url1;
  newImage2.src = imageURL.url2;

  console.log(newImage);

  newImage.src = document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    let images = [newImage, newImage2];
    const allImages = document.querySelector(".newupimg2");

    function change() {
      allImages.src = images[index];
      if (index > 0) {
        index = 0;
      } else {
        index++;
      }
    }

    window.onload = function () {
      setInterval(change, 5000);
    };

    //
  });
}
SliderTimer();
