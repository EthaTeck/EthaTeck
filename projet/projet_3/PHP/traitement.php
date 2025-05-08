<?php
// Connexion à la base de données (à adapter selon ton serveur local)
$host = 'localhost';
$db = 'portfolio_contact';
$user = 'root';     // par défaut sur XAMPP/MAMP
$pass = '';         // souvent vide en local

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

// Traitement du formulaire
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = htmlspecialchars(trim($_POST['nom']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if ($nom && $email && $message) {
        $stmt = $pdo->prepare("INSERT INTO messages (nom, email, message) VALUES (?, ?, ?)");
        $stmt->execute([$nom, $email, $message]);

        echo "<p>Merci pour votre message, $nom !</p>";
        echo '<a href="index.php">Retour</a>';
    } else {
        echo "<p>Veuillez remplir correctement tous les champs.</p>";
    }
} else {
    header("Location: index.php");
    exit;
}
?>
