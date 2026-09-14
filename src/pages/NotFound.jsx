import { Link } from 'react-router-dom'
import { responsiveShell } from '../utils/responsive'

const brutalistBorder = 'border-4 border-[#181818] dark:border-[#050505]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818] dark:shadow-[6px_6px_0px_#050505]'
const brutalistHover =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818] dark:hover:shadow-[10px_10px_0px_#050505]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`
const brutalistButton = `${brutalistBox} ${brutalistHover} font-black uppercase tracking-wider px-4 py-3 sm:px-6 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-base`

const NotFound = () => {
  return (
    <main className={`${responsiveShell} py-12 sm:py-16 md:py-20`}>
      <section className={`${brutalistBox} bg-[#F4CDBC] dark:bg-[#4A3528] p-6 sm:p-8 md:p-12 text-center max-w-3xl mx-auto`}>
        <p className="text-sm sm:text-base font-black uppercase tracking-[0.25em] text-[#181818] dark:text-[#F5F1DF] mb-4">
          Erro 404
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-5 text-[#181818] dark:text-[#F5F1DF]">
          Página não encontrada
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-bold max-w-xl mx-auto leading-relaxed text-[#181818] dark:text-[#F5F1DF] mb-8">
          O caminho que você tentou acessar não existe ou foi movido. Volte para a home e continue explorando o portfolio.
        </p>
        <Link
          to="/"
          className={`${brutalistButton} inline-flex bg-[#181818] text-[#F5F1DF] dark:bg-[#F5F1DF] dark:text-[#181818]`}
          aria-label="Voltar para a home"
        >
          Voltar para a home
        </Link>
      </section>
    </main>
  )
}

export default NotFound
