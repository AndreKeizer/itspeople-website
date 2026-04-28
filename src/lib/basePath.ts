/** Returns the Next.js basePath so raw HTML elements (img, audio, video, a)
 *  can reference public assets correctly when the site is deployed under a
 *  subpath (e.g. GitHub Pages project site). Next.js <Image> and <Link>
 *  components handle this automatically in most setups, but with
 *  `output: "export"` + `unoptimized: true` the src is passed through as-is.
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public-folder path with the basePath.
 *  Usage: `<Image src={asset("/images/photo.jpg")} …/>`
 */
export function asset(path: string): string {
  if (!BASE || path.startsWith(BASE)) return path;
  return `${BASE}${path}`;
}
