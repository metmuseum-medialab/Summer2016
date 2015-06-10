<!-- hide script from old browsers
var howMany = 39;  // max number of items listed below
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
page[15]="0016.html";
page[16]="0017.html";
page[17]="0018.html";
page[18]="0019.html";
page[19]="0020.html";
page[20]="0021.html";
page[21]="0022.html";
page[22]="0023.html";
page[23]="0024.html";
page[24]="0025.html";
page[25]="0026.html";
page[26]="0027.html";
page[27]="0028.html";
page[28]="0029.html";
page[29]="0030.html";
page[30]="0031.html";
page[31]="0032.html";
page[32]="0033.html";
page[33]="0034.html";
page[34]="0035.html";
page[35]="0036.html";
page[36]="0037.html";
page[37]="0038.html";
page[38]="0039.html";
page[39]="0040.html";


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