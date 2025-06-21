import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import React, { useEffect, useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { fetchPosts } = useContext(AppContext);
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  justify-around items-center">
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
