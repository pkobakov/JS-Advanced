class footballTeam {
    constructor(clubName, country){
     this.clubName = clubName;
     this.country = country;
     this.invitedPlayers = [];
    }
 
    newAdditions(footballPlayers){
     
     // for (const player of footballPlayers) {
     //     let currentPlayer =  player.split('/');
     //     let name = currentPlayer[0];
     //     let age = Number(currentPlayer[1]);
     //     let playerValue = Number(currentPlayer[2]);
 
     //     let selectedPlayer = this.invitedPlayers.find(p => p.name === name);
 
     //     if (selectedPlayer) {
     //         if (selectedPlayer.playerValue < playerValue) {
     //             selectedPlayer.playerValue = playerValue;
     //         } 
     //     } else {
     //         this.invitedPlayers.push({name, age, playerValue});
     //     }
     // }
 
     footballPlayers.forEach(data => {
         let [name, age, playerValue] = data.split('/');
         playerValue = Number(playerValue);
         
         let selectedPlayer = this.invitedPlayers.find(p => p.name === name);
 
         if (!selectedPlayer) {
             this.invitedPlayers.push({name, age, playerValue});
         } else {
             if (selectedPlayer.playerValue < playerValue) {
                 selectedPlayer.playerValue = playerValue;
             }
         }
 
     })
 
     let names = this.invitedPlayers.map(p => p.name);
 
      return `You successfully invite ${names.join(', ')}.`;
    }
 
    signContract(selectedPlayer){
        // const offer = selectedPlayer.split('/')
        // const selectedName = offer[0];
        // const proposedSalary = Number(offer[1]);

        let [name, playerValue] = selectedPlayer.split('/');
        playerValue = Number(playerValue);
 
        const selectedPlr = this.invitedPlayers.find(p => p.name === name);
        
        if (!selectedPlr) {
         throw new Error(`${name} is not invited to the selection list!`);
        }
 
 
        else if (selectedPlr.playerValue >= playerValue) {
         let priceDifference = selectedPlr.playerValue - playerValue;
         throw new Error(`The manager's offer is not enough to sign a contract with ${selectedPlr.name}, ${priceDifference} million more are needed to sign the contract!`)
        };
 
        selectedPlr.playerValue = 'Bought';
 
        return `Congratulations! You sign a contract with ${name} for ${playerValue} million dollars.`;
 
    }
 
    ageLimit(name, age){
        const selectedPlayer = this.invitedPlayers.find(p => p.name === name);
 
        if (!selectedPlayer) {
         throw new Error(`${selectedPlayer.name} is not invited to the selection list!`);
        }

        if (selectedPlayer.age >= age) {
            return `${selectedPlayer.name} is above the limit!`;
        }
 
        let ageDifference = age - selectedPlayer.age;

        if (ageDifference <= 5) {
            return `${selectedPlayer.name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
         }
         
        else if (ageDifference > 5){
             return `${selectedPlayer.name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`; 
        }
 
    }
 
    transferWindowResult(){
       return 'Players list:'  + '\n' + 
       `${this.invitedPlayers.sort((a,b) => a.name - b.name)
                             .map(p => `Player ${p.name}-${p.playerValue}`)
                             .join('\n')}`;
    }
 }

//Output 1.
//let fTeam = new footballTeam("Barcelona", "Spain");
//console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// Output 2.
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// Output 3.
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));

// Output 4.
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.transferWindowResult());



