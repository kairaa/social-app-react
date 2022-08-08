import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <Link
      to={"/categories/" + props.id}
      style={{
        textDecoration: "none",
      }}
    >
      <span
        className="card"
        style={{
          margin: "10px auto",
          padding: "10px 0",
          display: "flex",
          border: "1px solid black",
          borderRadius: "14px",
        }}
      >
        <h4
          style={{
            color: "black",
            marginLeft: "15px",
            textDecoration: "none",
          }}
        >
          {props.name}
        </h4>
      </span>
    </Link>
    // <div
    //   style={{
    //     margin: "10px auto",
    //     padding: "5px 0",
    //     border: "1px solid",
    //     borderRadius: "20px",
    //   }}
    // >
    //   <Link to={"/categories/" + props.id}>aaa</Link>;
    //   <h4
    //     style={{
    //       marginLeft: "15px",
    //       textDecoration: "none",
    //     }}
    //   >
    //     {props.name}
    //   </h4>
    // </div>
  );
};

export default CategoryCard;
