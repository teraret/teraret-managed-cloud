import React from 'react'
import { FormGenerator } from 'dynamic-material-ui';
import * as MUI from '@material-ui/core';

export default function MaterialForm() {
  const JSONData = [{
    id: "name",
    type: 'textfield',
    props: {
      id: 'name',
      label: 'Name',
      variant:'outlined',
      margin: 'normal'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory', //email, lowercase, mobile
          message: 'Name is required!!' // on error message to be displayed
        }
      ]
    }
  }  ];  
    return (
        <div>
        <FormGenerator
          guid="textfield"
          data={JSONData}
          library={MUI}
        />  
        </div>
    )
}
