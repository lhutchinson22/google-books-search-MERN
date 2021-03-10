import React, { useState } from "react";
import SaveButton from "../SaveButton/SaveButton";
import "./style.css";
import API from "../../utils/API";

const BookList = ({ result, index }) => {
  const [formObject, setFormObject] = useState({});

  const handleClick = (event) => {
    console.log("clicked save");

    const { dataName, value } = event.target;
    setFormObject({ ...formObject, [dataName]: value });
    console.log(setFormObject);

    API.saveBook({
      title: formObject.title,
      author: formObject.authors,
      description: formObject.description,
      image: formObject.image,
      link: formObject.link,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <table className="table table-hover" style={{ marginTop: "20px" }}>
      <tbody>
        {result.map((name, index) => (
          <tr className="table-active" key={index}>
            <td>
              <a target="blank" href={name.volumeInfo.previewLink}>
                <img
                  key={index}
                  src={name.volumeInfo.imageLinks.thumbnail}
                  alt={name.title}
                />
              </a>
              <SaveButton onClick={handleClick} />
            </td>
            <td>
              <strong>Book title:</strong> {name.volumeInfo.title}
              <p>
                <strong>Description:</strong> {name.volumeInfo.description}
              </p>
            </td>
            <td>
              <strong>Authors:</strong> {name.volumeInfo.authors}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
