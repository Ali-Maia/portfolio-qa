import { NavLink, Outlet } from 'react-router-dom'
import { Mail, Folder, User, Home } from 'lucide-react'
import Footer from './Footer'

const brutalistBorder = 'border-4 border-[#181818]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818]'
const brutalistHover  =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const navLinkClass = ({ isActive }) =>
  `${brutalistBox} ${brutalistHover} font-black uppercase tracking-wider px-6 py-3 flex items-center gap-2 cursor-pointer ${
    isActive ? 'bg-[#DBA538]' : 'bg-[#F5F1DF]'
  }`

const Layout = () => (
  <div className="min-h-screen bg-[#F5F1DF] text-[#181818] font-sans selection:bg-[#DBA538] selection:text-[#181818] flex flex-col">
    {/* Fake browser header */}
    <div className={`bg-[#F5F1DF] ${brutalistBorder} border-t-0 border-l-0 border-r-0 border-b-4 flex items-center px-4 py-2 sticky top-0 z-50`}>
      <div className="flex gap-2 mr-6">
        <div className="w-4 h-4 rounded-full bg-[#D93635] border-2 border-[#181818]" />
        <div className="w-4 h-4 rounded-full bg-[#DBA538] border-2 border-[#181818]" />
        <div className="w-4 h-4 rounded-full bg-[#A81C24] border-2 border-[#181818]" />
      </div>
      <div className={`flex-1 bg-white ${brutalistBorder} h-8 flex items-center px-4 mx-4`}>
        <span className="font-bold text-sm">https://aliciamaia.qa</span>
      </div>
    </div>

    {/* Navigation */}
    <nav className="p-6 flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
      <NavLink to="/" end className={navLinkClass}>
        <Home className="w-6 h-6" /> Home
      </NavLink>
      <NavLink to="/projetos" className={navLinkClass}>
        <Folder className="w-6 h-6" /> Projetos
      </NavLink>
      <NavLink to="/sobre" className={navLinkClass}>
        <User className="w-6 h-6" /> Sobre Mim
      </NavLink>
      <NavLink to="/contato" className={navLinkClass}>
        <Mail className="w-6 h-6" /> Contato
      </NavLink>
    </nav>

    <Outlet />
    <Footer />
  </div>
)

export default Layout
