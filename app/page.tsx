import Image from "next/image";
import "../lib/firebase";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-orange-500/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 flex flex-col items-center text-center px-4">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-zinc-900/0 to-zinc-900/0 dark:from-orange-500/10 dark:via-[#0a0a0a]/0 dark:to-[#0a0a0a]/0"></div>
        <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium tracking-tight shadow-sm">
          Powered by Google
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl">
          Discovering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Firebase</span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          A comprehensive overview of Google's mobile and web application development platform. Build faster, securely, and scale effortlessly.
        </p>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Intro Card - Spans 2 cols */}
        <section className="col-span-1 md:col-span-2 lg:col-span-2 group bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-300 sm:p-10 hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-xl">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-3xl font-bold">What is Firebase?</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
            Firebase is a Backend-as-a-Service (BaaS) app development platform that provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. Backed by Google infrastructure, it acts as a fully managed backend for web, iOS, Android, and Unity applications.
          </p>
        </section>

        {/* History Card */}
        <section className="col-span-1 bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-xl">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-2xl font-bold">History</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Evolved from Envolve (2011), a chat API that developers used for application data sync. Spun off as Firebase in April 2012, its realtime capabilities caught the eye of Google, who acquired it in 2014, turning it into their flagship platform.
          </p>
        </section>

        {/* Features Card - Full width */}
        <section className="col-span-1 md:col-span-2 lg:col-span-3 bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-300 sm:p-10">
          <div className="flex items-center gap-3 mb-8 text-center justify-center md:items-start md:text-left md:justify-start">
            <div className="p-3 bg-green-500/10 text-green-500 dark:text-green-400 rounded-xl">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h2 className="text-3xl font-bold">Key Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-50 dark:bg-black/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-colors">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><span className="text-orange-500">⚡</span> Cloud Firestore</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">NoSQL cloud databases that store and sync data across clients in real-time.</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-black/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-colors">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><span className="text-orange-500">🔐</span> Authentication</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Secure, drop-in auth supporting email/password, Google, Apple, and social logins.</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-black/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-colors">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><span className="text-orange-500">🌍</span> Hosting</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Fast, secure web hosting for modern SPAs and SSR apps, global CDN backed.</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-black/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-colors">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><span className="text-orange-500">☁️</span> Cloud Functions</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Serverless framework to run backend code responding to Firebase events & HTTPS.</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-black/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-colors">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><span className="text-orange-500">📦</span> Cloud Storage</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Powerful edge-network storage for user-generated content like photos and videos.</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="col-span-1 md:col-span-2 bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-pink-500/10 text-pink-500 dark:text-pink-400 rounded-xl">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h2 className="text-2xl font-bold">Use Cases</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex gap-3 text-zinc-600 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl bg-zinc-50/50 dark:bg-black/20">
              <div className="mt-0.5 text-orange-500">•</div>
              <span><strong>Real-time Chat</strong> & collaborative tools leveraging synced data.</span>
            </li>
            <li className="flex gap-3 text-zinc-600 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl bg-zinc-50/50 dark:bg-black/20">
              <div className="mt-0.5 text-orange-500">•</div>
              <span><strong>Serverless Apps</strong> using React/Next.js without server upkeep.</span>
            </li>
            <li className="flex gap-3 text-zinc-600 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl bg-zinc-50/50 dark:bg-black/20">
              <div className="mt-0.5 text-orange-500">•</div>
              <span><strong>Cross-Platform</strong> architectures for iOS, Android, and Web.</span>
            </li>
          </ul>
        </section>

        {/* Advantages - Accent Card */}
        <section className="col-span-1 bg-gradient-to-br from-orange-500 to-yellow-500 p-8 rounded-3xl shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 -m-8 w-32 h-32 bg-orange-600/30 rounded-full blur-2xl group-hover:bg-orange-600/40 transition-all duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Firebase?</h2>
            <ul className="space-y-4 text-white/95 font-medium">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Insane Development Speed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Instant Real-time Sync</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Deep Google Integration</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Generous "Spark" Plan</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
