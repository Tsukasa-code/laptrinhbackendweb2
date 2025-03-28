
users.forEach((user, index) => {
    let row = `<tr>
        <td>${index + 1}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>
            <a href="update.html?user=${user.username}&email=${user.email}">Edit</a> |
            <a href="view.html?user=${user.username}&email=${user.email}">View</a> |
            <a href="#" onclick="deleteUser(${index})">Delete</a>
        </td>
    </tr>`;
    userList.innerHTML += row;
});
