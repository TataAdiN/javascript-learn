// Array.map
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => `${name}!`);

console.log(newArray);

// Array.filter
const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14]
    .filter((item) => Boolean(item));

console.log(truthyArray);

const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

// Array.reduce
const reduce_students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = reduce_students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

// object freeze
const user = {
    name: 'John',
    email: 'john@dicoding.com',
};

Object.freeze(user);

user.email = 'doe@dicoding.com';
console.log(user);

// object deep freeze
function deepFreeze(object) {
    Object.keys(object).forEach((name) => {
        const prop = object[name];
        if (typeof prop == 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });

    return Object.freeze(object);
}

const complexUser = {
    name: 'Bob',
    email: 'bob@dicoding.com',
    preferences: {
        newsletter: true,
        notifications: 'weekly',
        address: {
            city: 'New York',
            zip: '10001'
        }
    }
};

deepFreeze(complexUser);

complexUser.preferences.address.city = 'Los Angeles';

console.log(complexUser.preferences.address.city); 