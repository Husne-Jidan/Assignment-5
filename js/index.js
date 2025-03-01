document.getElementById("next-page").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "next.html";
  });
  
// Get the current day
let currentDate = new Date();
let day = currentDate.toLocaleString("en-US", { weekday: "short" }); 
let month = currentDate.toLocaleString("en-US", { month: "short" });
let date = currentDate.getDate(); 
let year = currentDate.getFullYear(); 
//real date
document.querySelector("#dynamic-day").innerText = day;
document.querySelector("#dynamic-date").innerText = `${month} ${date} ${year}`;


  let taskCount = 6;
  let activityLog = document.querySelector(".activity-log"); // Fix Selection Here
  let navbarButton = document.querySelector("nav button");
  let completedButton = document.querySelectorAll("#task");
  let clearButton = document.getElementById("clear-history");
  
  let navbarCount = 23;
  
  completedButton.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
  
      alert("Board updated successfully!!");
  
      button.disabled = true;
      button.classList.add("bg-gray-400", "cursor-not-allowed");
      button.innerText = "Completed ✔️";
  
      taskCount--;
      if (taskCount === 0){
        alert("You completed all tasks");
      }
      document.querySelector(".text-3xl").innerText = taskCount;
  
      navbarCount++;
      navbarButton.innerHTML = `
        <img src="assets/checkbox.png" alt="">
        ${navbarCount}
      `;
  
      let taskTitle = button.parentElement.parentElement.querySelector("h3").innerText;
  
      let currentTime = new Date();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;

      let time = `${hours} : ${minutes} : ${seconds} ${ampm}`;    
  
      let activity = document.createElement("div");
      activity.classList.add("bg-slate-100", "p-3", "rounded");
      activity.innerText = `You have completed the task ${taskTitle} at ${time}`;
      activityLog.appendChild(activity);
    });
  });
  
  // ✅ Clear History Button
  clearButton.addEventListener("click", function () {
    activityLog.innerHTML = ""; // Clear All Activity Logs
  });
  

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // 🎯 Theme Button Click
  themeBtn.addEventListener("click", function () {
    let randomColor = getRandomColor();
    document.body.style.background = randomColor; // Change Background Color
  });



  