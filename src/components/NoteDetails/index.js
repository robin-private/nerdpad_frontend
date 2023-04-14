import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { TrashIcon } from '@heroicons/react/24/solid'
import "./index.css";

export const NoteDetails = ({ noteDetails, onClick }) => {
    const [buttonText, setButtonText] = useState("New");
    const [title, setTitle] = useState(noteDetails.title);
    const [content, setContent] = useState(noteDetails.content);

    useEffect(() => {
        setContent(noteDetails.content);
        setTitle(noteDetails.title);
        // console.log("noteDetails.title", noteDetails.content);
    }, [noteDetails]);

    const handleCreate = async (e) => {
        setButtonText(buttonText === "New" ? "Save" : "New");
        setTitle("");
        setContent("");
        if (buttonText === "Save") {
            console.log('in save state')
            const url = `http://localhost:8000/api/v1/notes/`;
            const body = { title: title, content: content };
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            let data = await response.json();
        }
    };

    const handleTitleSubmit = async (e) => {
        const url = `http://localhost:8000/api/v1/notes/${noteDetails.id}/`;
        const body = { title: title };
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        let data = await response.json()
    };

    const handleContentSubmit = async (e) => {
        const url = `http://localhost:8000/api/v1/notes/${noteDetails.id}/`;
        const body = { content: e.target.value };
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        let data = await response.json();
    };

    const handleEdit = (e) => {
        setContent(e.target.value);
    };
    const handleTitleEdit = (e) => {
        setTitle(e.target.value);
    };

    const handleDelete = async (e) => {
        const url = `http://localhost:8000/api/v1/notes/${noteDetails.id}/`;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            console.log('Item deleted successfully');
            setTitle('');
            setContent('')
        } else {
            console.log('Error in deleting item');
        }
    };
    

    return (
        <div className="note-details" onClick={onClick}>
            <div className="button-group">
                <Button text={buttonText} onClick={handleCreate} />
                <button
                    className="btn"
                    aria-label="Add Task"
                    onClick={handleDelete}
                    typeof="submit">
                    <TrashIcon />
                </button>
            </div>
            <input
                type="text"
                className="note-title"
                value={title}
                onChange={handleTitleEdit}
                onBlur={handleTitleSubmit}
                placeholder="Title goes here"
            />
            <textarea
                className="note-text"
                value={content}
                onChange={handleEdit}
                onBlur={handleContentSubmit}
            />
        </div>
    );
};
