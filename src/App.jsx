import { Route, Routes } from "react-router-dom";
import PokedexIndex from "./pages/Pokedex/PokedexIndex";
import DefaultLayout from "./layouts/DefaultLayout";
import PokedexShow from "./pages/Pokedex/PokedexShow";

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

    </Routes>
  )
}
export default App;