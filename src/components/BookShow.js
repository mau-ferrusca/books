import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [title, setTitle] = useState(book.title);
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>

  if (showEdit) {
    content = <BookEdit book={book} onEdit={onEdit} />
  };

  return (
    <div className="book-show">
      {content}
      <div className="actions">
        <button onClick={handleEditClick} className="edit"></button>
        <button onClick={handleDeleteClick} className="delete"></button>
      </div>
    </div>
  )
}

export default BookShow;