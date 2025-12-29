export const ProfileUsersSection = () => {
  const cards = [
    {
      role: "Customize Your Avatar",
      handle: "@sarah_martinez",
      subname: "Product Designer",
      bg: "bg-violet-100",
      text: "text-violet-900",
      handleColor: "text-violet-700",
      image: "/char-1.webp",
    },
    {
      role: "Set Your Voice & Tone",
      handle: "@alex_thompson",
      subname: "UX Researcher",
      bg: "bg-sky-100",
      text: "text-sky-900",
      handleColor: "text-sky-700",
      image: "/char-2.webp",
    },
    {
      role: "Define Your Boundaries",
      handle: "@mike_rodriguez",
      subname: "Product Manager",
      bg: "bg-amber-100",
      text: "text-amber-900",
      handleColor: "text-amber-700",
      image: "/char-3.webp",
    },
  ];

  return (
    <section id="section-8" className="py-12 sm:py-16 md:py-24 lg:py-32 section-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-3 sm:mb-4 px-4">
            Customize your Coordexa profile – make it uniquely yours.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Choose your avatar, set your voice, and define what matters to you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto justify-items-center">
          {cards.map((card) => (
            <div
              key={card.handle}
              className={`${card.bg} rounded-2xl sm:rounded-3xl px-4 sm:px-6 pt-10 sm:pt-12 pb-6 sm:pb-8 shadow-sm flex flex-col items-center text-center relative w-full max-w-[260px] sm:max-w-none group overflow-visible`}
            >
              {/* Character image - overlapping top edge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 sm:-mt-8 transition-all duration-300 group-hover:-mt-20 sm:group-hover:-mt-24">
                <img 
                  src={card.image} 
                  alt={card.role}
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 max-w-[160px] sm:max-w-[180px] md:max-w-[210px] max-h-[160px] sm:max-h-[180px] md:max-h-[210px] object-contain mx-auto shadow-lg rounded-full bg-white transition-all duration-300"
                  style={{ boxShadow: '0 6px 22px 0 rgba(32,30,70,.10)' }}
                />
              </div>

              {/* Spacer to maintain space for image */}
              <div className="h-16 sm:h-18 md:h-20 mb-4 sm:mb-6"></div>

              {/* Role description */}
              <p className={`text-sm sm:text-base mb-2 font-medium ${card.text}`}>
                {card.role}
              </p>
              {/* Handle */}
              <p className={`text-lg sm:text-xl md:text-2xl font-semibold ${card.handleColor} mb-1`}>
                {card.handle}
              </p>
              {/* Subname/Role */}
              <p className={`text-xs sm:text-sm ${card.text} opacity-70`}>
                {card.subname}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


