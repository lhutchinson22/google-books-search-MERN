import React from "react";
import "./style.css";

const BookList = ({ result, index }) => {
  return (
    <table className="table table-dark table-striped">
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
