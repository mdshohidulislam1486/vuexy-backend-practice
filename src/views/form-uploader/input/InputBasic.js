// ** Reactstrap Imports
import { Card, Grid, Typography } from '@mui/material';
import { Label, Input, FormText, CardBody } from 'reactstrap';

const InputBasic = () => {
  return (
    <Card sx={{ px: 5, py: 3 }}>
      <Typography>Basic Inputs</Typography>
      <CardBody style={{ marginTop: '1em' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4} className="">
            <Label className="form-label " for="basicInput">
              Basic Input
            </Label>
            <Input type="email" id="basicInput" placeholder="Enter Email" />
          </Grid>
          <Grid item xs={12} md={6} lg={4} className="">
            <Label className="form-label" for="InputHelp">
              Input text with help
            </Label>{' '}
            <small className="text-muted">
              eg. <i>someone@example.com</i>
            </small>
            <Input type="email" id="InputHelp" />
          </Grid>
          <Grid item xs={12} md={6} lg={4} className="">
            <Label className="form-label" for="disabledInput">
              Disabled Input
            </Label>
            <Input type="text" id="disabledInput" disabled />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Label className="form-label" for="helperText">
              With Helper Text
            </Label>
            <Input type="text" id="helperText" placeholder="Name" />
            <FormText className="text-muted">
              Find helper text here for given textbox.
            </FormText>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Label className="form-label" for="readonlyInput">
              Readonly input
            </Label>
            <Input
              type="text"
              id="readonlyInput"
              readOnly
              value="You can't update me :P"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Label className="form-label" for="StaticInput">
              Readonly Static Text
            </Label>
            <p className="form-control-static" id="StaticInput">
              email@pixinvent.com
            </p>
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
};
export default InputBasic;
