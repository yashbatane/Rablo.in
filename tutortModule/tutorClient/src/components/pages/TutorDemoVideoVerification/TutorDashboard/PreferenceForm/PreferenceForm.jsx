import React, { useState, useEffect } from 'react';
import './PrefferedSection.css';
import MultipleSelectPlaceholder from './PrefferedLanguage';
// import illustrator from "./Image/student_illustrator.png";
// import rablo from "../../../img/logo.webp";
// import validate from "./Validation";
import illustrator from './Image/student_illustrator.png';
import rablo from './Image/logo.webp';
import validate from './Validation';
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

  const PrefferedType = ['Offline', 'Online'];
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
      <div className='prefferedSectionContainer'>
        {/* <div className="prefferedSectionIllustrator">
          <img src={illustrator} alt="" />
        </div> */}
        <div className='PreferenceForm'>
          <div className='PrefferedHeader'>
            <h1>Start your journey with us 👋</h1>
            {/* <p>Discover the best community of tutor and students</p> */}
          </div>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className='ui message success'>Submitted Successfully</div>
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
          <form action='' onSubmit={handleSubmit}>
            <div className='inputbox'>
              <Label
                val='Job Type Preferred'
                isrequired={true}
                errorMessage={formErrors.jobtype}
              />
              <div className=' radioButtonDiv'>
                <div className='radiobutton '>
                <label htmlFor='part-time' onClick={handleChange}>
                  <input
                    type='button'
                    id='part-time'
                    name='jobtype'
                    value='Part-time'
                  />Part-time
                  </label>
                  {/* <label htmlFor="part-time">Part-Time</label> */}
                </div>
                <div className='radiobutton'>
                <label htmlFor='full-time' onClick={handleChange}>
                   <input
                    type='button'
                    id='full-time'
                    name='jobtype'
                    value='Full-time' 
                  />Full-time
                  </label>
                  {/* <label htmlFor="full-time">Full-Time</label> */}
                </div>
              </div>
              <p className='Error'>{formErrors.jobptype}</p>
            </div>
            <div className='prefferedInputDiv'>
              <Label
                val='Preffered Modes ?'
                isrequired={true}
                errorMessage={formErrors.prefferedtype}
              />
              <div className='radiobox-hr'>
                {PrefferedType.map((value, index) => {
                  return (
                    <div className='radiobutton' key={index}>
                    <label htmlFor={value}>
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
                      />{value}
                      </label>
                      {/* <label htmlFor={value}>{value}</label> */}
                    </div>
                  );
                })}
              </div>
              {/* <p className="Error">{formErrors.prefferedtype}</p> */}
              {prefferedType === 0 ? null : (
                <div className='inputboxContainer'>
                  {prefferedType === 'Offline' ? (
                    <div className='inputbox'>
                      <Label val='Mode of commute' isrequired={true} />
                      <div className='Stage1radiobox-hr'>
                        <div className='radiobutton '>
                        <label htmlFor='mode-of-commute-private'>
                          <input
                            type='radio'
                            id='mode-of-commute-private'
                            name='modeofcommute'
                            value='Own-Vehicle'
                            onChange={handleChange}
                          />
                            Own-Vehicle
                          </label>
                        </div>
                        <div className='radiobutton'>
                        <label htmlFor='mode-of-commute-public'>
                          <input
                            type='radio'
                            id='mode-of-commute-public'
                            name='modeofcommute'
                            value='Public-Commute'
                            onChange={handleChange}
                          />
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
              <Label val='Preffered Language' isrequired={false} />
              {/* <MultipleSelectPlaceholder submitLanguageChange={handleChange} /> */}
              <select
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
              </select>
            </div>
            <div className='inputbox'>
              <Label
                val='Preferred Classes'
                isrequired={true}
                errorMessage={formErrors.class}
              />
              <select
                name='class'
                id='classs'
                value={formValues.numberofsession}
                onChange={handleChange}
                style={{ marginTop: '20px' }}
              >
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

            <div className='inputbox'>
              <Label
                val='Number of Sessions'
                isrequired={true}
                errorMessage={formErrors.session}
              />
              <select
                name='numOfSessions'
                id='classs'
                value={formValues.numberofsession}
                onChange={handleChange}
                style={{ marginTop: '20px' }}
              >
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

            <div className='inputbox'>
              <Label val='Your Available Hours' isrequired={false} />
              <div className='hours'>
                <select
                  name='numOfHours'
                  id='numOfHours'
                  onChange={handleChange}
                  style={{ marginTop: '20px' }}
                >
                  <option value='null'>Select Duration</option>
                  <option value='1'>1 hour</option>
                  <option value='1.25'>1 hour 15 minutes</option>
                  <option value='1.5'>1 hour 30 minutes</option>
                </select>
              </div>
            </div>

            <div className='JoinUsButton'>
              <button className='btn1' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PreferenceForm;
