<!doctype html>
<html lang="en">
<head>
    <?php
    include_once ('../Templates/defaults/head.php');

    include ("../Modules/databse_connection.php");
    global $pdo;
    $query=$pdo->prepare("SELECT * FROM project");
    $query->execute();
    $projects=$query->fetchAll(PDO::FETCH_CLASS);
    ?>
</head>
<body>
    <section id="projecten" class="container">
        <h2 class="text-center p-5 themeable-text">Projecten</h2>
        <?php
        echo "<div class='row'>";
        foreach ($projects as $project){
            echo "<card class='col-lg-6 container'>";
            echo "<h3 class=' text-center themeable-text'>$project->name </h3>";
            echo "<img src='./img/$project->picture' class='mx-auto d-block img-fluid w-75 mw-75 project-img'>";
            echo "<h5 class='text-center themeable-text pt-5'>$project->description</h5>";
            if($project->github_link){
                echo "<a class='p-5 ' href='$project->github_link' target='_blank'><h5 class='text-center'> De github link naar de repository van $project->name project</h5></a>";
            }
            else if($project->page_link){
                echo "<a class='p-5' href='$project->page_link' target='_blank'><h5 class='text-center'>De link naar de $project->name project</h5> </a>";
            }
            echo "</card>";
        }
        echo "</div>";
        ?>
    </section>
    <hr>
</body>
</html>

