import { Link } from 'react-router-dom'
import { Terminal, Monitor, Smartphone } from 'lucide-react'

const ICONS = {
  Terminal:   <Terminal   className="w-16 h-16 text-[#181818] dark:text-[#F5F1DF]" strokeWidth={2} />,
  Monitor:    <Monitor    className="w-16 h-16 text-[#181818] dark:text-[#F5F1DF]" strokeWidth={2} />,
  Smartphone: <Smartphone className="w-16 h-16 text-[#181818] dark:text-[#F5F1DF]" strokeWidth={2} />,
}

const brutalistBorder = 'border-4 border-[#181818] dark:border-[#050505]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818] dark:shadow-[6px_6px_0px_#050505]'
const brutalistHover  =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818] dark:hover:shadow-[10px_10px_0px_#050505]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const TAG_STYLES = {
  QA: 'bg-[#DBA538] text-[#181818]',
  Cybersegurança: 'bg-[#39FF88] text-[#181818]',
}

const ProjectCard = ({ project }) => {
  const { slug, title, role, shortDesc, tech, color, coverImage, date, icon, tags = [] } = project

  return (
    <div className={`bg-white dark:bg-[#3D3934] flex flex-col ${brutalistBox} ${brutalistHover}`}>
      <div
        className="h-40 sm:h-44 border-b-4 border-[#181818] dark:border-[#050505] flex items-center justify-center p-4 relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover absolute inset-0"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        ) : (
          ICONS[icon] ?? ICONS.Terminal
        )}

        {tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[70%]">
            {tags.map(tag => (
              <span
                key={tag}
                className={`border-2 border-[#181818] dark:border-[#050505] px-2 py-1 text-[10px] font-black uppercase leading-none shadow-[2px_2px_0px_#181818] ${TAG_STYLES[tag] ?? 'bg-[#F5F1DF] text-[#181818]'}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={`bg-white dark:bg-[#3D3934] dark:text-[#F5F1DF] px-3 py-2 font-black uppercase text-[9px] sm:text-sm absolute bottom-3 right-3 max-w-[58%] leading-tight ${brutalistBox}`}>
          {tech.join(' · ')}
        </div>

        {date && (
          <div className="bg-white dark:bg-[#3D3934] dark:text-[#F5F1DF] border-2 border-[#181818] dark:border-[#050505] px-2 py-1 text-[10px] font-bold absolute top-3 right-3">
            {date}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">{title}</h3>
        <h4 className="text-[#D93635] font-bold uppercase mb-4 text-xs sm:text-sm tracking-wider">{role}</h4>
        <p className="font-medium mb-6 flex-1 text-sm sm:text-base">{shortDesc}</p>
        <Link
          to={`/projetos/${slug}`}
          className={`w-full bg-[#F5F1DF] dark:bg-[#4A3528] dark:text-[#F5F1DF] text-center font-black uppercase py-2 text-sm sm:text-base ${brutalistBox} hover:bg-[#DBA538] dark:hover:bg-[#DBA538] dark:hover:text-[#181818] transition-colors block`}
        >
          Ver case →
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
