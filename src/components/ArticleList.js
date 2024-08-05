import Article from './Article';
import blogData from '../data/blog';
import React from 'react';
 
 
 const ArticleList = ({ posts }) => (
   <main>
     {blogData.posts.map(post => (
       <Article
         key={post.id}
         title={post.title}
         date={post.date}
         preview={post.preview}
         minutes={post.minutes}
       />
     ))}
   </main>
 );
 
 export default ArticleList;