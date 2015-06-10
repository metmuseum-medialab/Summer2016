<!-- hide script from old browsers
var howMany = 14;  // max number of items listed below
var page = new Array(howMany+1);

page[0]="0001.html";
page[1]="0002.html";	
page[2]="0003.html";
page[3]="0004.html";
page[4]="0005.html";
page[5]="0006.html";
page[6]="0007.html";
page[7]="0008.html";
page[8]="0009.html";
page[9]="0010.html";
page[10]="0011.html";
page[11]="0012.html";
page[12]="0013.html";
page[13]="0014.html";
page[14]="0015.html";


function rndnumber(){
var randscript = -1;
while (randscript < 0 || randscript > howMany || isNaN(randscript)){
randscript = parseInt(Math.random()*(howMany+1));
}
return randscript;
}
quo = rndnumber();
quox = page[quo];
window.location=(quox);
// end hiding script from old browsers -->