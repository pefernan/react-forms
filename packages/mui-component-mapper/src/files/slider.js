import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, FormHelperText, Slider as MUISlider, FormLabel, Grid } from '@material-ui/core';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import FormFieldGrid from '../common/form-field-grid';
import { validationError } from '../common/helpers';

const Slider = (props) => {
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
    FormFieldGridProps,
    FormControlProps,
    FormGroupProps,
    FormLabelProps,
    FormHelperTextProps,
    before,
    after,
    InputGridProps,
    BeforeGridProps,
    SliderGridProps,
    AfterGridProps,
    ...rest
  } = useFieldApi(props);

  const invalid = validationError(meta, validateOnMount);
  const text = invalid || helperText || description;

  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <FormControl fullWidth required={isRequired} error={!!invalid} component="fieldset" {...FormControlProps}>
        <FormGroup {...FormGroupProps}>
          <FormLabel component="legend" {...FormLabelProps}>
            {label}
          </FormLabel>
          <Grid container spacing={2} alignItems="center" {...InputGridProps}>
            {before && (
              <Grid item {...BeforeGridProps}>
                {before}
              </Grid>
            )}
            <Grid item xs {...SliderGridProps}>
              <MUISlider {...input} {...rest} disabled={isDisabled || isReadOnly} onChange={(_e, value) => input.onChange(value)} />
            </Grid>
            {after && (
              <Grid item {...AfterGridProps}>
                {after}
              </Grid>
            )}
          </Grid>
          {(invalid || text) && <FormHelperText {...FormHelperTextProps}>{invalid || text}</FormHelperText>}
        </FormGroup>
      </FormControl>
    </FormFieldGrid>
  );
};

Slider.propTypes = {
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  helperText: PropTypes.node,
  description: PropTypes.node,
  validateOnMount: PropTypes.bool,
  FormFieldGridProps: PropTypes.object,
  FormControlProps: PropTypes.object,
  FormGroupProps: PropTypes.object,
  FormLabelProps: PropTypes.object,
  FormHelperTextProps: PropTypes.object,
  before: PropTypes.node,
  after: PropTypes.node,
  InputGridProps: PropTypes.object,
  BeforeGridProps: PropTypes.object,
  SliderGridProps: PropTypes.object,
  AfterGridProps: PropTypes.object
};

export default Slider;
