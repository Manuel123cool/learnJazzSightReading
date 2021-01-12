"use strict";
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let notes = Array();

let barSizes = Array();

let rhythms = [
    [
        "wholeNote"
    ],
    [
        "halfNote",
        "halfNote"
    ],
    [
        "quarterNote",
        "quarterNote",
        "quarterNote",
        "quarterNote"
    ],
    [
        "halfNote",
        "quarterNote",
        "quarterNote"
    ],
    [
        "halfNoteDotted",
        "quarterNote"
    ],
    [
        "eighthNote",
        "eighthNote",
        "eighthNote",
        "eighthNote",
        "halfNote"
    ]
];

let Note = class {
    constructor(whichNote, noteValue, x) {
        this.whichNote = whichNote;
        this.noteValue = noteValue;
        this.x = x;
    }
}

function drawLines() {
    let width = 1100;
    ctx.fillRect(25, 30, width, 1.5);
    ctx.fillRect(25, 40, width, 1.5);
    ctx.fillRect(25, 50, width, 1.5);
    ctx.fillRect(25, 60, width, 1.5);
    ctx.fillRect(25, 70, width, 1.5);
}

function drawTactLine(y = 0) {
    ctx.fillRect(25 + y, 30, 1.5, 40);
} 

function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x + 40, y, 2, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
}

function drawWholeNote(whichNote) {
    let x = 10;
    if (notes.length > 0) {
        x = notes[notes.length - 1].x + 150;
        if (notes[notes.length - 1].noteValue == "halfNote") {
            x = notes[notes.length - 1].x + 70;
        } else if (notes[notes.length - 1].noteValue == "quarterNote") {
            x = notes[notes.length - 1].x + 70;
        }
    } 
    notes.push(new Note(whichNote, "wholeNote", x));

    let y = 86 - whichNote * 5;
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.arc(x + 25, y, 5, 0, 2 * Math.PI);
    ctx.stroke(); 


    if (whichNote == 1) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
    } else if (whichNote == 13) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
    } else if (whichNote == 14) {
        ctx.fillRect(x + 15, y + 6, 20, 1.5);
    } else if (whichNote == 15) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
        ctx.fillRect(x + 15, y + 9, 20, 1.5);
    }
}

function drawHalfNote(whichNote, dotted = false) {
    let x = 10;
    if (notes.length > 0) {
        x = notes[notes.length - 1].x + 75;
        if (notes[notes.length - 1].noteValue == "wholeNote") {
            x = notes[notes.length - 1].x + 170;
        }
    } 
    notes.push(new Note(whichNote, "halfNote", x));

    let y = 86 - whichNote * 5;
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.arc(x + 25, y, 5, 0, 2 * Math.PI);
    ctx.stroke(); 


    if (whichNote == 1) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
    } else if (whichNote == 13) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
    } else if (whichNote == 14) {
        ctx.fillRect(x + 15, y + 6, 20, 1.5);
    } else if (whichNote == 15) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
        ctx.fillRect(x + 15, y + 9, 20, 1.5);
    }


    if (whichNote > 7) {
        ctx.fillRect(x + 20, y, 1.5, 25);
    } else {
        ctx.fillRect(x + 30, y - 25, 1.5, 25);
    }

    if (dotted) {
        drawDot(x, y);    
    }
}

function drawQuarterNote(whichNote, dotted = false) {
    let x = 10;
    if (notes.length > 0) {
        x = notes[notes.length - 1].x + 75;
        if (notes[notes.length - 1].noteValue == "wholeNote") {
            x = notes[notes.length - 1].x + 170;
        }
    } 
    notes.push(new Note(whichNote, "quarterNote", x));

    let y = 86 - whichNote * 5;
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.arc(x + 25, y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke(); 


    if (whichNote == 1) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
    } else if (whichNote == 13) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
    } else if (whichNote == 14) {
        ctx.fillRect(x + 15, y + 6, 20, 1.5);
    } else if (whichNote == 15) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
        ctx.fillRect(x + 15, y + 9, 20, 1.5);
    }


    if (whichNote > 7) {
        ctx.fillRect(x + 20, y, 1.5, 25);
    } else {
        ctx.fillRect(x + 30, y - 25, 1.5, 25);
    }

    if (dotted) {
        drawDot(x, y);    
    }
}

