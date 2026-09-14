import { Construction, HardHat } from 'lucide-react'
import cybersecurityBadges from '../data/cybersecurity'
import CybersecurityBadge from '../components/CybersecurityBadge'
import { responsiveShell } from '../utils/responsive'

const brutalistBorder = 'border-4 border-[#181818] dark:border-[#050505]'
const brutalistShadow = 'shadow-[4px_4px_0px_#181818] dark:shadow-[4px_4px_0px_#050505]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const experiences = [
  {
    role: 'QA Engineer — Freelancer',
    company: 'Mojo Code',
    period: 'Abril 2026 - Presente',
    desc: 'Liderança técnica dos processos de qualidade, planejamento estratégico de testes e implementação de automação de alto impacto.',
  },
  {
    role: 'Analista de QA',
    company: 'Castanhal On',
    period: 'Novembro 2025 - Abril 2026',
    desc: 'Liderança da estratégia de qualidade e automação da plataforma. Execução de testes manuais e automatizados com foco em estabilidade.',
  },
  {
    role: 'Voluntário - Vice-presidente',
    company: 'LinkJr (Empresa Júnior)',
    period: 'Agosto 2024 - Abril 2026',
    desc: 'Gestão executiva de equipes e participação de projetos com Cypress, React, Next.js e TypeScript. Condução de interações com clientes e suporte a equipes ágeis.',
  },
  {
    role: 'Bolsista e Instrutora de Robótica',
    company: "Projeto Meninas Pai D'Éguas (UFPA)",
    period: 'Agosto 2024 - Setembro 2025',
    desc: 'Capacitação tecnológica e fomento ao empoderamento feminino em STEM através do ensino de robótica e fundamentos de programação.',
  },
  {
    role: 'Tutora de Informática',
    company: 'Programa de Tutoria Discente (UFPA)',
    period: 'Agosto 2023 - Julho 2024',
    desc: 'Ensino de fundamentos de informática e desenvolvimento do site da tutoria.',
  },
]

const education = [
  {
    course: 'Pós-Graduação em Automação de Testes de Software (PGATS)',
    institution: 'Faculdade VINCIT',
    detail: 'Pós-Graduação | 2026',
  },
  {
    course: 'Engenharia de Computação',
    institution: 'Universidade Federal do Pará (UFPA)',
    detail: 'Bacharelado | 2020 - 2025',
  },
  {
    course: 'Desenvolvimento de Sistemas',
    institution: 'IFSULMINAS',
    detail: 'Técnico | 2026 - 2027',
  },
]

const certifications = [
  { title: 'FAST em Engenharia de Qualidade', org: 'César School', year: '2025' },
  { title: 'Bootcamp Quality Assurance', org: 'Atlântico Avanti & SOFTEX', year: '2025' },
  { title: 'Mentoria em Testes de Software', org: 'Júlio de Lima', year: '2025' },
]

