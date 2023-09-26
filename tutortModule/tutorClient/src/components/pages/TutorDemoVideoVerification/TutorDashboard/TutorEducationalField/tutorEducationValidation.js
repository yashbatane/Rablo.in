function validate(formData) {
  // console.log('form data', formData);
  const {
    workedAs,
     currentRole,
      highestQualification,
       MarkSheet,
        collegeUniversity,
         moreAcademics,
          experience,
           expertise,
            wayOfTeaching,
             employer,
              exTeacher,
               NameOfInstitute,
                PeriodOfService,
                 ExperienceLetter,
  
  } = formData;

  const errorData = {};

  // Ever worked as field is required
  if (!workedAs) {
    errorData.workedAs = 'Please select any one option';
  }

  // Current role is required
  if (!currentRole)
    errorData.currentRole = 'Please select any one option';

  // Highest qualification is required
  if (!highestQualification)
    errorData.highestQualification = 'Please select any one option';

  // College/University is required
  if (highestQualification && !collegeUniversity)
    errorData.collegeUniversity = 'Please fill in your college/university name';

  // More about academics is required
  if (highestQualification && !moreAcademics)
    errorData.moreAcademics = 'Please fill in your course details';

  // Experience is required
  if (!experience)
    errorData.experience = 'Please select any one option';

  // Expertise is required
  if (!expertise)
    errorData.expertise = 'Please select any one option';

  // Way of teaching is required
  if (!wayOfTeaching)
    errorData.wayOfTeaching = 'Please select any one option';

  // Employer is required if ever worked as a trained tutor OR current role is employed or retired
  if ((workedAs === 'trainedTutor' ||
    currentRole === 'Employed' ||
    currentRole === 'Retired') &&
    !employer)
    if (!MarkSheet)
      errorData.MarkSheet = "please upload your Latest marksheet";
  // Ex Reputed teacher or not is required
  if (!exTeacher)
    errorData.exTeacher = 'Please select any one option';

  if (exTeacher === "yes" && (!NameOfInstitute || NameOfInstitute === ""))
    errorData.NameOfInstitute = "Please Enter the detail";
  if (exTeacher === "yes" && (!PeriodOfService || PeriodOfService === ""))
    errorData.PeriodOfService = "Please Enter the detail";
  // console.table(errorData);
  if(!employer || employer==="") errorData.employer="Please enter the detail of employer";
  if (exTeacher === "yes" && !ExperienceLetter)
    errorData.ExperienceLetter = "please enter detail..";
  if (Object.keys(errorData).length == 0)
    errorData.formStatus = true;
  else
    errorData.formStatus = false;
  return errorData;
}

export default validate;
