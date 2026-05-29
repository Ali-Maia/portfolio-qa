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
    role: 'QA Lead',
    company: 'Castanhal On',
    period: 'Novembro 2025 - Abril 2026',
    desc: 'Liderança da estratégia de qualidade e automação da plataforma. Execução de testes manuais e automatizados com foco em estabilidade.',
  },
  {
    role: 'Vice-presidente',
    company: 'LinkJr (Empresa Júnior)',
    period: 'Agosto 2024 - Abril 2026',
    desc: 'Gestão executiva de equipes e liderança de projetos com Cypress, React, Next.js e TypeScript. Condução de interações com clientes e suporte a equipes ágeis.',
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

const About = () => (
  <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Experiência */}
      <div>
        <div className="inline-block mb-8">
          <h2 className="text-3xl font-black uppercase bg-[#DBA538] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
            Experiência
          </h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`bg-[#F4CDBC] dark:bg-[#4A3528] p-6 ${brutalistBox}`}>
              <h3 className="text-xl font-black uppercase">{exp.role}</h3>
              <h4 className="font-bold text-[#A81C24] text-lg mb-2">{exp.company}</h4>
              <div className="inline-block bg-white dark:bg-[#3D3934] border-2 border-[#181818] dark:border-[#050505] px-2 py-1 text-xs font-bold mb-3">
                {exp.period}
              </div>
              <p className="font-medium">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Formação + Certificações */}
      <div className="space-y-12">
        <div>
          <div className="inline-block mb-8">
            <h2 className="text-3xl font-black uppercase bg-[#DBA538] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
              Formação Acadêmica
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className={`bg-[#F5F1DF] dark:bg-[#3D3934] p-6 ${brutalistBox}`}>
                <h3 className="text-xl font-black uppercase">{edu.course}</h3>
                <h4 className="font-bold text-[#A81C24] text-lg mb-2">{edu.institution}</h4>
                <p className="font-medium">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="inline-block mb-8">
            <h2 className="text-3xl font-black uppercase bg-[#D93635] text-[#F5F1DF] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
              Certificações
            </h2>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`bg-[#F5F1DF] dark:bg-[#4C2A2A] p-4 ${brutalistBox} flex items-start gap-4`}>
                <div className="bg-[#181818] text-[#DBA538] font-black text-xs px-2 py-1 shrink-0">{cert.year}</div>
                <div>
                  <h3 className="font-black uppercase text-base">{cert.title}</h3>
                  <p className="font-medium text-[#A81C24] text-sm">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About
