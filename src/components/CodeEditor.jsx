import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";


const CodeEditor = (props) => {
 
  const {
    language,
    displayName,
    value,
    onChange,
  } = props;

  
  const handleChange = (editor,data,value)=>{
    onChange(value);
  }

  const [open,setOpen] = useState(false)

  return (
    
      <div className={`editor-container ${open?'grow4':''}`}>
        <div className="editor-title">
          {displayName}
          <button onClick={()=>(setOpen((open) => !open))}>
          <img src={open?"/CollapseIcon.svg" : "/ExpandIcon.svg"} alt={open? "" : "ExpandIcon"}/>
          </button>
        </div>
          <ControlledEditor 
          value={value}
          className='code-space'
          options={{
            mode: language,
            lineNumbers:true,
            theme:"material",
            lineWrapping:true,
            lint:true,
            extraKeys: { "Ctrl-Space": "autocomplete" },
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          }}
          onBeforeChange={(editor, data, value) => handleChange(editor, data, value)}
          
          />
      </div>
  );
}

export default CodeEditor;
