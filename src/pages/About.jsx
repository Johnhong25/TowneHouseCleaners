/*import aboutImage from '../assets/your-about-image.jpg'*/

function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="pt-24 pb-14 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          A family business operating for over 70 years.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto px-6 pb-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Town House Cleaners was founded in 1954 and has been a cornerstone
              in Co-op City ever since.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We believe that quality matters, that's why we ensure usage 
              of detailed spot removal of stains and specialized tools to
              get the quality you need.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We are proud to use eco-friendly products and sustainable
              practices wherever possible to protect the environment and
              community.
            </p>
          </div>

          {/* Right — image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
              alt="Town House Cleaners team"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default About