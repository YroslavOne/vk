import React, { ChangeEvent, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { useContextProvider } from '../../../Context';
import style from './ControlledCheckbox.module.css';
import { ControlledCheckboxProps } from './ControlledCheckbox.props';

const Controlledheckbox: React.FC<ControlledCheckboxProps>  = ({ items }) => {
  const { genreList, setGenreList, toggleGenreList } = useContextProvider();
  const [checkedItems, setCheckedItems] = useState<string[]>(genreList);

  const handleChange = (item: string) => (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedItems([...checkedItems, item]);
    } else {
      setCheckedItems(checkedItems.filter((i) => i !== item));
    }
  };

  const handleSubmit = () => {
    setGenreList(checkedItems);
    toggleGenreList();
  };

  return (
    <div className={style['container']}>
      <FormGroup
        className={style['form-group']}
        sx={{ display: 'flex', flexDirection: 'row', ml: 5 }}
      >
        {items.map((item, index) => (
          <FormControlLabel
            className={style['form-control']}
            key={index}
            control={
              <Checkbox
                checked={checkedItems.includes(item.name)}
                onChange={handleChange(item.name)}
                color="primary"
              />
            }
            label={item.name}
          />
        ))}
      </FormGroup>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Выбрать
      </Button>
    </div>
  );
};

export default Controlledheckbox;
