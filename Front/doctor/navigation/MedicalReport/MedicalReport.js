async function uploadReport() {
    let appointmentType = document.getElementById("AppType").value;
    let report = document.getElementById("Report").value;
    //fetch
    //call for POST to the url:
    let response = await fetch('http://localhost:5000/user/uploadReport', {
      //post
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      //this is the stuff we refer to as: req.body in the backend!!!!!
      body: JSON.stringify({
          appointmentType: appointmentType,
          report: report
      })
    })
    //get data from backend response as json!
    let body = await response.json()
  
    alert(body.message)
  }

async function findPetIdByName() {
    let pname = document.getElementById("Pname").value;

    //fetch
    //call for POST to the url:
    let response = await fetch('http://localhost:5000/pets/findPetIdByName', {
        //post
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //this is the stuff we refer to as: req.body in the backend!!!!!
        body: JSON.stringify({
            pname: pname,
            ownerId: ownerId.data
        })
    })
    //get data from backend response as json!
    petId = await response.json()
}


async function findOwner() {
    let phone = document.getElementById("Phone").value;

    //fetch
    //call for POST to the url:
    let response = await fetch('http://localhost:5000/user/getUserByPhone', {
        //post
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //this is the stuff we refer to as: req.body in the backend!!!!!
        body: JSON.stringify({
            phone: phone
        })
    })
    //get data from backend response as json!
    ownerId = await response.json()
    let x = document.getElementById("Pname");
    if (ownerId.data) {
        x.removeAttribute("disabled");
    }
    else{
        x.setAttribute("disabled", "");
    }
    console.log(ownerId);
}