import { useState } from "react";
import BasicCard from "../../components/Card/BasicCard";
import TextEditor from '../../components/QuillEditor/Editor';
import { createNewPost } from "../../api/post";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title:'',
    content:'',
  });

  /**
   * Handler Function's
   */
  const handleSubmit = () => {
    createNewPost(data).then(res => {
      navigate('/');
    })
  }
  

  return (
    <>
      <div className="w-2/3 mx-auto mt-[100px]">
        <BasicCard>
          <h3 className="text-xl font-semibold text-gray-800">Create Post</h3>

          <div className="mt-6">
            <div className="relative w-2/3">
              <input
                type="text"
                value={data.title}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                placeholder="Enter title"
                onChange={(e) => setData({...data, title: e.target.value})}
              />
            </div>

            <div className="relative w-2/3 mt-4">
                <TextEditor className="h-[200px]" textValue={data.content} setTextValue={(e) => setData({...data, content: e})} />
            </div>

            <div className="relative mt-20">
                <button onClick={handleSubmit} className="bg-blue-500 text-white px-3 py-2 rounded-xl border border-blue-400">Submit</button>
            </div>
          </div>
        </BasicCard>
      </div>
    </>
  );
};

export default Create;
