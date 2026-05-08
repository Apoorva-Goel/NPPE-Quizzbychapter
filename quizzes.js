/* ============================================================================
 * NPPE Quiz Hub — Data File
 * ----------------------------------------------------------------------------
 * THIS IS THE ONLY FILE YOU EDIT WHEN YOU ADD A NEW CHAPTER QUIZ.
 *
 * To add a new chapter:
 *   1. Drop the chapter HTML file into the matching book folder
 *      (e.g. book1/chapter12.html)
 *   2. Add a line to the appropriate `chapters: [...]` array below.
 *      Just copy an existing line and edit the values.
 *   3. Save, commit, push. GitHub Pages will auto-update.
 *
 * Field reference:
 *   num       (number)   Chapter number — used for sorting + display
 *   title     (string)   Chapter title shown on the card
 *   file      (string)   Path to the quiz HTML file (relative to index.html)
 *   questions (number)   How many questions the quiz contains
 *
 * To mark the total chapter count for a book (so the hub shows "11 / 18"
 * progress), set `totalChapters`. Leave as `null` if unknown.
 * ============================================================================
 */

window.QUIZZES_DATA = {
  site: {
    title: "NPPE Practice Quizzes",
    tagline: "Self-paced practice for the National Professional Practice Examination",
    author: "Apoorva",            // <-- change to your name / handle for the footer
    githubUrl: ""                 // <-- optional: paste your repo URL here, e.g. "https://github.com/yourname/nppe-quizzes"
  },

  books: [
    // ========================================================================
    // BOOK 1
    // ========================================================================
    {
      id: "book1",
      shortLabel: "Book 1",
      title: "Canadian Professional Engineering and Geoscience",
      edition: "Sixth Edition",
      authors: "Gordon Andrews, Patricia Shaw & John McPhee",
      publisher: "Nelson",
      year: 2018,
      totalChapters: 18,
      chapters: [
        { num: 1,  title: "The Engineering and Geoscience Professions",        file: "book1/chapter1.html",  questions: 60 },
        { num: 2,  title: "Regulation of Engineering & Geoscience",             file: "book1/chapter2.html",  questions: 50 },
        { num: 3,  title: "Disciplinary Powers & Procedures",                   file: "book1/chapter3.html",  questions: 51 },
        { num: 4,  title: "Basic Concepts of Professional Practice",            file: "book1/chapter4.html",  questions: 50 },
        { num: 5,  title: "Consulting, Private Practice & Business",            file: "book1/chapter5.html",  questions: 50 },
        { num: 6,  title: "Hazards, Liability, Standards, and Safety",          file: "book1/chapter6.html",  questions: 50 },
        { num: 7,  title: "Computers, Software & Intellectual Property",        file: "book1/chapter7.html",  questions: 50 },
        { num: 8,  title: "Diversity in the Professional Workplace",            file: "book1/chapter8.html",  questions: 50 },
        { num: 9,  title: "Principles of Ethics and Justice",                   file: "book1/chapter9.html",  questions: 50 },
        { num: 10, title: "Ethics & Employment",                                file: "book1/chapter10.html", questions: 50 },
        { num: 11, title: "Ethics Concepts and Cases: Management",              file: "book1/chapter11.html", questions: 50 },
        { num: 12, title: "Ethics Cases: Professional Practice",                file: "book1/chapter12.html", questions: 50 },
        { num: 13, title: "Environmental Ethics",                               file: "book1/chapter13.html", questions: 50 },
        { num: 14, title: "Environmental Threats & Disasters",                  file: "book1/chapter14.html", questions: 50 },
        { num: 15, title: "Environmental Sustainability",                       file: "book1/chapter15.html", questions: 50 },
        { num: 17, title: "Maintaining Your Professional Competence",           file: "book1/chapter17.html", questions: 50 },
        { num: 18, title: "Benefiting from Technical Societies",                file: "book1/chapter18.html", questions: 50 }
        // EXAMPLE — add chapter 12 like this when ready:
        // ,{ num: 12, title: "Ethics Cases: Professional Practice",             file: "book1/chapter12.html", questions: 50 }
      ]
    },

    // ========================================================================
    // BOOK 2
    // ========================================================================
    {
      id: "book2",
      shortLabel: "Book 2",
      title: "Law for Professional Engineers:Canadian and Global Insights",
      edition: "Fofth Edition",
      authors: "Donal L. Marston",
      publisher: "McGraw Hill",
      year: null,
      totalChapters: 35,         // <-- set this once you know the total chapter count
      chapters: [
        { num: 1,  title: "The Canadian Legal System",               file: "book1/chapter1.html",  questions: 50 },
        { num: 2,  title: "Business Organizations",                  file: "book1/chapter2.html",  questions: 50 },
        { num: 3,  title: "Global Considerations",                   file: "book1/chapter3.html",  questions: 50 },
        { num: 4,  title: "Tort Liability",                          file: "book1/chapter4.html",  questions: 50 },
        { num: 5,  title: "Limitation Periods",                      file: "book1/chapter5.html",  questions: 50 },
        { num: 6,  title: "Proof & Contracts",                       file: "book1/chapter6to7.html",  questions: 25 },
        { num: 8,  title: "Offer, Intent, Consideration & Capacity", file: "book1/chapter8to11.html",  questions: 52 },
        { num: 12,  title: "Contract Law for the Engineer",          file: "book1/chapter12to15.html",  questions: 50 },
        { num: 16,  title: "Tendering Issues — Contract A",          file: "book1/chapter16.html",  questions: 50 }
        // EXAMPLE — when ready, add chapters like this:
        // { num: 1, title: "Introduction to Engineering Law", file: "book2/chapter1.html", questions: 50 }
      ]
    },

    // ========================================================================
    // BOOK 3
    // ========================================================================
    {
      id: "book3",
      shortLabel: "Book 3",
      title: "Practical Law of Architecture, Engineering, and Geoscience",
      edition: "",
      authors: "",
      publisher: "",
      year: null,
      totalChapters: null,
      chapters: [
        // Add chapters here when ready
      ]
    }
  ]
};
