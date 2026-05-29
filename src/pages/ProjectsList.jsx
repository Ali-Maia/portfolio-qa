import projects from '../data/projects/index.js'
import ProjectCard from '../components/ProjectCard'

const ProjectsList = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <div className="flex items-center gap-4 mb-10">
      <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
      <h1 className="text-4xl md:text-5xl font-black uppercase text-center bg-[#D93635] text-[#F5F1DF] px-6 py-2 border-4 border-[#181818] dark:border-[#F5F1DF] shadow-[4px_4px_0px_#181818] dark:shadow-[4px_4px_0px_#F5F1DF]">
        Projetos
      </h1>
      <div className="h-2 flex-1 bg-[#181818] dark:bg-[#F5F1DF]" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  </section>
)

export default ProjectsList
