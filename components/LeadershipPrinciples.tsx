const principles = [
    {
      number: "01",
      title: "Technology should enable strategy.",
      subtitle: "Never replace it.",
    },
    {
      number: "02",
      title: "Customer experience",
      subtitle: "begins with employee experience.",
    },
    {
      number: "03",
      title: "Data informs decisions.",
      subtitle: "Leadership makes them.",
    },
    {
      number: "04",
      title: "Execution is where strategy",
      subtitle: "earns the right to exist.",
    },
    {
      number: "05",
      title: "Operational Excellence",
      subtitle: "is about creating value.",
    },
    {
      number: "06",
      title: "Accountability",
      subtitle: "creates speed.",
    },
    {
      number: "07",
      title: "Great leaders",
      subtitle: "build more leaders.",
    },
    {
      number: "08",
      title: "Transformation",
      subtitle: "starts with purpose.",
    },
    {
      number: "09",
      title: "Culture is measured",
      subtitle: "by behaviour.",
    },
    {
      number: "10",
      title: "Profitable growth",
      subtitle: "is the consequence of doing many things well.",
    },
  ];
  
  export default function LeadershipPrinciples() {
    return (
      <section className="bg-white py-32">
  
        <div className="max-w-7xl mx-auto px-8">
  
          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Leadership Principles
          </span>
  
          <h2 className="mt-6 text-6xl font-bold mb-24">
            Ten principles that guide
            <br />
            every important decision.
          </h2>
  
          <div className="divide-y divide-gray-200">
  
            {principles.map((item) => (
  
              <div
                key={item.number}
                className="grid md:grid-cols-12 gap-8 py-12 items-center"
              >
  
                <div className="md:col-span-2">
  
                  <span className="text-6xl font-black text-gray-200">
                    {item.number}
                  </span>
  
                </div>
  
                <div className="md:col-span-10">
  
                  <h3 className="text-4xl font-bold text-gray-900">
                    {item.title}
                  </h3>
  
                  <p className="text-3xl text-gray-500 mt-3">
                    {item.subtitle}
                  </p>
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }