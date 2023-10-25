const bankInfo = {
    name:'Amirreza',
    holding:10000000,
    resort:15,
    despoint:100282,
    withdrawal:6354,
}
console.log(`name:${bankInfo.name}, holding:${bankInfo.holding},resport:${bankInfo.resort} times`);
let readlineSync = require('readline-sync');
let despointAndWithdrawal = parseInt(readlineSync.question('Enter 0 for despoint & 1 for withdrewl: '));
switch (despointAndWithdrawal){
    case 0:
       console.log(`despoint:${bankInfo.despoint}`);
    break;

    case 1:
       console.log(`withdeawal: ${bankInfo.withdrawal}`);
       break;
       default:
         console.log('I said 0 or 1 you idiot >:(');
         break;

}