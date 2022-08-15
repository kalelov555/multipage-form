import { FormData } from "../../typings/formData";
import "./SignupInfo.css";

export type Props = {
  formErrors: Partial<FormData>;
  formData: FormData;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SignupInfo = ({ formData, onInputChange, formErrors }: Props) => {
  return (
    <div className='signup-container'>
      <p className='step-p'>Step 1/3</p>
      <h1 className='form-page-title'>Sign UP</h1>
      <div className='signup-form'>
        <div className='form-grid'>
          <div className='form-grid-left'>
            <p className='input-item'>
              <label>First Name</label>
              <input
                type='text'
                name='firstName'
                placeholder='First name'
                value={formData.firstName}
                onChange={onInputChange}
              />
            </p>

            <p className='input-item'>
              <label>Last Name</label>
              <input
                type='text'
                placeholder='Last name'
                name='lastName'
                value={formData.lastName}
                onChange={onInputChange}
              />
            </p>
          </div>

          <div className='form-grid-right'>
            <p className='input-item'>
              <label>Date of birth</label>
              <input
                style={
                  formErrors.birthDate
                    ? {
                        backgroundColor: "#EC8E8E",
                        border: "1px solid red",
                      }
                    : undefined
                }
                type='date'
                name='birthDate'
                value={formData.birthDate}
                onChange={onInputChange}
              />
            </p>
            <p className='error-p'>{formErrors.birthDate}</p>

            <p className='input-item'>
              <label>Email Address</label>
              <input
                style={
                  formErrors.email
                    ? {
                        backgroundColor: "#EC8E8E",
                        border: "1px solid red",
                      }
                    : undefined
                }
                type='email'
                name='email'
                value={formData.email}
                onChange={onInputChange}
              />
            </p>
            <p className='error-p'>{formErrors.email}</p>
          </div>
        </div>
        <p className='input-item-address input-item'>
          <label>Address</label>
          <input
            type='text'
            placeholder='Address'
            name='address'
            value={formData.address}
            onChange={onInputChange}
          />
        </p>
      </div>
    </div>
  );
};
