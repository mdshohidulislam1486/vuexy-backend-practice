// ** React Imports
import { Fragment } from 'react';

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap';

// ** Custom Components
// import Breadcrumbs from '@components/breadcrumbs';

// ** Demo Components
import InputBasic from './InputBasic';
import InputFile from './InputFile';
import InputSizes from './InputSizes';
// import InputState from './InputStates';
import InputFloating from './InputFloating';
import InputHorizontalSize from './InputHorizontalSize';
import { Grid } from '@mui/material';

const Input = () => {
  return (
    <Fragment>
      {/*  <Breadcrumbs
        title="Input"
        data={[{ title: 'Form Elements' }, { title: 'Input' }]}
      /> */}
      <Grid container spacing={5} className="input-main-section">
        <Grid item xs={12}>
          <InputBasic />
        </Grid>
        <Grid item xs={12} container spacing={3}>
          <Grid item xs={12} md={6}>
            <InputSizes />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputHorizontalSize />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <InputFloating />
        </Grid>
        <Grid item xs={12}>
          <InputFile />
        </Grid>
        {/* 
        <Col sm="12">
          <InputState />
        </Col> */}
      </Grid>
    </Fragment>
  );
};
export default Input;
