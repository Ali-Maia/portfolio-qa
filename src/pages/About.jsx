const brutalistBorder = 'border-4 border-[#181818]'
const brutalistShadow = 'shadow-[4px_4px_0px_#181818]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const experiences = [
  {
    role: 'Vice-presidente',
    company: 'Link JR',
    period: 'Agosto 2024 - Presente',
    desc: 'Atuação estratégica na gestão e desenvolvimento de projetos ágeis.',
  },
  {
    role: 'Bolsista e Mentora',
    company: "Projeto Meninas PaiD'Éguas (UFPA)",
    period: 'Agosto 2024 - Setembro 2025',
    desc: 'Mentoria em Computação e robótica para meninas do ensino médio.',
  },
  {
    role: 'Tutora de Informática',
    company: 'Tutoria Discente Castanhal (UFPA)',
    period: 'Agosto 2023 - Julho 2024',
    desc: 'Auxílio a alunos e desenvolvimento do site da tutoria.',
  },
]

const About = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Experiência */}
    <div>
      <div className="inline-block mb-8">
        <h2 className="text-3xl font-black uppercase bg-[#DBA538] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
          Experiência
        </h2>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`bg-[#F4CDBC] p-6 ${brutalistBox}`}>
            <h3 className="text-xl font-black uppercase">{exp.role}</h3>
            <h4 className="font-bold text-[#A81C24] text-lg mb-2">{exp.company}</h4>
            <div className="inline-block bg-white border-2 border-[#181818] px-2 py-1 text-xs font-bold mb-3">
              {exp.period}
            </div>
            <p className="font-medium">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Formação */}
    <div>
      <div className="inline-block mb-8">
        <h2 className="text-3xl font-black uppercase bg-[#DBA538] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
          Formação Acadêmica
        </h2>
      </div>
      <div className="space-y-6">
        {[
          {
            course: 'Engenharia de Computação',
            institution: 'Universidade Federal do Pará (UFPA)',
            detail: 'Bacharelado | 2020 - 2025',
          },
          {
            course: 'Automação de Testes de Software',
            institution: 'Faculdade VINCIT / FACINT',
            detail: 'Pós-Graduação (PGATS) | 2026',
          },
          {
            course: 'Desenvolvimento de Sistemas',
            institution: 'IFSULMINAS',
            detail: 'Técnico | 2026 - 2027',
          },
        ].map((edu, idx) => (
          <div key={idx} className={`bg-[#F5F1DF] p-6 ${brutalistBox}`}>
            <h3 className="text-xl font-black uppercase">{edu.course}</h3>
            <h4 className="font-bold text-[#A81C24] text-lg mb-2">{edu.institution}</h4>
            <p className="font-medium">{edu.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default About
