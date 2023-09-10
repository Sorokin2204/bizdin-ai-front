import React from 'react';
import styles from './CodeEditor.module.scss';
import Editor from '@monaco-editor/react';
import prettify from 'html-prettify';
import format from 'html-format';
import { Box } from '@mui/material';

const CodeEditor = ({ label, form, name }) => {
  const value = form.watch(name);
  return (
    <Box
      sx={{
        mb: 2,
        '& section': { minHeight: '300px', height: 'auto !important' },
      }}>
      <Box
        sx={{
          fontWeight: '600',
          mb: 1,
        }}>
        {label}
      </Box>
      <Editor
        className="monaco-custom"
        value={value}
        height="90vh"
        defaultLanguage="html"
        defaultValue="// some comment"
        onChange={(val) => {
          // format(val, ' '.repeat(4), 80);
          form.setValue(name, val);
        }}
      />
    </Box>
  );
};

export default CodeEditor;
