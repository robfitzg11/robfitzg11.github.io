var bitmojiSpeed = random(1,5);
var frogSpeed = random(1,5);
var bunnySpeed = random(1,5);
var bitmojiX = -95;
var bitmojiY = 10;
var f = createFont("serif");
var eyeSize = 50;
var tooth = 20;
var bunnyX = -104;
var bunnyY = 252;
var frogX = 0;
var frogY = 200;

draw = function() {

background(184, 236, 255);
//shirt
fill (207, 35, 35);
rect(bitmojiX+14, bitmojiY+113, 177, 18, 0);

// rightShoulder
arc(bitmojiX+144, bitmojiY+115, 96, -49, 3, 99);

// leftShoulder
arc(bitmojiX+62, bitmojiY+115, 96, -49, 90, 181);

// chest
noStroke ();
rect(bitmojiX+55, bitmojiY+92, 100, 23, 31);
rect(bitmojiX+13, bitmojiY+111, 179, 50, 5);

// ears
fill(250, 207, 147);
stroke (48,29, 0);

ellipse(bitmojiX+52, bitmojiY+50, 20, 31);
ellipse(bitmojiX+148, bitmojiY+50, 20, 31);

// neck
fill(250, 207, 147);
strokeWeight (5);
stroke(168, 0, 14);
ellipse(bitmojiX+100, bitmojiY+83, 75, 70);

// chain
stroke(230, 186, 53);
noFill();
ellipse(bitmojiX+100, bitmojiY+100, 60, 95);

// face
fill(250, 207, 147);
strokeWeight(3);
stroke (48,29, 0);
ellipse(bitmojiX+100, bitmojiY+50, 95, 115);

// nose
strokeWeight(2);
stroke(0, 0, 0);
line (bitmojiX+92,bitmojiY+61,bitmojiX+96, bitmojiY+37);
line (bitmojiX+92,bitmojiY+61,bitmojiX+103, bitmojiY+61);

// leftEye
strokeWeight(1);
fill (255, 255, 255);
ellipse(bitmojiX+80, bitmojiY +38, 16, 10);

// rightEye
ellipse(bitmojiX+117, bitmojiY +38, 16, 10);

// leftPupil
fill (15, 102, 10);
ellipse(bitmojiX+80, bitmojiY +38, 7, 7);
fill (0, 0, 0);
ellipse(bitmojiX+80, bitmojiY +38, 3, 3);

// rightPupil
fill (15, 102, 10);
ellipse(bitmojiX+117, bitmojiY +38, 7, 7);
fill (0, 0, 0);
ellipse(bitmojiX+117, bitmojiY +38, 3, 3);

// hat
strokeWeight(8);
stroke(1, 6, 66);
fill (1, 6, 66);
arc(bitmojiX+100,bitmojiY+20, 83, 92, -179, 0);
line(bitmojiX+60,bitmojiY+20,bitmojiX+63,bitmojiY+27);
line(bitmojiX+133,bitmojiY+24,bitmojiX+141,bitmojiY+20);
fill(250, 207, 147);
stroke(2, 6, 56);
arc(bitmojiX+98, bitmojiY+34, 71, 60, -162, -18);
textFont (f, 25);
fill (235, 12, 12);
text ("B",bitmojiX+92,bitmojiY+-6);

// eyebrows
strokeWeight(4);
stroke (48,29, 0);
line(bitmojiX+122,bitmojiY+26,bitmojiX+108,bitmojiY+28);
line(bitmojiX+74,bitmojiY+26,bitmojiX+89,bitmojiY+28);
line(bitmojiX+122,bitmojiY+26,bitmojiX+126,bitmojiY+28);
line(bitmojiX+74,bitmojiY+26,bitmojiX+69,bitmojiY+29);

//beard
strokeWeight(1);
fill(48, 29, 0);
line (bitmojiX+126,bitmojiY+85,bitmojiX+149, bitmojiY+64);
line (bitmojiX+74,bitmojiY+85,bitmojiX+51, bitmojiY+64);
line (bitmojiX+74,bitmojiY+85,bitmojiX+78, bitmojiY+95);
line (bitmojiX+126,bitmojiY+85,bitmojiX+122, bitmojiY+95);
arc(bitmojiX+100, bitmojiY+84, 59, -47, 230, 310);

stroke(48,29, 0);
strokeWeight(06);
line (bitmojiX+64,bitmojiY+85,bitmojiX+81, bitmojiY+100);
line (bitmojiX+132,bitmojiY+85,bitmojiX+119, bitmojiY+100);
line (bitmojiX+58,bitmojiY+69,bitmojiX+74, bitmojiY+88);
line (bitmojiX+143,bitmojiY+69,bitmojiX+126, bitmojiY+88);
arc(bitmojiX+114, bitmojiY+69, 57, -59, 290, 355);
arc(bitmojiX+83, bitmojiY+69, 49, 59, 101, 170);

// beardLineup
stroke(250, 207, 147);
line(bitmojiX+81,bitmojiY+94,bitmojiX+84,bitmojiY+85);
line(bitmojiX+140,bitmojiY+66,bitmojiX+116,bitmojiY+85);
strokeWeight(10);
line(bitmojiX+61,bitmojiY+64,bitmojiX+83,bitmojiY+81);
line(bitmojiX+132,bitmojiY+63,bitmojiX+117,bitmojiY+74);
fill(250, 207, 147);
arc(bitmojiX+76, bitmojiY+67, 42, -59, 290, 355);
arc(bitmojiX+124, bitmojiY+67, 42, 59, 108, 149);

// mouth
fill(250, 207, 147);
stroke (56, 0, 0);
strokeWeight(2);
arc(bitmojiX+100, bitmojiY+62, 63, -40, 230, 310);

// moustache
strokeWeight(6);
stroke(48,29, 0);
line(bitmojiX+100,bitmojiY+70,bitmojiX+78,bitmojiY+72);
line(bitmojiX+100,bitmojiY+70,bitmojiX+121,bitmojiY+72);

// initials
textSize (16);
text ("RF",bitmojiX+138,bitmojiY+153);

// Frog

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(frogX, frogY, 200, 100); // face
ellipse(frogX - 50, frogY - 50, 40, 40); // left eye socket
ellipse(frogX + 50, frogY - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(frogX - 50, frogY - 50, 30, 30); // left eyeball
ellipse(frogX + 50, frogY - 50, 30, 30); // right eyeball

fill(0, 0, 0); // black pupils
rect(frogX - 50, frogY - 50, 10, 10); // left pupil
rect(frogX + 50, frogY - 50, 10, 10); // right pupil

ellipse(frogX+0, frogY+0, 130, 70); // mouth

// bunny
    
stroke(0, 0, 0);
strokeWeight(2);
fill(255, 255, 255);
ellipse(bunnyX+50,bunnyY+-30, 60, 120);  // left ear
ellipse(bunnyX+140,bunnyY+-30, 60, 120);  // right ear

ellipse(bunnyX+100, bunnyY+70, 150, 150);    // face

fill(0, 0, 0);
ellipse(bunnyX+70, bunnyY+50, eyeSize, eyeSize);  // left eye
ellipse(bunnyX+130, bunnyY+50, eyeSize, eyeSize);  // right eye

line(bunnyX+50, bunnyY+100, bunnyX+150, bunnyY+100);   // mouth

noFill();
rect(bunnyX+85, bunnyY+100, 15, tooth); // left tooth
rect(bunnyX+100, bunnyY+ 100, 15, tooth); // right tooth

bitmojiX = bitmojiX + bitmojiSpeed;
frogX = frogX + frogSpeed;
bunnyX = bunnyX + bunnySpeed;
};
