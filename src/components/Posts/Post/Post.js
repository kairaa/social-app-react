import { Card } from "../../Card";
import "./Post.css";
import { Link } from "react-router-dom";

export const Post = (props) => {
  return (
    <Card className="post">
      <div className="postDetails">
        <p className="userName">
          <Link to="/register">{props.userName}</Link>
        </p>
        <p className="date">{props.postDate}</p>
      </div>
      <div className="postContext">
        <h3>{props.title}</h3>
        <p>{props.context}</p>
      </div>
    </Card>
  );
};
