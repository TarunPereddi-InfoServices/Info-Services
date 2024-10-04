//Example CONTACT FORM validation

function validateContactForm(name, email, phone, message) {
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
        return false;
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(phone)) {
        return false;
    }

    return true;
}
