
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
    if (depth === 0) return 4;
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

    const baseMenuStructure = rowWithRandomNames(0)

    const menuStructure = [{displayName: "home", url: "/"}, {displayName: "team", url: "/team"}, ...baseMenuStructure]

    return menuStructure

}
