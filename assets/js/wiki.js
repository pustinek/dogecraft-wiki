


window.onload = event => {
  const sectionMargin = 50;
  let currentActive = 0; 
  console.log("wiki.js script successfully loaded !");



  document.querySelectorAll(".wiki-section").forEach(sec => {
    let header = sec.querySelector("h1");
    let mainTag = `<li data-tag="${header.id}" class="sidebar__item"><a class="wiki__link" href="#${header.id}">${header.innerText}</a></li>`;
    let secondaryHeaders = sec.querySelectorAll("h2");

    document
    .getElementById("wiki-nav")
    .insertAdjacentHTML("beforeend", mainTag);


    secondaryHeaders.forEach(x => {
      let tag = `<li data-tag="${x.id}" class="sidebar__item --secondary"><a class="wiki__link" href="#${x.id}">${x.innerText}</a></li>`;
      document
        .getElementById("wiki-nav")
        .insertAdjacentHTML("beforeend", tag); 
      });
  });


  let sections = document.querySelectorAll("h1,h2");
  let menu_links = document.querySelectorAll(".sidebar__item a");
  const makeActive = link => menu_links[link].classList.add("--active");
  const removeActive = link => menu_links[link].classList.remove("--active");
  const removeAllActive = () =>
    [...Array(sections.length).keys()].forEach(link => removeActive(link));
  window.onscroll = () => {
    const current =
      sections.length -
      [...sections].reverse().findIndex(section => {
        return window.scrollY >= section.offsetTop - sectionMargin;
      }) -
      1;
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }

  };
};
