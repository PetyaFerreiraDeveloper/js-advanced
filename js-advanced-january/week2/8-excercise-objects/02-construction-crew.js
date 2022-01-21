function solve(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    } 
    return worker;
}

const print = solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
)
console.log(print);