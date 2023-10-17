class Triathlon {
  constructor(competitionName){
     this.competitionName = competitionName;
     this.participants ={};
     this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGender){
    if (this.participants[participantName]) {
        return `${participantName} has already been added to the list`;
    }

    this.participants[participantName] = participantGender;
    return `A new participant has been added - ${participantName}`;
  }

  completeness(participantName, condition){
     if (!this.participants[participantName]) {
        throw new Error(`${participantName} is not in the current participants list`);
     }

     if (condition < 30) {
        throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
     }

     let disciplinesCount = Math.floor(condition/30);

     if (disciplinesCount > 0 && disciplinesCount < 3) {
        return `${participantName} could only complete ${disciplinesCount} of the disciplines`;
     } else if(disciplinesCount === 3){
        const gender = this.participants[participantName];
        this.listOfFinalists.push({ name: participantName, gender});

     }
     return `Congratulations, ${participantName} finished the whole competition`
    
  }

  rewarding(participantName){
          
     const participant = this.listOfFinalists.some(finalist => finalist.name === participantName);

     if (!participant) {
        return `${participantName} is not in the current finalists list`;
     }

     return `${participantName} was rewarded with a trophy for his performance`;
  }

  showRecord(criteria){
      // male, female, all;
      
      if (this.listOfFinalists.length === 0 ) {
         return `There are no finalists in this competition`;
      }
      
      if (criteria === 'male' || criteria === 'female') {
         const finalistsByGender = this.listOfFinalists.filter(f => f.gender === criteria);

         if (finalistsByGender.length === 0) {
            return `There are no ${criteria} finalists`
         } else {
            return `${finalistsByGender[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            
         }
      }
      
      if (criteria === 'all') {
        
         return `List of all ${this.competitionName} finalists:`+ '\n' +
                this.listOfFinalists.sort().map(f => `${f.name}`).join('\n');
                           
                
      }

      if(!this.listOfFinalists.some(finalist => finalist.gender === 'male' || finalist.gender === 'female')){
         return `There are no ${criteria}'s that finished the competition`;
      }

      const champion = this.listOfFinalists.find(finalist => finalist.gender === criteria);
      return `${champion.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
      
  }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));





