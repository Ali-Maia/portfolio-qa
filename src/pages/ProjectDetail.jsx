import { useParams, Navigate, Link } from 'react-router-dom'
import projects from '../data/projects/index.js'

const brutalistBorder = 'border-4 border-[#181818] dark:border-[#050505]'
const brutalistShadow = 'shadow-[4px_4px_0px_#181818] dark:shadow-[4px_4px_0px_#050505]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/projetos" replace />

  const {
    title, role, tech, color, coverImage, date,
    context, challenge, solution, metrics, learned, links = {},
  } = project

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20 pt-8">
      {/* Back button */}
      <Link
        to="/projetos"
        className={`inline-flex items-center gap-2 ${brutalistBox} font-black uppercase px-4 py-2 mb-8 bg-[#F5F1DF] dark:bg-[#4A3528] dark:text-[#F5F1DF] hover:bg-[#DBA538] dark:hover:bg-[#DBA538] dark:hover:text-[#181818] transition-colors duration-150`}
      >
        ← Projetos
      </Link>

      {/* Cover image */}
      <div
        className={`w-full h-64 md:h-72 ${brutalistBorder} mb-8 relative overflow-hidden flex items-center justify-center`}
        style={{ backgroundColor: color }}
      >
        {coverImage && (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover "
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        )}
        {date && (
          <div className="absolute top-4 right-4 bg-white dark:bg-[#4A3528] dark:text-[#F5F1DF] border-2 border-[#181818] dark:border-[#050505] px-3 py-1 text-sm font-bold">
            {date}
          </div>
        )}
      </div>

      {/* Title + role + tech */}
      <h1 className="text-4xl md:text-5xl font-black uppercase mb-3">{title}</h1>
      <p className="text-[#D93635] font-bold uppercase tracking-wider mb-4">{role}</p>
      <div className="flex flex-wrap gap-2 mb-10">
        {(tech ?? []).map(t => (
          <span key={t} className="bg-[#181818] text-[#F5F1DF] font-bold px-3 py-1 text-sm">
            {t}
          </span>
        ))}
      </div>

      {/* Context */}
      <div className={`bg-white dark:bg-[#4A3528] p-6 ${brutalistBox} mb-6`}>
        <h2 className="text-xs font-black uppercase text-[#D93635] mb-2">Contexto</h2>
        <p className="font-medium leading-relaxed">{context}</p>
      </div>

      {/* Challenge / Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border-4 border-[#D93635] p-6">
          <h2 className="text-xs font-black uppercase text-[#D93635] mb-2">Desafio</h2>
          <p className="font-medium leading-relaxed">{challenge}</p>
        </div>
        <div className="border-4 border-[#DBA538] bg-[#F4CDBC] dark:bg-[#4A3528] p-6">
          <h2 className="text-xs font-black uppercase text-[#A81C24] mb-2">Solução</h2>
          <p className="font-medium leading-relaxed">{solution}</p>
        </div>
      </div>

      {/* Metrics — hidden when array is empty */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map(m => (
            <div key={m.label} className="bg-[#181818] text-[#F5F1DF] p-6 text-center">
              <div className="text-3xl font-black text-[#DBA538]">{m.value}</div>
              <div className="text-xs uppercase font-bold mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* O que aprendi — hidden when null */}
      {learned && (
        <div className={`bg-[#F4CDBC] p-6 ${brutalistBox} mb-6`}>
          <h2 className="text-xs font-black uppercase mb-2">O que aprendi</h2>
          <p className="font-medium leading-relaxed">{learned}</p>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={`${brutalistBox} bg-[#181818] text-[#F5F1DF] font-black uppercase px-6 py-3 hover:bg-[#DBA538] hover:text-[#181818] transition-colors duration-150`}
          >
            GitHub →
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer"
            className={`${brutalistBox} bg-[#F5F1DF] dark:bg-[#4A3528] dark:text-[#F5F1DF] font-black uppercase px-6 py-3 hover:bg-[#DBA538] dark:hover:bg-[#DBA538] dark:hover:text-[#181818] transition-colors duration-150`}
          >
            Site do Projeto →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
