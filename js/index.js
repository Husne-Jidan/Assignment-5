document.getElementById("next-page").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "next.html";
  });
  
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
  