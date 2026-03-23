export default function Accueil() {
  return (
    <div className="max-w-7xl mx-auto px-5"> 
    {/* Ce div force l'alignement exact avec le logo et les liens */}
    
    <section className="mt-5 inline-block md:mt-20  ml-20">
      <h1 className="font-Maitree font-semibold text-5xl pt-6 text-[#dee7f1ec] overflow-hidden whitespace-nowrap animate-typewriter">
        Salut, Je suis MAYELA <br />
        Precieux
      </h1>
      <h2 className="text-[#8cb5e3] font-semibold italic">
        Etudiant en MATH-INFO
      </h2>

      <p className="font-sans text-slate-300">Chaque jour, je progresse dans la tech avec un objectif clair : <br />apprendre, créer et dépasser mes limites</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 font-bold uppercase tracking-wider text-xs">
  Prendre Rendez-vous
</button>
    </section>

      
    </div>
  );
}
