# Resume file placement

This folder is where your real PDF files go. Nothing here ships with fake
or placeholder documents — the site links to these exact filenames, so drop
your files in with matching names and the "Download Resume" buttons across
the site will work immediately.

Place the resume PDF here:

```
src/assets/resume/Sahil_Vakte_Resume.pdf
```

The path is configured in `src/data/config.ts` as `primaryResumePath`.

Until these files are added, the download links will 404 — that's expected
in a fresh clone of this project.
