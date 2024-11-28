import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
export default App;