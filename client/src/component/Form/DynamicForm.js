import React from 'react';
import {
  FormGenerator
} from 'dynamic-material-ui';
import * as MUI from '@material-ui/core';

const JSONData = [{'id':'name'}]

function DynamicForm() {

  return <FormGenerator
  guid = "textfield"
  data = {
    JSONData
  }
  library = {
    MUI
  }
  />
}

export default DynamicForm;
