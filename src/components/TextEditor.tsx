//@ts-nocheck


import  { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor({value, setValue}) {
  

  console.log(value);

  return <ReactQuill theme="snow" value={value} onChange={setValue} className='h-[200px] dark:bg-gray-800 dark:text-white' />;
}

export default TextEditor;