"use strict";
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let notes = Array();

let barSizes = Array();

let barPositions = Array();

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
    ],
    [
        "halfNoteDotted",
        "triplet"
    ],
    [
        "halfNotePause",
        "triplet",
        "triplet"
    ],
    [
        "halfNotePauseDotted",
        "quarterNotePauseDotted",
        "eighthNotePause"
    ]

];

let distanceToUpperPlus = 70;

let Note = class {
    constructor(whichNote, noteValue, x) {
        this.whichNote = whichNote;
        this.noteValue = noteValue;
        this.x = x;
    }
}

function drawLines() {
    let width = 1100;
    ctx.fillRect(25, 30 + distanceToUpperPlus, width, 1.5);
    ctx.fillRect(25, 40 + distanceToUpperPlus, width, 1.5);
    ctx.fillRect(25, 50 + distanceToUpperPlus, width, 1.5);
    ctx.fillRect(25, 60 + distanceToUpperPlus, width, 1.5);
    ctx.fillRect(25, 70 + distanceToUpperPlus, width, 1.5);
}

function drawTactLine(x = 0) {
    barPositions.push(x);
    ctx.fillRect(25 + x, 30 + distanceToUpperPlus, 1.5, 40);
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
        } else if (notes[notes.length - 1].noteValue == "eighthNote") {
            x = notes[notes.length - 1].x + 70;
        }
    } 
    notes.push(new Note(whichNote, "wholeNote", x));

    let y = (86 - whichNote * 5) + distanceToUpperPlus;
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
        } else if (notes[notes.length - 1].noteValue == "quarterNotePause") {
            x = notes[notes.length - 1].x + 50;
        }
    } 
    notes.push(new Note(whichNote, "halfNote", x));

    let y = (86 - whichNote * 5) + distanceToUpperPlus;
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

    let y = (86 - whichNote * 5) + distanceToUpperPlus;
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

    let y = (86 - whichNote * 5) + distanceToUpperPlus;
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

function drawTriplet() {
    for (let i = 0; i < 3; ++i) {
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
        drawEighthNote(note);
    }

    let lowestY = 36 + distanceToUpperPlus;
    for (let i = 0; i < 3; i++) {
        let y = (86 - notes[notes.length - (i + 1)].whichNote * 5) +
            distanceToUpperPlus;
        if (y < lowestY) {
            lowestY = y;
        }
    }
    ctx.fillRect(notes[notes.length - 3].x + 20, lowestY - 20, 60, 1.5);
    ctx.fillRect(notes[notes.length - 3].x + 20, lowestY - 20, 1.5, 7);
    ctx.fillRect(notes[notes.length - 3].x + 80, lowestY - 20, 1.5, 7);

    ctx.font = "15px Arial";
    ctx.fillText("3", notes[notes.length - 3].x + 47, lowestY - 25); 
}

function drawHalfNotePause(dotted = false) {
    let x = 10;
    if (notes.length > 0) {
        x = notes[notes.length - 1].x + 75;
        if (notes[notes.length - 1].noteValue == "wholeNote") {
            x = notes[notes.length - 1].x + 170;
        }
    } 
    notes.push(new Note(-1, "halfNotePause", x));

    let y = (86 - 7 * 5) + distanceToUpperPlus - 5;
    ctx.fillRect(x, y, 13, 5);

    if (dotted) {
        drawDot(x - 17, y + 5);    
    }

}

function drawQuarterNotePause(dotted = false) {
    let x = 10;
    if (notes.length > 0) {
        x = notes[notes.length - 1].x + 75;
        if (notes[notes.length - 1].noteValue == "wholeNote") {
            x = notes[notes.length - 1].x + 170;
        }
    } 
    notes.push(new Note(-1, "quarterNotePause", x));

    let y = (86 - 7 * 5) + distanceToUpperPlus - 15;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 5, y + 5);
    ctx.lineTo(x, y + 15);
    ctx.lineTo(x + 5, y + 20);
    ctx.lineTo(x, y + 25);
    ctx.lineWidth = 2;
    ctx.stroke();
 

    if (dotted) {
        drawDot(x - 17, y + 15);    
    }

}

