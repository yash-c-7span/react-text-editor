import { Form, Formik } from "formik";
import BasicCard from "../../components/Card/BasicCard";
import TipTapEditor from "../../components/TipTapEdtior/Editor";
import userSuggestion from "../../components/TipTapEdtior/suggestion";
import BasicInput from "../../components/form/BasicInput";
import { extractMentionUserId, replacMentionContent } from "../../utils/utils";
import { createNewPost } from "../../api/post";
import { useNavigate } from "react-router-dom";

const TipTapCreate = () => {
  const navigate = useNavigate();
  //   const { editor } = useCurrentEditor();
  const initialFormValue = {
    title: "",
    content: "",
    user_id: [],
  };

  /**
   * Handler Func
   */
  const handleSubmit = (values) => {
    values.content = replacMentionContent(values.content);
    values.user_id = extractMentionUserId(values.content);
    createNewPost(values).then((res) => {
      navigate("/");
    });
  };
  return (
    <>
      <BasicCard>
        <div className="w-2/3 mx-auto">
          <Formik initialValues={initialFormValue} onSubmit={handleSubmit}>
            {({ values, setFieldValue, handleChange, handleBlur }) => (
              <Form>
                <div className="space-y-3">
                  <div className="">
                    <BasicInput
                      name="title"
                      values={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="">
                    <TipTapEditor
                      textVal={values.content}
                      suggestion={userSuggestion}
                      onChange={(e) =>
                        setFieldValue("content", e.editor.getHTML())
                      }
                    />
                  </div>

                  <div className="">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-3 py-2 rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </BasicCard>
    </>
  );
};

export default TipTapCreate;
