Place your PDF resume in this folder and name it `resume.pdf` so it can be served at `/resume/resume.pdf`.

Examples:
- `frontend/public/resume/resume.pdf` -> accessible at `https://<your-site>/resume/resume.pdf`

If you want a different filename, update the `href` in `frontend/src/components/AboutSection.tsx` accordingly.

To preview locally run:

```bash
npm run dev
```

Then open `http://localhost:8080/resume/resume.pdf` (or click the "View Resume" button on the homepage).