import { useEffect, useState } from "react";
import BasicCard from "../../components/Card/BasicCard";
import { getPostList } from "../../api/post";
import { replaceMentionsWithUsernames } from "../../utils/utils";

const List = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  /**
   * Fetch Api's
   */
  const fetchPosts = () => {
    getPostList({
      limit: -1,
      include:'taggedUsers'
    }).then((res) => {
      setPostList(res?.data);
    });
  };
  return (
    <>
      <div className="flex flex-wrap">
        {postList?.map((item) => (
          <div className="w-2/4 p-5" key={item?.id}>
            <BasicCard>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item?.title}</h3>
              <hr />
              <div className="mt-5 prose prose-p:m-0 prose-p:leading-5 prose-li:m-0 prose-ul" dangerouslySetInnerHTML={{__html:replaceMentionsWithUsernames(item?.content, item?.tagged_users)}}>
              </div>
            </BasicCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
