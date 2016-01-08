/* ---------General description:
This code will populate contact information dynamically onto the Discover Portland
aboutus.html as selected by radio input, while also removing contact information that
becomes de-selected (via CANCEL button or making a different radio selection). Web
forms for email and/or phone contact are also dynamically generated upon the
radio selection.
*/

/*Generate and populate "Contact Us" button.  */
var parent = document.getElementById("content");
var button = document.createElement("input");
  button.type = "button";
  button.value = "Contact Us";
  button.name = "contactus";
  button.id = "contactus";
  button.addEventListener("click", function () {
    contactFields();
  });
var child = document.getElementById("aboutUsContainer");
parent.insertBefore(button, child);

/*Generate form element container for email/phone contact fieldsets.  */
var contactForm = document.createElement("contactForm");
  contactForm.id = "contactForm";
  contactForm.method = "post";

/*On "Contact Us" button click: generate and populate radio buttons
 for email,  phone or social media contact. */
function contactFields() {
  if (document.getElementById("contactus") !== "") {
    var removeButton = document.getElementById("contactus");
    removeButton.parentNode.removeChild(removeButton);
  } /*if closure. */
  document.getElementById("content").setAttribute("style", "display: flex; margin-left: 2%;");
  parent.appendChild(contactForm);
  var eLabel = document.createElement("label");
    eLabel.id = "eLabel";
    eLabel.textContent = "Email: ";
  var email = document.createElement("input");
    email.type = "radio";
    email.name = "contact";
    email.id = "emailRadio";
    email.value = "Email";
    email.addEventListener("change", function() {
      displayEmail();
    });
  eLabel.appendChild(email);
  var pLabel = document.createElement("label");
    pLabel.id = "pLabel";
    pLabel.textContent = "Phone: ";
  var phone = document.createElement("input");
    phone.type = "radio";
    phone.name = "contact";
    phone.id = "phoneRadio";
    phone.value = "Phone";
    phone.addEventListener("change", function() {
      displayPhone();
    });
  pLabel.appendChild(phone);
  var sLabel = document.createElement("label");
    sLabel.id = "sLabel";
    sLabel.textContent = "Social Media: ";
  var social = document.createElement("input");
    social.type = "radio";
    social.name = "contact";
    social.id = "socialRadio";
    social.value = "Social Media";
    social.addEventListener("change", function() {
      displaySocial();
    });
  sLabel.appendChild(social);
  var cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.name = "cancel";
    cancelButton.value = "CANCEL";
    cancelButton.addEventListener("click", function() {
      cancelClick();
    });
  var buttons = document.createElement("fieldset");
    buttons.id = "buttonsFieldset";
    buttons.appendChild(cancelButton);
  contactForm.appendChild(eLabel);
  contactForm.appendChild(pLabel);
  contactForm.appendChild(sLabel);
  contactForm.appendChild(buttons);
} /*function contactFields closure.  */

/*Function to generate user information fieldsets. */
function userInfo() {
  var Contact = document.createElement("fieldset");
    Contact.id = "Contact";
  var cLegend = document.createElement("cLegend");
    cLegend.textContent = "Your information";
  var firstName = document.createElement("input");
    firstName.type = "text";
    firstName.placeholder = "First Name";
    firstName.id = "firstName";
  var lastName = document.createElement("input");
    lastName.type = "text";
    lastName.placeholder = "Last Name";
    lastName.id = "lastName";
  contactForm.appendChild(Contact);
  Contact.appendChild(cLegend);
  Contact.appendChild(firstName);
  Contact.appendChild(lastName);
  var Reason = document.createElement("fieldset");
    Reason.id = "Reason";
  var rLegend = document.createElement("legend");
    rLegend.textContent = "Reason for Contact";
  contactForm.appendChild(Reason);
  Reason.appendChild(rLegend);
  var contactReason = document.createElement("select");
    var reason1 = document.createElement("option");
      reason1.value = "Comment";
      reason1.textContent = "Comment";
    var reason2 = document.createElement("option");
      reason2.value = "Suggestion";
      reason2.textContent = "Suggestion";
    var reason3 = document.createElement("option");
      reason3.value = "BrokenLink";
      reason3.textContent = "Broken Link";
    contactReason.appendChild(reason1);
    contactReason.appendChild(reason2);
    contactReason.appendChild(reason3);
  var contactExplain = document.createElement("textarea");
    contactExplain.id = "contactExplain";
    contactExplain.placeholder = "Enter a brief description for why you'd like to hear back from us";
    contactExplain.contactForm = "contactcontactForm";
  Reason.appendChild(contactReason);
  Reason.appendChild(contactExplain);
  var submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.name = "submit";
    submitButton.value = "SUBMIT";
    submitButton.addEventListener("click", function() {
      submitClick();
    });
  var cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.name = "cancel";
    cancelButton.value = "CANCEL";
    cancelButton.addEventListener("click", function() {
      cancelClick();
    });
  var buttons = document.createElement("fieldset");
    buttons.id = "buttonsFieldset";
    buttons.appendChild(submitButton);
    buttons.appendChild(cancelButton);
  contactForm.appendChild(buttons);
}

