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
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;
