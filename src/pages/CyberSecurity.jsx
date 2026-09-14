import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import CyberSecuritySection from '../components/CyberSecuritySection'

const CyberSecurity = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <Link
      to="/projetos"
      className="inline-flex items-center gap-2 font-black uppercase text-sm mb-10 hover:underline"
    >
      <ArrowLeft size={18} /> Voltar aos projetos
    </Link>
    <CyberSecuritySection />
  </section>
)

export default CyberSecurity