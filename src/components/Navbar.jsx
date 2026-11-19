import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home',     to: '/'        },
  { label: 'About',    to: '/about'   },
  { label: 'Services', to: '/services'},
  { label: 'Contact',  to: '/contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path
  const isHome = location.pathname === '/'

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <header className={`w-full max-w-3xl rounded-2xl px-4 py-2 flex items-center justify-between transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-green-700/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent shadow-none'
      }`}>

        {/* Logo */}
        <Link to="/" className="text-white text-base font-bold tracking-tight">
          Town House Cleaners
        </Link>

        {/* Navigation links */}
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

      </header>
    </div>
  )
}

export default Navbar