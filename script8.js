const form=document.getElementById('userForm');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const nameInput=document.getElementById('fullName');
    const emailInput=document.getElementById('email');
    const name=nameInput.value.trim();
    const genderInput=document.querySelector('input[name="gender"]:checked');
    
    if(name.length<=3){
        alert("please enter above 3 characters");
        return;
    }
    const userData={
        name:nameInput.value,
        email:emailInput.value,
        gender:genderInput.value,

    };
    localStorage.setItem('registrationData',JSON.stringify(userData));
    console.log("Data saved:",userData);
    alert('Data saved successfully to local storage!');
    form.reset();
});