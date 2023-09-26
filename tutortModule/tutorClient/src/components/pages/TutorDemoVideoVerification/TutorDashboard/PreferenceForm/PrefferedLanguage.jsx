import * as React from 'react';
import {useState, useEffect} from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './PrefferedSection.css'
import validate from './Validation';

const Language = [
  'Hindi','English','Gujrati','Urdu','Bengali' ,'Marathi','Telugu','Tamil','Kannada','Odia','Malayalam','Punjabi','Assamese'
];
export default function MultipleSelectPlaceholder({submitLanguageChange}) {
  const [language, setlanguage] = useState([]);
  const handleChangelang = (event) => {
    const {
      target: { value },
    } = event;
    setlanguage(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  // validation
  
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // handle change
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  // handlesubmit
 
  //
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (

    <div className="">
        <Select
          multiple
          displayEmpty
          name="SelectLanguage"
          className='class Select'
          value={language}
          onChange={(e)=>{
            handleChangelang(e);
            handleChange(e);
            submitLanguageChange(e);
          }}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select Language</em>;
            }

            return selected.join(', ');
          }}
        >
          <MenuItem disabled value="">
            <em>Language</em>
          </MenuItem>
          {Language.map((name) => (
            <MenuItem
              key={name}
              value={name}

              onChange={handleChange}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
    </div>
  );
}
