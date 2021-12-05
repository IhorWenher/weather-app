import Slider from '@mui/material/Slider';

const RangeSlider = ({ temp, onChange }) => {
  return (
    <Slider
      value={Math.round(temp)}
      onChange={onChange}
      aria-label="Temperature"
      valueLabelDisplay="auto"
      step={1}
      marks
      min={-40}
      max={40}
    />
  );
};

export default RangeSlider;
