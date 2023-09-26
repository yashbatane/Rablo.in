const validate = (values) => {
  const errors = {};
  // regex
  const PostalRegx = /^[0-9]*$/;

  if (!values.jobtype) {
    errors.jobtype = "Please select the preffered job type";
  }
  if (!values.prefferedtype) {
    errors.prefferedtype = "Please select preffered mode ";
  }
  if (values.prefferedtype==="Offline") {
    if (!values.modeofcommute) {
      errors.modeofcommute = "please select mode of transport";
    }
  }
  if(!values.class){
    errors.class="Please select the number of classes"
  }

  if (!values.numOfSessions) {
    errors.session = "Please select no. of sessions"
  }
  //   aboutyourself

  // if (!values.description) {
  //   errors.description = "Please tell someting about yourself";
  // }
  //age group

  //   uploadimage
  //   if(!values.UploadImage){
  //     errors.UploadImage = "Please upload your profile picture"
  //   }

  // //   stage2
  // if (!values.address) {
  //     errors.address = "Please Enter address Name";
  //   }
  //   if (!values.city) {
  //     errors.city = "Please Enter City Name";
  //   }
  //   if (!values.state) {
  //     errors.state = "Please Enter state Name";
  //   }
  //   if (!values.postalcode) {
  //     errors.postalcode = "Please Enter Correct Postal Code";
  //   }else if (!PostalRegx.test(values.postalcode)){
  //     errors.postalcode= "Invalid Postal code"
  //   }else if(values.postalcode.length < 6){
  //     errors.postalcode= "Enter a Valid Postal Code"
  //   }else if(values.postalcode.length > 6){
  //     errors.postalcode= "Enter a Valid Postal Code"
  //   }

  //   // stage 3
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }

  //   // stage 3
  //   if (!values.prefferedjob) {
  //     errors.prefferedjob = "Please select atleast one job";
  //   }
  //   if (!values.CurrentProffesion) {
  //     errors.CurrentProffesion = "Please select atleast one Proffesion ";
  //   }
  //   if (!values.ExpectedFees) {
  //     errors.ExpectedFees = "Please Enter Exected Fee";
  //   }
  //   if (!values.ClassToTake) {
  //     errors.ClassToTake = "Please Enter the number of class you want to take";
  //   }

  //   // stage 4
  //   if (values.Experties) {
  //     errors.Experties = "This field is required";
  //   }
  //   if (values.Academics) {
  //     errors.Academics = "This field is required";
  //   }

  return errors;
};
export default validate;
