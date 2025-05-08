<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Contact - PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section>
        <div>
            <h1>Formulaire de contact</h1>
            <form method="POST" action="traitement.php">
                <input type="text" name="nom" placeholder="Votre nom" required>
                <input type="email" name="email" placeholder="Votre email" required>
                <textarea name="message" placeholder="Votre message" rows="6" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
        <div>
            <h2>Messages reçu</h2>
        </div>
    </section>
</body>
</html>
