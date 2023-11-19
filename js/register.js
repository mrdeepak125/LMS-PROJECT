// function saveData(){
//     let email, password;
//     email=document.getElementById("email").value;
//     password=document.getElementById("password").value;

//     let user_records=new Array();
//     user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
//     if(user_records.some((v)=>{
//       return v.email==email
//     })){
//       alert("Account Created.\n\nPlease Sign In using the link below.");
//       window.location.href="index.html";
//     }
//     else{
//       user_records.push({
//           "email":email,
//           "password":password,
//       })
//       localStorage.setItem("users",JSON.stringify(user_records));
//     }
//   }




const signUp = e => {
  let fname = document.getElementById('fname').value,
      lname = document.getElementById('lname').value,
      email = document.getElementById('email').value,
      pwd = document.getElementById('pwd').value;

  let formData = JSON.parse(localStorage.getItem('formData')) || [];

  let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => 
          data.fname.toLowerCase() == fname.toLowerCase() && 
          data.lname.toLowerCase() == lname.toLowerCase()
      );

  if(!exist){
      formData.push({ fname, lname, email, pwd });
      localStorage.setItem('formData', JSON.stringify(formData));
      document.querySelector('form').reset();
      document.getElementById('fname').focus();
      alert("Account Created.\n\nPlease Sign In using the link below.");
  }
  else{
      alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
  }
  e.preventDefault();
}
