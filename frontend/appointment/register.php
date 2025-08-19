<?php
// --- Database Config ---
$host = "localhost";
$user = "root";        // default for XAMPP/WAMP
$pass = "";            // default empty password
$db   = "appointment_system";

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("<p class='error'>Connection failed: " . $conn->connect_error . "</p>");
}

// Get form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name  = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Check if email already exists
    $check = $conn->query("SELECT * FROM user WHERE email='$email'");
    if ($check->num_rows > 0) {
        echo "<p class='error'>Email already registered!</p>";
    } else {
        $sql = "INSERT INTO user (name, email, password) VALUES ('$name', '$email', '$password')";
        if ($conn->query($sql) === TRUE) {
            echo "<p class='message'>Registration successful!</p>";
        } else {
            echo "<p class='error'>Error: " . $conn->error . "</p>";
        }
    }
}
$conn->close();
?>
