export default function ContactInfo() {
  const contactDetails = [
    { icon: "📍", title: "Cím", content: "1234 Budapest, Példa utca 1." },
    { icon: "📞", title: "Telefon", content: "+36 1 234 5678" },
    { icon: "✉️", title: "Email", content: "info@pelda.hu" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-primary-900 dark:text-primary-50 transition-colors duration-300 group-hover:text-primary-500 sm:text-2xl">
        Elérhetőségeink
      </h2>
      {contactDetails.map((detail) => (
        <div
          key={detail.title}
          className="flex transform items-start space-x-4 transition-all duration-300 hover:translate-x-2"
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
        </div>
      ))}
    </div>
  );
}
