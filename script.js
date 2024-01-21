// Blurred Image-1
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage1 = document.getElementById("blurredImage1");
  
    // Options for the Intersection Observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  
    // Callback function to handle the intersection
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the image is in view, remove the blur effect
          blurredImage1.style.filter = "blur(0)";
        } else {
          // If the image is out of view, apply the initial blur effect
          blurredImage1.style.filter = "blur(20px)";
        }
      });
    };
  
    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Observe the image
    observer.observe(blurredImage1);
  });

//   Blurred Image-2
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage2 = document.getElementById("blurredImage2");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurredImage2.style.filter = "blur(0)";
        } else {
          blurredImage2.style.filter = "blur(20px)";
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blurredImage2);
  });

  //   Blurred Image-3
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage3 = document.getElementById("blurredImage3");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurredImage3.style.filter = "blur(0)";
        } else {
          blurredImage3.style.filter = "blur(20px)";
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blurredImage3);
  });

  //   Blurred Image-4
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage4 = document.getElementById("blurredImage4");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurredImage4.style.filter = "blur(0)";
        } else {
          blurredImage4.style.filter = "blur(20px)";
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blurredImage4);
  });

  //   Blurred Image-5
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage5 = document.getElementById("blurredImage5");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurredImage5.style.filter = "blur(0)";
        } else {
          blurredImage5.style.filter = "blur(20px)";
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blurredImage5);
  });

  //   Blurred Image-6
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage6 = document.getElementById("blurredImage6");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurredImage6.style.filter = "blur(0)";
        } else {
          blurredImage6.style.filter = "blur(20px)";
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blurredImage6);
  });

  //   Blurred Image-7
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage7 = document.getElementById("blurredImage7");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurredImage7.style.filter = "blur(0)";
        } else {
          blurredImage7.style.filter = "blur(20px)";
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blurredImage7);
  });

  //   Blurred Image-8
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage8 = document.getElementById("blurredImage8");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurredImage8.style.filter = "blur(0)";
        } else {
          blurredImage8.style.filter = "blur(20px)";
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blurredImage8);
  });

  //   Blurred Image-9
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage9 = document.getElementById("blurredImage9");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurredImage9.style.filter = "blur(0)";
        } else {
          blurredImage9.style.filter = "blur(20px)";
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blurredImage9);
  });

  //   Blurred Image-10
document.addEventListener("DOMContentLoaded", function () {
    const blurredImage10 = document.getElementById("blurredImage10");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurredImage10.style.filter = "blur(0)";
        } else {
          blurredImage10.style.filter = "blur(20px)";
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blurredImage10);
  });
