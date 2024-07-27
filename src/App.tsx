import { useState } from "react";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { HomePage } from "./components/homePage/HomePage";
import { WelcomePage } from "./components/welocomPage/WelcomePage";

function App() {
  const [showHomePage, setShowHomePage] = useState(false);
  return (
    <>
      <Header />
      {showHomePage ? (
        <HomePage />
      ) : (
        <WelcomePage setShowHomePage={setShowHomePage} />
      )}
      <Footer />
    </>
  );
}

export default App;
