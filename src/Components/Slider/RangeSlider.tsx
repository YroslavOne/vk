import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import style from "./RangeSlider.module.css";
import { RangeSliderProps } from "./RangeSlider.props";

const useStyles = makeStyles({
  root: {
    "min-width": 300,
  },
});

export default function RangeSlider({
  name,
  setForElem,
  start,
  end,
}: RangeSliderProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([start, end]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setForElem(newValue as number[]);
  };
  setForElem(value);
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {name}
      </Typography>
      <Slider
        min={start}
        max={end}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}
