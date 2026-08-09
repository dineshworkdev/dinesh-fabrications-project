import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import FloatingContact from '../components/FloatingContact/FloatingContact'

/**
 * MainLayout
 * ----------
 * Shared shell rendered around every page: Navbar, page content via
 * <Outlet />, Footer, and the floating Call/WhatsApp buttons.
 *
 * The `key={pathname}` on the <main> forces a remount on route change,
 * which re-triggers the `.page-transition` CSS animation (a short fade +
 * rise) for a subtle sense of movement between pages. Respects
 * prefers-reduced-motion via the global animation-duration override.
 */
function MainLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <Navbar />
      <main className="page page-transition" key={pathname}>
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}

export default MainLayout
