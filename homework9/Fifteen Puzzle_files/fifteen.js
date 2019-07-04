$(function(){
    
    init = function() {
        var puzzleArea = document.getElementById('puzzlearea');
        var divs = puzzleArea.getElementsByTagName("div");

        // initialize each piece
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];

            var col =(i % 4)+1;
            var row = Math.floor(i / 4)+1;
            $(div).attr("id", row+'_'+col)+1;

            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;
            $(div).attr("id", row+'_'+col);
            
            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("Fifteen Puzzle_files/background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

            // store x and y for later
            div.x = x;
            div.y = y; 
        }
    };
    
    
    
    $(document).on("click", "#puzzlearea .movablepiece", function(){
        var emptyTile = getLocation(findEmptyTile());
        var current = getLocation($(this).attr("id"));
        
        console.log(current);

        console.log("move " + $(this).attr("movableto"));
        moveTile(current,$(this).attr("movableto"));
    });
    
    $("#shufflebutton").click(function(){
        shuffle();
    });

    init();
    movableTiles();
});

function findEmptyTile()
{
    for(var i = 1; i <= 4; i++)
    {
        for (var j = 1; j <= 4; j++)
        {
            var location = i+"_"+j;
            if($("#"+location).length < 1)
                return location;
        }
    }
}

function movableTiles()
{
    var emptyTile = getLocation(findEmptyTile());
    
    var movable = {
        mov1: {
            row: (emptyTile.row + 1),
            col: (emptyTile.col),
            movableTo: "up"
        },
        mov2:{
            row: (emptyTile.row - 1),
            col: (emptyTile.col),
            movableTo: "down"
        },
        mov3: {
            row: (emptyTile.row),
            col: (emptyTile.col +1),
            movableTo: "left"
        },
        mov4: {
            row: (emptyTile.row),
            col: (emptyTile.col -1),
            movableTo: "right"
        }
    }
    
    var real_movable = Array();
    
    //refresh
    $("#puzzlearea div").removeClass("movablepiece");
    $("#puzzlearea div").removeClass("movableto", "");
    
    for(var element in movable) {
        var name = movable[element].row +"_"+ movable[element].col;
        if($("#"+name).length>0){
            real_movable.push(movable[element]);
            
            $("#"+name).addClass("movablepiece");
            $("#"+name).attr("movableto", movable[element].movableTo);
        }
    };
    
    console.log(real_movable);
    return real_movable;
}

function getLocation(string)
{
    var row = parseInt(string.substr(0,1));
    var col = parseInt(string.substr(2,1));
    return {
        row: row,
        col: col
    }
}

function moveTile(location, direction)
{
    var currentTile = $("#"+location.row+"_"+location.col);
    console.log(currentTile);
    
    if(direction == "up") {
        location.row--;
        currentTile.css("top", (location.row-1)*100);
    }
    else if(direction == "down"){
        location.row++;
        currentTile.css("top", (location.row-1)*100);
    }
    else if(direction == "left")
    {
        location.col--;
        currentTile.css("left", (location.col-1)*100)
    }
    else if(direction == "right")
    {
        location.col++;
        currentTile.css("left", (location.col-1)*100)
    }
    
    console.log(location);
    currentTile.attr("id", location.row+"_"+location.col);
    movableTiles()
}

function shuffle()
{
    for(var i = 0; i< 20; i++) {
        var movable = movableTiles();
        var randTile = movable[Math.floor(Math.random() * movable.length)];
        var location = randTile.row+"_"+randTile.col;
        moveTile(randTile,$("#" + location).attr("movableto"));
    }
}

