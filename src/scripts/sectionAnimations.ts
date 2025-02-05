// src/scripts/sectionAnimations.ts

interface AnimationDefaults {
  opacity: number;
  y: number;
  duration: number;
  ease: string;
}

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

const defaultAnimation: AnimationDefaults = {
  opacity: 0,
  y: 50,
  duration: 0.6,
  ease: "power3.out",
};

export function initSectionAnimations() {
  const { gsap, ScrollTrigger } = window;
  if (!gsap || !ScrollTrigger) return;

  // Services Section
  const servicesElements = document.querySelectorAll(
    '[data-animate="services"]'
  );
  servicesElements.forEach((element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      element,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
  });

  // Appointments Section
  const appointmentsElements = document.querySelectorAll("#appointments");
  appointmentsElements.forEach((element) => {
    const content = element.querySelector(".content");
    const heading = element.querySelector("h1");
    const paragraphs = element.querySelectorAll("p");
    const button = element.querySelector(".booking-btn");

    // Set initial states
    gsap.set([heading, ...paragraphs, button], {
      opacity: 0,
      y: 30,
    });

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
        gsap.to(paragraphs, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        });
        gsap.to(button, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.6,
        });
      },
      onLeave: () => {
        gsap.to([heading, ...paragraphs, button], {
          opacity: 0,
          y: 30,
          duration: 0.6,
        });
      },
      onEnterBack: () => {
        gsap.to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
        gsap.to(paragraphs, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        });
        gsap.to(button, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.2,
        });
      },
      onLeaveBack: () => {
        gsap.to([heading, ...paragraphs, button], {
          opacity: 0,
          y: 30,
          duration: 0.6,
        });
      },
    });
  });

  // Gallery Section
  const galleryElements = document.querySelectorAll('[data-animate="gallery"]');
  galleryElements.forEach((element) => {
    const items = element.children;
    gsap.set(items, { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
      },
      onLeave: () => {
        gsap.to(items, {
          opacity: 0,
          y: 30,
          duration: 0.6,
        });
      },
      onEnterBack: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(items, {
          opacity: 0,
          y: 30,
          duration: 0.6,
        });
      },
    });
  });

  // About Section
  const aboutElements = document.querySelectorAll('[data-animate="about"]');
  aboutElements.forEach((element) => {
    const image = element.querySelector("img");
    const content = element.querySelector('[data-animate="about-content"]');

    // Set initial states
    if (image) gsap.set(image, { opacity: 0, scale: 0.9 });
    if (content) gsap.set(content, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        if (image) {
          gsap.to(image, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        }
        if (content) {
          gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.2,
          });
        }
      },
      onLeave: () => {
        if (image) {
          gsap.to(image, {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
          });
        }
        if (content) {
          gsap.to(content, {
            opacity: 0,
            y: 50,
            duration: 0.6,
          });
        }
      },
      onEnterBack: () => {
        if (image) {
          gsap.to(image, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        }
        if (content) {
          gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.2,
          });
        }
      },
      onLeaveBack: () => {
        if (image) {
          gsap.to(image, {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
          });
        }
        if (content) {
          gsap.to(content, {
            opacity: 0,
            y: 50,
            duration: 0.6,
          });
        }
      },
    });
  });

  // Testimonials Section
  const testimonialsElements = document.querySelectorAll(
    '[data-animate="testimonials"]'
  );
  testimonialsElements.forEach((element) => {
    const items = element.querySelectorAll(".testimonial-item");
    gsap.set(items, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        });
      },
      onLeave: () => {
        gsap.to(items, {
          opacity: 0,
          y: 50,
          duration: 0.6,
        });
      },
      onEnterBack: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(items, {
          opacity: 0,
          y: 50,
          duration: 0.6,
        });
      },
    });
  });
}

// Initialize animations
if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  initSectionAnimations();
} else {
  document.addEventListener("DOMContentLoaded", initSectionAnimations);
}

// Handle Astro view transitions
document.addEventListener("astro:page-load", initSectionAnimations);
