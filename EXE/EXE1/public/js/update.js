document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn reload trang

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;

    if (password && password !== confirmPassword) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }

    alert("Cập nhật thông tin thành công!");
});
