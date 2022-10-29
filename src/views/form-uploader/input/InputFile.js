// ** Reactstrap Imports
import { Card, Grid, Typography } from '@mui/material';
import { CardBody, Label, Input } from 'reactstrap';

const InputFile = () => {
  return (
    <Card sx={{ px: 5, py: 3 }}>
      <Typography>Input File</Typography>
      <br />
      <CardBody>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Label className="form-label" for="inputFile">
              Simple File Input
            </Label>
            <Input type="file" id="inputFile" name="fileInput" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Label className="form-label" for="exampleMultipleFileBrowser">
              Multiple files input
            </Label>
            <Input
              type="file"
              id="exampleMultipleFileBrowser"
              name="MultipleFiles"
              multiple
            />
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
};
export default InputFile;
