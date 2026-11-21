import { Link } from 'react-router-dom'

const address = '181 Einstein Loop S, Bronx NY 10475'
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

const footerLinks = [
  { label: 'Home',     to: '/'         },
  { label: 'About',    to: '/about'    },
  { label: 'Services', to: '/services' },
  { label: 'Contact',  to: '/contact'  },
]

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Name + short line */}
        <div>
          <p className="text-white text-lg font-bold mb-2">Town House Cleaners</p>
          <p className="text-sm text-gray-400">
            Eco-friendly cleaning, wash &amp; fold, and tailoring in Co-op City since 1954.
          </p>
        </div>

        {/* Pages */}
        <div>
          <p className="text-white font-semibold mb-3">Pages</p>
          <ul className="flex flex-col gap-2 text-sm">
            {footerLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="tel:+17183790900" className="hover:text-white transition-colors">(718) 379-0900</a></li>
            <li><a href="mailto:THC@townhousecleaners.com" className="hover:text-white transition-colors break-all">THC@townhousecleaners.com</a></li>
            <li><a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{address}</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <p className="text-white font-semibold mb-3">Hours</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Tues–Fri: 8:30am – 6pm</li>
            <li>Sat: 9am – 5pm</li>
            <li>Sun–Mon: Closed</li>
          </ul>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-white/10">
        <p className="max-w-5xl mx-auto px-6 py-5 text-xs text-gray-500">
          © {new Date().getFullYear()} Town House Cleaners. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
