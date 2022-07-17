class Validate {
    Validate_Name = () => {
        let name = document.getElementsByName("Name");
        let message = document.getElementById("name");
        let pattern = /^[a-zA-Z ]{8,15}$/;
        if (name[0].value === "") message.innerText = "Kindly enter the Name";
        else if (pattern.test(name[0].value) == false)
            message.innerText = "Atleast 8 to 15 Character Required";
        else message.innerText = "";
    };

    Validate_Address = () => {
        let address = document.getElementsByName("Address");
        let message = document.getElementById("address");
        let pattern = /^[a-zA-Z0-9]{1}[a-zA-Z0-9 //-:,]{1,}$/;
        if (address[0].value === "")
            message.textContent = "Kindly enter the Address";
        else if (pattern.test(address[0].value) == false)
            message.textContent =
                "Address can have alphabets, numbers, space and the following special characters /,:-.";
        else message.textContent = "";
    };

    Validate_Email = () => {
        let email = document.getElementsByName("EMail");
        let message = document.getElementById("email");
        let pattern =
            /^(?![._].*)(?!.*[._]{2,}.*)[A-Za-z0-9._]+(?<!.*[._])@(?![-.].*)(?!.*[-.]{2,}.*)[A-Za-z0-9-.]+\.[A-Za-z]{2,}$/;
        if (email[0].value === "")
            message.textContent = "Kindly enter the Email";
        else if (pattern.test(email[0].value) == false)
            message.textContent =
                "Invalid mail address. Mail address can have alphabets, numbers, .(dot), _(underscore) and @";
        else message.textContent = "";
    };

    Validate_Phone = () => {
        let phone = document.getElementsByName("phone");
        let message = document.getElementById("phone");
        let pattern = /^[6-9]{1}\d{9}$/;
        if (phone[0].value === "")
            message.textContent = "Kindly enter the Phone Number";
        else if (pattern.test(phone[0].value) == false)
            message.textContent = "Invalid Phone number";
        else message.textContent = "";
    };

    Validate_Password = () => {
        let password = document.getElementsByName("Password");
        let message = document.getElementById("pwd");
        let pattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]*$/;
        if (password[0].value === "")
            message.textContent = "Kindly enter the Password";
        else if (pattern.test(password[0].value) == false)
            message.textContent =
                "Password should have atleast 1 upper case, 1 lower case, 1 number and 1 special character !@#$%^&*()";
        else message.textContent = "";
        this.Validate_ConfirmPassword(password[0].value);
    };

    Validate_ConfirmPassword = (check) => {
        let message = document.getElementById("cpwd");
        if (check) {
            let password1 = document.getElementsByName("Password");
            let password2 = document.getElementsByName("cPassword");
            if (password2[0].value === "")
                message.textContent = "Kindly enter the Confirm Password";
            else if (
                password1[0].value.normalize() !==
                password2[0].value.normalize()
            )
                message.textContent =
                    "Password and confirm password must be same";
            else message.textContent = "";
        } else message.textContent = "Kindly fill the Password first!!";
    };

    Validate_All = () => {
        this.Validate_Name();
        this.Validate_Address();
        this.Validate_Email();
        this.Validate_Password();
        this.Validate_Phone();
    };
}

formValidate = () => {
    let V = new Validate();
    V.Validate_All();
};
