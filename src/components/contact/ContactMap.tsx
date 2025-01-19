export default function ContactMap() {
    return (
      <div className="h-[400px] overflow-hidden rounded-lg border border-primary-200 dark:border-primary-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d689.5155195377225!2d20.150546991401683!3d46.26887058342327!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2shu!4v1737077787471!5m2!1sen!2shu"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="filter dark:invert dark:contrast-75 dark:hue-rotate-180"
        />
      </div>
    );
  }