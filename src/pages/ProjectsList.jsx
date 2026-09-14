import projects from '../data/projects/index.js'
import ProjectCard from '../components/ProjectCard'
import CyberSecuritySection from '../components/CyberSecuritySection'
import { responsiveShell } from '../utils/responsive'

const qaProjects = projects.filter(project => project.tags?.includes('QA'))

const ProjectsList = () => (
  <section className={`${responsiveShell} py-12 sm:py-16`}>
    <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
      <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-center bg-[#D93635] text-[#F5F1DF] px-4 sm:px-6 py-2 border-4 border-[#181818] dark:border-[#050505] shadow-[4px_4px_0px_#181818] dark:shadow-[4px_4px_0px_#050505]">
        Projetos
      </h1>
      <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {qaProjects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>

    <CyberSecuritySection />
  </section>
)

export default ProjectsList
