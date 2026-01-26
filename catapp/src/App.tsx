import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

function App() {
  const {fact, refreshFact} = useCatFact()
  const {catImage} = useCatImage({fact})

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-black text-center text-orange-400">
        Facts de Mininos
      </h1>
      {fact && (
        <p className="text-center font-bold text-2xl mt-10">
          {fact}
        </p>
      )}
      {catImage && (
        <img className="mx-auto h-150" src={`${catImage}`} alt="La imagen del gatito" />
      )
      }
      <button
        className="block mx-auto bg-orange-400 rounded-xl px-10 py-5 text-white uppercase font-bold"
        onClick={refreshFact}>
        New Fact
      </button>
    </div>
  )
}
export default App