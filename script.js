document.addEventListener("DOMContentLoaded", () => {
    fetch("db.php")
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById("userList");
            data.forEach(user => {
                const li = document.createElement("li");
                li.textContent = `${user.username} (${user.email})`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
