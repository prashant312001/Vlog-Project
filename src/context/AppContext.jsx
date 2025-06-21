import { createContext } from "react";
import { useState } from "react";
import baseUrl from "../baseUrl";


export const AppContext = createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function fetchPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    console.log("Fetching posts from:", url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Fetched posts:", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPage(1);
      setPosts([]);
      setTotalPages(0);
    }
    setLoading(false);
  }

  function handlePageChange(page){
    setPage(page);
    fetchPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchPosts,
    handlePageChange
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;

