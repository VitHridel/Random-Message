
const randomNum = num => {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
};

function interpretsFactory(name, albums) {
    return{
        name,
        albums
    };
};

//          creating interpreters for an music array

let yzomandias = interpretsFactory('Yzomandias', ['Melanž', 'DDSZZ', 'Mikasa Sukasa', 'Zhora Vypadá Všechno Líp', 'Pod Vlivem EP']);
let separ = interpretsFactory('Separ', ['Pirát', 'Pancier']);
let dms = interpretsFactory('DMS', ['MDMS', 'Prepáčte']);
let niktendo = interpretsFactory('Nik Tendo', ['Sedm', 'Jsem v pohodě, sem v prdeli', 'Fatamorgana', 'Restart', 'Lunazar']);
let lilPeep = interpretsFactory('Lil Peep', ['Star Shopping', 'HELLBOY', 'When You\' re Sober, pt.1', 'When You\' re Sober, pt.2', 'beamer boy', 'white wine', 'white tee']);
let lilUziVert = interpretsFactory('Lil Uzi Vert', ['Drankin N Smokin', 'Luv Is Rage 2', 'Eternal Atake', 'Money Longer']);

//          creating show 'twitch' object

let twitch = {
    name: 'twitch.tv',
    streamers: ['Agraelus', 'Claina', 'RobDiesALot', 'CzechCloud']
}

//          ARRAYS

let routines = ['Code', 'Work Out', 'Learn to school', 'Just rest'];
let music = [yzomandias, separ, dms, niktendo, lilPeep, lilUziVert];
let shows = ['Interstellar', 'Money Heist', 'Kill Bill', 'Coach Carter', 'Avengers', 'Deathnote', 'The Big Bang Theory', twitch, 'nothing'];
let games = ['Sekiro: Shadows Die Twice', 'Nioh 2', 'Red Dead Redemption II', 'Chess', 'nothing'];


function todayDo() {
    console.log('Today...');
    console.log(`You should at least: ${routines[randomNum(routines.length)]}`);
    let interpret = music[randomNum(music.length)];
    console.log('Music for today: ' + interpret.name + ' - ' + interpret.albums[randomNum(interpret.albums.length)]);
    let show = shows[randomNum(shows.length)];
    if(show == twitch) {
        console.log('Watch: ' + twitch.name + '/' + twitch.streamers[randomNum(twitch.streamers.length)]);
    } else {
    console.log(`Watch: ${show}`);
    };

    console.log(`Game of the day: ${games[randomNum(games.length)]}`);
};

todayDo();