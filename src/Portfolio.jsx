import React from 'react';
import { Mail, Folder, User, Terminal, Star, Bug, Monitor, CheckCircle, Smartphone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AvatarImg from './assets/avatar.png'

const Portfolio = () => {
  // Estilos reutilizáveis do Neobrutalismo
  const brutalistBorder = "border-4 border-[#181818]";
  const brutalistShadow = "shadow-[6px_6px_0px_#181818]";
  const brutalistHover = "transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818]";
  const brutalistBox = `${brutalistBorder} ${brutalistShadow}`;
  const brutalistButton = `${brutalistBox} ${brutalistHover} font-black uppercase tracking-wider px-6 py-3 flex items-center gap-2 cursor-pointer`;

  const skills = [
    "Cypress", "Playwright", "K6", "JavaScript", "Python", 
    "Mocha / Chai", "Postman / Swagger", "Scrum / Kanban"
  ];

  const projects = [
    {
      title: "Guia Castanhal Online",
      role: "Responsável por QA / Testes",
      desc: "Planejamento e execução de testes manuais e automatizados para garantir a funcionalidade e usabilidade da plataforma.",
      tech: "QA Manual & Automação",
      color: "bg-[#DBA538]" // Dourado
    },
    {
      title: "Estoque-Teste",
      role: "Automação E2E",
      desc: "Desenvolvimento de testes E2E e de performance para uma página Web de controle de estoque, validando regras de negócio.",
      tech: "Cypress, K6",
      color: "bg-[#D93635]", // Vermelho Vivo
      textColor: "text-[#F5F1DF]"
    },
    {
      title: "Bookcart",
      role: "Automação E2E (POM)",
      desc: "Criação de testes E2E automatizados para uma aplicação de e-commerce aplicando o padrão Page Object Model (POM).",
      tech: "Cypress, Mochawesome",
      color: "bg-[#F4CDBC]" // Pêssego
    }
  ];

  const experiences = [
    {
      role: "Vice-presidente",
      company: "Link JR",
      period: "Agosto 2024 - Presente",
      desc: "Atuação estratégica na gestão e desenvolvimento de projetos ágeis."
    },
    {
      role: "Bolsista e Mentora",
      company: "Projeto Meninas PaiD'Éguas (UFPA)",
      period: "Agosto 2024 - Setembro 2025",
      desc: "Mentoria em Computação e robótica para meninas do ensino médio."
    },
    {
      role: "Tutora de Informática",
      company: "Tutoria Discente Castanhal (UFPA)",
      period: "Agosto 2023 - Julho 2024",
      desc: "Auxílio a alunos e desenvolvimento do site da tutoria."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1DF] text-[#181818] font-sans selection:bg-[#DBA538] selection:text-[#181818] pb-20">
      
      {/* Fake Browser Header */}
      <div className={`bg-[#F5F1DF] ${brutalistBorder} border-t-0 border-l-0 border-r-0 border-b-4 flex items-center px-4 py-2 sticky top-0 z-50 bg-opacity-100`}>
        <div className="flex gap-2 mr-6">
          <div className="w-4 h-4 rounded-full bg-[#D93635] border-2 border-[#181818]"></div>
          <div className="w-4 h-4 rounded-full bg-[#DBA538] border-2 border-[#181818]"></div>
          <div className="w-4 h-4 rounded-full bg-[#A81C24] border-2 border-[#181818]"></div>
        </div>
        <div className={`flex-1 bg-white ${brutalistBorder} h-8 flex items-center px-4 mx-4`}>
          <span className="font-bold text-sm">https://aliciamaia.qa</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-6 flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        <a href="#projetos" className={`${brutalistButton} bg-[#F5F1DF]`}>
          <Folder className="w-6 h-6" /> Projetos
        </a>
        <a href="#sobre" className={`${brutalistButton} bg-[#F5F1DF]`}>
          <User className="w-6 h-6" /> Sobre Mim
        </a>
        <a href="#contato" className={`${brutalistButton} bg-[#F5F1DF]`}>
          <Mail className="w-6 h-6" /> Contato
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-20 flex flex-col lg:flex-row items-center gap-12 relative">
        
        {/* Decorative Stars */}
        <Star className="absolute top-10 left-10 w-8 h-8 fill-[#DBA538] text-[#181818] hidden lg:block" />
        <Star className="absolute bottom-20 left-1/2 w-12 h-12 fill-[#D93635] text-[#181818] hidden lg:block" />
        <Star className="absolute top-20 right-10 w-6 h-6 fill-[#F4CDBC] text-[#181818] hidden lg:block" />

        {/* Left Content */}
        <div className="flex-1 relative z-10">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            Olá, sou <br />
            <span className="text-[#F5F1DF] bg-[#181818] px-2 inline-block -skew-x-6 mt-2 pb-2">
              Alícia Maia
            </span>
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className={`bg-[#DBA538] text-[#181818] text-xl md:text-3xl font-black uppercase px-4 py-2 ${brutalistBox}`}>
              Analista de QA
            </span>
            <span className={`bg-[#D93635] text-[#F5F1DF] text-xl md:text-3xl font-black uppercase px-4 py-2 ${brutalistBox} rotate-2`}>
              Automação
            </span>
          </div>

          <p className="text-xl md:text-2xl font-bold max-w-lg mb-8 leading-snug">
            Garantindo a qualidade do software com rigor técnico, automação de testes e uma pitada de estilo vintage.
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/Ali-Maia" target="_blank" rel="noreferrer" className={`${brutalistButton} bg-[#181818] text-[#F5F1DF]`}>
              <FaGithub className="w-6 h-6" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/dev-maia/" target="_blank" rel="noreferrer" className={`${brutalistButton} bg-[#181818] text-[#F5F1DF]`}>
              <FaLinkedin className="w-6 h-6" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Content - Abstract Rubberhose Vibe Illustration Area */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className={`w-80 h-80 md:w-96 md:h-96 bg-[#F4CDBC] rounded-full ${brutalistBox} flex items-center justify-center relative overflow-hidden`}>
            {/* Background geometric accents representing vintage shapes */}
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-[#68412B] rounded-full ${brutalistBorder}`}></div>
            <div className={`absolute top-10 -left-10 w-20 h-20 bg-[#A81C24] ${brutalistBorder} rotate-12`}></div>
            
            {/* Main Icon symbolizing QA/Bug hunting */}
            <img 
                src={AvatarImg} 
                alt="Avatar Alícia Maia" 
                className="w-full h-full object-cover scale-110" // scale-110 dá um leve zoom para preencher melhor
                />
          </div>
        </div>
      </main>

      {/* Skills Banner */}
      <div className={`bg-[#181818] text-[#F5F1DF] border-y-4 border-[#181818] py-4 overflow-hidden mb-20 relative flex`}>
        <div className="flex animate-marquee whitespace-nowrap gap-8 px-4 font-black text-2xl uppercase tracking-widest items-center">
          {/* Duplicating for infinite marquee effect */}
          {[...skills, ...skills].map((skill, index) => (
            <React.Fragment key={index}>
              <span>{skill}</span>
              <Star className="w-6 h-6 fill-[#DBA538] text-[#DBA538]" />
            </React.Fragment>
          ))}
        </div>
        {/* Simple CSS block for marquee animation (would normally be in global css) */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
            min-width: 200%;
          }
        `}} />
      </div>

      {/* Projects Section */}
      <section id="projetos" className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-2 flex-1 bg-[#181818]"></div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center bg-[#D93635] text-[#F5F1DF] px-6 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
            Projetos
          </h2>
          <div className="h-2 flex-1 bg-[#181818]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className={`bg-white flex flex-col ${brutalistBox} ${brutalistHover}`}>
              {/* Card Header Color Block */}
              <div className={`h-40 ${proj.color} border-b-4 border-[#181818] flex items-center justify-center p-4 relative`}>
                <div className={`bg-white px-4 py-2 font-black uppercase text-sm absolute bottom-4 right-4 ${brutalistBox}`}>
                  {proj.tech}
                </div>
                {/* Abstract Icons based on project */}
                {idx === 0 ? <Smartphone className="w-16 h-16 text-[#181818]" strokeWidth={2}/> : 
                 idx === 1 ? <Monitor className="w-16 h-16 text-[#181818]" strokeWidth={2}/> : 
                 <Terminal className="w-16 h-16 text-[#181818]" strokeWidth={2}/>}
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-black uppercase mb-2">{proj.title}</h3>
                <h4 className="text-[#D93635] font-bold uppercase mb-4 text-sm tracking-wider">{proj.role}</h4>
                <p className="font-medium mb-6 flex-1">{proj.desc}</p>
                
                <button className={`w-full bg-[#F5F1DF] text-center font-black uppercase py-2 ${brutalistBox} hover:bg-[#DBA538] transition-colors`}>
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        
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
              <div className={`bg-[#F5F1DF] p-6 ${brutalistBox}`}>
                 <h3 className="text-xl font-black uppercase">Engenharia de Computação</h3>
                 <h4 className="font-bold text-[#A81C24] text-lg mb-2">Universidade Federal do Pará (UFPA)</h4>
                 <p className="font-medium">Bacharelado | 2020 - 2025</p>
              </div>

              <div className={`bg-[#F5F1DF] p-6 ${brutalistBox}`}>
                 <h3 className="text-xl font-black uppercase">Automação de Testes de Software</h3>
                 <h4 className="font-bold text-[#A81C24] text-lg mb-2">Faculdade VINCIT / FACINT</h4>
                 <p className="font-medium">Pós-Graduação (PGATS) | 2026</p>
              </div>

              <div className={`bg-[#F5F1DF] p-6 ${brutalistBox}`}>
                 <h3 className="text-xl font-black uppercase">Desenvolvimento de Sistemas</h3>
                 <h4 className="font-bold text-[#A81C24] text-lg mb-2">IFSULMINAS</h4>
                 <p className="font-medium">Técnico | 2026 - 2027</p>
              </div>
           </div>
        </div>

      </section>

      {/* Footer / Contato */}
      <footer id="contato" className="max-w-6xl mx-auto px-6 border-t-8 border-[#181818] pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter">Vamos conversar?</h2>
          <p className="font-bold text-xl mb-6">Disponível para oportunidades em QA e Automação.</p>
          <a href="mailto:aliciaengcomp@gmail.com" className={`${brutalistButton} bg-[#D93635] text-[#F5F1DF] inline-flex text-xl`}>
            <Mail className="w-6 h-6" /> aliciaengcomp@gmail.com
          </a>
        </div>
        
        <div className={`bg-[#68412B] text-[#F5F1DF] p-8 flex flex-col items-center gap-4 ${brutalistBox} rotate-2`}>
          <span className="font-black uppercase text-xl">Siga-me</span>
          <div className="flex gap-4">
            <a href="https://github.com/Ali-Maia" target="_blank" rel="noreferrer" className="hover:text-[#DBA538] transition-colors">
              <FaGithub className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/dev-maia/" target="_blank" rel="noreferrer" className="hover:text-[#DBA538] transition-colors">
              <FaLinkedin className="w-10 h-10" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;