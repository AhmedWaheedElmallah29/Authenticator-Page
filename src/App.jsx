import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin/signin";
import Signup from "./components/Signup/Signup";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
