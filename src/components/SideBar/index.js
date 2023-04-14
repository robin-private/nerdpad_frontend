import React, { useState, useEffect } from 'react'
import { Notes } from '../Notes';
import './index.css'
export const SideBar = ({ setNoteDetails }) => {
    const [data, setData] = useState([])
    const getNotes = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/v1/notes/');
        // const res = await fetch('https://devrzone.pythonanywhere.com/api/v1/notes/');
        const notes = await res.json()
        setData(notes)
    }
    useEffect(() => {
        getNotes()
    }, [data]);
    
    return (
        <div className='side-bar'>
            <h3 style={{textAlign: 'center', margin: '0.5em' }}>Notes</h3>

            <div>
                {data.map(item => {
                    return <Notes item={item} key={item.id} setNoteDetails={setNoteDetails} />
                })}
            </div>
        </div>
    )
}
