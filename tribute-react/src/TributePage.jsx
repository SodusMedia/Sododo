import { Helmet } from "react-helmet-async";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function TributePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // fade duration, run once
  }, []);


  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-cream text-dark font-lato">

      {/* SEO Meta */}
      <Helmet>
        <title>J.B. Sododo Tribute</title>
        <meta
          name="description"
          content="15-Year Remembrance of Alhaji Sheikh J.B. Sododo — Scholar, Leader, and Truth Speaker."
        />
      </Helmet>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-emerald text-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-cinzel text-xl text-gold">Sododo Tribute</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
            <li><a href="#hero" className="hover:text-gold">Home</a></li>
            <li><a href="#biography" className="hover:text-gold">Biography</a></li>
            <li><a href="#leadership" className="hover:text-gold">Leadership</a></li>
            <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-emerald text-white px-6 pb-6 space-y-2 text-sm uppercase tracking-wide">
            <li><a href="#hero" className="block hover:text-gold">Home</a></li>
            <li><a href="#biography" className="block hover:text-gold">Biography</a></li>
            <li><a href="#leadership" className="block hover:text-gold">Leadership</a></li>
            <li><a href="#gallery" className="block hover:text-gold">Gallery</a></li>
          </ul>
        )}
      </nav>

    


      {/* Hero Section */}
      <section id="hero" className="grid md:grid-cols-2 h-screen pt-20"  data-aos="fade-up">
        {/* Text left */}
        <div className="flex flex-col justify-center items-start p-10 bg-emerald text-white animate-fadeIn">
          <h1 className="font-cinzel text-3xl md:text-5xl mb-4 text-gold">
            إِنَّا لِلّهِ وَإِنَّـا إِلَيْهِ رَاجِعونَ
          </h1>
          <h2 className="text-xl md:text-2xl">Alhaji Sheikh J.B. Sododo</h2>
          <p className="mt-2">1942 — 2011</p>
          <span className="mt-4 border border-gold px-6 py-2 uppercase tracking-wide">
            A 15-Year Remembrance
          </span>
        </div>
        {/* Image right with gradient overlay */}
    <div className="flex justify-center items-center p-6">
  <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
    <img
      src="/assets/sododo_hero1.png"
      alt="Alhaji J.B. Sododo"
      className="w-full h-[500px] object-cover"
    />
  </div>
</div>

      </section>

      {/* Biography */}
      <section id="biography" className="max-w-5xl mx-auto px-6 py-12"  data-aos="fade-up">
        <h2 className="font-cinzel text-3xl mb-6">The Journey of Sododo</h2>
        <div className="grid md:grid-cols-[2fr,1fr] gap-10">
          <div className="space-y-4">
            <p>
              Born on June 12, 1942, to the Odigbo Family in Ikare Akoko, Ondo
              State, <strong>Alhaji J.B. Sododo</strong> was destined for a life
              of spiritual service. His nickname, <em>"Sododo"</em> — He Who
              Speaks the Truth, was given by his tutor, Late Sheikh Nojimudeen
              Alkuburah (RTA) and popularized by his other tutor Late Sheik Adam
              Abdullah Al-Ilory (RTA). It became the guiding principle of his
              life.
            </p>
               <p>
    His academic excellence took him from <strong>Markaz Agege</strong> to the world-renowned 
    <strong>Al-Azhar University in Cairo</strong>, Egypt, where he graduated in 1986. An international scholar and pioneer, 
    he was the first to introduce the Morikazi style of Quranic recitation on Nigerian radio and television and a teacher to icons like the late Alhaja Kudirat Abiola.
  </p>

<p>A pillar of leadership, he served as the Pioneer Chief Imam of renowned institutions including Murhi International Mosque and Bintin Laye Central Mosque. 
    His spiritual authority extended far beyond Lagos, leading numerous State Central Mosques across Nigeria and presiding over congregations throughout Africa and the international community.
     </p>

    <p>His mission was truly global; he traveled the world extensively, spreading knowledge from neighbouring countries 
    like <strong>Benin Republic, Togo, and Ghana </strong>, across the African continent  <strong>(Ethiopia, Ivory Coast, etc)</strong> to 
    <strong>Europe, Asia, and North America</strong>. He was a man without borders, fueled by faith and an 
    unwavering commitment to truth.
