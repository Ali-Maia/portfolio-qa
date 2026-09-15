import { useParams, Navigate, Link } from 'react-router-dom'
import projects from '../data/projects/index.js'
import { responsiveShell } from '../utils/responsive'

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

  const normalizedMetrics = (metrics ?? [])
    .map((metric, index) => {
      if (typeof metric === 'string') {
        return { label: `Métrica ${index + 1}`, value: metric }
      }

      return {
        label: metric?.label ?? `Métrica ${index + 1}`,
        value: metric?.value ?? metric?.label ?? '',
      }
    })
    .filter(metric => metric.value && String(metric.value).trim())

  return (
    <div className={`${responsiveShell} pb-20 pt-8`}>
      <Link
        to="/projetos"
        className={`inline-flex items-center gap-2 ${brutalistBox} font-black uppercase px-4 py-2 mb-8 bg-[#F5F1DF] dark:bg-[#3D3934] dark:text-[#F5F1DF] hover:bg-[#DBA538] dark:hover:bg-[#DBA538] dark:hover:text-[#181818] transition-colors duration-150`}
      >
        ← Projetos
      </Link>

      <div
        className={`w-full h-56 sm:h-64 md:h-72 ${brutalistBorder} mb-8 relative overflow-hidden flex items-center justify-center`}
        style={{ backgroundColor: color }}
      >
        {coverImage && (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-contain p-2"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        )}
        {date && (
          <div className="absolute top-4 right-4 bg-white dark:bg-[#3D3934] dark:text-[#F5F1DF] border-2 border-[#181818] dark:border-[#050505] px-3 py-1 text-sm font-bold">
            {date}
          </div>
        )}
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-3">{title}</h1>
      <p className="text-[#D93635] font-bold uppercase tracking-wider mb-4">{role}</p>
      <div className="flex flex-wrap gap-2 mb-10">
        {(tech ?? []).map(t => (
          <span key={t} className="bg-[#181818] text-[#F5F1DF] font-bold px-3 py-1 text-xs sm:text-sm">
            {t}
          </span>
        ))}
      </div>

      <div className={`bg-white dark:bg-[#3D3934] p-5 sm:p-6 ${brutalistBox} mb-6`}>
        <h2 className="text-xs font-black uppercase text-[#D93635] mb-2">Contexto</h2>
        <p className="font-medium leading-relaxed">{context}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border-4 border-[#D93635] dark:bg-[#4C2A2A] p-5 sm:p-6">
          <h2 className="text-xs font-black uppercase text-[#D93635] mb-2">Desafio</h2>
          <p className="font-medium leading-relaxed">{challenge}</p>
        </div>
        <div className="border-4 border-[#DBA538] bg-[#F4CDBC] dark:bg-[#4A3528] p-5 sm:p-6">
          <h2 className="text-xs font-black uppercase text-[#A81C24] mb-2">Solução</h2>
          <p className="font-medium leading-relaxed">{solution}</p>
        </div>
      </div>

      {normalizedMetrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {normalizedMetrics.map((m, index) => (
            <div
              key={`${m.label}-${index}`}
              className={`${brutalistBox} p-3 sm:p-4 text-left ${index % 2 === 0 ? 'bg-[#F4CDBC] text-[#181818]' : 'bg-[#DBA538] text-[#181818]'}`}
            >
              <div className="text-[9px] sm:text-[10px] uppercase font-black tracking-[0.18em] mb-2 opacity-80">
                {m.label}
              </div>
              <div className="text-xs sm:text-sm font-bold leading-relaxed">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {learned && (
        <div className={`bg-[#F4CDBC] p-5 sm:p-6 ${brutalistBox} mb-6`}>
          <h2 className="text-xs font-black uppercase mb-2">O que aprendi</h2>
          <p className="font-medium leading-relaxed">{learned}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={`${brutalistBox} w-full sm:w-auto bg-[#181818] text-[#F5F1DF] font-black uppercase px-5 py-3 hover:bg-[#DBA538] hover:text-[#181818] transition-colors duration-150 text-center`}
          >
            GitHub →
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer"
            className={`${brutalistBox} w-full sm:w-auto bg-[#F5F1DF] dark:bg-[#3D3934] dark:text-[#F5F1DF] font-black uppercase px-5 py-3 hover:bg-[#DBA538] dark:hover:bg-[#DBA538] dark:hover:text-[#181818] transition-colors duration-150 text-center`}
          >
            Site do Projeto →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
