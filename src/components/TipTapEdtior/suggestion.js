import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";

import MentionList from "./MentionList";
import { getUserList } from "../../api/user";
import { debounce } from '../../utils/utils'
 
export default {
  items: async ({ query }) => {
    return new Promise((resolve) => {
      debounce(() => {
        resolve(fetchUsers(query));
      }, 500)
    });
   
  },
  

  render: () => {
    let component;
    let popup;
    let isLoading = false;

    return {
      onStart: (props) => {
        component = new ReactRenderer(MentionList, {
          props,
          editor: props.editor,
          isLoading,
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start",
        });
      },

      onUpdate(props) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown(props) {
        if (props.event.key === "Escape") {
          popup[0].hide();

          return true;
        }

        return component.ref?.onKeyDown(props);
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
};

/**
 * Private function's
 */
const fetchUsers = async (query) => {
  return getUserList({
    limit: 5,
    filter: {
      username: query?.toLowerCase(),
    },
  }).then((res) => res?.data);
}

