import { useEffect, useState } from "react";
import { FormData } from "../../typings/formData";
import { CheckboxInfo } from "../CheckboxInfo/CheckboxInfo";
import { FormImage } from "../FormImage/FormImage";
import { Menu } from "../Menu/Menu";
import { MessageInfo } from "../MessageInfo/MessageInfo";
import { SignupInfo } from "../SignupInfo/SignupInfo";
import "./Form.css";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const isNotUniqueEmail = (email: string, formDatas: FormData[]) => {
  return formDatas.some((data) => data.email === email);
};

const getFormattedToday = (today: Date) => {
  let dd = today.getDate().toString();
  let mm = (today.getMonth() + 1).toString(); //January is 0!
  let yyyy = today.getFullYear().toString();

  if (parseInt(dd) < 10) dd = "0" + dd;

  if (parseInt(mm) < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
};

export const Form = () => {
  const [page, setPage] = useState<number>(0);
  const [fetchedFormData, setFetchedFormData] = useState<any>([]);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    address: "",
    messageContent: "",
    messageCheckboxOne: 0,
    messageCheckboxTwo: 0,
    gender: "",
    checkboxesOne: 0,
    checkboxesTwo: 0,
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({
    email: "",
    birthDate: "",
  });

  const validate = (values: FormData) => {
    const errors = {
      birthDate: "",
      email: "",
    };
    //валидность email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const today = new Date();

    const formattedToday = getFormattedToday(today);

    if (!values.email) errors.email = "Email is required";
    else if (isNotUniqueEmail(formData.email, fetchedFormData))
      errors.email = "Email should be unique";
    else if (!regex.test(values.email))
      errors.email = "This is not valid email";

    if (!values.birthDate) errors.birthDate = "Birthday is required";
    else if (formattedToday < formData.birthDate)
      errors.birthDate = "Invalid birthday";

    return errors;
  };

  const responsesCollectionRef = collection(db, "responses");

  useEffect(() => {
    //получить все ответы записанные ранее
    const getFormDatas = async () => {
      const data = await getDocs(responsesCollectionRef);
      setFetchedFormData(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getFormDatas();
  }, []);

  const handleSubmitForm = async () => {
    if (formErrors.email === "" && formErrors.birthDate === "") {
      alert("form submitted");
      await addDoc(responsesCollectionRef, formData);
      setFormData({
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        address: "",
        messageContent: "",
        messageCheckboxOne: 0,
        messageCheckboxTwo: 0,
        gender: "",
        checkboxesOne: 0,
        checkboxesTwo: 0,
      });
    }
    setPage(0);
  };

  //определяет имя и значение где произошел триггер ивента и перезаписывает состояние нужного элемента
  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onCheckboxInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const newValue = value === "1" ? 0 : 1;
    setFormData({ ...formData, [name]: newValue });
  };

  const onBackButtonClick = () => {
    setPage(page - 1);
  };

  const onNextButtonClick = () => {
    setPage(page + 1);
    setFormErrors(validate(formData));
  };

  const FormPageDisplay = () => {
    if (page === 0)
      return (
        <SignupInfo
          formData={formData}
          onInputChange={onInputChange}
          formErrors={formErrors}
        />
      );
    else if (page === 1)
      return (
        <MessageInfo
          formData={formData}
          onInputChange={onInputChange}
          onCheckboxInputChange={onCheckboxInputChange}
        />
      );
    else
      return (
        <CheckboxInfo
          formData={formData}
          onCheckboxInputChange={onCheckboxInputChange}
          onInputChange={onInputChange}
        />
      );
  };

  return (
    <div className='form'>
      <div className='main'>
        <div className='form-image'>
          <FormImage page={page} />
        </div>
        <div className='form-container'>
          <header>
            <Menu activePage={page} />
            <div className='menu-bottom'></div>
          </header>
          <main>
            {FormPageDisplay()}
            <div className='menu-bottom'></div>
          </main>

          <footer>
            <button
              className='white-button'
              hidden={page === 0}
              onClick={onBackButtonClick}
            >
              Back
            </button>
            <button
              className='blue-button'
              hidden={page === 2}
              disabled={page === 2}
              onClick={onNextButtonClick}
            >
              Next
            </button>
            <button
              className='blue-button'
              hidden={page !== 2}
              onClick={handleSubmitForm}
            >
              Submit
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};
