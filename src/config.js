const HOUR = new Date().getHours();
export const OPEN_HOUR = 12;
export const CLOSE_HOUR = 23;
export const IS_OPEN = HOUR >= OPEN_HOUR && HOUR <= CLOSE_HOUR;
