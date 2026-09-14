import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import CyberSecuritySection from '../components/CyberSecuritySection'
import { responsiveShell } from '../utils/responsive'

const CyberSecurity = () => (
  <section className={`${responsiveShell} py-12 sm:py-16`}>
    <Link
      to="/projetos"
      className="inline-flex items-center gap-2 font-black uppercase text-sm sm:text-base mb-8 sm:mb-10 hover:underline"
    >
      <ArrowLeft size={18} /> Voltar aos projetos
    </Link>
    <CyberSecuritySection />
  </section>
)

export default CyberSecurity