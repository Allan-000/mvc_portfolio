<!doctype html>
<html lang="en">
<head>
    <?php
    include_once ('../Templates/defaults/head.php');
    ?>
</head>
<body>
<?php
$title="";
$request = $_SERVER['REQUEST_URI'];
$params = explode("/", $request);
switch($params[1]){
    case 'home':
    $title=' | home';
    include('../Templates/jumbotron.php');
    include ('../Templates/defaults/navbar.php');
    include_once ('../Templates/home.php');
    include_once ('../Templates/defaults/footer.php');
    break;
    case 'projecten':
        $title= ' |projecten';
        include('../Templates/jumbotron.php');
        include ('../Templates/defaults/navbar.php');
        include_once ('../Templates/projecten.php');
        include_once ('../Templates/defaults/footer.php');
        break;
    case 'vaardigheden':
        $title=' |vaardigheden';
        include_once ('../Templates/jumbotron.php');
        include_once ('../Templates/defaults/navbar.php');
        include_once ('../Templates/vaardigheden.php');
        include_once ('../Templates/defaults/footer.php');
        break;
    case 'studie':
        $title=' |studie';
        include_once ('../Templates/jumbotron.php');
        include_once ('../Templates/defaults/navbar.php');
        include_once ('../Templates/studie.php');
        include_once ('../Templates/defaults/footer.php');
        break;
    case 'contact';
        include_once ('../Templates/jumbotron.php');
        include_once ('../Templates/defaults/navbar.php');
        include_once ('../Templates/contact.php');
        include_once ('../Templates/defaults/footer.php');
        break;
    default:
        $title=' | home';
        include('../Templates/jumbotron.php');
        include ('../Templates/defaults/navbar.php');
        echo "<h2 class='p-4 text-center'>Error 404 page not found</h2>";
        include_once ('../Templates/defaults/footer.php');
        break;
}






function getTitle(){
    global $title;
    echo $title;
}
?>

</body>
</html>