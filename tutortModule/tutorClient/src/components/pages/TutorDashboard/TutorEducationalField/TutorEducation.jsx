import React, { useState } from 'react';
import rablo from './Image/logo.webp';
import './TutorEducation.css';
import step1illustrator from './Image/tutor_illustrator.png';
// import Multipleselection from "../TutorRegistrationV2/StageComponants/Multipleselection";
import validate from './tutorEducationValidation';

// Required Star
const Star = () => {
  return <span style={{ color: 'rgb(228,116,112)' }}>*</span>;
};
const options = [
  { value: 'value-0', text: '' },
  { value: 'value-1', text: 'Student' },
  { value: 'value-2', text: 'Fresher' },
  { value: 'value-3', text: 'Employed' },
  { value: 'value-4', text: 'Retired' },
  { value: 'value-5', text: 'Self-Employed' },
];

const wayOfTeachingOptions=[
  {value:'value-0',text:''},
  {value:'value-0',text:'friendly'},
  {value:'value-0',text:'linient'},
  {value:'value-0',text:'strict'},
]
// Current Job Role
const expertiseOptions=[
  {value:'value-0',text:''},
  {value:'value-1',text:'All Subjects'},
  {value:'value-2',text:'Humanities'},
  {value:'value-3',text:'Science'},
  {value:'value-4',text:'Maths'},
  {value:'value-5',text:'Programming'},
  {value:'value-6',text:'Languages'},
  {value:'value-7',text:'Commerce'},
]

const everworkedAsOptions=[
  {value:'value-0',text:''},
  {value:'value-1',text:'freelancer'},
  {value:'value-2',text:'trained-tutor'},
  {value:'value-3',text:'both'},
  {value:'value-4',text:'none'},
]

const YearsOfExperienceOptions=[
  {value:'value-0',text:''},
  {value:'value-0',text:'0-2'},
  {value:'value-0',text:'2-5'},
  {value:'value-0',text:'5+ years'},
]

const newoptions = [
  { value: 'value-0', text: '' },
  { value: 'value-1', text: 'High School' },
  { value: 'value-2', text: 'Intermediate' },
  { value: 'value-3', text: 'Diploma' },
  { value: 'value-4', text: 'Graduation' },
  { value: 'value-5', text: 'Post-Graduation' },
];
// Label
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

// Years of Experience
const YearsOfExperience = ({ handleChange, checkedValue, errorData }) => {
  return (
    <div className='inputbox' style={{'width':'44%'}}>
      <Label
        val='Year of Experience'
        isrequired={true}
        errorMessage={errorData.experience}
      />
<div className='TutoJobRoleCheckBox'>
                  <select
                    name='experience'
                    onChange={handleChange}
                    className={`${errorData.experience ? 'hasError' : ''}`}
                    style={{ marginTop: '20px' }}
                  >
                    {YearsOfExperienceOptions.map(item => {
                      return (
                        <option
                          key={item.value}
                          value={item.text}
                          // checked={item.text === options}
                          // selected={item.text === options}
                        >
                          {item.text}
                        </option>
                      );
                    })}
                  </select>
                </div>

      {/* <div className='Stage1radiobox-hr '>
        <div className='radiobutton '>
          <input
            type='button'
            id='0-2'
            name='experience'
            value='0 - 2'
            onClick={handleChange}
            // checked={checkedValue === '0 - 2'}
          /> */}
          {/* <label htmlFor="0-2">0 - 2 Years</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='2-5'
            name='experience'
            value='2 - 5'
            onClick={handleChange} */}
            {/* // checked={checkedValue === '2 - 5'}
          /> */}
          {/* <label htmlFor="2-5">2 - 5 Years</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='5+'
            name='experience'
            value='5+ years'
            onClick={handleChange} */}
            {/* // checked={checkedValue === '5+ years'} */}
          {/* /> */}
        


      {/* <p>What's your Year of Experience as an Mentor</p> */}
    </div>
  );
};

