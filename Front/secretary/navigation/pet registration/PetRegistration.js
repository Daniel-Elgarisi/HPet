async function petRegister() {

  let phone = document.getElementById("Phone").value;
  let phone = document.getElementById("petName").value;
  let phone = document.getElementById("Breed").value;
  let phone = document.getElementById("ChipNumber").value;
  let phone = document.getElementById("PetBirthday").value;
  let phone = document.getElementById("Gender").value;
  let phone = document.getElementById("Type").value;

  //fetch
  //call for POST to the url:
  let response = await fetch('http://localhost:5000/user/petRegister', {
    //post
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    //this is the stuff we refer to as: req.body in the backend!!!!! ------ לבדוק עם דניאל מה לעשות
    body: JSON.stringify({
      phone: phone,
      name: name,
      breed: breed,
      chip_number: chip_number,
      birthday: birthday,
      gender: gender,
      type: type
    })
  })
  //get data from backend response as json!
  let body = await response.json()

  alert(body.message)
}