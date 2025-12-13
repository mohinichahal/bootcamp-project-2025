"use client";

type IComment = {
    user: string;
    comment: string;
    time: Date;
}

type CommentProps = {
    comment: IComment;
}

function parseCommentTime(time: Date) {
    
    const dateObj = new Date(time);
    return dateObj.toDateString() + " " + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function Comment({ comment }: CommentProps) {
    const date = parseCommentTime(comment.time); 
    return (
    <div className="comment">
      <p className="comment-user">{comment.user} <span className="comment-date">{date}</span></p>
      <p className="comment-text">{comment.comment}</p>
    </div>
    );
}

export default Comment;
