// Backend base URL
const API_BASE = "https://backend-uvjh.onrender.com/";
fetch("https://your-backend-name.onrender.com/api/data")

// Save token after login
function saveAuth(data) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);
}

// Logout
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "login.html";
}

// Check authentication
function requireAuth(allowedRoles = []) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    alert("Unauthorized access");
    window.location.href = "login.html";
  }
}

