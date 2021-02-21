import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const getLocalStorage = () => {
  let markdown = localStorage.getItem('markdown');
  if (markdown) {
    return JSON.parse(markdown);
  } else {
    return '## markdown preview';
  }
};

function App() {
  const [markdown, setMarkdown] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem('markdown', JSON.stringify(markdown));
  }, [markdown]);

  return (
    <main>
      <section className='markdown'>
        <textarea
          classname='input'
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
