export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-600">
          IronPulse Coaching
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-300">
          Motivational. Supportive. Results-driven fitness coaching.
        </p>
        <a
          href="#programs"
          className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition"
        >
          View Programs
        </a>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="bg-zinc-900 py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-red-500">
          Training Options
        </h2>

        <div className="mt-12 grid gap-8 max-w-5xl mx-auto md:grid-cols-3">
          {/* Card */}
          <div className="bg-black border border-red-600 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">Workout Programs</h3>
            <p className="mt-4 text-gray-400">
              Structured programs built for strength, fat loss, and discipline.
            </p>
            <button className="mt-6 w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold">
              Buy Now
            </button>
          </div>

          <div className="bg-black border border-red-600 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">Nutrition Coaching</h3>
            <p className="mt-4 text-gray-400">
              Simple, sustainable nutrition guidance that fits your lifestyle.
            </p>
            <button className="mt-6 w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold">
              Buy Now
            </button>
          </div>

          <div className="bg-black border border-red-600 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">1-on-1 Coaching</h3>
            <p className="mt-4 text-gray-400">
              Direct access, accountability, and personalized programming.
            </p>
            <button className="mt-6 w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} IronPulse Coaching. All rights reserved.
      </footer>
    </main>
  );
}
