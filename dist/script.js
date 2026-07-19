(() => {
  "use strict";

  const requireElement = (selector) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Missing required Easter egg element: ${selector}`);
    }
    return element;
  };

  const body = document.body;
  const desktop = requireElement("#desktop");
  const logo = requireElement("#aw-logo");
  const secretAbout = requireElement("#about-this-website");
  const systemStatus = requireElement("#system-status");
  const announcement = requireElement("#easter-egg-status");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const wallpapers = [
    { value: "", name: "Periwinkle Dither" },
    { value: "ocean", name: "Ocean Tile" },
    { value: "graphite", name: "Graphite Weave" }
  ];
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];

  let wallpaperIndex = 0;
  let logoClickCount = 0;
  let logoClickTimer;
  let konamiIndex = 0;

  const announce = (message) => {
    announcement.textContent = "";
    window.requestAnimationFrame(() => {
      announcement.textContent = message;
    });
  };

  const cycleWallpaper = () => {
    wallpaperIndex = (wallpaperIndex + 1) % wallpapers.length;
    const wallpaper = wallpapers[wallpaperIndex];

    if (wallpaper.value) {
      body.dataset.wallpaper = wallpaper.value;
    } else {
      delete body.dataset.wallpaper;
    }

    announce(`Desktop wallpaper changed to ${wallpaper.name}.`);
  };

  const setAfterDark = (enabled) => {
    if (enabled) {
      body.dataset.afterDark = "true";
      systemStatus.textContent = "After Dark: Running";
      announce("After Dark starfield unlocked.");
    } else {
      delete body.dataset.afterDark;
      systemStatus.textContent = "Internet: Connected";
      announce("After Dark starfield closed.");
    }
  };

  const toggleAfterDark = () => {
    if (reducedMotion.matches) {
      announce("After Dark is disabled while reduced motion is enabled.");
      return;
    }

    setAfterDark(body.dataset.afterDark !== "true");
  };

  logo.addEventListener("click", () => {
    logoClickCount += 1;
    window.clearTimeout(logoClickTimer);

    if (logoClickCount === 5) {
      logoClickCount = 0;
      secretAbout.showModal();
      announce("About This Website opened.");
      return;
    }

    logoClickTimer = window.setTimeout(() => {
      logoClickCount = 0;
    }, 4000);
  });

  desktop.addEventListener("click", (event) => {
    if (event.shiftKey && event.target === desktop) {
      cycleWallpaper();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && secretAbout.open) {
      event.preventDefault();
      secretAbout.close();
      return;
    }

    const target = event.target;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      target?.isContentEditable
    ) {
      return;
    }

    if (event.shiftKey && event.key.toLowerCase() === "w") {
      cycleWallpaper();
      return;
    }

    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (key === konamiSequence[konamiIndex]) {
      konamiIndex += 1;
    } else {
      konamiIndex = key === konamiSequence[0] ? 1 : 0;
    }

    if (konamiIndex === konamiSequence.length) {
      konamiIndex = 0;
      toggleAfterDark();
    }
  });

  reducedMotion.addEventListener("change", (event) => {
    if (event.matches && body.dataset.afterDark === "true") {
      setAfterDark(false);
      announce("After Dark closed because reduced motion was enabled.");
    }
  });

  secretAbout.addEventListener("close", () => {
    window.setTimeout(() => logo.focus(), 0);
    announce("About This Website closed.");
  });
})();
