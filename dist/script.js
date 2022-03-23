import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const defaultContent = `

![gato Logo](https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:1280/p:4x3/gato.jpg)

# Hello, 
## You'r welcom at
### DwinaTech Channel


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit My github](https://www.github.com)

> Block Quot

1. First list item
2. Second list item
`;


marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextAreaChange }) => /*#__PURE__*/React.createElement("textarea", { id: "editor", value: content, onChange: handleTextAreaChange });

const Previewer = ({ content }) => /*#__PURE__*/React.createElement("div", { id: "preview", dangerouslySetInnerHTML: {
    __html: marked.parse(content, { renderer: renderer }) } });


const App = () => {
  const [content, setContent] = React.useState(defaultContent);

  const handleTextAreaChange = event => {
    setContent(event.target.value);
  };
  return /*#__PURE__*/(
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement(Editor, { content: content, handleTextAreaChange: handleTextAreaChange }), /*#__PURE__*/
    React.createElement(Previewer, { content: content })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));