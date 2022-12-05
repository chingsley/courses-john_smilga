// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
import Book from "./Book";
import { books } from "./books";
import './index.css';
 
// 2) Get a reference to the div with ID root
const el = document.getElementById("root");
 
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);
 
// 4) Create a component
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
}

 
// 5) Show the component on the screen
root.render(<BookList />);