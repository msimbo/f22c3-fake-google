const resultsEl = document.querySelector('#results');
const searchBoxEl = document.querySelector('#query');

const suggestions = [
    'item',
    'logseq',
    'array includes',
    'alpine js',
    'owllabs',
    'cheapest family plan',
    'cheapest family plan',
    'names of ma cities',
    'giphy when something takes a long time',
    'costume time',
];

// function findString(item){
//     return item === 'logseq'
// }

// function findMatching(item) {
//     return item.includes('l');
// }


// console.log(
//     findMatching('giphy when something takes a long time')
// )


// const results = suggestions.filter( (item) => item.includes(resultsEl.value) )

// console.log(results);
//Problem: when a user use types a word into the search box,
// show all the matching words in a drop-down that shows up automatically

//1. get what the user types in the search box
//2. check if what they typed in, matches all the items that exists
//3. show all the matching items.
//
// let homes = [
//     {
//         address: '1 Sample st',
//         homeType: 'tinyhome'
//     },
//     {
//         address: '1 Another st',
//         homeType: 'Lakefront'
//     }
// ];
// const showTinyHomes = (item) => item.homeType === 'tinyhome';
//
// homes.filter(showTinyHomes);

searchBoxEl.addEventListener('input', function () {

    const results = suggestions.filter((item) => {
        return item.includes(searchBoxEl.value);
    });

    // console.log( results);

    displayResult(results);

});

function displayResult(resultArray) {
    resultsEl.innerHTML = '';

    resultArray.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${item}</p>`;

        resultsEl.appendChild(div);
    });
}
