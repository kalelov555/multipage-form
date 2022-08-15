import { FormData } from "../../typings/formData";
import "./CheckboxInfo.css";

export type Props = {
  formData: FormData;
  onCheckboxInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const focusStyle = {
  backgroundColor: "#CEDEF3",
  border: "1px solid #517EE7",
  borderRadius: "10px",
};

export const CheckboxInfo = ({
  formData,
  onCheckboxInputChange,
  onInputChange,
}: Props) => {
  return (
    <div className='checkbox-container'>
      <p className='step-p'>Step 3/3</p>
      <h1>Checkbox</h1>
      <div className='checkbox-form'>
        <div className='genders-container'>
          <p className='input-item'>
            <label>
              <input
                type='radio'
                name='gender'
                value='male'
                onChange={onInputChange}
                checked={formData.gender === "male"}
              />

              <img
                style={formData.gender === "male" ? focusStyle : undefined}
                alt='male'
                src='https://cdn3.iconfinder.com/data/icons/mix-elements/128/b-80-512.png'
              />
            </label>
          </p>
          <p className='input-item'>
            <label>
              <input
                type='radio'
                name='gender'
                value='female'
                onChange={onInputChange}
                checked={formData.gender === "female"}
              />

              <img
                style={formData.gender === "female" ? focusStyle : undefined}
                alt='female'
                src='https://cdn-icons-png.flaticon.com/512/65/65581.png'
              />
            </label>
          </p>
        </div>
        <p className='input-item'>
          <label className='input-item-checkbox'>
            <input
              type='checkbox'
              name='checkboxesOne'
              onChange={onCheckboxInputChange}
              value={formData.checkboxesOne}
              checked={formData.checkboxesOne ? true : false}
            />
            I want to add this option
          </label>
        </p>
        <p className='input-item'>
          <label className='input-item-checkbox'>
            <input
              type='checkbox'
              name='checkboxesTwo'
              onChange={onCheckboxInputChange}
              value={formData.checkboxesTwo}
              checked={formData.checkboxesTwo ? true : false}
            />
            Let me click on this and choose some cool stuf
          </label>
        </p>
      </div>
    </div>
  );
};
