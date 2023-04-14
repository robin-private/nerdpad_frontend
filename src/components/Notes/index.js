import './index.css';

export const Notes = ({ item, setNoteDetails }) => {
  const handleClick = (e) => {
    let titles = document.getElementsByClassName("note-title active");

    [...titles].forEach((title) => {
      title.classList.remove("active");
    });
    e.target.classList.add("active");
    setNoteDetails({ id: item.id, content: item.content, title: item.title });
  };

  const handleTitleEdit = (e) => {
    e.target.contentEditable = true;
  };

  const handleTitleSubmit = async (e) => {
    const url = `http://localhost:8000/api/v1/notes/${item.id}/`;
    const body = { title: e.target.innerText };
    e.target.contentEditable = false;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    });
    let data = await response.json()
    console.log('first', data); // parses JSON response into native JavaScript objects
  };

  return (
    <div
      className="note-title"
      onClick={handleClick}
      onDoubleClick={handleTitleEdit}
      onBlur={handleTitleSubmit}
    >
      {item.title}
    </div>
  );
};
