import '../style.css';

export const Reservations = () => {

    const reservationsContainer = document.createElement("div");


    const mobilePhone = document.createElement("h1");
    mobilePhone.classList.add("mobile-phone");
    mobilePhone.innerHTML = "+34 659771594";

    const reservationText = document.createElement("p");
    reservationText.innerHTML = "Please inquire about reservations at least two weeks in advance by using the form below. For reservations within the coming week, or for parties larger than four, please call us at the number listed above. We will call you to confirm your reservation at least 24 hours prior to your reservation."
    reservationText.classList.add("reservations-text");

    reservationsContainer.append(mobilePhone, reservationText);

    return reservationsContainer;

}