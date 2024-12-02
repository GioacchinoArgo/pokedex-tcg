import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import PokemonIndex from "./pages/Pokemon/PokemonIndex";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<PokemonIndex />} />
      </Route>
    </Routes>
  )
}
export default App;