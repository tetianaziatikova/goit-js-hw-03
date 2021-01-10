const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

const keys = Object.keys(feedback);
console.log(keys);

let totalFeedback = 0;

for (const key of keys) {
    console.log(key);

    totalFeedback += feedback[key]; 
}

console.log('Total:', totalFeedback);

// const values = Object.values(feedback); // 
// console.log(values);

// let totalFeedback = 0;

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log('Total:', totalFeedback);

