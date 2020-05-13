import React from 'react';
import PropTypes from 'prop-types';
import { meta, input } from '@data-driven-forms/common/src/prop-types-templates';
import { Form } from 'semantic-ui-react';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';
import FormFieldGrid from '../common/form-field-grid';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import { validationError } from '../common/helpers';
import FormField from '../common/form-field';

const useStyles = createUseStyles({
  root: {
    '&>.field': {
      display: 'inline-block'
    }
  },
  errorLabel: {
    '&:after': {
      content: '"*"',
      color: '#db2828'
    }
  }
});

export const Switch = (props) => {
  const {
    input,
    isReadOnly,
    isDisabled,
    isRequired,
    label,
    helperText,
    description,
    validateOnMount,
    meta,
    onText,
    offText,
    className,
    ...rest
  } = useFieldApi({
    ...props,
    type: 'checkbox'
  });
  const invalid = validationError(meta, validateOnMount);
  const classes = useStyles();
  const controlLabel = input.checked ? onText : offText;
  return (
    <FormFieldGrid helperText={helperText}>
      <FormField
        required={isRequired}
        className={clsx(classes.root, className)}
        error={invalid && { content: meta.error, pointing: 'left' }}
        label={
          <Form.Checkbox
            className={clsx({
              [classes.errorLabel]: isRequired
            })}
            toggle
            label={controlLabel || label}
            {...input}
            onChange={(event, data) => input.onChange({ target: data })}
            {...rest}
          />
        }
      />
    </FormFieldGrid>
  );
};

Switch.propTypes = {
  input,
  meta,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  helperText: PropTypes.node,
  validateOnMount: PropTypes.bool,
  onText: PropTypes.node,
  offText: PropTypes.node,
  description: PropTypes.node
};

export default Switch;
