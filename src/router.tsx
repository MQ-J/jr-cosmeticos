import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./layout.tsx";
import App from "./App.tsx";

function Router() {
return (
    <BrowserRouter>
     <Routes>
     <Route element={<Layout />}>
     <Route path="/" element={<App />} />
     <Route path="/contatos" element={<App />} />
     </Route>
    </Routes>
</BrowserRouter>
)
}

export default Router