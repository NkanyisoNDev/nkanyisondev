const aboutMeBtn = document.querySelector("#aboutMe-btn");
const blogBtn = document.querySelector("#blog-btn");
const btnArrow = document.querySelector(".btn-arrow");
const dropdown = document.querySelector(".dropdown");
const option = document.querySelector(".option");
const cvBtn = document.querySelector(".cv-btn");

const projects = {
    miniProject: "Mini Projects",
    birthday: "Birthday"
}

if(btnArrow)
{
    document.querySelector("#open-arrow").addEventListener("click", () => {
        dropdown.setAttribute("style", `display: block;`)
    });
    document.querySelector("#close-arrow").addEventListener("click", () => {
        dropdown.setAttribute("style", `display: none`);
    });
    btnArrow.addEventListener("click", () => {
        btnArrow.classList.toggle("active");
    });
}

if(aboutMeBtn)
{
    aboutMeBtn.addEventListener("click", () => {
        window.location.href = "Dev/PersonalWebsite.html";
    });
}

if(blogBtn)
{
    blogBtn.addEventListener("click", () => {
        window.location.href = "blog.html";
    });
}

function page(url = 'errorPage.html')
{
    window.location.href = url;
}

function addOption(text, url)
{
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.addEventListener("click", () => {
        page(url);
    });

    button.classList.add("option");
    button.textContent = text;

    span.appendChild(button);
    dropdown.appendChild(span);

    dropdown.style.height = `${dropdown.scrollHeight}px`;
}

addOption(projects.miniProject, "MiniProjects/miniProjects.html");
addOption(projects.birthday, "Birthday_gift_site/birthday.html");