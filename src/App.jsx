import { Route, Routes } from "react-router-dom";
import PokedexIndex from "./pages/Pokedex/PokedexIndex";
import DefaultLayout from "./layouts/DefaultLayout";
import PokedexShow from "./pages/Pokedex/PokedexShow";
import TcgIndex from "./pages/PokemonTcg/TcgIndex";


const App = () => {
  return (
    <Routes>

      {/* Pokedex */}
      <Route path="/" element={<DefaultLayout />}>

        {/* Index */}
        <Route index element={<PokedexIndex />} />

        {/* Show */}
        <Route path=":id" element={<PokedexShow />} />

      </Route>

      <Route path="/tcg" element={<DefaultLayout />}>

        {/* Index Tcg */}
        <Route index element={<TcgIndex />} />

      </Route>

    </Routes>
  )
}
export default App;