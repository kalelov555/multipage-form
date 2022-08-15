import { FormData } from "../../typings/formData";
import "./MessageInfo.css";

export type Props = {
  formData: FormData;
  onInputChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onCheckboxInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MessageInfo = ({
  formData,
  onInputChange,
  onCheckboxInputChange,
}: Props) => {
  return (
    <div className='message-container'>
      <p className='step-p'>Step 2/3</p>
      <h1 className='form-page-title'>Message</h1>
      <div className='message-form'>
        <p className='input-item'>
          <label>Message</label>
          <textarea
            rows={6}
            placeholder='Message'
            name='messageContent'
            value={formData.messageContent}
            onChange={onInputChange}
          />
        </p>

        <div className='checkboxes'>
          <p className='input-item'>
            <label className='input-item-checkbox'>
              <input
                type='checkbox'
                name='messageCheckboxOne'
                onChange={onCheckboxInputChange}
                value={formData.messageCheckboxOne}
                checked={formData.messageCheckboxOne ? true : false}
              />
              Number one choice
            </label>
          </p>

          <p className='input-item'>
            <label className='input-item-checkbox'>
              <input
                type='checkbox'
                name='messageCheckboxTwo'
                onChange={onCheckboxInputChange}
                value={formData.messageCheckboxTwo}
                checked={formData.messageCheckboxTwo ? true : false}
              />
              Number two choice
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};
