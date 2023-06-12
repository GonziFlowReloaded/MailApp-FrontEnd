import  { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor({value, setValue}) {
  

  console.log(value);

  return <ReactQuill theme="snow" value={value} onChange={setValue} className='h-[300px]' />;
}

export default TextEditor;