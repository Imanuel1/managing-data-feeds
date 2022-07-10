import React, { useState } from 'react';
import DisplayOptionForm from '../DisplayOptionForm/DisplayOptionForm';
import './SideTabs.css'

export default function SideTabs({ feed, onUpdateFeed}) {
    const [open, setOpen] = useState(null)
    const displayOptionClicked = (e) => {
        if (open === e.currentTarget.id){
            setOpen(null)
        } else {
            setOpen(e.currentTarget.id)
        }
    }
    return (
        <div className="tabs-holder">
            <h5 id="new-feed">NEW FEED</h5>
            <h5 id="display-option" onClick={displayOptionClicked}>DISPLAY OPTIONS</h5>
            {
                open === "display-option" && <DisplayOptionForm feed={feed} onUpdateFeed={onUpdateFeed} />
            }
            <h5 id="preview">PREVIEW</h5>
            <h5 id="columns">COLUMNS</h5>
        </div>
    )
}
