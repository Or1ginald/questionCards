import { ChangeEvent, memo } from 'react';

import s from './CustomTextInput.module.scss';

import { AutoCapitalize } from 'enum';
import { ReturnComponentType } from 'types';

type InputProps = {
  placeholder: string;
  type: string;
  className?: string;
  onChange: (value: string) => void;
  value: string;
  name?: string;
  autoCapitalize?: AutoCapitalize.true | AutoCapitalize.false;
};

export const CustomTextInput = memo((props: InputProps): ReturnComponentType => {
  const { placeholder, type, className, value, onChange, name, autoCapitalize } = props;
  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };
  return (
    <div className={s.inputWrap}>
      <input
        size={40}
        type={type}
        name={name}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
        className={className ?? s.input}
        autoComplete="off"
        spellCheck={false}
        aria-autocomplete="list"
        autoCapitalize={autoCapitalize ?? AutoCapitalize.true}
      />
    </div>
  );
});
