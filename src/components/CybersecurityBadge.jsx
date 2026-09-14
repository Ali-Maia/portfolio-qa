const CybersecurityBadge = ({ badge }) => (
  <a
    href={badge.url}
    target="_blank"
    rel="noreferrer"
    className="group w-full bg-[#F5F1DF] dark:bg-[#3D3934] p-3 border-4 border-[#181818] dark:border-[#050505] shadow-[4px_4px_0px_#181818] dark:shadow-[4px_4px_0px_#050505] transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[7px_7px_0px_#39FF88] flex flex-col items-center text-center"
  >
    <img
      src={badge.image}
      alt={`Emblema ${badge.name}`}
      className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-3"
      loading="lazy"
    />
    <h4 className="font-black uppercase text-sm sm:text-base group-hover:text-[#A81C24] dark:group-hover:text-[#39FF88]">
      {badge.name}
    </h4>
    <p className="font-mono text-xs sm:text-sm mt-1">Emitido por {badge.issuer}</p>
  </a>
)

export default CybersecurityBadge