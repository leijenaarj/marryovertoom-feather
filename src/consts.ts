// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site Configuration
// These values are used throughout the site to provide consistent branding and descriptions.
import authorImage from './assets/pasfoto.png';

export const SITE_URL = 'https://marryovertoom.nl';
export const SITE_TITLE = 'Marry Overtoom';
export const SITE_DESCRIPTION =
  'Kunst projecten van Marry Overtoom.';

// Blog Configuration
// Adjust these values to customize the blog's behavior
export const BLOG_CONFIG = {
  // Pagination settings
  postsPerPage: 8, // Number of posts to display per page

  // Author information (used in blog posts and author bio)
  author: {
    name: 'Marry Overtoom',
    title: 'Beeldend kunstenaar, adviseur, curator en initiator',
    bio: "",
    avatar: authorImage,
  },

  // Journal page settings
  journal: {
    title: 'Projecten', // The title shown on the blog index page
    description:
      'Kunst projecten van Marry Overtoom. Bekijk hier de laatste projecten.',
    recentPostsCount: 3, // Number of posts to show on the home page
  },

  // Date formatting
  dateDisplay: {
    format: 'MMM DD YYYY', // Supported formats: 'MMM DD YYYY', 'DD MMM YYYY', 'YYYY-MM-DD'
    showUpdatedDate: true, // Whether to display "Updated on" date if post is updated
  },

  // Navigation labels
  navigation: {
    prevLabel: 'Vorige',
    nextLabel: 'Volgende',
    backToJournal: 'Terug naar projecten',
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
    text: 'Projecten',
    href: '/blog',
  },
  {
    text: 'Info',
    href: '/info',
  },
] as const;

// Social Links
// Add your full social media profile URLs here
// Remove or comment out any networks you don't use
export const SOCIAL_LINKS = {
  // twitter: '#',
  // instagram: '#',
  // youtube: '#',
  // mastodon: '#',
  linkedin: 'https://linkedin.com/in/marry-overtoom-5a28323b/',
  // github: 'https://github.com/yourusername',
  // medium: 'https://medium.com/@yourusername',
  // facebook: 'https://facebook.com/yourusername',
} as const;
