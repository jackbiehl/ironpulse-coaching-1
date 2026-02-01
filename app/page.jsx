import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/images/hero.jpg"
          fill
          className="object-cover opacity-40"
          alt="IronPulse Training"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-ironRed">
            IronPulse Coaching
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-gray-300">
            Motivational. Supportive. Results-driven fitness coaching.
          </p>
          <a
            href="#programs"
            className="inline-block mt-8 bg-ironRed hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            View Programs
          </a>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-20 px-6 bg-zinc-900">
        <h2 className="text-4xl font-bold text-center text-ironRed">
          Training Options
        </h2>

        <div className="mt-14 grid gap-10 max-w-6xl mx-auto md:grid-cols-3">
          {[
            { title: "Workout Programs", img: "program.jpg", btn: "Buy Now" },
            { title: "Nutrition Coaching", img: "nutrition.jpg", btn: "Buy Now" },
            { title: "1-on-1 Coaching", img: "coaching.jpg", btn: "Apply Now" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-black border border-ironRed rounded-2xl overflow-hidden"
            >
              <Image
                src={`/images/${item.img}`}
                width={400}
                height={250}
                className="object-cover w-full h-56"
                alt={item.title}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-400">
                  High-quality coaching designed to push results and discipline.
                </p>
                <button className="mt-6 w-full bg-ironRed hover:bg-red-700 py-3 rounded-lg font-semibold">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} IronPulse Coaching. All rights reserved.
      </footer>
    </main>
  );
}
