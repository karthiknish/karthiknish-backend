import React from "react";
import PropTypes from "prop-types";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
const Editor = ({ onChange, name, value }) => {
  let editorOptions = {
    value: "",
    mode: "classic",
    toolbarContainer: "#custom_toolbar",
    katex: "window.katex",
    charCounter: true,
    charCounterType: "char",
    charCounterLabel: "Characters",
    height: "",
    minHeight: "200",
    maxHeight: "800",
    videoResizing: true,
    videoHeightShow: true,
    videoFileInput: true,
    videoUrlInput: true,
    videoRatioShow: true,
    tabDisable: false,
    templates: [
      {
        name: "Summary Sheet",
        html:
          "<div>Name</div><div>Race: </div><div>AGI: SMA: SPI: STR: VIG: | Pace: Parry: Toughness</div><div>Abilities: </div><div>Edges: </div><div>Hindrances: </div><div>Skills: </div><div>Powers: </div>",
      },
      {
        name: "Template-2",
        html: "<p>HTML source2</p>",
      },
    ],
    buttonList: [
      [
        "undo",
        "redo",
        "font",
        "fontSize",
        "formatBlock",
        "paragraphStyle",
        "blockquote",
        "bold",
        "underline",
        "italic",
        "strike",
        "subscript",
        "superscript",
        "fontColor",
        "hiliteColor",
        "textStyle",
        "removeFormat",
        "outdent",
        "indent",
        "align",
        "horizontalRule",
        "list",
        "lineHeight",
        "table",
        "link",
        "image",
        "video",
        "math",
        "imageGallery",
        "fullScreen",
        "showBlocks",
        "codeView",
        "preview",
        "print",
        "save",
        "template",
      ],
    ],
    // "lang": SUNEDITOR_LANG.en,
    "lang(In nodejs)": "en",
    // callBackSave: this.callBackSave,
  };
  const handleChange = (e) => {
    onChange({ target: { name, value: e } });
  };
  return (
    <>
      <SunEditor
        setOptions={editorOptions}
        setContents={value}
        onChange={handleChange}
      />
    </>
  );
};
Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default Editor;
