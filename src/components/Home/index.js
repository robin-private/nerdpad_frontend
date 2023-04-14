import React, { useEffect, useState } from 'react'
import { Notes } from '../Notes';
import { SideBar } from '../SideBar';
import { NoteDetails } from '../NoteDetails';

const Home = () => {

    const [noteDetails, setNoteDetails] = useState({ id: null, content: '', title: '' })
    const [childWidths, setChildWidths] = useState({ sidebarWidth: '40%', noteWidth: '60%' });

    const handleExpand = () => {
        if (window.innerWidth <= 768) {
            console.log('clickk')
            setChildWidths({
                sidebarWidth: '10%',
                noteWidth: '90%'
            });
        }
    }


    return (
        <div className="home-component" style={{ display: 'flex', height: '100vh' }}>
            <SideBar setNoteDetails={setNoteDetails} style={{ 'flex': childWidths.sidebarWidth }} />
            <NoteDetails noteDetails={noteDetails} style={{ 'flex': childWidths.noteWidth }} onClick={handleExpand} />
        </div>
    )
}


export default Home