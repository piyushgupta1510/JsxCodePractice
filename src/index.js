import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favourite hobbies
    </h1>
    <ul>
      <li> BOOKS </li>
      <li> SLEEP </li>
      <li> RELAX </li>
    </ul>
    <div>
      <img
        class="image"
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg"
        alt="ImgNotFound"
      />
      <img
        class="image"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200123130834-get-more-sleep-new-lead-super-169.jpg"
        alt="ImgNotFound"
      />
      <img
        class="image"
        src="data:image/jpeg;base64,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"
        alt="ImgNotFound"
      />
    </div>
  </div>,
  document.getElementById("root")
);
