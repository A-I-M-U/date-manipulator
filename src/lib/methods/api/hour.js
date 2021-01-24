export function hour() {
    return this.date.getHours() < 10 ? "0" + this.date.getHours() : String(this.date.getHours());
}