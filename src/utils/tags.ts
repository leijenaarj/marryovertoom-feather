/**
 * Normalizes a tag for use in URLs by:
 * 1. Converting to lowercase
 * 2. Replacing spaces with dashes
 * 3. Removing special characters
 */
export function normalizeTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Formats a tag for display by:
 * 1. Capitalizing the first letter of each word
 * 2. Converting dashes or spaces to spaces
 */
export function formatTag(tag: string): string {
  return tag
    .replace(/[-\s]+/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
