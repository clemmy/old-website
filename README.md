# clemmy.github.io

Static site built with jQuery, bootstrap, and sass, and a contact form powered by [formspree.io](http://formspree.io/).

## Installation

`npm install` (Tested with Node v14.x)

## Development

```bash
npm run dev
```

## Deployment

```bash
git checkout main
git reset --hard dev
npm run build
git add -A
git commit -m "Release"
git push
```
