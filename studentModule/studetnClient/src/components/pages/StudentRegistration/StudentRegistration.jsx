// We have to update the student subjects once we get the update from backend
// there is no search in the subject select input
// for integration just uncomment the fetch in onsubmit function

import React, { useState, useEffect } from 'react';
// import './StudentRegistration.css';
import './StudentReg.css';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import OutlinedInput from '@mui/material/OutlinedInput';
const StudentRegistration = () => {
  // const [page, setPage] = useState(1);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({
    parent_first_name: '',
    parent_last_name: '',
    student_name: '',
    country_code: '',
    phone: '',
    class: '',
    mode: '',
    school_board: '',
    school_name: '',
    subjectCategory: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    zip_code: '',
    subjects: [],
  });
  const Star = () => {
    return <span style={{ color: 'rgb(228,116,112)' }}>*</span>;
  };
  // Lable
  const Label = ({ val, isrequired, errorMessage }) => {
    return (
      <label
        className={errorMessage ? 'hasValidation' : ''}
        data-content={errorMessage || null}
      >
        {isrequired ? (
          <>
            {val} <Star />
          </>
        ) : (
          val
        )}
      </label>
    );
  };

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(data);
  }

  function handleSubjectsChange(e) {
    const subs = [...data.subjects, e.target.id];
    setData({ ...data, subjects: subs });
  }

  const validate = values => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.parent_first_name) {
      errors.parent_first_name = 'Parent first name is required!';
    }
    if (!values.parent_last_name) {
      errors.parent_last_name = 'Parent last name is required!';
    }
    if (!values.student_name) {
      errors.student_name = 'Student name is required!';
    }
    if (!values.country_code) {
      errors.country_code = 'Please select country code!';
    }
    if (!values.phone) {
      errors.phone = 'Whatsapp number is required!';
    } else if (isNaN(values.phone)) {
      errors.phone = 'Please enter numbers only';
    } else if (values.phone.length !== 10) {
      errors.phone = 'Whatsapp no. must be of 10 digit!';
    }
    if (!values.class) {
      errors.class = 'Please Select Class!';
    }
    if (!values.subjectCategory) {
      errors.subjectCategory = 'Please Select Subject Category!';
    }
    if (!values.school_board) {
      errors.school_board = 'Please Select School Board!';
    }
    if (!values.school_name) {
      errors.school_name = 'Please Select School name!';
    }
    if (!values.subjects.length) {
      errors.subject = 'Please Select Subjects!';
    }
    if (!(values.address_line1 || values.address_line2)) {
      errors.address_line = 'Please enter address';
    }
    if (!values.city) {
      errors.city = 'City name is required!';
    }

    if (!values.state) {
      errors.state = 'State name is required!';
    }
    if (!values.zip_code) {
      errors.zip_code = 'Zip Code is required!';
    } else if (!Number.isInteger(values.zip_code)) {
      errors.phone = 'Please enter numbers only';
    } else if (values.zip_code.length !== 6) {
      errors.zip_code = 'Zip Code must be of 6 digit!';
    }

    return errors;
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [formErrors]);

  // function onChangeCountry(event) {
  //   const id = event.id;
  //   //console.log(id);
  //   var select = document.getElementById(id);
  //   //console.log("selected = " + select.value);
  //   data.country_code = select.value;
  // }

  function update_class() {
    var e = document.getElementById('class');
    // console.log(e.value);
    // console.log(e.options[e.selectedIndex].text);

    const newdata = { ...data };
    newdata[e.id] = e.options[e.selectedIndex].text;
    setData(newdata);
    // console.log(data);
    // console.log("this function")
  }

  function update_country_code() {
    var e = document.getElementById('country_code');
    // console.log(e.value);
    // console.log(e.options[e.selectedIndex].text);

    const newdata = { ...data };
    newdata[e.id] = e.options[e.selectedIndex].text;
    setData(newdata);
    //  console.log(data);
    //   console.log("this country code running")
  }

  // function update_mode() {
  //   var e = document.querySelector('input[name="classmode"]:checked');
  //   // console.log(e.value);
  //   // console.log(e.options[e.selectedIndex].text);
  //   // var form = document.theForm;
  //   // var e = form.elements['classmode'];
  //   const newdata = { ...data };
  //   newdata[e.id] = e.value;
  //   console.log("mode is running");

  //   setData(newdata);
  //   console.log(data);
  //   //  console.log(data);
  //   //   console.log("this country code running")
  // }

  function submit(e) {
    console.log(data);
    setIsSubmit(true);
    setFormErrors(validate(data));
    if (formErrors.length === 0 && isSubmit) alert('Signed in successfully');
    else console.log(formErrors);
    // console.log(subject)

    for (var i of subject) {
      data.subjects.push(i);
    }
    //  e.preventDefault();

    // To fetch /integrate to backend uncomment this
    fetch('http://localhost:6500/api/registration/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('rablo-login-token'),
      },
      body: JSON.stringify({
        userId: localStorage.getItem('userId') || '63318e8ec1cb1ab7b59e90cc',
        parentName: data.parent_first_name + ' ' + data.parent_last_name,
        studentName: data.student_name,
        whatsappNumber: data.phone,
        class: data.class,
        modeOfClass: data.mode,
        schoolBoard: data.school_board,
        schoolName: data.school_name,
        subject: ['maths', 'physics', 'chemistry'],
        address: {
          addressLineOne: data.address_line1,
          addressLineTwo: data.address_line2,
          state: data.state,
          city: data.city,
          zipCode: data.zip_code,
          country: 'India',
        },
      }),
    }).then(resp => {
      // console.warn("resp",resp);;
      resp.json().then(result => {
        console.warn('result', result);
        //  setVerify(result.data.valid)
        // res=result.data.valid;
        console.log(result.data);
        alert(result.message);
      });
    });
  }

  const subject_names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  // const theme = useTheme();
  const [subject, setSubject] = React.useState([]);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setSubject(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <>
      <div className='studentregistrationcontainer'>
        <div className='studentregistrationformcontainer'>
          <div className='formdatacontainer'>
            <div className='studentheadcontainer'>
              <h1>Let's Talk a Bit More!</h1>
              <p>To help you better, We need a few deatils.</p>
            </div>
            <div className='formnamecontaier'>
              <div className='inputbox'>
                <Label
                  val="Parent's Name"
                  isrequired={true}
                  errorMessage={formErrors.parent_first_name}
                />
                <input
                  type='text'
                  className='inputclass'
                  placeholder='First Name'
                  onChange={e => handle(e)}
                  id='parent_first_name'
                  key='1'
                  value={data.parent_first_name}
                />
                {/* <p>{formErrors.parent_first_name}</p> */}
              </div>
              <div className='inputbox' id='lnamebox'>
                <Label
                  val='Last Name'
                  isrequired={false}
                  errorMessage={formErrors.parent_last_name}
                />
                <input
                  key='2'
                  onChange={e => handle(e)}
                  id='parent_last_name'
                  value={data.parent_last_name}
                  type='text'
                  className='inputclass'
                  placeholder='Last Name'
                />
                {/* <p>{formErrors.parent_last_name}</p> */}
              </div>
            </div>
            <div className='inputbox'>
              <Label
                val='Student Name'
                isrequired={true}
                errorMessage={formErrors.student_name}
              />
              <input
                type='text'
                key='3'
                onChange={e => handle(e)}
                id='student_name'
                value={data.student_name}
                className='inputclass'
                placeholder='Full Name'
              />
              {/* <p>{formErrors.student_name}</p> */}
            </div>
            <div className='inputbox'>
              <Label
                val='Whatsapp No'
                isrequired={true}
                errorMessage={formErrors.phone}
              />
              <div className='mobileinfocontainer'>
                <select
                  name='countrycode'
                  id='country_code'
                  onChange={() => update_country_code()}
                >
                  <option value='+91'>+91</option>
                  <option value='+92'>+92</option>
                  <option value='+93'>+93</option>
                  <option value='+94'>+94</option>
                </select>

                <input
                  style={{
                    width: '100%',
                    paddingLeft: '15px',
                  }}
                  key='4'
                  onChange={e => handle(e)}
                  id='phone'
                  value={data.phone}
                  type='text'
                  className='inputclass'
                  placeholder='0987654321'
                />
              </div>
              {/* <p>
                {formErrors.country_code} {formErrors.phone}
              </p> */}
            </div>
          </div>

          <div className='inputbox'>
            <Label
              val='Class'
              isrequired={true}
              errorMessage={formErrors.class}
            />
            <select name='class' id='class' onChange={() => update_class()}>
              <option value='preprimary'>Pre-Primary</option>
              <option value='1st'>Class-1st</option>
              <option value='2nd'>Class-2nd</option>
              <option value='3rd'>Class-3rd</option>
              <option value='4th'>Class-4thd</option>
              <option value='5th'>Class-5th</option>
              <option value='6th'>Class-6th</option>
              <option value='7th'>Class-7th</option>
              <option value='8th'>Class-8th</option>
              <option value='9th'>Class-9th</option>
              <option value='10th'>High School</option>
              <option value='11th'>Junior Year (11th)</option>
              <option value='12th'>Senior Yeat (12th)</option>
            </select>
            {/* <p>{formErrors.class}</p> */}
          </div>

          <div className='inputbox'>
            <Label
              val='Subject Category'
              isrequired={true}
              errorMessage={formErrors.subjectCategory}
            />
            <div className='radiobox-hr' style={{ marginTop: '15px' }}>
              <div className='radiobutton'>
                <input
                  onChange={e => handle(e)}
                  key='5'
                  type='radio'
                  id='subjectCategory'
                  name='subjectCategory'
                  value='PCM'
                  checked={data.subjectCategory === 'PCM'}
                />

                <label htmlFor='on'>PCM</label>
              </div>

              <div className='radiobutton'>
                <input
                  onChange={e => handle(e)}
                  key='6'
                  type='radio'
                  id='subjectCategory'
                  name='subjectCategory'
                  value='PCB'
                  checked={data.subjectCategory === 'PCB'}
                />

                <label htmlFor='off'>PCB</label>
              </div>

              <div className='radiobutton'>
                <input
                  onChange={e => handle(e)}
                  key='6'
                  type='radio'
                  id='subjectCategory'
                  name='subjectCategory'
                  value='Arts'
                  checked={data.subjectCategory === 'Arts'}
                ></input>
                <label htmlFor='off'>Arts</label>
              </div>
            </div>
            {/* <p>{formErrors.subjectCategory}</p> */}
          </div>

          <div className='inputbox'>
            <Label
              val='School board'
              isrequired={true}
              errorMessage={formErrors.school_board}
            />
            <div className='radiobox-hr' style={{ marginTop: '15px' }}>
              <div className='radiobutton'>
                <input
                  onChange={e => handle(e)}
                  key='7'
                  type='radio'
                  id='school_board'
                  name='schoolboard'
                  value='CBSE'
                  checked={data.school_board === 'CBSE'}
                ></input>
                <label htmlFor='CBSE'>CBSE</label>
              </div>
              <div className='radiobutton'>
                <input
                  onChange={e => handle(e)}
                  key='8'
                  type='radio'
                  id='school_board'
                  name='schoolboard'
                  value='ICSE'
                  checked={data.school_board === 'ICSE'}
                ></input>
                <label htmlFor='ICSE'>ICSE</label>
              </div>
              <div className='radiobutton'>
                <input
                  onChange={e => handle(e)}
                  key='9'
                  type='radio'
                  id='school_board'
                  name='schoolboard'
                  value='State Board'
                  checked={data.school_board === 'State Board'}
                ></input>
                <label htmlFor='stateboard'>State Board</label>
              </div>
            </div>
            {/* <p>{formErrors.school_board}</p> */}
          </div>
          <div className='inputbox'>
            <Label
              val='School'
              isrequired={true}
              errorMessage={formErrors.school_name}
            />
            <input
              key='10'
              onChange={e => handle(e)}
              id='school_name'
              value={data.school_name}
              type='text'
              className='inputclass'
              placeholder='Enter Full Name of your school'
            />
            {/* <p>{formErrors.school_name}</p> */}
          </div>
          <div className='inputbox'>
            <Label
              val='Subjects You want to Study'
              isrequired={true}
              errorMessage={formErrors.subject}
            />
            <div className='checkboxgroup' onChange={handleSubjectsChange}>
              {subject_names.map(s => (
                <div className='option'>
                  <input type='checkbox' name='subjects' id={s} key={s} />
                  <label for={s}>{s}</label>
                </div>
              ))}
            </div>
            {/* <input
              key="11"
              onChange={(e) => handle(e)}
              id="subjects"
              value={data.subjects}
              type="text"
              className="inputclass"
              placeholder="Type name of the subject or enter all subject"
            /> */}

            {/* <Select
              labelId='demo-multiple-name-label'
              id='demo-multiple-name'
              multiple
              value={subject}
              onChange={handleChange}
              input={<OutlinedInput label='Name' />}
              // MenuProps={MenuProps}
            >
              {subject_names.map(subjects => (
                <MenuItem
                  key={subjects}
                  value={subjects}
                  // style={getStyles(name, personName, theme)}
                >
                  {subjects}
                </MenuItem>
              ))}
            </Select> */}
            {/* <p>{formErrors.subject}</p> */}
          </div>

          <div className='formnamecontaier'>
            <div className='inputbox'>
              <Label
                val='Address Line 1'
                isrequired={true}
                errorMessage={formErrors.address_line}
              />
              <input
                key='12'
                onChange={e => handle(e)}
                id='address_line1'
                value={data.address_line1}
                type='text'
                className='inputclass addressline'
                placeholder='Address Line 1'
              />
            </div>
            <div className='inputbox' id='lnamebox'>
              <Label
                val='Address Line 2'
                isrequired={true}
                errorMessage={formErrors.address_line}
              />
              <input
                key='13'
                onChange={e => handle(e)}
                id='address_line2'
                value={data.address_line2}
                type='text'
                className='inputclass addressline'
                placeholder='Address Line 2'
              />
            </div>
          </div>
          {/* <p>{formErrors.address_line}</p> */}
          <div className='formnamecontaier'>
            <div className='inputbox'>
              <Label
                val='City'
                isrequired={true}
                errorMessage={formErrors.city}
              />
              <input
                type='text'
                key='14'
                onChange={e => handle(e)}
                id='city'
                value={data.city}
                className='inputclass'
                placeholder='City'
              />
              {/* <p>{formErrors.city}</p> */}
            </div>
            <div className='inputbox' id='lnamebox'>
              <Label
                val='State'
                isrequired={true}
                errorMessage={formErrors.state}
              />
              <input
                type='text'
                key='15'
                onChange={e => handle(e)}
                id='state'
                value={data.state}
                className='inputclass'
                placeholder='State'
              />
              {/* <p></p> */}
            </div>
          </div>
          <div className='inputbox'>
            <Label
              val='Zip Code'
              isrequired={true}
              errorMessage={formErrors.zip_code}
            />
            <input
              type='text'
              key='16'
              onChange={e => handle(e)}
              id='zip_code'
              value={data.zip_code}
              className='inputclass'
              placeholder='Zip Code'
            />
            {/* <p>{formErrors.zip_code}</p> */}
          </div>
          <button
            onClick={e => submit(e)}
            type='button'
            className='submit-btn-rectangular'
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentRegistration;
