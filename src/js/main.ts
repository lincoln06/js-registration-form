const emailEl = document.getElementById('email') as HTMLInputElement;
const passEl = document.getElementById('pass') as HTMLInputElement;
const passRepeatEl = document.getElementById('pass_repeat') as HTMLInputElement;
const formEl = document.getElementById('registration_form') as HTMLFormElement;

if (emailEl && passEl && passRepeatEl && formEl) {
    formEl.addEventListener('submit', (event) => {
        console.log(emailEl.value);
        console.log(passEl.value);
        console.log(passRepeatEl.value);

        // TODO: implement validation with presenting errors to user
        // TODO: use https://www.npmjs.com/package/validator

        event.preventDefault();
    });
}
