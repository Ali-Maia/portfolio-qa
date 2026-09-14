import { ShieldCheck, Terminal } from 'lucide-react'
import projects from '../data/projects/index.js'
import ProjectCard from './ProjectCard'

const brutalistBorder = 'border-4 border-[#181818] dark:border-[#050505]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818] dark:shadow-[6px_6px_0px_#050505]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const cyberProjects = projects.filter(project => project.tags?.includes('Cybersegurança'))

const CyberSecuritySection = () => (
  <section className="mt-12 sm:mt-20 text-[#181818] dark:text-[#F5F1DF]">
    <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
      <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
      <h1 className="flex items-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase text-center bg-[#181818] dark:bg-[#050505] text-[#39FF88] px-4 py-2 sm:px-6 border-4 border-[#181818] dark:border-[#050505] shadow-[4px_4px_0px_#39FF88]">
        <Terminal size={28} strokeWidth={2.5} className="hidden sm:block" />
        Cibersegurança
      </h1>
      <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
    </div>

    <div
      className={`relative overflow-hidden bg-[#F5F1DF] dark:bg-[#3D3934] p-5 sm:p-8 mb-10 sm:mb-12 ${brutalistBox}`}
    >
      <div
        className="absolute top-0 left-0 w-full h-3 border-b-4 border-[#181818] dark:border-[#050505]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #39FF88 0, #39FF88 14px, #181818 14px, #181818 28px)',
        }}
      />

      <div className="pt-4">
        <div className="inline-flex items-center gap-2 bg-[#181818] dark:bg-[#050505] text-[#39FF88] font-black uppercase text-[10px] sm:text-xs px-3 py-1 border-2 border-[#181818] dark:border-[#050505] mb-4 font-mono">
          <ShieldCheck size={14} strokeWidth={2.5} />
          acesso_liberado
        </div>

        <p className="font-medium text-base sm:text-lg leading-relaxed text-[#181818] dark:text-[#F5F1DF]">
          Essa área ainda está sendo construída. Estou em imersão em cibersegurança pelo{' '}
          <strong>Programa Mulher Digital (JA Brasil)</strong>, ampliando minha visão sobre
          segurança de sistemas pra somar essa bagagem à minha atuação em QA. Assim que os
          primeiros projetos e labs estiverem prontos, eles aparecem aqui.
        </p>
      </div>
    </div>

    {cyberProjects.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cyberProjects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    ) : (
      <div className={`text-center p-8 sm:p-10 font-mono text-xs sm:text-sm text-[#68412B] dark:text-[#F4CDBC] ${brutalistBox} bg-[#F5F1DF] dark:bg-[#3D3934]`}>
        {'>'} nenhum projeto encontrado ainda... volte em breve.
      </div>
    )}
  </section>
)

export default CyberSecuritySection