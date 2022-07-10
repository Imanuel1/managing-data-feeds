import React, { useEffect, useState } from 'react';
import SideTabs from '../../components/SideTabs/SideTabs';
import ApiTable from '../../components/ApiTable/ApiTable';
import './Content.css'
import { Button, FormControl, NativeSelect } from '@mui/material';
import { getData, patchData } from '../../utils/api.service'

export default function Content() {
    const [displayOptions, setDisplayOptions] = useState(null);
    const [currentFeed, setCurrentFeed] = useState(0);
    const [updateFeed, setUpdateFeed] = useState(null);
    const [scope, setScope] = useState([1,15]);

    useEffect(() => {
        // postData("display_option", {"id": 1 ,"name": "apiList", "url": "https://api.publicapis.org/entries", "refresh": 5000})
        // .then(res => {
        //     console.log("res: ", res);
        //     setDisplayOptions(res);
        //     setUpdateFeed(res[0]);
        // }).catch(err =>
        //     console.error("error: ", err)
        // )
        getData("display_options")
            .then(res => {
                console.log("res: ", res);
                setDisplayOptions(res);
                setUpdateFeed(res[0]);
            }).catch(err =>
                console.error("error: ", err)
            )
    }, [])

    const onUpdateFeed = (key, data) => {
        const tempFeed = JSON.parse(JSON.stringify(updateFeed))
        tempFeed[key] = data;
        console.log(" prop data: ", tempFeed);
        setUpdateFeed(tempFeed)
    }

    const optionChanged = (e) => {
        console.log("option changed:", e.target.value);
        setCurrentFeed(e.target.value)
    }

    const cancelChanges = (e) => {
        e.preventDefault();
        updateFeed = null;
    }

    const submitChanges = (e) => {
        e.preventDefault();
        const current = currentFeed;
        if (displayOptions) {
            patchData("/display_option", updateFeed)
                .then(res => {
                    console.log("res: ", res);
                    const updatedData = JSON.parse(JSON.stringify(displayOptions))
                    updatedData[current] = res[0];
                    setDisplayOptions(updatedData)
                }).catch(err =>
                    console.error("error: ", err)
                )
        } else {
            console.log("there is no data to save to");
        }
    }

    return (
        <div className="p-content">
            <div className="content-header">
                <div>
                    <h3>FEED MANAGER</h3>
                    <FormControl sx={{ minWidth: 200 }}>
                        <NativeSelect
                            defaultValue={0}
                            onChange={optionChanged}
                        >
                            {
                                displayOptions
                                    ?
                                    displayOptions?.map((displayOption, index) => <option key={index} value={index}>{displayOption?.name}</option>)
                                    :
                                    <option value={0}></option>
                            }
                        </NativeSelect>
                    </FormControl>
                </div>
                <div>
                    <Button variant="contained" size="small" onClick={submitChanges}>
                        Save
                    </Button>
                    <Button size="small" onClick={cancelChanges}>Cancel</Button>
                </div>
            </div>
            <div className="content-body">
                <SideTabs feed={updateFeed} onUpdateFeed={onUpdateFeed} />
                <ApiTable url={displayOptions?.[currentFeed]?.url} refresh={displayOptions?.[currentFeed].refresh} scope={scope}/>
            </div>
        </div>
    )
}
