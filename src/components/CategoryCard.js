import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <Link
      to={"/categories/" + props.id}
      style={{
        textDecoration: "none",
      }}
    >
      <div
        style={{
          margin: "10px auto",
          padding: "10px 0",
          display: "flex",
          border: "1px solid black",
          borderRadius: "14px",
          justifyContent: "space-between",
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
        <h4
          style={{
            margin: 0,
            padding: 0,
            color: "black",
            marginRight: "15px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          {">"}
        </h4>
      </div>
    </Link>
  );
};

export default CategoryCard;
