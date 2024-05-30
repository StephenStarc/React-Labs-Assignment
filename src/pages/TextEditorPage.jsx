import Layout from "../components/Layout"
import React, { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";
export default function TextEditorPage(){
    const [EditorData, setEditorData] = useState('');

    useEffect(() => {
        // Load saved content from localStorage
        const savedContent = localStorage.getItem('AssignmentEditorData');
        if (savedContent) {
            setEditorData(savedContent);
        }
      }, []);
    
      const handleEditorChange = (content) => {
        setEditorData(content);
        localStorage.setItem('AssignmentEditorData', content);
      };
    
      const handleClearContent = () => {
        setEditorData('');
        localStorage.removeItem('AssignmentEditorData');
        toast.error(`Data Removed from Local Storage `)
      };
    
return (
        <Layout>
            <div className="text-editor container mx-auto" >
        <ReactQuill theme="snow" value={EditorData} onChange={handleEditorChange} />
        <Button onClick={handleClearContent} className="mt-4 flex " color="danger" auto >Clear Content</Button>
        </div>
        </Layout>
)
}