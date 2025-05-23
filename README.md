# Feather - Astro Template

An elegant, minimalist Astro template designed for long-form content.

Features:

- 🎨 Elegant, minimalist design styled with Tailwind CSS v4.0
- 📄 Markdown & MDX support for flexible content authoring
- 🏷️ Tag-based content organization with dedicated tag pages
- 🔍 SEO-friendly with canonical URLs and OpenGraph data
- 📊 Configurable pagination for blog entries
- 📰 RSS Feed support for content syndication
- 🗺️ Automatic sitemap generation
- 🖼️ Optimized image handling using `astro:assets`

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── consts.ts
│   └── content.config.ts
├── astro.config.mjs
├── CHANGELOG.md
├── LICENSE.md
├── package.json
├── README.md
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The `src/components/` directory is the designated location for all reusable Astro components within the project. You can create new components here using Astro's intuitive syntax or integrate existing components from other UI frameworks like React, Vue, Svelte, or Preact.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## ⚙️ Configuration

The theme can be customized through the `src/consts.ts` file.

### Configuration Options

- **Site Configuration**
  - `SITE_URL`: Your site's full URL (used for canonical links and SEO)
  - `SITE_TITLE`: The name of your site
  - `SITE_DESCRIPTION`: Default meta description

- **Navigation Links**
  - Edit `HEADER_LINKS` in `src/consts.ts` to customize the main navigation
  - Each link requires:
    ```ts
    {
      text: 'Link Text',    // The text shown in the navigation
      href: '/link-path',   // The URL path for the link
    }
    ```
  - The theme automatically handles active states and hover effects
  - Links appear in both the header and footer navigation

- **Blog Configuration**
  - `postsPerPage`: Number of posts to show per page in the journal
  - `author`: Your personal information for the bio section
  - `journal`: Settings for the blog/journal section
  - `dateDisplay`: Control how dates are formatted throughout the site

- **Social Links**
  - Add or remove social media links that appear in the footer
  - Supported platforms: Twitter, GitHub, LinkedIn, Instagram, YouTube, Mastodon

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🛟 Support

Support is provided as described in the `LICENSE.md` file.

For further help on getting started with Astro, check out the official [Astro documentation](https://docs.astro.build).
