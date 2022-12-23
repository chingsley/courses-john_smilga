import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items, { IMenu } from './data';
const allCategories = ['all', ...Array.from(new Set(items.map(item => item.category)))];

function App() {
  const [menuItems, setMenuItems] = useState<IMenu[]>(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const filtered = items.filter((item) => item.category === category);
    setMenuItems(filtered);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App