// Category of Expertise
const Expertise = ({ handleChange, checkedValue, errorData }) => {
  return (
    <div className='inputbox '>
      <Label
        val='Select Your Expertise Category'
        isrequired={true}
        errorMessage={errorData.expertise}
      />
      <div className='TutoJobRoleCheckBox'>
                  <select
                    name='expertise'
                    onChange={handleChange}
                    className={`${errorData.expertise ? 'hasError' : ''}`}
                    style={{ marginTop: '20px' }}
                  >
                    {expertiseOptions.map(item => {
                      return (
                        <option
                          key={item.value}
                          value={item.text}
                          // checked={item.text === options}
                          // selected={item.text === options}
                        >
                          {item.text}
                        </option>
                      );
                    })}
                  </select>
                </div>
      {/* <div className='Stage1radiobox-hr '>
        <div className='radiobutton '>
          <input
            type='button'
            id='all'
            name='expertise'
            onClick={handleChange}
            value='All Subjects' */}
            {/* // checked={checkedValue === 'All Subjects'}
          /> */}
          {/* <label htmlFor="all">All Subjects</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='humanities'
            name='expertise'
            onClick={handleChange}
            value='Humanities' */}
            {/* // checked={checkedValue === 'Humanities'}
          /> */}
          {/* <label htmlFor="humanities">Humanities</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='science'
            name='expertise'
            onClick={handleChange}
            value='Science' */}
            {/* // checked={checkedValue === 'Science'}
          /> */}
          {/* <label htmlFor="science">Science</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='maths'
            name='expertise'
            onClick={handleChange}
            value='Maths' */}
            {/* // checked={checkedValue === 'Maths'}
          /> */}
          {/* <label htmlFor="maths">Maths</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='programming'
            name='expertise'
            onClick={handleChange}
            value='Programming' */}
            {/* // checked={checkedValue === 'Programming'}
          /> */}
          {/* <label htmlFor="programming">Programming</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='languages'
            name='expertise'
            onClick={handleChange}
            value='Languages' */}
            {/* // checked={checkedValue === 'Languages'}
          /> */}
          {/* <label htmlFor="languages">Languages</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='commerce'
            name='expertise'
            onClick={handleChange}
            value='Commerce' */}
            {/* // checked={checkedValue === 'Commerce'}
          /> */}
          {/* <label htmlFor="commerce">Commerce</label> */}
        {/* </div>
      </div> */}
    </div>
  );
};

// Way of Teaching
const WayOfTeaching = ({ handleChange, checkedValue, errorData }) => {
  return (
    <div className='inputbox' style={{'width':'44%'}}>
      <Label
        val='Way of Teaching'
        isrequired={true}
        errorMessage={errorData.wayOfTeaching}
      />
            <div className='TutoJobRoleCheckBox'>
                  <select
                    name='wayOfTeaching'
                    onChange={handleChange}
                    className={`${errorData.wayOfTeaching ? 'hasError' : ''}`}
                    style={{ marginTop: '20px' }}
                  >
                    {wayOfTeachingOptions.map(item => {
                      return (
                        <option
                          key={item.value}
                          value={item.text}
                          // checked={item.text === options}
                          // selected={item.text === options}
                        >
                          {item.text}
                        </option>
                      );
                    })}
                  </select>
                </div>
      {/* <div className='Stage1radiobox-hr'>
        <div className='radiobutton'>
          <input
            type='button'
            id='friendly'
            name='wayOfTeaching'
            onClick={handleChange}
            value='friendly' */}
            {/* // checked={checkedValue === 'friendly'}
          /> */}
          {/* <label htmlFor="friendly">Friendly Tutor</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='lenient'
            name='wayOfTeaching'
            onClick={handleChange}
            value='lenient' */}
            {/* // checked={checkedValue === 'lenient'}
          /> */}
          {/* <label htmlFor="lenient">Lenient Tutor</label> */}
        {/* </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='strict'
            name='wayOfTeaching'
            onClick={handleChange}
            value='strict' */}
            {/* // checked={checkedValue === 'strict'}
          /> */}
          {/* <label htmlFor="strict"> Strict Tutor</label> */}
        </div>
  );
};

// Tell us more about your Academics
const MoreAcademics = ({ handleChange, value, errorData }) => {
  return (
    <div className='inputbox'>
      <Label
        // val='Tell us more about your Academics '
        val='Course'
        isrequired={true}
        errorMessage={errorData.moreAcademics}
      />
      <input
        type='text'
        name='moreAcademics'
        id=''
        className='inputclass'
        onChange={handleChange}
        value={value}
        style={{
          width: '100%',
          padding: '10px 20px',
          borderRadius: '5px',
          // border: 'none',
          // backgroundColor: '#f5f3f3',
          color: 'black',
          marginTop: '20px',
        }}
      />
      {/* <p>
        Enter your Course or Subjects e.g B.com, M.tech or Intermediate from
        Science.
      </p> */}
    </div>
  );
};

