<<<<<<< HEAD
'use client';

import { cn } from '@/src/lib/utils';
import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import { EditorProps } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic(
	() => import('react-draft-wysiwyg').then((mod) => mod.Editor),
	{ ssr: false }
);

export default forwardRef<Object, EditorProps>(
	function RichTextEditor(props, ref) {
		return (
			<Editor
				editorClassName={cn(
					'border rounded-md px-3 min-h-[150px] cursor-text ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
					props.editorClassName
				)}
				toolbar={{
					options: ['inline', 'list', 'link', 'history'],
					inline: {
						options: ['bold', 'italic', 'underline'],
					},
				}}
				editorRef={(r) => {
					if (typeof ref === 'function') {
						ref(r);
					} else if (ref) {
						ref.current = r;
					}
				}}
				{...props}
			/>
		);
	}
=======
"use client";

import { forwardRef } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import { cn } from "../lib/utils";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false },
);

export default forwardRef<Object, EditorProps>(
  function RichTextEditor(props, ref) {
    return (
      <Editor
        editorClassName={cn(
          "border rounded-md px-3 min-h-[150px] cursor-text ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus:ring-2 focus:ring-primary-500 focus:outline-none focus:border-primary-500",
          props.editorClassName,
        )}
        toolbar={{
          options: ["inline", "list", "link", "history"],
          inline: { options: ["bold", "italic", "underline"] },
        }}
        editorRef={(r) => {
          if (ref) {
            if (typeof ref === "function") {
              ref(r);
            } else {
              ref.current = r;
            }
          }
        }}
        {...props}
      />
    );
  },
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
);
