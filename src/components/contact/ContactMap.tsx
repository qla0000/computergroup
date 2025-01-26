export default function ContactMap() {
  return (
    <div className="h-[400px] overflow-hidden rounded-lg border border-primary-200 dark:border-primary-700">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44135.83140186135!2d20.123217342600793!3d46.26037631284699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474488169383e0e5%3A0x5ba9d12f5818d494!2sHarmony%20Design!5e0!3m2!1shu!2shu!4v1737920118185!5m2!1shu!2shu"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="filter dark:contrast-75 dark:hue-rotate-180 dark:invert"
      />
    </div>
  );
}
