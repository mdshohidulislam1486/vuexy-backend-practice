// ** Reactstrap Imports
import { Card, Grid, Typography } from '@mui/material';
import {
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  Input,
  Label,
  Row,
  Col,
} from 'reactstrap';

const InputSizes = () => {
  return (
    <Card sx={{ px: 5, py: 3 }}>
      <Typography>Horizontal form label sizing</Typography>
      <CardBody>
        <CardText>
          Be sure to use <code>size="sm"</code> or <code>size="lg"</code> with
          your <code>&lt;Label&gt;</code> or <code>&lt;legend&gt;</code> to
          correctly follow the size of input size.
        </CardText>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Label className="form-label" for="input-large">
              Large
            </Label>
            <Input
              type="text"
              id="input-large"
              bsSize="lg"
              placeholder="Large Input"
            />
          </Grid>
          <Grid item sm={12}>
            <Label className="form-label" for="input-default">
              Default
            </Label>
            <Input type="text" id="input-default" placeholder="Default Input" />
          </Grid>
          <Grid item sm={12}>
            <Label className="form-label" for="input-small">
              Small
            </Label>
            <Input
              type="text"
              id="input-small"
              bsSize="sm"
              placeholder="Small Input"
            />
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
};
export default InputSizes;
