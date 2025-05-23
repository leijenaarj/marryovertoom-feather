// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site Configuration
// These values are used throughout the site to provide consistent branding and descriptions.
import authorImage from './assets/author.avif';

export const SITE_URL = 'https://feather.astrothem.es';
export const SITE_TITLE = 'Feather';
export const SITE_DESCRIPTION =
  'A collection of thoughts, stories, and ideas that shape our perspective on design and technology.';

// Blog Configuration
// Adjust these values to customize the blog's behavior
export const BLOG_CONFIG = {
  // Pagination settings
  postsPerPage: 8, // Number of posts to display per page

  // Author information (used in blog posts and author bio)
  author: {
    name: 'Niall Quinn',
    title: 'Designer & Developer',
    bio: "I'm passionate about creating meaningful digital experiences through thoughtful design and innovative technology. Through this journal, I share insights and lessons learned along the way.",
    avatar: authorImage,
  },

  // Journal page settings
  journal: {
    title: 'Journal', // The title shown on the blog index page
    description:
      'A collection of thoughts, stories, and ideas that shape our perspective on design and technology.',
    recentPostsCount: 3, // Number of posts to show on the home page
  },

  // Date formatting
  dateDisplay: {
    format: 'MMM DD YYYY', // Supported formats: 'MMM DD YYYY', 'DD MMM YYYY', 'YYYY-MM-DD'
    showUpdatedDate: true, // Whether to display "Updated on" date if post is updated
  },

  // Navigation labels
  navigation: {
    prevLabel: 'Previous',
    nextLabel: 'Next',
    backToJournal: 'Back to Journal',
  },
} as const;

// Header Navigation Links
// These links appear in the main navigation header
export const HEADER_LINKS = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Journal',
    href: '/blog',
  },
  {
    text: 'About',
    href: '/about',
  },
] as const;

// Social Links
// Add your full social media profile URLs here
// Remove or comment out any networks you don't use
export const SOCIAL_LINKS = {
  twitter: '#',
  instagram: '#',
  youtube: '#',
  mastodon: '#',
  // linkedin: 'https://linkedin.com/in/yourusername',
  // github: 'https://github.com/yourusername',
  // medium: 'https://medium.com/@yourusername',
  // facebook: 'https://facebook.com/yourusername',
} as const;
