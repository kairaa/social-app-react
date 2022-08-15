import jwtDecode from "jwt-decode";
import CardHeaderMenu from "./CardHeaderMenu";
import PostCard from "./PostCard";

export const Post = (props) => {
  const token = localStorage.getItem("jwtToken");
  const decode = token ? jwtDecode(token) : null;
  let activeUserId = token ? decode.uid : null;

  console.log(props.context + " : " + props.postDate);

  return activeUserId == props.id ? (
    <PostCard
      action={<CardHeaderMenu postId={props.postId}></CardHeaderMenu>}
      id={props.id}
      postId={props.postId}
      title={props.title}
      context={props.context}
      userName={props.userName}
      postDate={props.postDate}
    ></PostCard>
  ) : (
    <PostCard
      id={props.id}
      postId={props.postId}
      title={props.title}
      context={props.context}
      userName={props.userName}
      postDate={props.postDate}
    ></PostCard>
  );
};
