import heroImage from '../assets/homepage.webp'
import drycleaning from '../assets/dry-cleaning.webp'
import washandfold from '../assets/wash-and-fold.webp'
import tailoring from '../assets/tailoring.webp'

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay so text is readable over the image */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero content */}
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Town House Cleaners
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Cleaning services you can trust. Serving your neighborhood with care and attention to detail.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Eco friendly cleaning services
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={drycleaning}
                alt="Cleaning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Cleaning</h3>
                <p className="text-white/80 text-sm">Clean delicate fabrics and tough stains</p>
              </div>
            </div>

            {/* Card */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={tailoring}
                alt="Tailoring"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Tailoring</h3>
                <p className="text-white/80 text-sm">Expert tailor for alterations to clothing  </p>
              </div>
            </div>

            {/* Card */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={washandfold}
                alt="Wash & Fold"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Wash & Fold</h3>
                <p className="text-white/80 text-sm">Wash and Fold laundry services per pound</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home