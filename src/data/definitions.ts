// Line icons drawn in the ink colour (24×24 SVG paths).
export const icons = {
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
  // Lucide's "brain" (lucide.dev, ISC licence)
  brain: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" +
    "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" +
    "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4M17.599 6.5a3 3 0 0 0 .399-1.375M6.003 5.125A3 3 0 0 0 6.401 6.5" +
    "M3.477 10.896a4 4 0 0 1 .585-.396M19.938 10.5a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516M19.967 17.484A4 4 0 0 1 18 18",
};

// Shown on the Articles page (each inner list is one category, separated by a line there), and in articles as a
// tooltip on bold text naming a term, e.g. **First principles** or **It's physics.** (see components/Term.astro).
export const definitions: { term: string; meaning: string; icon?: keyof typeof icons }[][] = [
  [
    { term: "First Principles", meaning: "The fundamental nature of how things work." },
    { term: "Physics", meaning: "The 'forces' of the universe which cannot be altered." },
    { term: "Entropy", meaning: "The tendency of any system left as is, without improvement, to degrade over time." },
    { term: "Love", meaning: "A genuine passion for what you do; the only thing that takes you to the top of any field." },
    { term: "Order of Operations", meaning: "As in maths, the sequence in which steps must happen for an event to occur." },
  ],
  [
    { term: "Art", icon: "heart",
      meaning: "That which is meant to be <b>felt</b> rather than logically understood. Usually not meant " +
        "to be taken literally." },
    { term: "Science", icon: "brain",
      meaning: "That which is meant to be <b>rationally understood</b> rather than felt. Usually meant to " +
        "be taken literally." },
  ],
];
