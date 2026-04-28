# NPPE Practice Quizzes — Study Hub

A free, browser-based collection of multiple-choice practice quizzes covering the textbooks behind Canada's **National Professional Practice Examination (NPPE)**. Open any chapter, choose Practice or Exam mode, and start drilling.

---

## 🚀 First-Time Setup: Publish to GitHub Pages

This is a **one-time setup** — about 5 minutes. Once it's live, every future change you push appears on the public site automatically.

### Step 1 — Create a GitHub repository

1. Sign in (or sign up) at <https://github.com>.
2. Click the **+** icon (top-right) → **New repository**.
3. Name it something memorable, e.g. `nppe-quizzes` (this becomes part of your public URL).
4. Set it to **Public** (required for free GitHub Pages).
5. Leave "Add a README" **unchecked** (you already have one).
6. Click **Create repository**.

### Step 2 — Upload all the files

The simplest path (no git knowledge needed):

1. On the empty repo page, click **uploading an existing file**.
2. Drag every file and folder from this `nppe-quiz-hub` folder into the upload area:
   - `index.html`
   - `quizzes.js`
   - `README.md`
   - `.nojekyll`
   - `book1/` folder (with all chapter files)
   - `book2/` and `book3/` folders (empty for now)
3. Scroll down, type a commit message like *"Initial upload"*, click **Commit changes**.

> If the drag-and-drop misses the empty `book2/` and `book3/` folders (GitHub ignores empty folders), no problem — they'll be created automatically the first time you add a chapter to those books.

### Step 3 — Turn on GitHub Pages

1. In your repo, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Under **Branch**, select **main** and **/ (root)**, then click **Save**.
5. Wait ~1 minute. Refresh the page. You'll see:
   > ✅ Your site is live at `https://yourusername.github.io/nppe-quizzes/`

### Step 4 — Share

That's the URL you share on LinkedIn, with classmates, or anywhere else. Anyone can open it in any browser — no signup, no install.

---

## ➕ Adding a New Chapter Quiz

Every time you finish a new chapter, the workflow is:

### 1. Drop the HTML file into the right book folder

Rename your new chapter quiz file to match the pattern `chapterN.html` and put it in the matching book folder. Examples:

| Quiz | Save it as |
| --- | --- |
| Book 1, Chapter 12 | `book1/chapter12.html` |
| Book 2, Chapter 1  | `book2/chapter1.html`  |
| Book 3, Chapter 5  | `book3/chapter5.html`  |

### 2. Add one line to `quizzes.js`

Open `quizzes.js`, find the right book's `chapters: [ ... ]` array, and add a line. Just copy an existing line and edit the values:

```js
{ num: 12, title: "Ethics Cases: Professional Practice", file: "book1/chapter12.html", questions: 50 }
```

The four fields:
- **`num`** — chapter number (controls sort order)
- **`title`** — what the card shows
- **`file`** — relative path to the HTML file
- **`questions`** — how many questions it contains

> 📌 Don't forget the comma after the previous line if you're inserting in the middle.

### 3. Commit & push

If you're using GitHub's web interface:
1. Open your repo → click **Add file** → **Upload files** → drop the new `chapterN.html` in.
2. After it uploads, go to `quizzes.js`, click the pencil ✏️ icon, paste in your new line, **Commit changes**.

If you're using git locally:
```bash
git add book1/chapter12.html quizzes.js
git commit -m "Add Book 1 Chapter 12 quiz"
git push
```

GitHub Pages rebuilds in ~30 seconds. Refresh the live URL — the new card appears.

---

## 📚 Adding a New Book

Already scaffolded for Books 2 and 3. To activate one:

1. Drop your first chapter file into `book2/` (or `book3/`).
2. Open `quizzes.js`, find that book's section, and:
   - Fill in any missing metadata (`authors`, `year`, etc.).
   - Set `totalChapters` to the book's full chapter count (so the hub shows progress like *"3 / 14 chapters ready"*).
   - Add chapter entries to the `chapters: [...]` array.
3. Commit & push.

---

## 🎨 Customization

### Change the site title or your name in the footer
Edit the `site:` block at the top of `quizzes.js`:

```js
site: {
  title: "NPPE Practice Quizzes",
  tagline: "...",
  author: "Your Name",
  githubUrl: "https://github.com/yourname/nppe-quizzes"
}
```

### Use a custom domain
If you own a domain (e.g. `nppe.example.com`), GitHub Pages → Settings → Pages → **Custom domain** lets you point it there. Free, takes 5 minutes to configure DNS.

---

## 🗂 File Layout

```
nppe-quizzes/
├── index.html           ← The hub landing page (don't edit unless changing design)
├── quizzes.js           ← The ONE file you edit when adding chapters
├── README.md            ← This file
├── .nojekyll            ← Tells GitHub Pages to serve files as-is
├── book1/
│   ├── chapter1.html
│   ├── chapter2.html
│   └── ... (more as you add them)
├── book2/
│   └── (empty until you add chapters)
└── book3/
    └── (empty until you add chapters)
```

---

## ❓ Troubleshooting

**The site shows "Setup needed: quizzes.js could not be loaded"**
→ Make sure `quizzes.js` is in the same folder as `index.html` (the repo root, not inside `book1/`).

**A new chapter card isn't appearing**
→ Check your `quizzes.js` for a missing comma between entries. Open the browser console (F12) — a syntax error will show up there.

**The chapter card is there but clicking it gives a 404**
→ The `file:` path doesn't match the actual filename. Check that `book1/chapter12.html` exists and the path in `quizzes.js` matches exactly (case-sensitive).

**Changes aren't appearing on the live site**
→ GitHub Pages takes 30–60 seconds to rebuild. Hard-refresh with Ctrl+Shift+R (Cmd+Shift+R on Mac) to bypass browser cache.

---

## 📜 License & Disclaimer

Quiz content is study material derived from the listed textbooks. All textbook content remains the intellectual property of the original authors and publishers. These quizzes are intended for personal exam preparation only.

Made with ☕ for fellow NPPE candidates. Good luck on the exam!
