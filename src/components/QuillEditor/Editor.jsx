import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ textValue, setTextValue, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Handler function's
   */
  
  const handleEditor = (e) => {
    if (e.key == "@") {
      setIsOpen(true);
    } else if (e.key == " ") {
      setIsOpen(false);
    }
  };

  return (
    <>
      <ReactQuill
        onKeyUp={handleEditor}
        theme="snow"
        value={textValue}
        onChange={(e) => setTextValue(e)}
        {...restProps}
      />
      {isOpen && <div className="h-20 w-40 bg-pink-200 mt-20">Is Open</div>}
    </>
  );
};


function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    if(str.includes)
    return str.replace( /(<([^>]+)>)/ig, '');
}

export default Editor;