</p>
          </div>
          <div className="space-y-6" >
            <div className="bg-white p-6 border-l-4 border-gold shadow text-center">
              <strong className="block text-2xl text-emerald">35+</strong>
              <span className="uppercase tracking-wide text-sm">Hajj & Umrah Journeys</span>
            </div>
            <div className="bg-white p-6 border-l-4 border-gold shadow text-center">
              <strong className="block text-2xl text-emerald">Global Alumnus</strong>
              <span className="uppercase tracking-wide text-sm">Azhar University</span>
            </div>
            <div className="bg-white p-6 border-l-4 border-gold shadow text-center">
              <strong className="block text-2xl text-emerald">30+ mosques</strong>
              <span className="uppercase tracking-wide text-sm">Pioneer Chief Imam</span>
            </div>
          </div>
        </div>
      </section>

    {/* Leadership */}
<section id="leadership" className="bg-gray-100 py-12"  data-aos="fade-right">
  <h2 className="font-cinzel text-3xl text-center mb-8">A Continuing Legacy </h2>
  <p className="text-center mb-10 text-gray-700">
    The flame of truth and scholarship burns brightly through the next generation.
  </p>

  <div className="max-w-4xl mx-auto px-6">
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
      {/* Image of Selim Sododo */}
      <div className="md:w-1/2">
        <img
          src="/assets/selim-sododo.jpg"
          alt="Alhaji Selim Sododo"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Text block with father-son legacy */}
      <div className="md:w-1/2 p-8 text-center md:text-left relative">
        {/* Decorative arrow/line */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block">
          <svg
            className="w-8 h-8 text-emerald"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <h3 className="font-cinzel text-emerald text-2xl mb-2">Alhaji Selim Sododo</h3>
        <p className="text-sm mb-4">Successor & Current Chief Imam at Bintin Laye Central Mosque and Lagos State House</p>
        <p className="text-gray-700 leading-relaxed">
          Carrying forward the vision of his father, <strong>Alhaji J.B. Sododo</strong>, 
          Selim Sododo continues the mission of truth, faith, and scholarship. 
          This enduring bond between father and son symbolizes the passing of wisdom 
          and leadership across generations.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Letter */}
      <section className="max-w-4xl mx-auto px-6 py-12"  data-aos="fade-up">
        <h2 className="font-cinzel text-3xl mb-6">To Baba Mi: My Hero</h2>
        <div className="space-y-4">
                <p>Fifteen years ago today, the world lost a light, and I lost my best friend. </p>
                    <p>You were the first hero I ever knew. You valued education above all else, 
                       pouring your life into ensuring I stood tall. The most bittersweet moment of my life 
                       is knowing that you stayed just long enough to see me finish from NYSC. 
                       <strong>10 days.</strong> That was all the time we had left after that milestone.</p>
                    <p>It pains my heart that you didn't live to eat the physical fruit of your labour, the comfort 
                       and the rest you so richly deserved. I always feel honoured to know <em>I am your fruit (Sodus Species)</em>. 
                       Every success I have is a harvest from the seeds you planted in the "wilderness" of your journey.</p>
                    <p>You were a great husband to my late Mother, a protector to your children, a pillar to 
                       your siblings, and a guide to your friends. A truly good man.</p>
        {/* Signature Block */}
<div className="signature-block mt-10 text-right">
  <div className="signature font-cursive text-xl text-gray-700 italic">
    Forever in my heart,
  </div>
  <div className="writer-name font-cursive text-2xl text-emerald mt-2">
    Saidat Sododo
  </div>
