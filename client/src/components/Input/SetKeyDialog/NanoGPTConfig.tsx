import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import InputWithLabel from './InputWithLabel';

const NanoGPTConfig = () => {
  const { control } = useFormContext();
  return (
    <form className="flex-wrap">
      <Controller
        name="apiKey"
        control={control}
        render={({ field }) => (
          <InputWithLabel
            id="apiKey"
            {...field}
            label="NanoGPT API Key"
            labelClassName="mb-1"
            inputClassName="mb-2"
          />
        )}
      />
    </form>
  );
};

export default NanoGPTConfig;
