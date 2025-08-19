<?php
// --- CORS headers ---
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// --- Database Config ---
$host = "localhost";   // DB host
$user = "root";        // DB username
$pass = "";            // DB password
$db   = "appointment_system"; // DB name

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "DB Connection failed"]);
    exit;
}

// --- Get JSON input ---
$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['pass'])) {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
    exit;
}

$name     = $conn->real_escape_string($data['name']);
$email    = $conn->real_escape_string($data['email']);
$password = password_hash($data['pass'], PASSWORD_BCRYPT);

// --- Check if email already exists ---
$check = $conn->query("SELECT * FROM users WHERE email='$email'");
if ($check->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "Email already registered"]);
    exit;
}

// --- Insert into database ---
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
if ($conn->query($sql)) {
    echo json_encode(["status" => "success", "message" => "Registration successful"]);
} else {
    echo json_encode(["status" => "error", "message" => "Database error: " . $conn->error]);
}

$conn->close();
