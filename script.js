
const randomNum = num => {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
};

let routines = ['Code', 'Work Out', 'Learn to school', 'Just rest'];
let music = [
    Yzomandias/*['Melanž', 'DDSZZ', 'Mikasa Sukasa', 'Zhora Vypadá Všechno Líp', 'Pod Vlivem EP']*/, 
    Separ/*['Pirát', 'Pancier']*/,
    DMS/*['MDMS', 'Prepáčte']*/, 
    NikTendo/*['Sedm', 'Jsem v pohodě, sem v prdeli', 'Fatamorgana', 'Restart', 'Lunazar']*/, 
    LilPeep/*['Star Shopping', 'HELLBOY', 'When You\' re Sober, pt.1', 'When You\' re Sober, pt.2', 'beamer boy', 'white wine', 'white tee']*/, 
    LilUziVert/*['Drankin N Smokin', 'Luv Is Rage 2', 'Eternal Atake', 'Money Longer']*/
];
let shows = ['Interstellar', 'Money Heist', 'Kill Bill', 'Coach Carter', 'Avengers', 'Deathnote', 'The Big Bang Theory', twitch, 'nothing'];
let games = ['Sekiro: Shadows Die Twice', 'Nioh 2', 'Red Dead Redemption II', 'Chess', 'nothing'];

function todayDo() {
    console.log('Today...');
    console.log(`You should at least: ${routines[randomNum(routines.length)]}`);
    console.log(`Watch: ${shows[randomNum(shows.length)]}`);
    console.log(`Play: ${games[randomNum(games.length)]}`);
};

todayDo();