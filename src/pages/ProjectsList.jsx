import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'
import projects from '../data/projects/index.js'
import ProjectCard from '../components/ProjectCard'

const ProjectsList = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <div className="flex items-center gap-4 mb-10">
      <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
      <h1 className="text-4xl md:text-5xl font-black uppercase text-center bg-[#D93635] text-[#F5F1DF] px-6 py-2 border-4 border-[#181818] dark:border-[#050505] shadow-[4px_4px_0px_#181818] dark:shadow-[4px_4px_0px_#050505]">
        Projetos
      </h1>
      <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>

      {/* Easter egg — acesso a projetos de cibersegurança */}
<Link
  to="/cyberseguranca"
  title="acesso restrito"
  className="group fixed bottom-6 right-6 z-20 flex items-center gap-2 bg-[#F5F1DF] dark:bg-[#3D3934] text-[#181818] dark:text-[#39FF88] border-2 border-[#181818] dark:border-[#050505] px-3 py-2 shadow-[3px_3px_0px_#39FF88] transition-transform hover:-translate-y-0.5 hover:-translate-x-0.5"
>
  <Lock size={16} className="animate-pulse" />
  <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-xs group-hover:max-w-xs group-hover:ml-1 transition-all duration-300">
    acesso_restrito.sh
  </span>
</Link>

  </section>
)

export default ProjectsList
