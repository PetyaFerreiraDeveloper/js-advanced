class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'collegian': 500,
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        for (let part of this.listOfParticipants) {
            if (name === part.name) {
                return `The ${name} is already registered at the camp.`;
            }
        }
        
        let price = this.priceForTheCamp[condition];
        if(money < price) {
            return `The money is not enough to pay the stay at the camp.`
        }
        let participant = {
            name,
            condition,
            power: 100,
            wins: 0,
        };
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        for (let participant of this.listOfParticipants) {
            if (name === participant.name) {
                let index = this.listOfParticipants.indexOf(participant);
                this.listOfParticipants.splice(index, 1);
                return `The ${name} removed successfully.`;
            }
        }
        throw new Error(`The ${name} is not registered in the camp.`);
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        
        let listOfNames = [];
        for (let participant of this.listOfParticipants) {
            listOfNames.push(participant.name);
        }
        if(!listOfNames.includes(participant1)) {
            throw new Error(`Invalid entered name/s.`);
        }
        
        if (typeOfGame == 'WaterBalloonFights') {
            if (!listOfNames.includes(participant2)) {
                throw new Error(`Invalid entered name/s.`);
            }
            if (participant1 && participant2) {
                let part1Condition = '';
                let part2Condition = '';
                for (let part of this.listOfParticipants) {
                    if (part.name == participant1) {
                        part1Condition = part.condition;
                    } else if (part.name == participant2) {
                        part2Condition = part.condition;
                    }
                };
                if (part1Condition != part2Condition) {
                    throw new Error(`Choose players with equal condition.`);
                }
            }
            let power1 = 0;
            let power2 = 0;
            for (let part of this.listOfParticipants) {
                if (part.name == participant1) {
                    power1 = part.power;
                } else if (part.name == participant2) {
                    power2 = part.power;
                }
            };
            if (power1 > power2) {
                for (let part of this.listOfParticipants) {
                    if (part.name == participant1) {
                        part.wins++;
                    }
                }
            } else if (power1 < power2) {
                for (let part of this.listOfParticipants) {
                    if (part.name == participant2) {
                        part.wins++;
                    }
                }
            } else {
                return `There is no winner.`;
            }
        } else if (typeOfGame == 'Battleship') {
            for (let part of this.listOfParticipants) {
                if (part.name == participant1) {
                    part.power += 20;
                    return `The ${participant1} successfully completed the game ${typeOfGame}.`
                }
            }
        }
    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));




