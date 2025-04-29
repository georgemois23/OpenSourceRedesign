import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Box, Heading, Button } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import NotReady from "./pages/NotReady";
import Sponsors from "./pages/Sponsors";
import Blog from "./pages/Blog.jsx";
import PostPage from './pages/blog/[slug].jsx';
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Error404 from "./pages/Error404";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
function App() {
  const [count, setCount] = useState(0)
    return (
      <Box minH="100vh" h='fit-content' 
      backgroundColor="#000a26"
  backgroundImage="linear-gradient(#001a66 1px, transparent 1px), linear-gradient(to right, #001a66 1px, #000a26 1px)"
  backgroundSize="50px 50px"
  overflow={"auto"}
  >
      <ScrollToTop />
        <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="/*" element={<NotReady/>} />
        <Route path="/404" element={<Error404/>} />

        </Route>
        
      </Routes>
      </Box>
    );
  }

export default App