// College / University
const CollegeUniversity = ({ handleChange, value, errorData }) => {
  console.log(errorData);
  return (
    <div className='inputbox'>
      <Label
        val='Name of Institute'
        isrequired={true}
        errorMessage={errorData.collegeUniversity}
      />
      <input
        type='text'
        name='collegeUniversity'
        onChange={handleChange}
        id=''
        placeholder=''
        className={`inputclass ${
          errorData.collegeUniversity ? 'hasError' : ''
        }`}
        value={value}
        style={{
          width: '100%',
          padding: '10px 20px',
          borderRadius: '5px',
          // border: 'none',
          // backgroundColor: '#f5f3f3',
          marginTop: '20px',
        }}
      />
    </div>
  );
};

// Extra Skills
const ExtraSkills = ({ handleChange, value }) => {
  return (
    <div className='inputbox' id='extraSkills'>
      <Label val='Extra Skills(Optional)' />
      <input
        type='text'
        name='extraSkills'
        id=''
        className='inputclass'
        onClick={handleChange}
        value={value}
      />
      <p>Any other trick under your sleeves?</p>
    </div>
  );
};

// Formal Association
const FormalAssociation = ({ handleChange, value }) => {
  return (
    <div className='inputbox'>
      <Label val='Formal Association (Optional)' />
      <input
        type='text'
        name='formalAssociation'
        id=''
        className='inputclass'
        onChange={handleChange}
        value={value}
        style={{
          width: '100%',
          padding: '10px 20px',
          borderRadius: '5px',
          // backgroundColor: '#f5f3f3',
          marginTop: '20px',
        }}
      />
      <p>Have you been associated with any formal education company?</p>
    </div>
  );
};

// Ex-Reputed Teacher
const ExTeacher = ({ handleChange, checkedValue, errorData }) => {
  return (
    <div className='inputbox '>
      <Label
        val='Are you an Ex-Reputed School/College or Coaching Teacher?'
        isrequired={true}
        errorMessage={errorData.exTeacher}
      />
      <div className='Stage1radiobox-hr '>
        <div className='radiobutton '>
          <input
            type='button'
            id='yes'
            name='exTeacher'
            value='yes'
            checked={checkedValue === 'yes'}
            onClick={handleChange}
          />
          <label htmlFor='yes' className='yesLabel'>Yes</label>
        </div>
        <div className='radiobutton'>
          <input
            type='button'
            id='no'
            name='exTeacher'
            value='no'
            checked={checkedValue === 'no'}
            onClick={handleChange}
          />
          <label htmlFor='no' className='noLabel'>No</label>
        </div>
      </div>
    </div>
  );
};

// Company / Employer name
const Employer = ({ handleChange, value, errorData }) => {
  return (
    <div className='inputbox'>
      <Label
        val='Company/ Employer Name '
        required={!!errorData.employer}
        errorMessage={errorData.employer}
      />
      <input
        type='text'
        name='employer'
        onChange={handleChange}
        id=''
        placeholder='Enter the Company/Employer Name'
        className='inputclass'
        value={value}
        style={{
          width: '100%',
          padding: '10px 20px',
          borderRadius: '5px',
          // border: 'none',
          // backgroundColor: '#f5f3f3',
          marginTop: '20px',
        }}
      />
    </div>
  );
};

