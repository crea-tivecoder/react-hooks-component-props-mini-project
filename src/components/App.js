import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
    <Header name={blogData.name} />
     the browser as you write your code; and good luck!
    <About image={blogData.image} about={blogData.about} />
    <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