function drawEighthNote(whichNote, dotted = false) {
    let x = 10;
    if (notes.length > 0) {
        x = notes[notes.length - 1].x + 25;
        if (notes[notes.length - 1].noteValue == "wholeNote") {
            x = notes[notes.length - 1].x + 170;
        } else if (notes[notes.length - 1].noteValue == "quarterNote") {
            x = notes[notes.length - 1].x + 50;
        } else if (notes[notes.length - 1].noteValue == "halfNote") {
            x = notes[notes.length - 1].x + 50;
        }
 
    } 
    notes.push(new Note(whichNote, "eighthNote", x));

    let y = 86 - whichNote * 5;
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.arc(x + 25, y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke(); 


    if (whichNote == 1) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
    } else if (whichNote == 13) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
    } else if (whichNote == 14) {
        ctx.fillRect(x + 15, y + 6, 20, 1.5);
    } else if (whichNote == 15) {
        ctx.fillRect(x + 15, y - 1, 20, 1.5);
        ctx.fillRect(x + 15, y + 9, 20, 1.5);
    }

    if (dotted) {
        drawDot(x, y);    
    }

}

function reWhichBar(count) {
    let myCount = 0;
    for (let i = 0; i < barSizes.length; i++) {
        for (let j = 0; j < barSizes[i]; j++) {
            if (count == myCount) {
                return i + 1; 
            }
            myCount++;
        }
    }
}

function drawBeam(whichBar, whichNote) {
    let from = 0; 
    let to = 0;

    let myCount = 0;
    for (let i = 0; i < barSizes.length; i++) {
        if (whichBar - 1 == i) {
            from = myCount + 1;    
            to = myCount + barSizes[i];
            break;
        }
        myCount += barSizes[i];
    }

    let pairs = Array(); 
    for (let i = from - 1; i < to - 1; ++i) {
        if (notes[i + 1].noteValue != "eighthNote") {
            continue;
        } else if (notes[i + 1].noteValue != "eighthNote") {
            continue;
        }
        if (i + 1 > to) {
            continue;
        }
        if (notes[i].whichNote < 7 && notes[i + 1].whichNote > 7) {
           continue; 
        }
        if (notes[i].whichNote > 7 && notes[i + 1].whichNote < 7) {
           continue; 
        }

        let range = 2;
        let distance = notes[i].whichNote - notes[i + 1].whichNote;
        if (distance < 0) {
            distance *= -1;    
        }
        if (distance < range) {
            let count = 0;
            let alreadyPairFound = false;
            pairs.forEach( elem => {
                elem.forEach( elem1 => {
                    if (elem1 == i) {
                        pairs[count].push(i + 1);
                        alreadyPairFound = true;
                    } else if (elem1 == i + 1) {
                        pairs[count].push(i);
                        alreadyPairFound = true;
                    }
                });
                count++;
            });
            if (!alreadyPairFound) {
                let array = [i, i + 1];
                pairs.push(array);
            }
        }
    }

    let reValue = false;
    for (let i = 0; i < pairs.length; ++i) {
        let start = pairs[i][0]; 
        let end = pairs[i][pairs[i].length - 1]; 

        let up = false;
        let down = false;
        for (let j = 0; j < pairs[i].length; ++j) {
            if (pairs[i][j] == whichNote) {
                reValue = true;
            }
            if (notes[pairs[i][j]].whichNote < 7) {
                up = true;
            } else if (notes[pairs[i][j]].whichNote > 7) {
                down = true;
            }
        }
        if (down == false && up == false) {
            up = true; 
        }

        console.log("which bar: " + whichBar + " up: " + up);
        let x1 = notes[start].x;
        let y1 = 86 - notes[start].whichNote * 5;

        let x2 = notes[end].x;
        let y2 = 86 - notes[end].whichNote * 5;
        if(up) {
            ctx.beginPath();
            ctx.moveTo(x1 + 30, y1 - 25);
            ctx.lineTo(x2 + 30, y2 - 25);
            ctx.lineWidth = 2.5;
            ctx.stroke();
       } else if(down) {
            ctx.beginPath();
            ctx.moveTo(x1 + 20, y1 + 25);
            ctx.lineTo(x2 + 20, y2 + 25);
            ctx.lineWidth = 2.5;
            ctx.stroke();
        }
        for (let j = 0; j < pairs[i].length; j++) {
            let x = notes[pairs[i][j]].x;
            let y = 86 - notes[pairs[i][j]].whichNote * 5;
            if (down) {
                ctx.fillRect(x + 20, y, 1.5, 25);
            } if (up) {
                ctx.fillRect(x + 30, y - 25, 1.5, 25);
            }
 
        }
    }
    return reValue;
}

