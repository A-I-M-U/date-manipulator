import { data } from '../../utils/data.js';

export function month() {
    return data.months[this.date.getMonth()];
}