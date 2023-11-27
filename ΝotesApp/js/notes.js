// Arrays for days and months in Greek
const daysGr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsGr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Event listener for when the DOM content is fully loaded
window.addEventListener("DOMContentLoaded", function () {
  // Set interval to update and display the Greek date and time every second
  this.setInterval(printGRDate, 1000);

  // Event listener for the "insertnote" button click
  document.querySelector(".btn").addEventListener("click", function () {
    insertNote(document.querySelector("#noteText").value.trim());
    reset();
  });

  // Event listener for the "keyup" event in the note input field
  document.querySelector("#noteText").addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      insertNote(this.value.trim());
      reset();
    }
  });
});

// Function to print the current Greek date and time
function printGRDate() {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  let formatedDay = daysGr[day];
  let formatedMonth = monthsGr[month];

  let formatedDate = `${formatedDay}, ${date} ${formatedMonth} ${year}`;
  let formatedTime = `${hours < 10 ? "0" : ""}${hours} : 
                        ${minutes < 10 ? "0" : ""}${minutes} :
                        ${seconds < 10 ? "0" : ""}${seconds}`;

  // Display the formatted date and time in the header
  document.querySelector(".header").innerHTML =
    formatedDate + "<br>" + formatedTime;
}

// Function to insert a note into the list
function insertNote(note) {
  if (!note) {
    return;
  }

  // Clone the template row and remove the "hidden" class
  let clone = document.querySelector(".row").cloneNode(true);
  clone.classList.remove("hidden");

  // Event listeners for the checkbox and delete button in each note
  clone.querySelector("input").addEventListener("click", function () {
    strikeThrough(clone.querySelector("label"));
  });

  clone.querySelector("button").addEventListener("click", function () {
    deleteNote(this.parentNode);
  });

  // Set the note content and append it to the main container
  clone.querySelector("label").innerHTML = note;
  document.querySelector(".main").appendChild(clone);
}

// Function to toggle the strike-through style on a note
function strikeThrough(lbl) {
  lbl.classList.toggle("line-through");
}

// Function to delete a note
function deleteNote(note) {
  note.remove();
}

// Function to reset the note input field
function reset() {
  document.querySelector("#noteText").value = "";
}
