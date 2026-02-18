export const SITE = {
  name: "Mark Bjornsgaard",
  title: "Mark Bjornsgaard — The Idea Drug",
  description:
    "Author of The Idea Drug, founder of System Two. Ideas are killing innovation — here's how to stop using them.",
  url: "https://markbjornsgaard.com",
  book: {
    title: "The Idea Drug",
    subtitle: "Why Ideas Are Killing Innovation and How to Stop Using Them",
    publisher: "Lowell & Pearce",
    tagline: "Because Someone Will",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/markbjornsgaard/",
  },
  nav: [
    { label: "The Idea Drug", href: "/the-idea-drug" },
    { label: "System Two", href: "/system-two" },
    { label: "Investments", href: "/investments" },
    { label: "Contact", href: "/contact" },
  ],
  navRight: [{ label: "About", href: "/about" }],
} as const;
