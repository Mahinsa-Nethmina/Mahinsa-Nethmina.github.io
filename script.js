AOS.init({
duration:1000
})

const toggle = document.getElementById("themeToggle")

toggle.onclick = () => {

document.body.classList.toggle("dark")

}

fetch("https://api.github.com/users/SL-Hydra")

.then(res => res.json())

.then(data => {

document.getElementById("repos").innerText = data.public_repos
document.getElementById("followers").innerText = data.followers
document.getElementById("following").innerText = data.following

})