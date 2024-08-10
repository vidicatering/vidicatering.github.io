"use client";

import { saveBlog } from "../../../lib/action";
import { Textarea } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  ClassicEditor,
  AccessibilityHelp,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  Bold,
  CloudServices,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  FullPage,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Markdown,
  MediaEmbed,
  Paragraph,
  PasteFromMarkdownExperimental,
  RemoveFormat,
  SelectAll,
  ShowBlocks,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Style,
  Subscript,
  Superscript,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  Title,
  TodoList,
  Underline,
  Undo,
} from "ckeditor5";

import translations from "ckeditor5/translations/id.js";

import "ckeditor5/ckeditor5.css";

const CreateForm = () => {
  const [content, setContent] = useState("");
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "sourceEditing",
        "showBlocks",
        "|",
        "heading",
        "style",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "link",
        "insertTable",
        "highlight",
        "blockQuote",
        "codeBlock",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "outdent",
        "indent",
      ],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      AccessibilityHelp,
      Alignment,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      BalloonToolbar,
      BlockQuote,
      Bold,
      CloudServices,
      Code,
      CodeBlock,
      Essentials,
      FindAndReplace,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      FullPage,
      GeneralHtmlSupport,
      Heading,
      Highlight,
      HorizontalLine,
      HtmlComment,
      HtmlEmbed,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      Markdown,
      MediaEmbed,
      Paragraph,
      PasteFromMarkdownExperimental,
      RemoveFormat,
      SelectAll,
      ShowBlocks,
      SourceEditing,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Style,
      Subscript,
      Superscript,
      Table,
      TableCellProperties,
      TableProperties,
      TableToolbar,
      TextPartLanguage,
      TextTransformation,
      Title,
      TodoList,
      Underline,
      Undo,
    ],
    balloonToolbar: ["bold", "italic", "|", "link", "|", "bulletedList", "numberedList"],
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: /^.*$/,
          styles: true,
          attributes: true,
          classes: true,
        },
      ],
    },
    image: {
      toolbar: ["toggleImageCaption", "imageTextAlternative", "|", "imageStyle:inline", "imageStyle:wrapText", "imageStyle:breakText", "|", "resizeImage"],
    },

    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    menuBar: {
      isVisible: true,
    },
    placeholder: "Type or paste your content here!",
    style: {
      definitions: [
        {
          name: "Article category",
          element: "h3",
          classes: ["category"],
        },
        {
          name: "Title",
          element: "h2",
          classes: ["document-title"],
        },
        {
          name: "Subtitle",
          element: "h3",
          classes: ["document-subtitle"],
        },
        {
          name: "Info box",
          element: "p",
          classes: ["info-box"],
        },
        {
          name: "Side quote",
          element: "blockquote",
          classes: ["side-quote"],
        },
        {
          name: "Marker",
          element: "span",
          classes: ["marker"],
        },
        {
          name: "Spoiler",
          element: "span",
          classes: ["spoiler"],
        },
        {
          name: "Code (dark)",
          element: "pre",
          classes: ["fancy-code", "fancy-code-dark"],
        },
        {
          name: "Code (bright)",
          element: "pre",
          classes: ["fancy-code", "fancy-code-bright"],
        },
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells", "tableProperties", "tableCellProperties"],
    },
    translations: [translations],
  };
  return (
    <div>
      <form action={saveBlog}>
        <div className="mb-5">
          <label htmlFor="judul" className="block text-sm font-medium ">
            Judul Artikel
          </label>
          <input type="text" name="judul" id="judul" className="bg-gr ay-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Judul Artikel..." />
        </div>
        <div className="mb-5">
          <label htmlFor="content" className="block text-sm font-medium ">
            Konten Artikel
          </label>
          <div>
            <div className="main-container">
              <div className="editor-container editor-container_classic-editor editor-container_include-style" id="content">
                {isLayoutReady && (
                  <CKEditor
                    editor={ClassicEditor}
                    config={editorConfig}
                    data={content} // Initial content
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setContent(data); // Update state when content changes
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3">
          {" "}
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
