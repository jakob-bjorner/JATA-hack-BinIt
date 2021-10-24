import { React,useState } from 'react';
import {FormControlLabel, Checkbox, Button, FormGroup} from '@mui/material';
import { Paper } from '@material-ui/core';



const Form = () => {

    const [checkboxes, setCheckboxes] = useState({
        "Paper" : false,
        "Glass" : false,
        "Plastic" : false
    });
    
    const handleChange = (event) => {
        setCheckboxes({
            ...checkboxes,
            [event.target.name]: event.target.checked,
        });
    };

    const submit = (event) => {
        console.log(checkboxes);
    }

    const {Paper, Glass, Other} = checkboxes;

    return (
        <div>
            <FormControlLabel
                control={
                <Checkbox checked={Paper} onChange={handleChange} name="Paper" />
                }
                label="Paper"
            />

            <FormControlLabel
                control={
                <Checkbox checked={Glass} onChange={handleChange} name="Glass" />
                }
                label="Glass"
            />

            <FormControlLabel
                control={
                <Checkbox checked={Other} onChange={handleChange} name="Other" />
                }
                label="Other"
            />
            <Button variants= "contained" onClick={submit}>meep</Button>
        </div>
    );
}

export default Form
