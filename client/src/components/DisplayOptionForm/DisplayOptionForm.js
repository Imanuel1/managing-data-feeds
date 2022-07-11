import React from 'react';
import './DisplayOptionForm.css';
import Input from '@mui/material/Input';
import { FormControl, NativeSelect } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

export default function DisplayOptionForm({ feed ,onUpdateFeed ,scope ,setScope }) {
    console.log("feed", feed);

    const handleChange = (e, index) => {
        const tempScope = [... scope];
        tempScope[index] = e.target.value;
        setScope(tempScope);
    }
    return (
        <div className="c-display-options">
            <div>
                <p>Name</p>
                <Input inputProps={ariaLabel} value={feed?.name} onChange={(e) =>onUpdateFeed("name", e.target.value)} />
            </div>
            <div>
                <p>URL</p>
                <Input inputProps={ariaLabel} value={feed?.url} onChange={(e) =>onUpdateFeed("url", e.target.value)} />
            </div>
            <div>
                <p>Referent</p>
                <FormControl fullWidth>
                    <NativeSelect
                        defaultValue={10}
                    >
                        <option value={10}>Time</option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div>
                <p>Refresh</p>
                <Input placeholder="number in ms" inputProps={ariaLabel} type="number" value={feed?.refresh} onChange={(e) =>onUpdateFeed("refresh", e.target.value)}/>
            </div>
            <div>
                <p>Ristrict scope:</p>
                <Input inputProps={ariaLabel} type="number" value={scope[0]} onChange={(e) => handleChange(e,0)}/>
                <p> To </p>
                <Input inputProps={ariaLabel} type="number" value={scope[1]} onChange={(e) => handleChange(e,1)}/>
            </div>
        </div>
    )
}
