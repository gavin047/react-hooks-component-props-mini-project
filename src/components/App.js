import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// Structured blog data
const blogData = {
  name: "My Awesome Blog",
  about: "This is a blog about various topics, including technology, lifestyle, and more.",
  image: "images/techie.jpeg", // Optional, will use placeholder if not provided
  articles: [
    {
      title: "First Article",
      date: "August 1, 2024",
      preview: "This is a preview of the first article. It discusses the latest trends in technology.",
    },
    {
      title: "Second Article",
      preview: "This is a preview of the second article. It covers lifestyle tips and advice.",
    },
    {
      title: "Third Article",
      date: "July 15, 2024",
      preview: "This is a preview of the third article. It explores recent developments in the industry.",
    },
  ],
};

function App() {
  const { name, about, image, articles } = blogData;

  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;