<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP versus Javascript</title>
</head>
<body>
    <h2>Php versus Javascript</h2>
    <p>Om de naam te veranderen moeten we de hele HTML pagina opnieuw laden</p>
    <?php
        echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!';
    ?>
</body>
</html>