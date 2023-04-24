import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const MARKPROMPT_COMPLETIONS_URL = "https://api.markprompt.com/v1/completions";
const STREAM_SEPARATOR = "___START_RESPONSE_STREAM___";

const Caret = () => {
  return (
    <span className="caret animate-caret inline-block h-[15px] w-[8px] translate-y-[2px] translate-x-[2px] transform rounded-[1px] bg-fuchsia-500 shadow-[0_0px_3px_0px_rgba(217,70,219,0.9)]" />
  );
};

const WithCaret = ({ Component, children, ...rest }) => {
  if (Component === "code" && rest.inline) {
    rest = {
      ...rest,
      inline: "true",
    };
  }

  return (
    <Component {...rest} className="markdown-node">
      {children}
      <Caret />
    </Component>
  );
};

export default function Markprompt({
  model,
  projectKey,
  iDontKnowMessage: _iDontKnowMessage,
  placeholder: _placeholder,
  autoScrollDisabled,
  didCompleteFirstQuery,
  onDark,
  completionsUrl,
}:any){
  const [prompt, setPrompt] = useState(undefined);
  const [answer, setAnswer] = useState("");
  const [references, setReferences] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const answerContainerRef = useRef(null);
  const _didCompleteFirstQuery = useRef(false);

  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iDontKnowMessage =
    _iDontKnowMessage || "Sorry, I am not sure how to answer that. Thanks!";
  const placeholder = _placeholder || "Ask me anything related to the ODC...";

  const submitPrompt = useCallback(
    async (e) => {
      e.preventDefault();

      if (!prompt) {
        return;
      }

      setAnswer("");
      setReferences([]);
      setLoading(true);

      try {
        const res = await fetch(
          `${completionsUrl || MARKPROMPT_COMPLETIONS_URL}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt,
              model: model || 'gpt-3.5-turbo',
              iDontKnowMessage,
              projectKey,
            }),
          }
        );

        if (!res.ok || !res.body) {
          const text = await res.text();
          console.error("Error:", text);
          setAnswer(iDontKnowMessage);
          setLoading(false);
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let startText = "";
        let didHandleHeader = false;
        let refs = [];

        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          const chunkValue = decoder.decode(value);
          if (!didHandleHeader) {
            startText = startText + chunkValue;
            if (startText.includes(STREAM_SEPARATOR)) {
              const parts = startText.split(STREAM_SEPARATOR);
              try {
                refs = JSON.parse(parts[0]);
              } catch {}
              setAnswer((prev) => prev + parts[1]);
              didHandleHeader = true;
            }
          } else {
            setAnswer((prev) => prev + chunkValue);
          }
        }
        setReferences(refs);
      } catch (e) {
        console.error("Error", e);
        setAnswer(iDontKnowMessage);
      }
      setLoading(false);
    },
    [prompt, completionsUrl, projectKey, iDontKnowMessage, model]
  );

  useEffect(() => {
    if (
      autoScrollDisabled ||
      !containerRef.current ||
      !answerContainerRef.current
    ) {
      return;
    }

    const childRect = answerContainerRef.current.getBoundingClientRect();
    containerRef.current.scrollTop = childRect.bottom;
  }, [answer, loading, autoScrollDisabled, references]);

  useEffect(() => {
    if (!loading && answer.length > 0) {
      // This gets called after an answer has completed.
      if (!_didCompleteFirstQuery.current) {
        _didCompleteFirstQuery.current = true;
        didCompleteFirstQuery?.();
      }
    }
  }, [loading, answer, didCompleteFirstQuery]);

  console.log("vw", viewportWidth);

  return (
    <div
      className="bg-white overflow-auto rounded-lg shadow-lg shadow-blend text-gray-700 p-6"
      style={viewportWidth > 1300 ? { height: "500px" } : { height: "380px" }}
    >
      <div className="h-12 border-b border-neutral-200">
        <form onSubmit={submitPrompt}>
          <input
            value={prompt || ""}
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={placeholder}
            className="bg-transparent text-black-900 py-2 px-4 focus:outline-none focus:border-transparent w-4/5"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck="false"
          />
        </form>
      </div>
      <div ref={containerRef} className="py-2 px-4">
        {loading && !(answer.length > 0) && <Caret />}
        {/* Need a container for ReactMarkdown to be able to access
            :last-child and display the caret */}
        <div className={cn()}>
          <ReactMarkdown
            components={{
              p: (props) => <WithCaret Component="p" {...props} />,
              span: (props) => <WithCaret Component="span" {...props} />,
              h1: (props) => <WithCaret Component="h1" {...props} />,
              h2: (props) => <WithCaret Component="h2" {...props} />,
              h3: (props) => <WithCaret Component="h3" {...props} />,
              h4: (props) => <WithCaret Component="h4" {...props} />,
              h5: (props) => <WithCaret Component="h5" {...props} />,
              h6: (props) => <WithCaret Component="h6" {...props} />,
              pre: (props) => <WithCaret Component="pre" {...props} />,
              code: (props) => <WithCaret Component="code" {...props} />,
              td: (props) => <WithCaret Component="td" {...props} />,
            }}
            remarkPlugins={[remarkGfm]}
          >
            {answer}
          </ReactMarkdown>
        </div>
        {answer.length > 0 && references.length > 0 && (
          <div className="">
            <div className="">
              Summary generated from the following sources:
              <div className="">
                {references.map((r) => (
                  <div key={`reference-${r}`} className="">
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="" />
        <div ref={answerContainerRef} />
      </div>
    </div>
  );
};

