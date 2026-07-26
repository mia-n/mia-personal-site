import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  // Reset scroll position on client-side navigation.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app-shell">
      <Nav />
      <main className="container site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
