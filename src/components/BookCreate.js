import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle('');
  }

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input className="input" type="text" onChange={handleChange} value={title} />
        <button className="button">Create book</button>
      </form>
    </div>
  )
}

export default BookCreate;