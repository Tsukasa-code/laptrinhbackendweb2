document.addEventListener("DOMContentLoaded", function() {
    const userList = document.getElementById("userList");

    // Dữ liệu giả lập
    const users = [
        { username: "UPVH", email: "ATJW@gmail.com" },
        { username: "IFUK", email: "KULB@gmail.com" },
        { username: "DZZQ", email: "ERNB@gmail.com" },
        { username: "NJYY", email: "ROIF@gmail.com" },
        { username: "YUMG", email: "KITN@gmail.com" },
        { username: "WZSU", email: "CVTL@gmail.com" },
        { username: "WXFQ", email: "MIUZ@gmail.com" },
        { username: "XZOR", email: "YZLV@gmail.com" },
        { username: "HGGO", email: "OYYX@gmail.com" },
        { username: "PXZX", email: "YSML@gmail.com" }
    ];

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
});

// Hàm xóa user
function deleteUser(index) {
    alert("Bạn có chắc muốn xóa người dùng này?");
}
