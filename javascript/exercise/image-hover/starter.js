window.addEventListener("load", function () {
  const imageCover = this.document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  const image = document.querySelector(".image");
  imageCover.addEventListener("mousemove", handleHoverImage);
  function handleHoverImage(event) {
    const pX = event.offsetX;
    const pY = event.offsetY;
    const imageWidth = image.offsetWidth;
    const imageWrapperWidth = imageWrapper.offsetWidth;
    const imageHeight = image.offsetHeight;
    const imageWrapperHeight = imageWrapper.offsetHeight;
    const ratiaX = imageWidth / imageWrapperWidth;
    const ratiaY = imageHeight / imageWrapperHeight;
    image.style = `left: -${(pX * ratiaX) / 2}px; top: -${(pY * ratiaY) / 2}px`;
    image.classList.add("hover");
  }
  imageCover.addEventListener("mouseleave", handleLeaveImage);
  function handleLeaveImage(event) {
    image.setAttribute("style", "");
    image.className = "image";
  }
});
