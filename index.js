const submit = document.getElementById("formSubmit");

submit.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("submitted");
        // console.log("yes");
    } else {
        alert("please fill all the fields");
        // console.log("no");
    }
});

