# PHP & MySQL Guide Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, and is designed for teaching PHP, MySQL, and web basics.

## Getting Started

1. Enter the website directory:
   ```sh
   cd website
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Structure

- `docs/`: Main documentation (add PHP, MySQL, and web basics content here)
- `blog/`: Blog posts
- `src/`: Custom pages and components

## Customization

Edit `sidebars.js` and `docusaurus.config.js` in the `website` folder to organize your content and site settings.

## Build

```sh
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```sh
USE_SSH=true npm run deploy
```

Not using SSH:

```sh
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Next Steps

- Add your teaching materials to the `docs/` folder.
- Update navigation and sidebar as needed.
- Deploy using `npm run deploy`.