/*Function to remove user information fieldsets. */
function removeContactFields() {
    if (document.getElementById("Contact")) {
    var removeContactFields = document.getElementById("Contact");
    removeContactFields.parentNode.removeChild(removeContactFields);
  } /*if closure. */
    if (document.getElementById("Reason")) {
    var removeReasonFields = document.getElementById("Reason");
    removeReasonFields.parentNode.removeChild(removeReasonFields);
  } /*if closure. */
} /*function removeContactFields closure. */

function removeInputButtons() {
    if (document.getElementById("buttonsFieldset")) {
    var removeButtons = document.getElementById("buttonsFieldset");
    removeButtons.parentNode.removeChild(removeButtons);
  } /*if closure. */
    if (document.getElementById("cancelFieldset")) {
    var removeCancel = document.getElementById("cancelFieldset");
    removeCancel.parentNode.removeChild(removeCancel);
  } /*if closure. */
} /*function removeInputButtons closure.  */

/*Object constructor for team members listed on page. */
var member = function(firstName, lastName, email, phone, social) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
  this.social = social;
};

/*Array containing team member objects from constructor.  */
var team = [];
team[0] = new member("Danielle", "Heberling", "danielle@domain.com", "503-999-9999", "https://www.linkedin.com/in/daheber");
team[1] = new member("Jacob", "Hillman", "jacob@domain.com", "503-888-8888", "https://www.linkedin.com/in/jacob-hillman-53864320");
team[2] = new member("Jonathon", "Randall", "jonathon@domain.com", "503-777-7777", "social media");
team[3] = new member("Lisa", "Hackenberger", "lisa@domain.com", "503-666-6666", "social media");

/*Function to insert email address on radio select. */
function displayEmail() {
/*If buttons fieldset populated, remove it. */
  removeInputButtons();

/*If user informations fieldsets populated, remove them. */
  removeContactFields();

/*Populate user information fields. */
  userInfo();

  for (index = 0; index < team.length; index++) {
    if (document.getElementById(this.team[index].firstName+"phone")) {
      var removePhoneInfo = document.getElementById(this.team[index].firstName+"phone");
      removePhoneInfo.parentNode.removeChild(removePhoneInfo);
    } /*if closure. */
    if (document.getElementById(this.team[index].firstName+"social")) {
      var revoveSocialInfo = document.getElementById(this.team[index].firstName+"social");
      revoveSocialInfo.parentNode.removeChild(revoveSocialInfo);
    } /*if closure. */
    var anchor = document.createElement("a");
      anchor.href = this.team[index].email;
      anchor.id = this.team[index].firstName+"email";
    var eIcon = document.createElement("i");
      eIcon.className = "fa fa-envelope";
      anchor.appendChild(eIcon);
    var appendEmail = document.getElementById(this.team[index].firstName);
      appendEmail.appendChild(anchor);
    var eText = document.createTextNode(" "+this.team[index].email);
      anchor.appendChild(eText);
  } /*for closure.  */

/*Generate fieldset with inputs for email contact information.  */
  var yourEmail = document.createElement("input");
    yourEmail.type = "email";
    yourEmail.placeholder = "Your email address:";
    yourEmail.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    yourEmail.id = "yourEmail";
  document.getElementById("Contact").appendChild(yourEmail);
} /*function displayEmail closure.  */

/*Function to insert phone number on radio select.  */
function displayPhone() {
/*If buttons fieldset populated, remove it. */
  removeInputButtons();

/*If user informations fieldsets populated, remove them. */
  removeContactFields();

/*Populate user information fields. */
  userInfo();

  for (index = 0; index < team.length; index++) {
    if (document.getElementById(this.team[index].firstName+"email")) {
      var revoveEmailInfo = document.getElementById(this.team[index].firstName+"email");
      revoveEmailInfo.parentNode.removeChild(revoveEmailInfo);
    } /*if closure. */
    if (document.getElementById(this.team[index].firstName+"social")) {
      var revoveSocialInfo = document.getElementById(this.team[index].firstName+"social");
      revoveSocialInfo.parentNode.removeChild(revoveSocialInfo);
    } /*if closure. */
  var anchor = document.createElement("a");
    anchor.href = "tel:+"+this.team[index].phone;
    anchor.id = this.team[index].firstName+"phone";
  var pIcon = document.createElement("i");
    pIcon.className = "fa fa-phone";
    anchor.appendChild(pIcon);
  var appendEmail = document.getElementById(this.team[index].firstName);
    appendEmail.appendChild(anchor);
  var pText = document.createTextNode(" "+this.team[index].phone);
    anchor.appendChild(pText);
  } /*for closure.  */

/*Generate fieldset with inputs for phone contact information.  */
  var yourPhone = document.createElement("input");
    yourPhone.type = "tel";
    yourPhone.placeholder = "Your phone number:";
    yourPhone.pattern = "[0-9\/]*";
    yourPhone.id = "yourPhone";
  var contactTime = document.createElement("div");
    contactTime.textContent = "Best time to contact you:";
  var contactfield = document.createElement("input");
    contactfield.type = "text";
    contactfield.name = "timeToContact";
    contactfield.id = "timeToContact";
    contactfield.form = "contactForm";
    contactfield.placeholder = "Best time to call/text";
  contactTime.appendChild(contactfield);
  document.getElementById("Contact").appendChild(yourPhone);
  document.getElementById("Contact").appendChild(contactTime);
} /*function displayPhone closure.  */

