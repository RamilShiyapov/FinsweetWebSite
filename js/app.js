const Body = document.body;

const NoScroll = () => {
  const MobileMenuButtons = document.querySelectorAll(".MobileMenuButton");

  let IsOverflowHidden = false;

  MobileMenuButtons.forEach((Button) => {
    Button.addEventListener("click", () => {
      if (IsOverflowHidden) {
        Body.style.overflow = "";
        IsOverflowHidden = false;
      } else {
        Body.style.overflow = "hidden";
        IsOverflowHidden = true;
      }
    });
  });
};
NoScroll();

const HiddenHeader = () => {
  const Header = document.querySelector(".Header");

  document.querySelectorAll("[data-HiddenHeader]").forEach((Button) => {
    if (Button !== undefined) {
      let IsStatic = true;

      Button.addEventListener("click", () => {
        if (IsStatic) {
          Header.style.position = "static";
          IsStatic = false;
        } else {
          Header.style.position = "sticky";
          IsStatic = true;
        }
      });
    }
  });
};
HiddenHeader();
