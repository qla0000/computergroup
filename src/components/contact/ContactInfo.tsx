export default function ContactInfo() {
  const contactDetails = [
    { icon: "📍", title: "Cím", content: "1234 Budapest, Példa utca 1." },
    { icon: "📞", title: "Telefon", content: "+36 1 234 5678" },
    { icon: "✉️", title: "Email", content: "info@pelda.hu" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-primary-900 transition-colors duration-300 group-hover:text-primary-500 sm:text-2xl dark:text-primary-50">
        Elérhetőségeink
      </h2>
      {contactDetails.map((detail) => {
        let href = '';
        if (detail.title === 'Email') {
          href = `mailto:${detail.content}`;
        } else if (detail.title === 'Telefon') {
          href = `tel:${detail.content.replace(/\s/g, '')}`;
        } else if (detail.title === 'Cím') {
          href = `https://maps.google.com/?q=${encodeURIComponent(detail.content)}`;
        }

        return (
          <a
            key={detail.title}
            href={href}
            className="flex transform items-start space-x-4 transition-all duration-300 hover:translate-x-2 cursor-pointer"
          >
            <div className="text-2xl transition-transform duration-300 group-hover:scale-125">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 dark:text-primary-50">
                {detail.title}
              </h3>
              <p className="text-primary-700 dark:text-primary-200">
                {detail.content}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
