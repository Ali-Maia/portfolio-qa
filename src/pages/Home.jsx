import React from 'react'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects/index.js'
import AvatarImg from '../assets/avatar.webp'
import { responsiveShell } from '../utils/responsive'

const brutalistBorder = 'border-4 border-[#181818] dark:border-[#050505]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818] dark:shadow-[6px_6px_0px_#050505]'
const brutalistHover  =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818] dark:hover:shadow-[10px_10px_0px_#050505]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`
const brutalistButton =
  `${brutalistBox} ${brutalistHover} font-black uppercase tracking-wider px-3 py-2.5 sm:px-6 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-base`

const skills = [
  'Cypress', 'Playwright', 'K6', 'JavaScript',
  'Robot Framework', 'Mocha / Chai', 'Postman / Swagger', 'Git', 'CI/CD',
]

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="pb-20">
      <main className={`${responsiveShell} pt-8 sm:pt-10 pb-12 sm:pb-20 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 relative`}>
        <Star className="absolute top-10 left-10 w-8 h-8 fill-[#DBA538] text-[#181818] hidden lg:block" />
        <Star className="absolute bottom-20 left-1/2 w-12 h-12 fill-[#D93635] text-[#181818] hidden lg:block" />
        <Star className="absolute top-20 right-10 w-6 h-6 fill-[#F4CDBC] text-[#181818] hidden lg:block" />

        <div className="flex-1 relative z-10 w-full">
          <h1 className="text-5xl max-[360px]:text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-5 sm:mb-6">
            Olá, sou <br />
            <span className="text-[#F5F1DF] bg-[#181818] dark:text-[#181818] dark:bg-[#F5F1DF] px-2 inline-block -skew-x-6 mt-2 pb-2">
              Alícia Maia
            </span>
          </h1>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
            <span className={`bg-[#DBA538] text-[#181818] text-base sm:text-xl md:text-3xl font-black uppercase px-3 py-2 sm:px-4 ${brutalistBox}`}>
              Analista de QA
            </span>
            <span className={`bg-[#D93635] text-[#F5F1DF] text-base sm:text-xl md:text-3xl font-black uppercase px-3 py-2 sm:px-4 ${brutalistBox} rotate-2`}>
              Automação
            </span>
          </div>
          <p className="text-base sm:text-xl md:text-2xl font-bold max-w-lg mb-6 sm:mb-8 leading-snug">
            Encontrando bugs antes que eles encontrem seus usuários.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="https://github.com/Ali-Maia" target="_blank" rel="noreferrer"
               className={`${brutalistButton} w-full sm:w-auto bg-[#181818] text-[#F5F1DF] dark:bg-[#F5F1DF] dark:text-[#181818]`}>
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/dev-maia/" target="_blank" rel="noreferrer"
               className={`${brutalistButton} w-full sm:w-auto bg-[#181818] text-[#F5F1DF] dark:bg-[#F5F1DF] dark:text-[#181818]`}>
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className={`w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#F4CDBC] dark:bg-[#4A3528] rounded-full ${brutalistBox} flex items-center justify-center relative overflow-hidden`}>
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-[#68412B] rounded-full ${brutalistBorder}`} />
            <div className={`absolute top-10 -left-10 w-20 h-20 bg-[#A81C24] ${brutalistBorder} rotate-12`} />
            <img src={AvatarImg} alt="Avatar Alícia Maia" className="w-full h-full object-cover scale-110" />
          </div>
        </div>
      </main>

      <div className="bg-[#181818] text-[#F5F1DF] border-y-4 border-[#181818] py-4 overflow-hidden mb-16 sm:mb-20 relative flex">
        <div className="flex animate-marquee whitespace-nowrap gap-8 px-4 font-black text-xl sm:text-2xl uppercase tracking-widest items-center">
          {[...skills, ...skills].map((skill, i) => (
            <React.Fragment key={i}>
              <span>{skill}</span>
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#DBA538] text-[#DBA538]" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {featuredProjects.length > 0 && (
        <section className={`${responsiveShell} mb-20`}>
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
            <h2 className="flex gap-2 sm:gap-4 text-2xl sm:text-4xl md:text-5xl font-black uppercase text-center bg-[#DBA538] text-[#181818] px-3 py-2 sm:px-4 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-6 h-6 sm:w-12 sm:h-12 fill-[#181818] text-[#181818] hidden md:block" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Em Destaque
            </h2>
            <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/projetos" className={`${brutalistButton} inline-flex mx-auto bg-[#F5F1DF] dark:bg-[#3D3934] dark:text-[#F5F1DF]`}>
              Ver todos os projetos →
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home
