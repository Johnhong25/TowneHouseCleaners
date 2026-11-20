import { Link } from 'react-router-dom'

// Prices aren't final yet, so the site shows "N/A" instead.
// When the prices below are correct, change this to true and redeploy.
const SHOW_PRICES = false
const price = (value) => (SHOW_PRICES ? value : 'N/A')

function Services() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="pt-24 pb-8 text-center px-6 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Professional cleaning and tailoring services for every need
        </p>
      </div>

      {/* Dry Cleaning Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 p-3 rounded-xl">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Dry Cleaning</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Price row */}
            {[
              { item: 'Shirt',           price: '$5.99'  },
              { item: 'Pants / Trousers', price: '$6.99'  },
              { item: 'Dress',           price: '$9.99'  },
              { item: 'Suit (2 piece)',  price: '$14.99' },
              { item: 'Suit (3 piece)',  price: '$18.99' },
              { item: 'Jacket / Blazer', price: '$9.99'  },
              { item: 'Coat',            price: '$14.99' },
              { item: 'Wedding Dress',   price: '$49.99' },
            ].map(row => (
              <div
                key={row.item}
                className="flex items-center justify-between px-6 py-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors"
              >
                <span className="text-gray-700 font-medium">{row.item}</span>
                <span className="text-green-700 font-bold">{price(row.price)}</span>
              </div>
            ))}

          </div>

          <p className="text-gray-400 text-sm mt-6">
            * Prices may vary depending on fabric and condition. Drop off for a free assessment.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

    {/* Wash & Fold Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 p-3 rounded-xl">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Wash & Fold</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 max-w-lg">
            <p className="text-gray-500 leading-relaxed mb-8">
              Drop off your laundry and we'll wash, dry, and fold it for you.
              Clean clothes ready the same day or next day.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Price per pound</span>
                <span className="text-green-700 font-bold">{price('$1.99 / lb')}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Minimum order</span>
                <span className="text-green-700 font-bold">10 lbs</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700 font-medium">Turnaround</span>
                <span className="text-green-700 font-bold">24 – 48 hours</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              * Eco friendly detergent used by default. Bring your own upon request.
            </p>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* Tailoring Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 p-3 rounded-xl">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Tailoring</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {[
              { item: 'Hem pants',              price: '$12.00' },
              { item: 'Hem dress / skirt',      price: '$15.00' },
              { item: 'Take in / let out waist', price: '$18.00' },
              { item: 'Replace zipper',         price: '$15.00' },
              { item: 'Repair seam',            price: '$10.00' },
              { item: 'Shorten sleeves',        price: '$20.00' },
              { item: 'Take in jacket',         price: '$35.00' },
              { item: 'Wedding dress alteration', price: 'From $60.00' },
            ].map(row => (
              <div
                key={row.item}
                className="flex items-center justify-between px-6 py-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors"
              >
                <span className="text-gray-700 font-medium">{row.item}</span>
                <span className="text-green-700 font-bold">{price(row.price)}</span>
              </div>
            ))}

          </div>

          <p className="text-gray-400 text-sm mt-6">
            * All alterations are assessed in store. Final price may vary based on complexity.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-700 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Not sure what you need?
        </h2>
        <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
          Come in for a free assessment and we'll take care of the rest.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-green-50 transition-colors"
        >
          Get in Touch
        </Link>
      </section>

    </div>
  )
}

export default Services