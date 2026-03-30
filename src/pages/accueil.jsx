export default function Accueil() {
  return (
    <div className="flex flex-col  md:max-w-7xl mx-auto px-5"> 

 
    {/* Ce div force l'alignement exact avec le logo et les liens */}
    
    <section className="flex flex-col mt-5 ">
      <h1 className="font-Maitree font-semibold text-5xl pt-6 text-[#dee7f1ec] justify-center">
        Salut,Je suis MAYELA Precieux
      </h1>
      <h2 className="text-[#8cb5e3] font-semibold italic mt-1">
        Etudiant en MATH-INFO
      </h2>
<div className="lg:w-[50%]">
<p className="font-sans text-slate-300 text-sm mt-5 text-justify lg:text-left">Passionné par la technologie et animé par une soif constante d’apprentissage, je construis chaque jour mon parcours dans le développement. Mon objectif est de créer des solutions utiles, modernes et performantes qui répondent à de vrais besoins. Curieux et déterminé, je m’investis dans chaque projet pour améliorer mes compétences et relever de nouveaux défis.</p>
<p className="font-sans text-slate-300 text-sm text-justify lg:text-left" >Ambitieux et discipliné, je continue d’évoluer avec la volonté de transformer mes idées en réalisations concrètes dans le domaine de la tech.</p>
</div>
      
   
    </section>
    <button className="bg-blue-600 text-white px-6 py-2 mt-2 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 font-bold uppercase tracking-wider text-xs max-w-[20]  justify-center items-center  lg:w-100">
  Prendre Rendez-vous
</button>

      
    </div>
  );
}
