document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn reload trang

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "123456") {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html"; // Chuyển hướng sau khi đăng nhập
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
});
