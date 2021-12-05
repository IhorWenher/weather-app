import Slider from '@mui/material/Slider';
import Styles from './Slider.module.css';

const RangeSlider = ({ temp, onChange }) => {
  return (
    <div className={Styles.slider}>
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
    </div>
  );
};

export default RangeSlider;
