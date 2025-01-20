export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only transition-colors duration-300 hover:text-accent-500 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4 focus:text-primary-900 focus:shadow-lg dark:hover:text-accent-400 dark:focus:bg-primary-900 dark:focus:text-primary-50"
    >
      Ugrás a tartalomhoz
    </a>
  );
}
