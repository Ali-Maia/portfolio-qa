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

const ProjectCard = ({ project }) => {
  const { slug, title, role, shortDesc, tech, color, coverImage, date, icon } = project

  return (
    <div className={`bg-white dark:bg-[#4A3528] flex flex-col ${brutalistBox} ${brutalistHover}`}>
      {/* Card header */}
      <div
        className="h-40 border-b-4 border-[#181818] dark:border-[#050505] flex items-center justify-center p-4 relative overflow-hidden"
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

        {/* Tech badge */}
        <div className={`bg-white dark:bg-[#4A3528] dark:text-[#F5F1DF] px-4 py-2 font-black uppercase text-sm absolute bottom-4 right-4 ${brutalistBox}`}>
          {tech.join(' · ')}
        </div>

        {/* Date badge */}
        {date && (
          <div className="bg-white dark:bg-[#4A3528] dark:text-[#F5F1DF] border-2 border-[#181818] dark:border-[#050505] px-2 py-1 text-xs font-bold absolute top-4 right-4">
            {date}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-black uppercase mb-2">{title}</h3>
        <h4 className="text-[#D93635] font-bold uppercase mb-4 text-sm tracking-wider">{role}</h4>
        <p className="font-medium mb-6 flex-1">{shortDesc}</p>
        <Link
          to={`/projetos/${slug}`}
          className={`w-full bg-[#F5F1DF] dark:bg-[#4A3528] dark:text-[#F5F1DF] text-center font-black uppercase py-2 ${brutalistBox} hover:bg-[#DBA538] dark:hover:bg-[#DBA538] dark:hover:text-[#181818] transition-colors block`}
        >
          Ver case →
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
