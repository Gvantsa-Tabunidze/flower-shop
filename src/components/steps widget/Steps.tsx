import { Box, Step, StepLabel, Stepper } from "@mui/material";

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function Steps({childrenArr}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {childrenArr.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}