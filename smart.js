<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet">
 </head>
<body>
    <p style="font-size:30px" class="main-title">Difficult mode!</p>
    <button class="restart" id="restart">Restart Game</button>
   
    <div id="menu">
        <p id='pW'>Player:0</p>
        <p id='cW'>Opponent:0</p>
    </div>

    <div class='board'>
        <div class="box clear"></div>
        <div class="box clear"></div>
        <div class="box clear"></div>
        <div class="box clear"></div>
        <div class="box clear"></div>
        <div class="box clear"></div>
        <div class="box clear"></div>
        <div class="box clear"></div>
        <div class="box clear"></div>
        <div id='victory' class="hidden">
            <p>YOU WON!!!</p>
        </div>
        <div id='defeat' class="hidden">
            <p>YOU LOST :(</p>
        </div>
        <div id='tie' class="hidden">
            <p>It's a tie!</p>
        </div>
    </div>
    <button class="restart"id="changeDif"><a href="menu.html">Change difficulty</a></button>
    <script src='smart.js'></script>

</body>
</html>
