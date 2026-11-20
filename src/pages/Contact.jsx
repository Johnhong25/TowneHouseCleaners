function Contact() {
  const GOOGLE_MAPS_API_KEY = 'AIzaSyAhaCDZ1lX-sUzu3u5SvmHwRa5YrB4AmDU'
  const address = '181 Einstein Loop S, Bronx NY 10475'
  const encodedAddress = encodeURIComponent(address)

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="pt-24 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left — contact info */}
        <div className="flex flex-col gap-8">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <a href="tel:+17183790900" className="text-gray-500 hover:text-green-700 underline-offset-4 hover:underline">(718) 379-0900</a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <a href="mailto:THC@townhousecleaners.com" className="text-gray-500 hover:text-green-700 underline-offset-4 hover:underline break-all">THC@townhousecleaners.com</a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Address</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-700 underline-offset-4 hover:underline">{address}</a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Hours</p>
              <p className="text-gray-500">Tues-Fri: 9am - 6pm</p>
              <p className="text-gray-500">Sat: 9am – 5pm</p>
              <p className="text-gray-500">Sun-Mon: Closed</p>
            </div>
          </div>

        </div>

        {/* Right — Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-[450px]">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Map to Town House Cleaners"
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`}
          />
        </div>

      </div>
    </div>
  )
}

export default Contact