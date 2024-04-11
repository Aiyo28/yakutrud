import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export default function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      className="space-y-3"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
<<<<<<< HEAD
          <a className="text-green-500 underline" target="_blank" {...props} />
=======
          <a className="text-blue-500 underline" target="_blank" {...props} />
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