/*Function to insert social media on radio select.  */
function displaySocial() {
/*If user informations fieldsets populated, remove them. */
  removeContactFields();

/*If buttons fieldset populated, remove it. */
  removeInputButtons();

/*Populate user information fields. */
  userInfo();

  for (index = 0; index < team.length; index++) {
    if (document.getElementById(this.team[index].firstName+"email")) {
      var revoveEmailInfo = document.getElementById(this.team[index].firstName+"email");
      revoveEmailInfo.parentNode.removeChild(revoveEmailInfo);
    } /*if closure. */
    if (document.getElementById(this.team[index].firstName+"phone")) {
      var revovePhoneInfo = document.getElementById(this.team[index].firstName+"phone");
      revovePhoneInfo.parentNode.removeChild(revovePhoneInfo);
    } /*if closure. */
  var anchor = document.createElement("a");
    anchor.href = this.team[index].social;
    anchor.id = this.team[index].firstName+"social";
  var pIcon = document.createElement("i");
    pIcon.className = "fa fa-linkedin";
    anchor.appendChild(pIcon);
  var appendEmail = document.getElementById(this.team[index].firstName);
    appendEmail.appendChild(anchor);
  var sText = document.createTextNode(" Social Media");
    anchor.appendChild(sText);
  } /*for closure.  */

/*If buttons fieldset populated, remove it. */
  removeInputButtons();

/*If user informations fieldsets populated, remove them. */
  removeContactFields();

/*Generate & populate fieldsets and inputs into form element. */
  var cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.name = "cancel";
    cancelButton.value = "CANCEL";
    cancelButton.addEventListener("click", function() {
      cancelClick();
    });
  var cancelFieldset = document.createElement("fieldset");
    cancelFieldset.id = "cancelFieldset";
  cancelFieldset.appendChild(cancelButton);
  contactForm.appendChild(cancelFieldset);
  /*Remove SUBMIT button. */
  if (document.getElementById("submit")) {
    var removeSubmit = document.getElementById("submit");
    removeSubmit.parentNode.removeChild(removeSubmit);
  } /*if closure. */
} /*function displaySocial closure. */

function cancelClick() {
/*Remove Email radio button. */
  var removeEmail = document.getElementById("eLabel");
  removeEmail.parentNode.removeChild(removeEmail);

/*Remove Phone radio button. */
  var removePhone = document.getElementById("pLabel");
  removePhone.parentNode.removeChild(removePhone);

/*Remove Social Media radio button. */
  var removeSocial = document.getElementById("sLabel");
  removeSocial.parentNode.removeChild(removeSocial);

/*If user informations fieldsets populated, remove them. */
  removeContactFields();

/*If buttons fieldset populated, remove it. */
  removeInputButtons();

/*Remove contactForm element. */
  var removeFormElement = document.getElementById("contactForm");
  removeFormElement.parentNode.removeChild(removeFormElement);

  for (index = 0; index < team.length; index++) {
    if (document.getElementById(this.team[index].firstName+"email")) {
      var revoveEmailInfo = document.getElementById(this.team[index].firstName+"email");
      revoveEmailInfo.parentNode.removeChild(revoveEmailInfo);
    } /*if closure. */
    if (document.getElementById(this.team[index].firstName+"phone")) {
      var revovePhoneInfo = document.getElementById(this.team[index].firstName+"phone");
      revovePhoneInfo.parentNode.removeChild(revovePhoneInfo);
    } /*if closure. */
    if (document.getElementById(this.team[index].firstName+"social")) {
      var revoveSocialInfo = document.getElementById(this.team[index].firstName+"social");
      revoveSocialInfo.parentNode.removeChild(revoveSocialInfo);
    } /*if closure. */
  } /*for closure.  */
  document.getElementById("content").setAttribute("style", "display: block;");
  parent.insertBefore(button, child);
}

function submitClick() {
  window.location = "thanks.html";
}
