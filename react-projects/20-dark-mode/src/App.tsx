import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const getSavedTheme = () => {
  let theme = localStorage.getItem('theme');
  if (theme) return theme;

  return 'light-theme';
};

function App() {
  const [theme, setTheme] = useState(getSavedTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <button className='btn' onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
