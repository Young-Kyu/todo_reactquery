import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { S_FlexBox } from '../../style/container/S_Container';


interface SearchProps {

  submitHandler: (value: string) => void;
  title: string;
}


const Search = (props: SearchProps): JSX.Element => {

  const { submitHandler, title } = props;

  const [inputValue, setInputValue] = useState<string>('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const submit = () => {
    submitHandler(inputValue);
  }

  return (
    <S_FlexBox gap={10} alignItems='center'>
      <div>{title} : </div>
      <S_FlexBox alignItems='center' gap={5}>
        <input type="text" value={inputValue} onChange={inputChangeHandler}
          onKeyUp={(e) => {
            if (e.code.toLowerCase().includes('enter')) {
              submit();
            }
          }}
        />
        <button onClick={submit}>검색</button>
      </S_FlexBox>
    </S_FlexBox>
  );


}
export default Search;