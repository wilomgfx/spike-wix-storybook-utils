import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from '../../components/Button';

import AutoExample from 'wix-storybook-utils/AutoExample';

storiesOf('Button', module)
  .add('with text', () => (
    <AutoExample component={Button}></AutoExample>
  ));

  // export default {
  //   category: '1. Buttons',
  //   storyName: '1.1 Button plain',
  //   component: Button,
  //   componentPath: '../../components/Button',
  
  //   componentProps: {
  //     onClick: action('clicked'),
  //     children: "Hello",
  //   },
  
  //   exampleProps: {
  //     onClick: () => 'Clicked!',
  //     onMouseEnter: () => 'Mouse Enter!',
  //     onMouseLeave: () => 'Mouse Leave!',
  //   }
  // };
