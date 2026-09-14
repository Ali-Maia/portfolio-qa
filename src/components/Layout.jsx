import { NavLink, Outlet } from 'react-router-dom'
import { Mail, Folder, User, Home, Sun, Moon } from 'lucide-react'
import Footer from './Footer'
import { useTheme } from '../context/ThemeContext'
import { responsiveShell } from '../utils/responsive'

const brutalistBorder = 'border-4 border-[#181818] dark:border-[#050505]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818] dark:shadow-[6px_6px_0px_#050505]'
const brutalistHover  =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818] dark:hover:shadow-[10px_10px_0px_#050505]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const navLinkClass = ({ isActive }) =>
  `${brutalistBox} ${brutalistHover} w-full sm:w-auto min-w-0 font-black uppercase tracking-wider px-3 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center gap-2 text-xs sm:text-base cursor-pointer ${
    isActive
      ? 'bg-[#DBA538] text-[#181818]'
      : 'bg-[#F5F1DF] dark:bg-[#3D3934] dark:text-[#F5F1DF]'
  }`

const Layout = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-[#F5F1DF] dark:bg-[#2C2A27] text-[#181818] dark:text-[#F5F1DF] font-sans selection:bg-[#DBA538] selection:text-[#181818] flex flex-col`}>
      <div className={`bg-[#F5F1DF] dark:bg-[#2C2A27] border-b-4 border-[#181818] dark:border-[#050505] sticky top-0 z-50 ${responsiveShell} flex items-center gap-3 px-3 py-2 sm:px-6 sm:py-2`}>
        <div className="flex gap-2 mr-3 sm:mr-6 shrink-0">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#D93635] border-2 border-[#181818] dark:border-[#050505]" />
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#DBA538] border-2 border-[#181818] dark:border-[#050505]" />
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#A81C24] border-2 border-[#181818] dark:border-[#050505]" />
        </div>
        <div className="flex-1 bg-white dark:bg-[#3D3934] border-4 border-[#181818] dark:border-[#050505] h-8 sm:h-9 flex items-center px-3 sm:px-4 min-w-0 overflow-hidden">
          <span className="font-bold text-[10px] sm:text-sm truncate dark:text-[#F5F1DF]">https://aliciamaia.qa</span>
        </div>
        <button
          onClick={toggleTheme}
          aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          className="ml-auto p-2 border-4 border-[#181818] dark:border-[#050505] bg-[#F5F1DF] dark:bg-[#3D3934] hover:bg-[#DBA538] dark:hover:bg-[#DBA538] transition-colors cursor-pointer shrink-0"
        >
          {isDark
            ? <Sun className="w-4 h-4 text-[#F5F1DF] dark:text-[#F5F1DF]" />
            : <Moon className="w-4 h-4 text-[#181818]" />
          }
        </button>
      </div>

      <nav className={`${responsiveShell} p-3 sm:p-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4`}>
        <NavLink to="/" end className={navLinkClass}>
          <Home className="w-4 h-4 sm:w-6 sm:h-6" /> Home
        </NavLink>
        <NavLink to="/projetos" className={navLinkClass}>
          <Folder className="w-4 h-4 sm:w-6 sm:h-6" /> Projetos
        </NavLink>
        <NavLink to="/sobre" className={navLinkClass}>
          <User className="w-4 h-4 sm:w-6 sm:h-6" /> Sobre Mim
        </NavLink>
        <NavLink to="/contato" className={navLinkClass}>
          <Mail className="w-4 h-4 sm:w-6 sm:h-6" /> Contato
        </NavLink>
      </nav>

      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
