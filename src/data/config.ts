const config = {
  title: "Ashish | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Ashish, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ashish, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ashish",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ashish",
  email: "ashish03724@gmai.com",
  site: "",

  // for github stars button
  githubUsername: "ashish017-17",
  githubRepo: "https://github.com/ashish017-17/password-generator",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/ashish______17",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-8091a3328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/ashish__________17/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/ashish017-17",
  },
};
export { config };
