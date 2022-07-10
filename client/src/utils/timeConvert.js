export const msToHMS = (ms) => {
    let msec = ms;
    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    // diff = 28800000 => hh = 8, mm = 0, ss = 0, msec = 0
    return `${hh}:${mm}:${ss}`;
}

export const HMSToms = (HMS) => {
    const [hh, mm, ss] = HMS.split(':');
    const ms = hh*1000*60*60 + mm*1000*60 + ss*1000;
    return ms;
}