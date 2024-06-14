import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const useStyles = makeStyles({
  root: {
    "min-width": 300,
  },
});

export default function RangeSlider({ setYear }) {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([1990, 2024]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setYear(newValue as number[]);
  };
  setYear(value);
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Year
      </Typography>
      <Slider
        min={1990}
        max={2024}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}
