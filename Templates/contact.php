<!doctype html>
<html lang="en">
<head>
    <?php
    include_once ('../Templates/defaults/head.php');
    ?>
</head>
<body>
<section id="contact" class="container">
    <h2 class="text-center py-5 themeable-text">Contact</h2>
    <form>
        <label class="name-label themeable-text">Naam :</label>
        <input class="name-input" type="text" max="40">
        <label class="email-label themeable-text">e-mail adress</label>
        <input class="email-input" type="text" max="50">
        <label class="topic-label themeable-text">Jouw onderwerp / vraag</label>
        <textarea class="textarea" maxlength="500"></textarea>
        <input class="btn-primary submit my-5" type="submit">
    </form>
</section>
</body>
</html>
<hr>