
async function register() {
  let user = document.getElementById("User").value;
  let name = document.getElementById("Name").value;
  let pass = document.getElementById("Pass").value;
  let email = document.getElementById("Email").value;
  let lname = document.getElementById("Lname").value;
  let phone = document.getElementById("Phone").value;
  let role = document.getElementById("Role").value;

  //fetch
  //call for POST to the url:
  let response = await fetch('http://localhost:5000/user/register', {
    //post
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    //this is the stuff we refer to as: req.body in the backend!!!!!
    body: JSON.stringify({
      username: user,
      name: name,
      pass: pass,
      email: email,
      lname: lname,
      phone: phone,
      role: role
    })
  })
  //get data from backend response as json!
  let body = await response.json()

  alert(body.message)
}


function addPet() {
  let role = document.getElementById("Role");

  if (role.value == 1) {
    // alert("this is owner");
    let button = document.createElement("button");
    button.innerHTML = "לחץ כאן להוסיף בע''ח"
    button.setAttribute('onclick', "createMenu()");
    button.setAttribute("id", "addPet")
    role.appendChild(button)
  }
  else {
    let mainDiv = document.getElementById("main")
    let button = document.getElementById("addPet")
    role.removeChild(button)
    mainDiv.innerHTML = ""
  }
}

function createMenu(){
  let mainDiv = document.getElementById("main")
  let div = document.createElement("div")
  div.innerText = "enter pet details here:"
  mainDiv.appendChild(div)
  div.setAttribute("id","div")
  let name = document.createElement("input")
  name.setAttribute("type","text")
  name.setAttribute("placeholder","name")
  let lastname = document.createElement("input")
  lastname.setAttribute("type","text")
  lastname.setAttribute("placeholder"," last name")
  let something = document.createElement("input")
  something.setAttribute("type","text")
  something.setAttribute("placeholder","something")
  div.appendChild(name)
  div.appendChild(lastname)
  div.appendChild(something)
}