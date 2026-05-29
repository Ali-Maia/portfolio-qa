import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const brutalistBorder = 'border-4 border-[#181818] dark:border-[#F5F1DF]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818] dark:shadow-[6px_6px_0px_#F5F1DF]'
const brutalistHover  =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818] dark:hover:shadow-[10px_10px_0px_#F5F1DF]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`
const brutalistButton =
  `${brutalistBox} ${brutalistHover} font-black uppercase tracking-wider px-6 py-3 flex items-center gap-2 cursor-pointer`

const Contact = () => (
  <footer className="max-w-6xl mx-auto px-6 py-16 border-t-8 border-[#181818] dark:border-[#F5F1DF] flex flex-col md:flex-row justify-between items-center gap-8">
    <div>
      <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter">Vamos conversar?</h2>
      <p className="font-bold text-xl mb-6">Disponível para oportunidades em QA e Automação.</p>
      <a
        href="mailto:aliciaengcomp@gmail.com"
        className={`${brutalistButton} bg-[#D93635] text-[#F5F1DF] inline-flex text-xl`}
      >
        <Mail className="w-6 h-6" /> aliciaengcomp@gmail.com
      </a>
    </div>
    <div className={`bg-[#68412B] text-[#F5F1DF] p-8 flex flex-col items-center gap-4 ${brutalistBox} rotate-2`}>
      <span className="font-black uppercase text-xl">Siga-me</span>
      <div className="flex gap-4">
        <a href="https://github.com/Ali-Maia" target="_blank" rel="noreferrer"
           className="hover:text-[#DBA538] transition-colors">
          <FaGithub className="w-10 h-10" />
        </a>
        <a href="https://www.linkedin.com/in/dev-maia/" target="_blank" rel="noreferrer"
           className="hover:text-[#DBA538] transition-colors">
          <FaLinkedin className="w-10 h-10" />
        </a>
      </div>
    </div>
  </footer>
)

export default Contact
