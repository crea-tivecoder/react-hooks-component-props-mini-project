import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
    const getReadingTime = (minutes) => {
      let emoji = minutes < 30 ? '☕️' : '🍱';
      let unit = minutes < 30 ? 5 : 10;
      let count = Math.ceil(minutes / unit);
      let emojis = emoji.repeat(count);
      return `${emojis} ${minutes} min read`;
    };

    return (
      <article>
        <h2>{title}</h2>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{getReadingTime(minutes)}</p>
    </article>
    );
}

export default Article;