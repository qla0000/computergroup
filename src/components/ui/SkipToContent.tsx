export default function SkipToContent() {
    return (
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4 focus:shadow-lg focus:text-primary-900 dark:focus:bg-primary-900 dark:focus:text-primary-50 hover:text-accent-500 dark:hover:text-accent-400 transition-colors duration-300"
      >
        Ugrás a tartalomhoz
      </a>
    );
  }