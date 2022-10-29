// ** Reactstrap Imports
import { Card, Grid, Typography } from '@mui/material';
import { CardText, Input, Row, Col, CardBody } from 'reactstrap';

const InputFloating = () => {
  return (
    <Card sx={{ px: 5, py: 3 }}>
      <Typography>Floating Label Inputs</Typography>
      <CardBody>
        <CardText className="mb-3">
          For Floating Label Inputs, need to use <code>.form-floating</code>{' '}
          class & add attribute <code>disabled</code> for disabled Floating
          Label Input.
        </CardText>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="form-floating">
              <Input
                type="text"
                id="floatingInput"
                placeholder="Label Placeholder"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="form-floating">
              <Input
                type="text"
                id="squareInputDisabled"
                placeholder="Label Placeholder"
                disabled
              />
            </div>
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
};
export default InputFloating;
