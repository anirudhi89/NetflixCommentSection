// display comment icon next to play button
// onclick, show comment pop up, load comment
// onsubmit, create new comment, bind to Comment obj, add to db

// display comment icon next to play button
document.onload = function() {
    loadCommentIcon();
}

// onclick, show comment pop up, load comment
document.getElementById("comment_button").onclick = function() {
    loadComments();
}

// onsubmit, create new comment, bind to Comment obj, add to db
function addNewComment() {
    var author = document.getElementById("author").value;
    var message = document.getElementById("message").value;
    var startTime = document.getElementById("start_time").value;
    var endTime = ((document.getElementById("end_time").value != null) ? document.getElementById("end_time").value : startTime + 5);
    var createdDate = new Date();
    var comment = new Comment(author, message, createdDate, startTime, endTime);
    fetch("/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    }).then(function(response) {
        return response.json();
    })
} 


function loadCommentIcon() {
    var placeholder = document.getElementById("movie_player");
    var commentIcon = document.createElement("div");
    commentIcon.id = "comment-icon";
    commentIcon.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 100; background-color: rgba(0, 0, 0, 0.5); display: none;";
}

function loadComments() {
    fetch("/comments", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(response) {
        return response.json();
    })
}