function drawEighthNotePause() {
    let x = 10;
    if (notes.length > 0) {
        x = notes[notes.length - 1].x + 75;
        if (notes[notes.length - 1].noteValue == "wholeNote") {
            x = notes[notes.length - 1].x + 170;
        }
    } 
    notes.push(new Note(-1, "eighthNotePause", x));

    let y = (86 - 7 * 5) + distanceToUpperPlus - 5;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 12, y);
    ctx.lineTo(x, y + 15);
    ctx.lineWidth = 2;
    ctx.stroke();
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
        if (notes[i].noteValue != "eighthNote") {
            continue;
        }
        if (notes[i + 1].noteValue != "eighthNote") {
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

        let x1 = notes[start].x;
        let y1 = (86 - notes[start].whichNote * 5) + distanceToUpperPlus;

        let x2 = notes[end].x;
        let y2 = (86 - notes[end].whichNote * 5) + distanceToUpperPlus;
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
            let y = (86 - notes[pairs[i][j]].whichNote * 5) + 
                distanceToUpperPlus;
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
        let whichBar = reWhichBar(count - 1);

        let connectedToBeam = drawBeam(whichBar, count - 1);
        if (connectedToBeam) {
            return;
        }
        let x = elem.x;
        let y = (86 - elem.whichNote * 5) + distanceToUpperPlus;
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
    } else if (notes[notes.length - 1].noteValue == "eighthNote") {
        gap = 50;
    } else if (notes[notes.length - 1].noteValue == "quarterNotePause") {
        gap = 50;
    } else if (notes[notes.length - 1].noteValue == "eighthNotePause") {
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
        case "triplet":
            drawTriplet();
            break;
         case "halfNotePause":
            drawHalfNotePause();
            break;
         case "halfNotePauseDotted":
            drawHalfNotePause(true);
            break;
         case "quarterNotePause":
            drawQuarterNotePause();
            break;
         case "quarterNotePauseDotted":
            drawQuarterNotePause(true);
            break;
         case "eighthNotePause":
            drawEighthNotePause();
            break;
    }
}

function drawRyhtm(rhythm) {
    let length = rhythms[rhythm - 1].length;
    rhythms[rhythm - 1].forEach( elem => {
        if (elem == "triplet") {
            length += 2;
        }
    });
    barSizes.push(length);
    rhythms[rhythm - 1].forEach( elem => {
        drawNote(elem);
    });
    drawLastTactLine();
}

function drawChord(x) {
    x += 25;
    ctx.font = "15px Arial";
    let chordString = "";
    let randomChordSize = 4;
    let randomNum = Math.floor(Math.random() * randomChordSize) + 1;
    switch (randomNum) {
        case 1:
            chordString = "Dmin7";
            break;
        case 2:
            chordString = "G7";
            break;
        case 3:
            chordString = "Cmaj";
            break;
        case 4:
            chordString = "Bhd";
            break;
    }
    ctx.fillText(chordString, x, 40); 
}

function drawRandomChords() {
    let count = 0;
    barPositions.forEach( elem => {
        switch (count) {
            case 0:
                drawChord(elem);
                break;
            case 4:
                drawChord((elem - barPositions[count - 1]) / 2 + 
                    barPositions[count - 1]);
                break;
            default:
                if (count > 4) {
                    break;
                }
                drawChord((elem - barPositions[count - 1]) / 2 + 
                    barPositions[count - 1]);
                drawChord(elem);
                break;
        }
        count++;
    });
}

drawLines();
drawTactLine();

for (let i = 0; i < 4; ++i) {
    let randomNumSize = rhythms.length;
    let randomNum = Math.floor(Math.random() * randomNumSize) + 1;
    drawRyhtm(randomNum);
}
drawBeamOrFlag();
drawTactLine(1098);

drawRandomChords();
