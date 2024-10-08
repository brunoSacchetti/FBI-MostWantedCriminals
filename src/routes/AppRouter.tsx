import { Route, Routes } from "react-router-dom"
import { Home } from "../components/screens/Home"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
