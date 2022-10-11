window.onscroll = () => {
    scrollNavbar();
  };

  scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar");

    if (document.documentElement.scrollTop > 20) {
      navBar.classList.add("pa-fixed-header");

      // Change the color of links on scroll
      for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add("text-black");
      }
    } else {
      navBar.classList.remove("pa-fixed-header");

      // Change the color of links back to default
      for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove("text-black");
      }
    }
  };