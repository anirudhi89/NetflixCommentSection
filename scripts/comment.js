class Comment {
    constructor(id, author, message, createdDate, startTime, endTime) {
        this.author = author;
        this.message = message;
        this.createdDate = createdDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    get author() {
        return this.author;
    }
    get message() {
        return this.message;
    }
    get createdDate() {
        return this.createdDate;
    }
    get startTime() {
        return this.startTime;
    }
    get endTime() {
        return this.endTime;
    }
}

