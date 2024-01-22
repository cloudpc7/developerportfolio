const projects = document.querySelectorAll("div");
const viewProject = document.createElement("div")
const projectLink = document.createElement("a");
const codeLink = document.createElement("a");

const feedback = document.getElementById("feedback");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const emailRegex = new RegExp(/^[a-zA-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/);

projects.forEach((project) => {
  if(project.id === "project") {
    project.addEventListener("mouseover", () => {
      project.appendChild(viewProject);
      viewProject.classList.add("view-project");
      viewProject.appendChild(projectLink);
      viewProject.appendChild(codeLink);
      projectLink.innerHTML = "VIEW PROJECT";
      codeLink.innerHTML = "VIEW CODE";
    })
    project.addEventListener("mouseout", () => {
      project.removeChild(viewProject);
    })
  }
})

feedback.addEventListener("submit", (event) =>{
  event.preventDefault();
  if(userName.value){
    userName.classList.add("active");
  }
  const emailAddress = email.value;
  if(!emailRegex.test(emailAddress)) {
    email.classList.add("active");
    errorMessage.innerHTML = "Sorry, invalid format here";
  }
})