const TutorEducation = ({ showPreference }) => {
  let id = JSON.parse(localStorage.getItem('user_id'));

  let token = JSON.parse(localStorage.getItem('userToken'));
  console.log(id);
  console.log(token);
  const [formData, setFormData] = useState({});
  const [errorData, setErrorData] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrorData(() => {
      console.log('setting error data');
      return validate(formData);
    });

    // if (
    //   errorData &&
    //   Object.keys(errorData).length === 0 &&
    //   Object.getPrototypeOf(errorData) === Object.prototype
    // )
    //   showPreference();
  };
  // const buttonClickHandler = () => {
  //   showPreference();
  // };
  // Highest qualification

  console.log('logging error data after setting', errorData);

  return (
    <div className='TutorEducationMainContainer'>
      {/* <div className="TutorEducationNav">
        <div className="RabloLogo">
          <img src={rablo} alt="" />
        </div>
      </div> */}
      <div className='TutorEducationContainer'>
        {/* <div className="TutorEducationDoddle">
          <img src={step1illustrator} alt="" />
        </div> */}
        <div className='TutorEducationFormContainer'>
          <pre>{JSON.stringify(formData, undefined, 2)}</pre>

          <div className='TutorEducationHeader'>
            {/* <h1>Start your journey with us 👋</h1> */}
           
            {/* <p>Discover the best community of tutor and students</p> */}
          </div>
          <div className='TutorEducationForm'>
            <form action='' onSubmit={handleSubmit}>
              {/* Ever worked as */}
              <div className='inputbox' style={{'width':'44%'}}>
                <Label
                  val='Ever Worked as'
                  isrequired={true}
                  errorMessage={errorData.workedAs}
                />
                <div className='TutoJobRoleCheckBox'>
                  <select
                    name='workedAs'
                    onChange={handleChange}
                    className={`${errorData.workedAs ? 'hasError' : ''}`}
                    style={{ marginTop: '20px' }}
                  >
                    {everworkedAsOptions.map(item => {
                      return (
                        <option
                          key={item.value}
                          value={item.text}
                          // checked={item.text === options}
                          // selected={item.text === options}
                        >
                          {item.text}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* <div className='Stage1radiobox-hr'>
                  <div className='radiobutton '>
                    <input
                      type='button'
                      id='freelancer'
                      name='workedAs'
                      value='freelancer'
                      // checked={formData.workedAs === 'freelancer'}
                      onClick={handleChange}
                    /> */}
                    {/* <label htmlFor="freelancer">
                      A Freelancer (No Formal Association)
                    </label> */}
                  {/* </div>
                  <div className='radiobutton'>
                    <input
                      type='button'
                      id='tutor'
                      name='workedAs'
                      value='trainedTutor'
                      // checked={formData.workedAs === 'trainedTutor'}
                      onClick={handleChange}
                    /> */}
                    {/* <label htmlFor="tutor">
                      A Trained Tutor (Associated with Any Reputed Institutes)
                    </label> */}
                  {/* </div>
                  <div className='radiobutton'>
                    <input
                      type='button'
                      id='both'
                      name='workedAs'
                      value='both'
                      // checked={formData.workedAs === 'both'}
                      onClick={handleChange}
                    /> */}
                    {/* <label htmlFor="both">Both of the Above</label> */}
                  {/* </div>
                  <div className='radiobutton'>
                    <input
                      type='button'
                      id='none'
                      name='workedAs'
                      value='none'
                      // checked={formData.workedAs === 'none'}
                      onClick={handleChange}
                    /> */}
                    {/* <label htmlFor="none"> None</label> */}
                  {/* </div>
                </div> */}
              </div>

              {/* Current Role */}
              <div className='inputbox' style={{'width':'44%'}}>
                <Label
                  isrequired={true}
                  val='Current Job Role'
                  errorMessage={errorData.currentRole}
                />
                <div className='TutoJobRoleCheckBox'>
                  <select
                    name='currentRole'
                    onChange={handleChange}
                    className={`${errorData.currentRole ? 'hasError' : ''}`}
                    style={{ marginTop: '20px' }}
                  >
                    {options.map(item => {
                      return (
                        <option
                          key={item.value}
                          value={item.text}
                          // checked={item.text === options}
                          // selected={item.text === options}
                        >
                          {item.text}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* <p>What is the current profession you are involved in?</p> */}
              </div>

              {/* Highest Qualification */}
              <div className='inputbox' style={{'width':'100%'}}>
                <Label
                  isrequired={true}
                  val='Highest Qualification(Choose from the Options)'
                  errorMessage={errorData.highestQualification}
                />
                <div className='TutoJobRoleCheckBox'>
                  <select
                    name='highestQualification'
                    value={newoptions.text}
                    onChange={handleChange}
                    className={`${errorData.currentRole ? 'hasError' : ''}`}
                    style={{ marginTop: '20px' }}
                  >
                    {newoptions.map(item => {
                      return (
                        <option
                          key={item.value}
                          value={item.text}
                          // checked={item.text === options}
                          // selected={item.text === options}
                        >
                          {item.text}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* <p>What is the current profession you are involved in?</p> */}
              </div>
             

              <div className='inputbox' style={{'width':'100%'}}>
                <label htmlFor="marksheetInput" className='uploadMarksheet'>
                  <div  className='marksheetText'>upload Final Marksheet</div>
                  <input type="file" id="marksheetInput" style={{'display':'none'}} />
                </label>
              </div>

              <div className='inputbox'>
                {formData.currentRole === '' ||
                formData.currentRole ===
                  undefined ? null : formData.currentRole === 'Fresher' ? (
                  <div>
                    <div className='StudentRequirement'>
                      {formData.highestQualification && (
                        <CollegeUniversity
                          handleChange={handleChange}
                          value={formData.collegeUniversity}
                          errorData={errorData}
                        />
                      )}
                      {formData.highestQualification && (
                        <MoreAcademics
                          handleChange={handleChange}
                          value={formData.moreAcademics}
                          errorData={errorData}
                        />
                      )}
                      {formData.workedAs === 'trainedTutor' ||
                      formData.workedAs === 'both' ||
                      formData.workedAs === 'freelancer' ? (
                        <Employer
                          handleChange={handleChange}
                          checkedValue={formData.workedAs}
                          errorData={errorData}
                        />
                      ) : null}
                      <YearsOfExperience
                        handleChange={handleChange}
                        checkedValue={formData.experience}
                        errorData={errorData}
                      />
                      <Expertise
                        handleChange={handleChange}
                        checkedValue={formData.expertise}
                        errorData={errorData}
                      />
                      <WayOfTeaching
                        handleChange={handleChange}
                        checkedValue={formData.wayOfTeaching}
                        errorData={errorData}
                      />
                      <ExtraSkills
                        handleChange={handleChange}
                        checkedValue={formData.extraSkills}
                      />
                    </div>
                  </div>
                ) : formData.currentRole === 'Employed' ? (
                  <div>
                    <div className='StudentRequirement'>
                      {formData.highestQualification && (
                        <CollegeUniversity
                          handleChange={handleChange}
                          value={formData.collegeUniversity}
                          errorData={errorData}
                        />
                      )}
                      {formData.highestQualification && (
                        <MoreAcademics
                          handleChange={handleChange}
                          value={formData.moreAcademics}
                          errorData={errorData}
                        />
                      )}
                      <YearsOfExperience
                        handleChange={handleChange}
                        checkedValue={formData.experience}
                        errorData={errorData}
                      />
                      <FormalAssociation
                        handleChange={handleChange}
                        value={formData.formalAssociation}
                      />
                      {formData.workedAs === 'trainedTutor' ||
                      formData.workedAs === 'both' ||
                      formData.workedAs === 'freelancer' ? (
                        <ExTeacher
                          checkedValue={formData.exTeacher}
                          handleChange={handleChange}
                          value={formData.exTeacher}
                          errorData={errorData}
                        />
                      ) : null}
                      {formData.workedAs === 'trainedTutor' ||
                      formData.workedAs === 'both' ||
                      formData.workedAs === 'freelancer' ? (
                        <Employer
                          handleChange={handleChange}
                          value={formData.employer}
                          errorData={errorData}
                        />
                      ) : null}
                      <Expertise
                        handleChange={handleChange}
                        checkedValue={formData.expertise}
                        errorData={errorData}
                      />
                      <WayOfTeaching
                        handleChange={handleChange}
                        checkedValue={formData.wayOfTeaching}
                        errorData={errorData}
                      />
                      <ExtraSkills
                        handleChange={handleChange}
                        checkedValue={formData.extraSkills}
                      />
                    </div>
                  </div>
                ) : formData.currentRole === 'Retired' ? (
                  <div>
                    <div className='StudentRequirement'>
                      {formData.highestQualification && (
                        <CollegeUniversity
                          handleChange={handleChange}
                          value={formData.collegeUniversity}
                          errorData={errorData}
                        />
                      )}
                      {formData.highestQualification && (
                        <MoreAcademics
                          handleChange={handleChange}
                          value={formData.moreAcademics}
                          errorData={errorData}
                        />
                      )}
                      <YearsOfExperience
                        handleChange={handleChange}
                        checkedValue={formData.experience}
                        errorData={errorData}
                      />
                      <FormalAssociation
                        handleChange={handleChange}
                        value={formData.formalAssociation}
                      />
                      {formData.workedAs === 'trainedTutor' ||
                      formData.workedAs === 'both' ||
                      formData.workedAs === 'freelancer' ? (
                        <ExTeacher
                          checkedValue={formData.exTeacher}
                          handleChange={handleChange}
                          value={formData.exTeacher}
                          errorData={errorData}
                        />
                      ) : null}
                      {formData.workedAs === 'trainedTutor' ||
                      formData.workedAs === 'both' ||
                      formData.workedAs === 'freelancer' ? (
                        <Employer
                          handleChange={handleChange}
                          value={formData.employer}
                          errorData={errorData}
                        />
                      ) : null}
                      <Expertise
                        handleChange={handleChange}
                        checkedValue={formData.expertise}
                        errorData={errorData}
                      />
                      <WayOfTeaching
                        handleChange={handleChange}
                        checkedValue={formData.wayOfTeaching}
                        errorData={errorData}
                      />
                      <ExtraSkills
                        handleChange={handleChange}
                        checkedValue={formData.extraSkills}
                      />
                    </div>
                  </div>
                ) : formData.currentRole === 'Self-Employed' ? (
                  <div>
                    <div className='StudentRequirement'>
                      {formData.highestQualification && (
                        <CollegeUniversity
                          handleChange={handleChange}
                          value={formData.collegeUniversity}
                          errorData={errorData}
                        />
                      )}
                      {formData.highestQualification && (
                        <MoreAcademics
                          handleChange={handleChange}
                          value={formData.moreAcademics}
                          errorData={errorData}
                        />
                      )}
                      <YearsOfExperience
                        handleChange={handleChange}
                        checkedValue={formData.experience}
                        errorData={errorData}
                      />
                      <FormalAssociation
                        handleChange={handleChange}
                        value={formData.formalAssociation}
                      />
                      {formData.workedAs === 'trainedTutor' ||
                      formData.workedAs === 'both' ||
                      formData.workedAs === 'freelancer' ? (
                        <ExTeacher
                          checkedValue={formData.exTeacher}
                          handleChange={handleChange}
                          value={formData.exTeacher}
                          errorData={errorData}
                        />
                      ) : null}
                      {formData.workedAs === 'trainedTutor' ||
                      formData.workedAs === 'both' ||
                      formData.workedAs === 'freelancer' ? (
                        <Employer
                          handleChange={handleChange}
                          value={formData.employer}
                          errorData={errorData}
                        />
                      ) : null}
                      <Expertise
                        handleChange={handleChange}
                        checkedValue={formData.expertise}
                        errorData={errorData}
                      />
                      <WayOfTeaching
                        handleChange={handleChange}
                        checkedValue={formData.wayOfTeaching}
                        errorData={errorData}
                      />
                      <ExtraSkills
                        handleChange={handleChange}
                        checkedValue={formData.extraSkills}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className='StudentRequirement'>
                      {formData.highestQualification && (
                        <CollegeUniversity
                          handleChange={handleChange}
                          value={formData.collegeUniversity}
                          errorData={errorData}
                        />
                      )}
                      {formData.highestQualification && (
                        <MoreAcademics
                          handleChange={handleChange}
                          value={formData.moreAcademics}
                          errorData={errorData}
                        />
                      )}
                      {formData.workedAs === 'trainedTutor' ||
                      formData.workedAs === 'both' ||
                      formData.workedAs === 'freelancer' ? (
                        <ExTeacher
                          checkedValue={formData.exTeacher}
                          handleChange={handleChange}
                          value={formData.exTeacher}
                          errorData={errorData}
                        />
                      ) : null}
                      {formData.workedAs === 'trainedTutor' ||
                      formData.workedAs === 'both' ||
                      formData.workedAs === 'freelancer' ? (
                        <Employer
                          handleChange={handleChange}
                          value={formData.employer}
                          errorData={errorData}
                        />
                      ) : null}
                      <Expertise
                        handleChange={handleChange}
                        checkedValue={formData.expertise}
                        errorData={errorData}
                      />
                      <YearsOfExperience
                        handleChange={handleChange}
                        checkedValue={formData.experience}
                        errorData={errorData}
                      />
                      <WayOfTeaching
                        handleChange={handleChange}
                        checkedValue={formData.wayOfTeaching}
                        errorData={errorData}
                      />
                      <ExtraSkills
                        handleChange={handleChange}
                        checkedValue={formData.extraSkills}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div style={{'width':'100%','color':'#6764FF','fontFamily':'poppins'}}>Note: <span style={{'color':'#000000'}}>Any Detail that are not verified yet contribute to profile strength.</span></div>
              <>
                {/* <div className="inputbox">
                <Label
                  val="Select Your Expertise Category "
                  isrequired={true}
                />
                <input type="text" name="" id="" className="inputclass" />
              </div> */}

                {/* <div className="inputbox">
                <Label val="Tell us any Specific Expertise" isrequired={true} />
                <input type="text" name="" id="" className="inputclass" />
                <p>
                  For Example: If you have Selected Science in above field than
                  you can enter Physics, chemistry or Biology. Any or all of the
                  Option
                </p>
              </div> */}
              </>
              <div className='JoinUsButton'>
                <button className='btn1'>Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorEducation;
