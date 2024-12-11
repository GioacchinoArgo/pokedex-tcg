import { Route, Routes } from "react-router-dom";
import PokedexIndex from "./pages/Pokedex/PokedexIndex";
import DefaultLayout from "./layouts/DefaultLayout";
import PokedexShow from "./pages/Pokedex/PokedexShow";
import TcgIndex from "./pages/PokemonTcg/TcgIndex";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <Routes>

      {/* Rotte */}
      <Route path="/" element={<DefaultLayout />}>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />

        {/* Home */}
        <Route index element={<Home />} />

        {/* Pokedex */}
        <Route path="pokedex">

          {/* Index */}
          <Route index element={<PokedexIndex />} />

          {/* Show */}
          <Route path=":id" element={<PokedexShow />} />

        </Route>

        {/* TCG */}
        <Route path="tcg">

          {/* Index Tcg */}
          <Route index element={<TcgIndex />} />

        </Route>

      </Route>


    </Routes>
  )
}
export default App;