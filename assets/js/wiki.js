window.onload = event => {
  function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = "";

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + "px";
      element.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        element.style.height = 0 + "px";
      });
    });

    // mark the section as "currently collapsed"
    element.setAttribute("data-collapsed", "true");
  }

  function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + "px";

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener("transitionend", function(e) {
      // remove this event listener so it only gets triggered once
      element.removeEventListener("transitionend", arguments.callee);

      // remove "height" from the element's inline styles, so it can return to its initial value
      //element.style.height = null;
    });
  }

  const sectionMargin = 50;
  let currentActive = 0;

  let currentPrimaryActive = 0;
  let currentSecondaryActive = 0;

  console.log("wiki.js script successfully loaded !");

  const agendaNavigationElement = document.getElementById(
    "js-agenda__navigation"
  );
  const secondaryNavigation = `<nav class="agenda__container --secondary"></nav>`;

  document.querySelectorAll(".wiki-section").forEach(sec => {
    let header = sec.querySelector("h1");
    let mainTag = `<a data-tag="${header.id}" class="agenda__link js-agenda__link --primary" href="#${header.id}">${header.innerText}</a>`;
    let secondaryHeaders = sec.querySelectorAll("h2");

    agendaNavigationElement.insertAdjacentHTML("beforeend", mainTag);

    // if (secondaryHeaders.length < 1) return;
    agendaNavigationElement.insertAdjacentHTML(
      "beforeend",
      secondaryNavigation
    );

    let secondNavigationElems = document.querySelectorAll(
      ".agenda__container.--secondary:last-child"
    );
    secondaryHeaders.forEach(x => {
      let tag = `<a data-tag="${x.id}" class="agenda__link js-agenda__link --secondary" href="#${x.id}">${x.innerText}</a>`;
      secondNavigationElems[0].insertAdjacentHTML("beforeend", tag);
    });
  });

  let sections = document.querySelectorAll("h1,h2");

  let primarySections = document.querySelectorAll("h1");
  let secondarySections = document.querySelectorAll("h2");
  let secondaryMenuContainers = document.querySelectorAll(
    ".agenda__container.--secondary"
  );
  let primaryMenuLinks = document.querySelectorAll(
    ".js-agenda__link.--primary"
  );
  let secondaryMenuLinks = document.querySelectorAll(
    ".js-agenda__link.--secondary"
  );

  const makePrimaryActive = link => {
    if (primaryMenuLinks.length > link)
      primaryMenuLinks[link].classList.add("--active");
  };

  const removePrimaryActive = link => {
    if (primaryMenuLinks.length > link)
      primaryMenuLinks[link].classList.remove("--active");
  };

  const removePrimaryAllActive = () =>
    [...Array(primarySections.length).keys()].forEach(link =>
      removePrimaryActive(link)
    );

  const makeMenuContainerActive = link => {
    if (secondaryMenuContainers.length > link) {
      secondaryMenuContainers[link].classList.add("--active");
      let isCollapsed =
        secondaryMenuContainers[link].getAttribute("data-collapsed") === "true";

      if (isCollapsed) {
        expandSection(secondaryMenuContainers[link]);
        secondaryMenuContainers[link].setAttribute("data-collapsed", "false");
      } else {
        collapseSection(secondaryMenuContainers[link]);
      }
    }
  };

  const removeMenuContainerActive = link => {
    if (secondaryMenuContainers.length > link)
      secondaryMenuContainers[link].classList.remove("--active");

    let isCollapsed =
      secondaryMenuContainers[link].getAttribute("data-collapsed") === "true";

    if (isCollapsed) {
      // do nothing really
    } else {
      collapseSection(secondaryMenuContainers[link]);
    }
  };
  const removeMenuContainerAllActive = () =>
    [...Array(primarySections.length).keys()].forEach(link =>
      removeMenuContainerActive(link)
    );

  const makeSecondaryActive = link => {
    if (secondaryMenuLinks.length > link)
      secondaryMenuLinks[link].classList.add("--active");
  };

  const removeSecondaryActive = link =>
    secondaryMenuLinks.length > link - 1
      ? secondaryMenuLinks[link].classList.remove("--active")
      : {};
  const removeSecondaryAllActive = () =>
    [...Array(secondarySections.length).keys()].forEach(link =>
      removeSecondaryActive(link)
    );

  // Collapse all !!
  removeSecondaryAllActive();
  removeMenuContainerAllActive();
  removePrimaryAllActive();

  window.onscroll = () => {
    const currentPrimary =
      primarySections.length -
      [...primarySections].reverse().findIndex(section => {
        return window.scrollY >= section.offsetTop - sectionMargin;
      }) -
      1;

    const currentSecondary =
      secondarySections.length -
      [...secondarySections].reverse().findIndex(section => {
        return window.scrollY >= section.offsetTop - sectionMargin;
      }) -
      1;

    if (currentPrimary !== currentPrimaryActive) {
      removeSecondaryAllActive();
      removeMenuContainerAllActive();
      removePrimaryAllActive();
      currentPrimaryActive = currentPrimary;

      makeMenuContainerActive(currentPrimary);
      makePrimaryActive(currentPrimary);
    }
    if (currentSecondary !== currentSecondaryActive) {
      removeSecondaryAllActive();
      currentSecondaryActive = currentSecondary;
      makeSecondaryActive(currentSecondary);
    }
  };
};
