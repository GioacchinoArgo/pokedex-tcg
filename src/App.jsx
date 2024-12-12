import { Route, Routes, useLocation, useMatch, useParams } from "react-router-dom";
import PokedexIndex from "./pages/Pokedex/PokedexIndex";
import DefaultLayout from "./layouts/DefaultLayout";
import PokedexShow from "./pages/Pokedex/PokedexShow";
import TcgIndex from "./pages/PokemonTcg/TcgIndex";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const App = () => {

  const location = useLocation();

  const matchPokedexDetail = useMatch("/pokedex/:id");

  useEffect(() => {
    let pageTitle = "Not Found";
    const pageTitles = {
      "/": "Home",
      "/pokedex": "Pokédex",
      "/tcg": "TCG",
    };

    if (matchPokedexDetail) {
      pageTitle = "Pokédex - Dettaglio";
    } else {
      pageTitle = pageTitles[location.pathname] || "Not Found";
    }

    document.title = pageTitle;
  }, [location, matchPokedexDetail]);

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