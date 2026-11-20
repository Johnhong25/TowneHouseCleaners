import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',     to: '/'        },
  { label: 'About',    to: '/about'   },
  { label: 'Services', to: '/services'},
  { label: 'Contact',  to: '/contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Hide the bar while scrolling down, bring it back on any scroll up.
  // Near the top of the page it always stays visible.
  useEffect(() => {
    let lastY = window.scrollY
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      if (y < 80) setHidden(false)
      else if (y > lastY + 5) { setHidden(true); setMenuOpen(false) }
      else if (y < lastY - 5) setHidden(false)
      if (Math.abs(y - lastY) > 5) lastY = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // When you go to a new page: close the phone menu and start at the top of the page.
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isActive = (path) => location.pathname === path
  const isHome = location.pathname === '/'

  // Home: clear over the hero photo at the top, green once you scroll (or when the phone menu is open).
  // Other pages: always green.
  const headerStyle = isHome && !scrolled && !menuOpen
    ? 'bg-transparent shadow-none'
    : 'bg-green-700/95 backdrop-blur-md shadow-lg'

  return (
    <div className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-300 ${hidden ? '-translate-y-[150%]' : 'translate-y-0'}`}>
      <header className={`w-full max-w-3xl rounded-2xl px-4 py-2 transition-all duration-500 ${headerStyle}`}>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-white text-base font-bold tracking-tight">
            Town House Cleaners
          </Link>

          {/* Navigation links (computers and tablets) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={isActive(link.to) ? 'text-white underline underline-offset-4' : 'text-white/80 hover:text-white transition-colors'}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Menu button (phones only) */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-white"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Dropdown menu (phones only) */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col pt-2 pb-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 text-lg border-t border-white/15 ${isActive(link.to) ? 'text-white font-semibold' : 'text-white/80'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </div>
  )
}

export default Navbar
