function Navbar({setPage}) {
 const nav_element = ['ACCUEIL','A PROPOS','SERVICES','PORTFOLIO','CONTACT'];



  return (
<nav className="w-full max-w-7xl mx-auto px-5 bg-transparent p-4 flex flex-row items-center justify-between ">
  <section className="text-xl font-bold font-en_tete text-blue-300">Precieux.</section>
    <ul className="font-semibold text-md flex flex-row items-center  justify-end space-x-8 list-none h-16 ">
    {nav_element.map((element) => (
      <li 
        key={element} 
        onClick={() => setPage(element)}
        className=" px-2 cursor-pointer hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-500"
      >
        {element}
      </li>
    ))}
  </ul>
  </nav>
  );
}

export default Navbar;