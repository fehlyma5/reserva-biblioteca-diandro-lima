import { useState } from "react";
import "./App.css";
import { books as initialBooks } from "./data/books";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Panel from "./components/Panel";

export default function App() {
  const [books, setBooks] = useState(initialBooks);

  const availableCount = books.filter((book) => book.available).length;
  const totalCount = books.length;

  function handleToggleReserve(bookId) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book
      )
    );
  }

  function handleAddBook(newBook) {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>
          {availableCount} de {totalCount} livros disponíveis
        </p>
      </header>

      <Panel title="Novo livro">
        <BookForm onAddBook={handleAddBook} />
      </Panel>

      <Panel title="Acervo de Livros">
        <BookList books={books} onReserve={handleToggleReserve} />
      </Panel>
    </main>
  );
}