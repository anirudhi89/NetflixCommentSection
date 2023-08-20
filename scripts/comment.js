class Comment {
    constructor(id, author, message, createdDate, startTime, endTime) {
        this.id = id;
        this.author = author;
        this.message = message;
        this.createdDate = createdDate;
        this.startTime = this.startTime;
        this.endTime = this.endTime;
    }
    get id() {
        return this.id;
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

