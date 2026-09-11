import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [formData, setFormData] = useState({ title: "", author: "" });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title.trim() || !formData.author.trim()) {
      setError("Preencha o título e o autor.");
      return;
    }

    const newBook = {
      id: crypto.randomUUID(),
      title: formData.title,
      author: formData.author,
      available: true,
    };

    onAddBook(newBook);
    setFormData({ title: "", author: "" });
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      {error && <p className="error-message">{error}</p>}

      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Autor</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Cadastrar livro</button>
    </form>
  );
}