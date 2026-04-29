import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks)
  const hasDrinks = drinks.drinks.length
  return (
    <>
      <h1 className="text-6xl font-extrabold">Inicio</h1>
      {hasDrinks ? (
        <div  className="grid grid-cols-1 mg:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {drinks.drinks.map(drink => (
            <DrinkCard key={drink.idDrink} drink={drink}/>
          ))}
        </div>
      ): (
        <>
          <p className="my-10 text-center text-2xl text-red-600">No hay molleja, bucala en el formulario</p>
        </>
      )}
    </>
  )
};

