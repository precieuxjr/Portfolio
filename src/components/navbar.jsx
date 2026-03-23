import { useState } from 'react';




function Navbar({setPage}) {
 const nav_element = ['ACCUEIL','A PROPOS','SERVICES','PORTFOLIO','CONTACT'];
 const [isOpen, setIsOpen] = useState(false);


  return (
<nav className="w-full fixed top-0 z-50 bg-arrière_plan/90 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-5 flex flex-row items-center justify-between h-20 md:  ml-25 mr-25">
        
        {/* LOGO */}
        <section className="text-xl font-en_tete font-semibold text-[#8cb5e3]">
          Precieux.
        </section>

        {/* 2. MENU ORDINATEUR (Caché sur mobile via 'hidden md:flex') */}
        <ul className="hidden md:flex font-semibold text-md flex-row items-center justify-end space-x-8 list-none">
          {nav_element.map((element) => (
            <li 
              key={element} 
              onClick={() => setPage(element)}
              className="px-2 cursor-pointer hover:text-[#8cb5e3] border-b-2 border-solid border-transparent hover:border-[#8cb5e3] transition-all duration-500"
            >
              {element}
            </li>
          ))}
        </ul>

        {/* 3. BOUTON BURGER (Visible seulement sur mobile via 'md:hidden') */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#8cb5e3] focus:outline-none"
          >
            {/* Icône qui change : Croix si ouvert, Barres si fermé */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 4. MENU MOBILE DÉROULANT (S'affiche seulement si isOpen est true) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#03070a] border-b border-secondaire`}>
        <ul className="flex flex-col items-center space-y-4 py-6">
          {nav_element.map((element) => (
            <li 
              key={element} 
              onClick={() => {
                setPage(element);
                setIsOpen(false); // Ferme le menu après avoir cliqué sur un lien
              }}
              className="text-texte font-semibold text-lg hover:text-[#8cb5e3] transition-colors"
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;