<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}

// --- Database Config ---
$host = "localhost";
$user = "root";
$pass = "";
$db   = "appointment_system";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("DB Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT id, name, email FROM user");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <style>
    body {font-family: Arial, sans-serif; background: #f5f6fa; padding: 20px;}
    h2 {color: #333;}
    table {width: 100%; border-collapse: collapse; margin-top: 20px;}
    table, th, td {border: 1px solid #ccc;}
    th, td {padding: 10px; text-align: left;}
    th {background: #5f6fff; color: white;}
    .logout {margin-top: 20px; display: inline-block; background: #e74c3c; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none;}
    .logout:hover {background: #c0392b;}
  </style>
</head>
<body>
  <h2>Welcome, <?php echo $_SESSION['user_name']; ?> 🎉</h2>
  <p>Here is the list of all registered users:</p>

  <table>
    <tr>
      <th>ID</th>
      <th>Full Name</th>
      <th>Email</th>

    </tr>
    <?php while ($row = $result->fetch_assoc()) { ?>
      <tr>
        <td><?php echo $row['id']; ?></td>
        <td><?php echo $row['name']; ?></td>
        <td><?php echo $row['email']; ?></td>
      </tr>
    <?php } ?>
  </table>

  <a class="logout" href="logout.php">Logout</a>
</body>
</html>
<?php $conn->close(); ?>
