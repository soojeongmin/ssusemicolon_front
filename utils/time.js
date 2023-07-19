/**
 * @param {string} datetime 
 * @returns 시간을 몇 분전, 몇 시간 전, 몇 년전 등으로 바꾼 문자열을 반환
 */
export function elapsedTime(datetime) {
    const start = new Date(datetime);
    const end = new Date();

    const diff = (end - start) / 1000;

    const times = [
        { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
        { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
        { name: '일', milliSeconds: 60 * 60 * 24 },
        { name: '시간', milliSeconds: 60 * 60 },
        { name: '분', milliSeconds: 60 },
    ];

    for (const value of times) {
        const betweenTime = Math.floor(diff / value.milliSeconds);

        if (betweenTime > 0) {
            return `${betweenTime}${value.name} 전`;
        }
    }
    return '방금 전';
}

/**
 * @param {string} datetime 
 * @returns 2023.02.20.월요일
 */
export function formatDate(datetime) {
    const target = new Date(datetime);
    return target.toLocaleDateString("ko",
        { year: "numeric", month: "2-digit", day: "2-digit", weekday: 'long' });
}


/**
 * @param {string} datetime 
 * @returns 2023.02.20.월요일 20:30
 */
export function formatDateTime(datetime) {
    const target = new Date(datetime);
    return target.toLocaleString("ko",
        { year: "numeric", month: "2-digit", day: "2-digit", weekday: 'long', hour: "2-digit", minute: "2-digit" });
}

/**
 * @param {string} datetime 
 * @returns 오후 08:30
 */
export function formatTime(datetime) {
    const target = new Date(datetime);
    return target.toLocaleTimeString("ko",
        { hour: "2-digit", hour12: true, minute: "2-digit" });
}