import { useState } from "react";

function BookEdit({ book, onEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, title);
  }
  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Edit title</label>
        <input className="input" type="text" onChange={handleChange} value={title} />
        <button className="button is-primary">Save button</button>
      </form>
    </div>
  )
}

export default BookEdit