import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => (
  <footer className="bg-[#181818] text-[#F5F1DF] border-t-4 border-[#181818] mt-auto">
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Nome e tagline */}
      <div className="text-center md:text-left">
        <span className="font-black uppercase text-lg tracking-tight">Alícia Maia</span>
        <span className="mx-2 text-[#DBA538] font-black">·</span>
        <span className="font-bold text-sm uppercase tracking-wider text-[#F4CDBC]">Analista de QA & Automação</span>
      </div>

      {/* Links sociais */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Ali-Maia"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-[#DBA538] transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/dev-maia/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#DBA538] transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:aliciaengcomp@gmail.com"
          aria-label="Email"
          className="hover:text-[#DBA538] transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs font-bold uppercase tracking-widest text-[#F4CDBC] text-center md:text-right">
        © {new Date().getFullYear()} Alícia Maia
      </p>
    </div>
  </footer>
)

export default Footer
