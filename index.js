// Add your code here
const usersUrl = "http://localhost:3000/users"
const docBody = document.querySelector("body")

function submitData(userName, userEmail) {
    let dataObject = {
        name: userName,
        email: userEmail
    }

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(dataObject)
    }

    return fetch(usersUrl, configObject)
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        docBody.innerHTML += `<p>${object.id}</p>`
    })
    .catch(function(error) {
        alert("Yikes!")
        docBody.innerHTML += `<p>${error.message}</p>`
    })
    done()
}

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };

// // method: "POST" is missing from the object below
// let configObj = {
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   }); 