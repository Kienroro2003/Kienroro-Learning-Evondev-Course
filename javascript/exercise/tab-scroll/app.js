window.addEventListener("load", function () {
  const tab = this.document.querySelector(".tab");
  const tabList = this.document.querySelector(".tab-list");
  const items = document.querySelectorAll(".tab-item");
  items.forEach((item) => item.addEventListener("click", handleClick));
  console.log(tabList.offsetWidth);
  function handleClick(event) {
    let itemOffset = event.target.offsetLeft - tab.offsetLeft;
    console.log(itemOffset);
    if (itemOffset > tabList.offsetLeft / 2) {
      //   let setCenter =
      //       itemOffset - tabList.offsetWidth / 2 ;
      let setCenter =
        itemOffset - tabList.offsetWidth / 2 + event.target.offsetWidth / 2;
      console.log(setCenter);
      tabList.scroll(setCenter, 0);
    } else {
      tabList.scroll(itemOffset, 0);
    }
    // tabList.scroll(itemOffset + tabList.offsetWidth, 0);
  }
});
