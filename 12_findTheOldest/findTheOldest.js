const findTheOldest = function(people) {
    const peopleToday = people.forEach((person) => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = (new Date().getFullYear());
        };
    });
    const oldest = people.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return oldest[0];
};
// Do not edit below this line
module.exports = findTheOldest;
