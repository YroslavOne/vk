import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';

const Controlledheckbox = ({ items, setChecked }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (item) => (event) => {
    if (event.target.checked) {
      setCheckedItems([...checkedItems, item]);
    } else {
      setCheckedItems(checkedItems.filter((i) => i !== item));
    }
  };

  const handleSubmit = () => {
    setChecked(checkedItems);
  };

  return (
    <div>
      <FormGroup>
        {items.map((item, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkedItems.includes(item.slug)}
                onChange={handleChange(item.slug)}
                color="primary"
              />
            }
            label={item.name}
          />
        ))}
      </FormGroup>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Controlledheckbox;
