function scrollContact(){
document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});
}

/* HAMBURGER MENU */

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", function(){
nav.classList.toggle("active");
});


/* CONTACT FORM */

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");
const btn = form.querySelector("button");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    btn.innerText = "Sending...";
    btn.disabled = true;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            msg.innerText = "✅ Message Sent Successfully!";
            form.reset();
        } else {
            msg.innerText = "❌ Error! Check form or try again.";
        }
    })
    .catch(() => {
        msg.innerText = "❌ Network error!";
    })
    .finally(() => {
        btn.innerText = "Send Message";
        btn.disabled = false;
    });
});
/* pop up process */

function openProcess(card){

document.getElementById("processPopup").style.display="flex";

document.getElementById("popupContent").innerHTML = card.innerHTML;

}

function closeProcess(){

document.getElementById("processPopup").style.display="none";

}