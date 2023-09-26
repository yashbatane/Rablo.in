import React, { useState, useEffect } from 'react';
import './PrefferedSection.css';
import MultipleSelectPlaceholder from './PrefferedLanguage';
// import illustrator from "./Image/student_illustrator.png";
// import rablo from "../../../img/logo.webp";
// import validate from "./Validation";
import illustrator from './Image/student_illustrator.png';
import rablo from './Image/logo.webp';
import validate from './Validation';
import NavBar from "../Profiledashboard/TutorDashboardSidebar/TutorDashboardSidebar";

const PreferenceForm = ({ hidePreference }) => {
  //Google credentials

  let id = JSON.parse(localStorage.getItem('user_id'));

  let token = JSON.parse(localStorage.getItem('userToken'));
  console.log(id);
  console.log(token);

  // Required Star
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

 const preferredLanguage=[
  {key:"value-0",text:"English"},
  {key:"value-1",text:"Hindi"},
  {key:"value-2",text:"Marathi"},
  {key:"value-3",text:"Gujarati"},
  {key:"value-4",text:"Tamil"},
  {key:"value-5",text:"Bengali"},
  {key:"value-6",text:"Punjabi"},
  {key:"value-7",text:"Assamese"},
  {key:"value-8",text:"kannada"},
  {key:"value-9",text:"Telugu"},
  {key:"value-10",text:"odia"},
  {key:"value-11",text:"Kannada"},
  {key:"value-12",text:"Malayalam"},
  {key:"value-13",text:"Others"},

 ]


  // const PrefferedType = ['Offline', 'Online'];
  const [prefferedType, setPrefferedType] = useState({});
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // handle change
  const handleModes = e => {
    setPrefferedType(e.target.value);
  };
  const handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  console.log('preference');
  // handlesubmit
  const handleSubmit = e => {
    e.preventDefault();
    console.log('clicked');
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    // hidePreference();
  };
  //
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  console.log(formErrors);
  return (
    <div className='preferencesMainContainer'>
      {/* <div className="TutorDetailNav">
        <div className="RabloLogo"><img src={rablo} alt="" /></div>
      </div> */}
        <NavBar/>

      <div className='prefferedSectionContainer'>
        {/* <div className="prefferedSectionIllustrator">
          <img src={illustrator} alt="" />
        </div> */}
        <div className='PreferenceForm'>
          <div className='PrefferedHeader'>
            {/* <h1>Start your journey with us 👋</h1> */}
            {/* <p>Discover the best community of tutor and students</p> */}
            <div>
              <h3>Preference</h3>
              <small className="qualification">
                Select the mode of class you want to teach.
              </small>
            </div>
          </div>
          {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className='ui message success'>Submitted Successfully</div>
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )} */}
          <form action='' onSubmit={handleSubmit}>

            <div className='inputbox' style={{'width':'44%'}}>
              <Label
                val='Select the type of job'
                // isrequired={true}
                errorMessage={formErrors.jobtype}
              />
              {/* <div className=' radioButtonDiv'>
                <div className='radiobutton '>
                  <input
                    type='button'
                    id='part-time'
                    name='jobtype'
                    value='Part-time'
                    onClick={handleChange}
                  />
                 
                </div>
                <div className='radiobutton'>
                  <input
                    type='button'
                    id='full-time'
                    name='jobtype'
                    value='Full-time'
                    onClick={handleChange}
                  />
                 
                </div>
              </div> */}
              <div className='TutoJobRoleCheckBox'>
                  <select
                    name='jobtype'
                    onChange={handleChange}
                    className={`${formErrors.jobtype ? 'hasError' : ''}`}
                    style={{ marginTop: '20px' }}
                  >
                    <option key="value-0" value="" > </option>
                    <option key="value-0" value="full-time" >full-time </option>
                    <option key="value-0" value="part-time" >part-time </option>
                  </select>
                </div>
              <p className='Error'>{formErrors.jobptype}</p>
            </div>


            <div className='inputbox' style={{'width':'44%','padding-top':'2%'}}>
              <Label
                val='Preferred Modes ?'
                // isrequired={true}
                errorMessage={formErrors.prefferedtype}
              />
              {/* <div className='radiobox-hr'>
                {PrefferedType.map((value, index) => {
                  return (
                    <div className='radiobutton' key={index}>
                      <input
                        type='button'
                        id={value}
                        name='prefferedtype'
                        value={value}
                        checked={value === prefferedType}
                        onClick={e => {
                          handleModes(e);
                          handleChange(e);
                        }}
                      />
                      
                    </div>
                  );
                })}
              </div> */}
              <div className='TutoJobRoleCheckBox'>
                  <select
                    name='preferredtype'
                    onChange={handleChange}
                    className={`${formErrors.preferredtype ? 'hasError' : ''}`}
                    style={{ marginTop: '20px' }}
                    onClick={e=>{
                      handleModes(e)
                    }}
                  >
                    <option key="value-0" value="" > </option>
                    <option key="value-1" value="Online">online</option>
                    <option key="value-2" value="Offline" >Offline</option>
                  </select>
                </div>
              <p className='Error'>{formErrors.jobptype}</p>

              {/* <p className="Error">{formErrors.prefferedtype}</p> */}
              {prefferedType === 0 ? null : (
                <div className='inputbox'>
                  {prefferedType === 'Offline' ? (
                    <div className=''>
                      <Label val='Mode of commute' isrequired={false} />
                      <div className='Stage1radiobox-hr'>
                        <div className='radiobutto '>
                          <input
                            type='radio'
                            id='mode-of-commute-private'
                            name='modeofcommute'
                            value='Own-Vehicle'
                            onChange={handleChange}
                          />
                          <label htmlFor='mode-of-commute-private'>
                            Own-Vehicle
                          </label>
                        </div>
                        <div className='radiobutton'>
                          <input
                            type='radio'
                            id='mode-of-commute-public'
                            name='modeofcommute'
                            value='Public-Commute'
                            onChange={handleChange}
                          />
                          <label htmlFor='mode-of-commute-public'>
                            Public-Commute
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              )}
              <p className='Error'>{formErrors.modeofcommute}</p>
            </div>
            <div className='inputbox'>
              <Label val='Preferred Language' isrequired={false} />
              {/* <MultipleSelectPlaceholder submitLanguageChange={handleChange} /> */}
              {/* <select
                name='class'
                id='classs'
                value={formValues.numberofsession}
                onChange={handleChange}
                style={{ marginTop: '20px' }}
              >
                <option value=''>Select preferred language</option>
                <option value='preprimary'>Hindi</option>
                <option value='  english' name='class'>
                  English{' '}
                </option>
                <option value='    gujarathi' name='class'>
                  Gujarathi
                </option>
                <option value=' urdu' name='class'>
                  Urdu
                </option>
                <option value='     telugu' name='class'>
                  Telugu
                </option>
                <option value=' tamil' name='class'>
                  Tamil
                </option>
                <option value='malayalam' name='class'>
                  Malayalam
                </option>
                <option value=' punjabi' name='class'>
                  Punjabi
                </option>
                <option value='intermediate'>Intermediate(11th-12th)</option>
              </select> */}

                           <div className='radiobox-hr'>
                {preferredLanguage.map((item) => {
                  return (
                    <div className='grid'>
                      
                    <div className='radiobutton' key={item.key}>
                      <input
                      
                        type='button'
                        // id={item.key}
                        id="buttons"
                        name='prefferedLanguage'
                        value={item.text}
                        checked={item.text === formValues.prefferedLanguage}
                        className={item.text === formValues.prefferedLanguage ? "checked":""}
                        onClick={e =>  handleChange(e)}
                      />
                    </div>
                    </div>
                  );
                })}
              </div>

            </div>


            <div className='inputbox' style={{'width':"45%"}}>
              <Label
                val='Select the Preferred Classes'
                // isrequired={true}
                errorMessage={formErrors.class}
              />
              <div className='TutoJobRoleCheckBox'>
              <select
                name='class'
                id='classs'
                value={formValues.numberofsession}
                onChange={handleChange}
                style={{ marginTop: '20px' }}
              >
              <option value=""></option>
                <option value='preprimary'>
                  Pre-Primary Section (Nur-2nd)
                </option>
                <option value='primary' name='class'>
                  Primary Section(3rd-5th)
                </option>
                <option value='junior' name='class'>
                  Junior Section(6th-8th)
                </option>
                <option value='high' name='class'>
                  High School(9th-10th)
                </option>
                <option value='intermediate'>Intermediate(11th-12th)</option>
              </select>
              {/* <p className="Error">{formErrors.class}</p> */}
            </div>
            </div>

            <div className='inputbox' style={{'width':"45%"}}>
              <Label
                val='Select the number of classes in a day'
                // isrequired={true}
                errorMessage={formErrors.session}
              />
               <div className='TutoJobRoleCheckBox'>
              <select
                name='numOfSessions'
                id='classs'
                value={formValues.numberofsession}
                onChange={handleChange}
                style={{ marginTop: '20px' }}
              >
              <option value=""></option>
                <option value='1'>One-Class Per Day</option>
                <option value='2' name='class'>
                  Two-Class Per Day
                </option>
                <option value='3' name='class'>
                  Three-Class Per Day
                </option>
                <option value='4' name='class'>
                  Four-Class Per Day
                </option>
                <option value='5 or more'>More than four Per Day</option>
              </select>
              {/* <p className="Error">{formErrors.class}</p> */}
            </div>
            </div>

            {/* <div className='inputbox' style={{'width':'40%'}}>
              <Label val='Your Available Hours' isrequired={false} />
              <div className='TutoJobRoleCheckBox'>
                <select
                  name='numOfHours'
                  id='numOfHours'
                  onChange={handleChange}
                  style={{ marginTop: '20px' }}
                >
                <option value=''></option>
                  <option value='null'>Select Duration</option>
                  <option value='1'>1 hour</option>
                  <option value='1.25'>1 hour 15 minutes</option>
                  <option value='1.5'>1 hour 30 minutes</option>
                </select>
              </div>
            </div> */}

<div className='inputbox' style={{'width':'40%'}}>
              {/* <Label val='Start Time for Classes' isrequired={false} /> */}
              <div> Start Time for Classes</div>
              <div className='TutoJobRoleCheckBox'>
                <select
                  name='numOfHours'
                  id='numOfHours'
                  onChange={handleChange}
                  style={{ marginTop: '20px' }}
                >
                <option value=''></option>
                  <option value='null'>Select Duration</option>
                  <option value='1'>1 hour</option>
                  <option value='1.25'>1 hour 15 minutes</option>
                  <option value='1.5'>1 hour 30 minutes</option>
                </select>

                <select
                  name='numOfHours'
                  id='numOfHours'
                  onChange={handleChange}
                  style={{ marginTop: '20px' }}
                >
                <option value=''></option>
                  <option value='null'>Select Duration</option>
                  <option value='1'>1 hour</option>
                  <option value='1.25'>1 hour 15 minutes</option>
                  <option value='1.5'>1 hour 30 minutes</option>
                </select>

                
              </div>
            </div>


            <div className='inputbox' style={{'width':'40%'}}>
              <Label val='End Time for Classes' isrequired={false} />
              <div className='TutoJobRoleCheckBox'>
                <select
                  name='numOfHours'
                  id='numOfHours'
                  onChange={handleChange}
                  style={{ marginTop: '20px' }}
                >
                <option value=''></option>
                  <option value='null'>Select Duration</option>
                  <option value='1'>1 hour</option>
                  <option value='1.25'>1 hour 15 minutes</option>
                  <option value='1.5'>1 hour 30 minutes</option>
                </select>

                <select
                  name='numOfHours'
                  id='numOfHours'
                  onChange={handleChange}
                  style={{ marginTop: '20px' }}
                >
                <option value=''></option>
                  <option value='null'>Select Duration</option>
                  <option value='1'>1 hour</option>
                  <option value='1.25'>1 hour 15 minutes</option>
                  <option value='1.5'>1 hour 30 minutes</option>
                </select>
              </div>
            </div>

            <div className='JoinUsButton'>
            <button className='backBtn'>
            Back
            </button>
              <button className='submitBtn' type='submit'>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PreferenceForm;
