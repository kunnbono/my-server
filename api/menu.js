
function generateRandomString(length) {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomString = '';

for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
}

return randomString;
}

function genrateRandomNumber (depth) {
    if (depth === 0) Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    return Math.floor(Math.random() * 6) + 2;
};

export const menuInfo = () => {


    const rowWithRandomNames = (depth) => {
        const hasChildren = Math.random() < 0.5 ? 0 : 1;
        if( (depth > 0 && !hasChildren) || depth > 8) return;
        const rowArray = new Array(genrateRandomNumber(depth)).fill(1);
        return rowArray.map(() => {
            const randomWord = generateRandomString(5);
            return {
                displayName: randomWord,
                url: `/${randomWord}`,
                children: rowWithRandomNames(depth + 1)
            };
        });
    }

    const menuStructure = rowWithRandomNames(0)

    return menuStructure

}

// export const menuInfo = () => {
//     const data = [
//         {
//             "displayName": "home",
//             "url": "",
//             "link": "/"
//         },
//         {
//             "displayName": "team",
//             "url": "",
//             "link": "/team"
//         },
//         {
//         "displayName": "fisrt father",
//         "url": "",
//         "link": "/falseURL",
//         "children": [
//             {
//                 "displayName": "fisrt child",
//                 "url": "",
//                 "link": "/falseURL",
//                 "children": [
//                     {
//                         "displayName": "fisrt grand child",
//                         "url": "",
//                         "link": "/falseURL"
//                         }
//                 ]
//             },
//             {
//                 "displayName": "sec child",
//                 "url": "",
//                 "link": "/falseURL"
//             }
//         ]
//         },
//         {
//             "displayName": "sec father",
//             "url": "",
//             "link": "/falseURL",
//             "children": []
//         },  
//         {
//             "displayName": "thi father",
//             "url": "",
//             "link": "/falseURL",
//             "children": []
//         },
//         {
//             "displayName": "fourth father",
//             "url": "",
//             "link": "/falseURL",
//             "children": [
//                 {
//                     "displayName": "fisrt child",
//                     "url": "",
//                     "link": "/falseURL",
//                     "children": [
//                         {
//                             "displayName": "fisrt grand child",
//                             "url": "",
//                             "link": "/falseURL",
//                             "children": [
//                                 {
//                                     "displayName": "fisrt grand grand child",
//                                     "url": "",
//                                     "link": "/falseURL"
//                                 }
//                             ]
//                             }
//                     ]
//                 },
//                 {
//                     "displayName": "sec child",
//                     "url": "",
//                     "link": "/falseURL"
//                 }
//             ]
//         },
//         {
//             "displayName": "fifth father",
//             "url": "",
//             "link": "/falseURL",
//             "children": []
//         }
//     ];
//     return data
// }