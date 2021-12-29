<!doctype html>
<html lang="en">
<head>
    <?php
    include_once ('../Templates/defaults/head.php');
    ?>
</head>
<body>
<?php
$title="Portfolio";
$titleSuffix="";
$request = $_SERVER['REQUEST_URI'];
$params = explode("/", $request);
switch($params[1]){
    case 'home':
        $titleSuffix=' | home';
        include('../Templates/jumbotron.php');
        include ('../Templates/defaults/navbar.php');
        include_once ('../Templates/home.php');
        include_once ('../Templates/defaults/footer.php');
    break;
    case 'projecten':
        $titleSuffix= ' | projecten';
        include('../Templates/jumbotron.php');
        include ('../Templates/defaults/navbar.php');
        include_once ('../Templates/projecten.php');
        include_once ('../Templates/defaults/footer.php');
        break;
    case 'vaardigheden':
        $titleSuffix=' |vaardigheden';
        include_once ('../Templates/jumbotron.php');
        include_once ('../Templates/defaults/navbar.php');
        include_once ('../Templates/vaardigheden.php');
        include_once ('../Templates/defaults/footer.php');
        break;
    case 'studie':
        $titleSuffix=' |studie';
        include_once ('../Templates/jumbotron.php');
        include_once ('../Templates/defaults/navbar.php');
        include_once ('../Templates/studie.php');
        include_once ('../Templates/defaults/footer.php');
        break;
    case 'contact';
        $titleSuffix= 'contact';
        include_once ('../Templates/jumbotron.php');
        include_once ('../Templates/defaults/navbar.php');
        include_once ('../Templates/contact.php');
        include_once ('../Templates/defaults/footer.php');
        break;
    case 'zuzu_restaurant':
        $titleSuffix=' |zuzu sushi';
        include_once ('../Templates/projects/zuzu_restaurant/public/index.php');
        break;
    case '':
        $titleSuffix=' | home';
        include('../Templates/jumbotron.php');
        include ('../Templates/defaults/navbar.php');
        include_once ('../Templates/home.php');
        include_once ('../Templates/defaults/footer.php');
        break;
    default:
        $titleSuffix=' | niet gevonden';
        include('../Templates/jumbotron.php');
        include ('../Templates/defaults/navbar.php');
        echo "<h2 class='p-4 text-center'>Pagina niet gevonden</h2>";
        include_once ('../Templates/defaults/footer.php');
        break;
}

function getTitle() {
    global $title, $titleSuffix;
    return $title . $titleSuffix;
}
?>
<script src="/JS/index.js"></script>
<script src="/JS/bootstrap.js"></script>
</body>
</html>