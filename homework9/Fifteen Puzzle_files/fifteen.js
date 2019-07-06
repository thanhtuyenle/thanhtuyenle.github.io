$(function () {
    const puzzlearea = "#puzzlearea";
    const div = "div";
    const puzzlepiece = "puzzlepiece";
    let blankX = 0;
    let blankY = 0;
    let moved = [];
    init = (function () {
        $(puzzlearea).children(div).each(
            function (i, value) {

                // calculate x and y for this piece
                let x = ((i % 4) * 100);
                let y = (Math.floor(i / 4) * 100);

                // set basic style and background
                $(this).addClass(puzzlepiece);
                $(this).css({
                    "left": `${x}px`,
                    "top": `${y}px`,
                    "backgroundImage": 'url("background.jpg")',
                    "backgroundPosition": `-${x}px -${y}px`
                });
                // store x and y for later
                this.x = x;
                this.y = y;
            }
        );
        blankX = 300;
        blankY = 300;
    })();

    $(".puzzlepiece").mouseover(function () {
        let newX = this.x + 100;
        let newY = this.y;
        let canMove = false;

        if (newX < 400
            && newX === blankX
            && newY === blankY) {
            canMove = true;
        }
        if (!canMove) {
            newX = this.x - 100;
            newY = this.y;
            if (parseInt(newX) >= 0
                && newX === blankX
                && newY === blankY) {
                canMove = true;
            }
        }
        if (!canMove) {
            newY = this.y - 100;
            newX = this.x;
            if (parseInt(newY) >= 0
                && newX === blankX
                && newY === blankY) {
                canMove = true;
            }
        }
        if (!canMove) {
            newY = this.y + 100;
            newX = this.x;
            if (parseInt(newY) < 400
                && newX === blankX
                && newY === blankY) {
                canMove = true;
            }
        }

        if (canMove) {
            this.newX = newX;
            this.newY = newY;
            $(this).addClass("movablepiece");
        }
    });

    $(".puzzlepiece").mouseout(function () {
        this.newX = -1;
        this.newY = -1;
        $(this).removeClass("movablepiece");
    });

    $(".puzzlepiece").click(function () {
        if (this.newX === -1 || this.newY === -1) {
            return;
        }
        $(this).css({
            "left": `${this.newX}px`,
            "top": `${this.newY}px`
        });
        blankX = this.x;
        blankY = this.y;
        this.x = this.newX;
        this.y = this.newY;
    });

    $("#shufflebutton").click(function () {
        let i = 0;
        while (i < 3) {
            shuffle();
            i++;
            moved = [];
        }
    });

    function shuffle() {
        while (Object.keys(moved).length < 15) {
            let r = $(puzzlearea).children(div).filter(function (i, v) {
                let neX = this.x - 100;
                let poX = this.x + 100;
                let neY = this.y - 100;
                let poY = this.y + 100;
                let c1 = neX >= 0 && neX === blankX && this.y == blankY;
                let c2 = poX < 400 && poX === blankX && this.y === blankY;
                let c3 = neY >= 0 && neY === blankY && this.x === blankX;
                let c4 = poY < 400 && poY === blankY && this.x === blankX;
                let c5 = (moved[$(this).text()]) === undefined;
                return (c1 || c2 || c3 || c4) && c5;
            });
            if ($(r).length === 0) {
                break;
            }
            let arr = jQuery.map(r, function (a) {
                return $(a).text();
            });
            while (arr.length > 0) {
                let ran = getRandomInt(arr.length);
                let t = r.filter(function (i, v) {
                    return $(this).text() === arr[ran];
                });
                let removeItem = arr[ran];
                if (moved[arr[ran]] === undefined) {
                    $(t[0]).trigger('mouseover');
                    $(t[0]).trigger('click');
                    $(t[0]).trigger('mouseout');
                    moved[arr[ran]] = "";
                    break;
                }
                arr = jQuery.grep(arr, function (value) {
                    return value != removeItem;
                });
            }
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
});