const InProgress = () => (
  <section>
    <div className="inline-flex items-center gap-3 mb-8">
      <h2 className="text-2xl sm:text-3xl font-black uppercase bg-[#181818] dark:bg-[#050505] text-[#DBA538] px-4 py-2 border-4 border-[#181818] dark:border-[#050505] shadow-[4px_4px_0px_#D93635] inline-flex items-center gap-2">
        <Construction size={28} strokeWidth={2.5} />
        Em Construção
      </h2>
    </div>

    <div
      className={`relative overflow-hidden bg-[#F5F1DF] dark:bg-[#3D3934] p-5 sm:p-8 ${brutalistBox}`}
    >
      <div
        className="absolute top-0 left-0 w-full h-3 border-b-4 border-[#181818] dark:border-[#050505]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #DBA538 0, #DBA538 14px, #181818 14px, #181818 28px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-3 border-t-4 border-[#181818] dark:border-[#050505]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #DBA538 0, #DBA538 14px, #181818 14px, #181818 28px)',
        }}
      />

      <div className="pt-4 pb-4">
        <div className="inline-flex items-center gap-2 bg-[#D93635] text-[#F5F1DF] font-black uppercase text-[10px] sm:text-xs px-3 py-1 border-2 border-[#181818] dark:border-[#050505] mb-4">
          <HardHat size={14} strokeWidth={2.5} />
          Aprendendo agora
        </div>

        <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">Cibersegurança</h3>
        <p className="font-medium text-base sm:text-lg leading-relaxed">
          Estou de mergulho no <strong>Programa Mulher Digital (JA Brasil)</strong>, numa imersão
          em cibersegurança pra ampliar minha visão sobre segurança de sistemas e somar essa
          bagagem à minha atuação como profissional de QA. Ainda é uma frente nova pra mim, mas
          já virou peça fixa da minha rotina de estudos — essa seção vai crescendo conforme eu
          avanço.
        </p>

        <div className="mt-8 border-t-4 border-[#181818] dark:border-[#050505] pt-6">
          <h4 className="text-lg sm:text-xl font-black uppercase mb-4">Emblemas conquistados</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cybersecurityBadges.map(badge => (
              <CybersecurityBadge key={badge.url} badge={badge} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

const About = () => (
  <div className={`${responsiveShell} py-12 sm:py-16 space-y-12 sm:space-y-16`}>
    <section>
      <div className="inline-block mb-8">
        <h2 className="text-2xl sm:text-3xl font-black uppercase bg-[#D93635] text-[#F5F1DF] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
          Sobre Mim
        </h2>
      </div>
      <div className={`bg-[#F5F1DF] dark:bg-[#3D3934] p-5 sm:p-8 ${brutalistBox}`}>
        <p className="font-medium text-base sm:text-lg leading-relaxed pb-5">
          Sou a Alícia, Engenheira de Computação pela UFPA que se apaixonou por qualidade de software no meio do caminho e nunca mais parou. Comecei liderando projetos e times em uma empresa júnior que ajudei a reestruturar, e desde então venho migrando cada vez mais pro universo de QA e automação. Hoje atuo com testes manuais e automatizados no dia a dia, sempre procurando mais um bug antes de subir o código para produção.
        </p>
        <p className="font-medium text-base sm:text-lg leading-relaxed">
          Nas horas vagas sou basicamente uma nerd de carteirinha: gosto de mexer com tecnologia em geral, jogar uns jogos pra descontrair e mexer com impressão 3D{' '}
          <span className="inline-flex align-middle -translate-y-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#D93635"
              stroke="#181818"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            </svg>
          </span>
          , inclusive foi essa curiosidade que virou o LabPrice, um dos meus projetos de portfólio. Também amo a parte de ensinar e abrir espaço pra outras mulheres na tecnologia, foi assim na robótica, na tutoria e é assim até hoje.
        </p>
      </div>
    </section>

    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
      <div>
        <div className="inline-block mb-8">
          <h2 className="text-2xl sm:text-3xl font-black uppercase bg-[#DBA538] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
            Experiência
          </h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`bg-[#F4CDBC] dark:bg-[#4A3528] p-5 sm:p-6 ${brutalistBox}`}>
              <h3 className="text-lg sm:text-xl font-black uppercase">{exp.role}</h3>
              <h4 className="font-bold text-[#A81C24] text-base sm:text-lg mb-2">{exp.company}</h4>
              <div className="inline-block bg-white dark:bg-[#3D3934] border-2 border-[#181818] dark:border-[#050505] px-2 py-1 text-[10px] sm:text-xs font-bold mb-3">
                {exp.period}
              </div>
              <p className="font-medium text-sm sm:text-base">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <div className="inline-block mb-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase bg-[#DBA538] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
              Formação Acadêmica
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className={`bg-[#F5F1DF] dark:bg-[#3D3934] p-5 sm:p-6 ${brutalistBox}`}>
                <h3 className="text-lg sm:text-xl font-black uppercase">{edu.course}</h3>
                <h4 className="font-bold text-[#A81C24] text-base sm:text-lg mb-2">{edu.institution}</h4>
                <p className="font-medium text-sm sm:text-base">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="inline-block mb-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase bg-[#D93635] text-[#F5F1DF] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
              Cursos
            </h2>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`bg-[#F5F1DF] dark:bg-[#4C2A2A] p-4 ${brutalistBox} flex items-start gap-4`}>
                <div className="bg-[#181818] text-[#DBA538] font-black text-[10px] sm:text-xs px-2 py-1 shrink-0">{cert.year}</div>
                <div>
                  <h3 className="font-black uppercase text-sm sm:text-base">{cert.title}</h3>
                  <p className="font-medium text-[#A81C24] text-xs sm:text-sm">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <InProgress />
  </div>
)

export default About
