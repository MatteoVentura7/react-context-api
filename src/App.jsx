import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Pizza from "./pages/Pizza";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<Pizza />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
