import { Route, Routes } from "react-router-dom";
import PokedexIndex from "./pages/Pokedex/PokedexIndex";
import DefaultLayout from "./layouts/DefaultLayout";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>

        <Route index element={<PokedexIndex />} />
          
      </Route>
    </Routes>
  )
}
export default App;