function drawBeamOrFlag() {
    let count = 0;   
    notes.forEach( elem => { 
        count++;
        if (elem.noteValue != "eighthNote") {
            return;
        }
        let whichBar = reWhichBar(count);

        let connectedToBeam = drawBeam(whichBar, count - 1);
        if (connectedToBeam) {
            return;
        }
        let x = elem.x;
        let y = 86 - elem.whichNote * 5;
        if (elem.whichNote > 7) {
            ctx.fillRect(x + 20, y, 1.5, 25);

            ctx.beginPath();
            ctx.moveTo(x + 20, y + 25);
            ctx.lineTo(x + 30, y + 7);
            ctx.stroke();
        } else {
            ctx.fillRect(x + 30, y - 25, 1.5, 25);

            ctx.beginPath();
            ctx.moveTo(x + 30, y - 25);
            ctx.lineTo(x + 40, y - 7);
            ctx.stroke();
        }
    });
}

function drawLastTactLine() {
    let gap = 150;
    if (notes[notes.length - 1].noteValue == "halfNote") {
        gap = 50;
    } else if (notes[notes.length - 1].noteValue == "quarterNote") {
        gap = 50;
    }
    let x = notes[notes.length - 1].x + gap;
    drawTactLine(x - 15);
}

function drawNote(noteValue) {
    let note = Math.floor(Math.random() * 15) + 1;
    let range = 7;
    if (notes.length > 0) {
        let notInRange = true;
        while (notInRange) {
            note = Math.floor(Math.random() * 15) + 1;
            let distance = notes[notes.length - 1].whichNote - note;
            if (distance < 0) {
                distance *= -1;    
            }
            if (distance < range) {
                notInRange = false;
            }
        }
    }
    switch (noteValue) {
        case "wholeNote":
            drawWholeNote(note);
            break;
        case "halfNote":
            drawHalfNote(note);
            break;
        case "quarterNote":
            drawQuarterNote(note);
            break;
         case "eighthNote":
            drawEighthNote(note);
            break;
        case "halfNoteDotted":
            drawHalfNote(note, true);
            break;
        case "quarterNoteDotted":
            drawQuarterNote(note, true);
            break;
 
    }
}

function drawRyhtm(rhythm) {
    barSizes.push(rhythms[rhythm - 1].length);
    rhythms[rhythm - 1].forEach( elem => {
        drawNote(elem);
    });
    drawLastTactLine();
}

drawLines();
drawTactLine();
drawTactLine(1098);

drawRyhtm(4);
drawRyhtm(6);
drawRyhtm(6);
drawRyhtm(6);

drawBeamOrFlag();
drawLastTactLine();
