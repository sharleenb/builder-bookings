// import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
// import Quill from './Quill';

// // Editor is an uncontrolled React component
// const Editor = forwardRef(
//   ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
//     const containerRef = useRef(null);
//     const defaultValueRef = useRef(defaultValue);
//     const onTextChangeRef = useRef(onTextChange);
//     const onSelectionChangeRef = useRef(onSelectionChange);

//     useLayoutEffect(() => {
//       onTextChangeRef.current = onTextChange;
//       onSelectionChangeRef.current = onSelectionChange;
//     });

//     useEffect(() => {
//       if (ref.current) {
//         ref.current.enable(!readOnly);
//       }
//     }, [ref, readOnly]);

//     useEffect(() => {
//       const container = containerRef.current;
//       const editorContainer = container.appendChild(
//         container.ownerDocument.createElement('div'),
//       );
//       const quill = new Quill(editorContainer, {
//         theme: 'snow',
//       });

//       ref.current = quill;

//       if (defaultValueRef.current) {
//         quill.setContents(defaultValueRef.current);
//       }

//       quill.on(Quill.events.TEXT_CHANGE, (...args) => {
//         if (onTextChangeRef.current) {
//           onTextChangeRef.current(...args);
//         }
//       });

//       quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
//         if (onSelectionChangeRef.current) {
//           onSelectionChangeRef.current(...args);
//         }
//       });

//       return () => {
//         ref.current = null;
//         container.innerHTML = '';
//       };
//     }, [ref]);

//     return <div ref={containerRef}></div>;
//   },
// );

// Editor.displayName = 'Editor';

// export default Editor;