</div>

        </div>
      </section>
{/* Dua */}
<section className="bg-emerald text-white py-12 text-center" data-aos="fade-up">
  <h2 className="font-cinzel text-3xl mb-4">A Child's Prayer</h2>

  {/* Dua + Aamin in gold with border */}
  <div className="inline-block border border-gold px-6 py-4 rounded-lg">
    <p className="text-2xl mb-4 text-gold">
      اللهم اغفر لهما وارحمهما
    </p>

  {/* Explanatory paragraph in white */}
  <p className="mt-8 max-w-3xl mx-auto leading-relaxed text-white">
    O Allah, forgive the shortcomings of our Father, <strong>Alhaji J.B. Sododo</strong>, 
    and our Mother, <strong>Alhaja S. Sododo</strong> (dec. 2018). 
    They were the pillars of my life. Reunite them in the highest gardens of Jannah. 
    Widen their graves, fill them with light, and let them find peace in each other's 
    company once more in Your presence.
  </p>
   <p className="mt-6 text-xl text-gold font-semibold">
      Aamin.
    </p>
  </div>

</section>


      {/* Gallery */}
      <section id="gallery" className="py-12 max-w-5xl mx-auto px-6">
        <h2 className="font-cinzel text-3xl text-center mb-6">Memories in Frames</h2>
        <div className="flex overflow-x-scroll space-x-6 pb-4">

    <div className="flex-shrink-0 w-80">
           <img 
           src="/assets/sododo_withdad.jpg" 
           alt="Sododo's Memories"
            className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo with his Father 1973</p>
          </div>

          <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_mko.png"
              alt="Imam Sododo with MKO Abiola"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo with MKO Abiola</p>
          </div>

          <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododoUSA.jpg"
              alt="Imam Sododo in USA 2022-23"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo in USA 2022-23</p>
          </div>

         

             <div className="flex-shrink-0 w-80">
           <img 
           src="/assets/sododo_ikare2.jpg" 
           alt="Sododo's Memories"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_ikare3.jpg"
              alt="Imam Sododo in Ikare Akoko"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_teach.jpg"
              alt="Imam Sododo teaching"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_teach2.jpg"
              alt="Imam Sododo teaching"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_teach3.jpg"
              alt="Imam Sododo teaching"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_france.jpg"
              alt="Imam Sododo in france"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_saudi.jpg"
              alt="Imam Sododo in saudi"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_saudi2.jpg"
              alt="Imam Sododo in saudi"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_saudi3.jpg"
              alt="Imam Sododo in saudi"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_scholar.jpg"
              alt="Imam Sododo collects Bsc"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_scholar2.jpg"
              alt="Imam Sododo in uni"
              className="w-full h-[350px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_lagos.jpg"
              alt="Imam Sododo in lagos state"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_lagos2.jpg"
              alt="Imam Sododo in lagos"
              className="w-full h-[350px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

             <div className="flex-shrink-0 w-80">
  <img
    src="/assets/sododo_uae.jpg"
    alt="Imam Sododo in UAE"
    className="w-full h-[400px] object-cover rounded shadow"
  />
  <p className="text-center mt-2">Imam Sododo's memories</p>
</div>

<div className="flex-shrink-0 w-80">
  <img
    src="/assets/sododo_eid.jpg"
    alt="Imam Sododo leading eid prayer"
    className="w-full h-[450px] object-cover rounded shadow"
  />
  <p className="text-center mt-2">Imam Sododo's memories</p>
</div>


             <div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_usa4.jpg"
              alt="Imam Sododo in usa"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo's memories</p>
          </div>

<div className="flex-shrink-0 w-80">
            <img
              src="/assets/sododo_arisekola.jpg"
              alt="Imam Sododo with arisekola"
              className="w-full h-[250px] object-cover rounded shadow"
            />
            <p className="text-center mt-2">Imam Sododo with Arisekola Alao</p>
          </div>


        </div>
      </section>

      {/* Footer */}
<footer className="bg-emerald text-white text-center py-6 text-sm"  >
  © {new Date().getFullYear()} | SODODO's Legacy of Truth & Education | 15TH Year Tribute
</footer>

    </div>
  );
}