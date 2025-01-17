export default function SkipToContent() {
    return (
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4 focus:shadow-lg"
      >
        Ugrás a tartalomhoz
      </a>
    );
  }