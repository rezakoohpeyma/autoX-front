'use client';
import { ComponentProps, JSX, useId } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../../../dropdown-menu'; 
import { useFormStyleContext } from '../../hooks/use-form-style-context';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Checkbox } from '../../../checkbox';

type MultiSelectProps<
  TForm extends FieldValues,
  TOption,
  TValue extends string | number
> = {
  nameId: Path<TForm>;

  options: TOption[];

  defaultTxt?: string;

  getOptionValue(option: TOption): TValue;

  getOptionLabel(option: TOption): React.ReactNode;
} & ComponentProps<"div">;

export default function MultiSelect<TForm extends FieldValues, TOptions, TValue extends string | number>({ 
        nameId,
        children,
        defaultTxt = 'Select',
        options,
        getOptionValue,
        getOptionLabel,
    } : MultiSelectProps<TForm, TOptions, TValue>
    ): JSX.Element {

    const { 
        inputFieldClasses,
        inputBoxClasses,
    } = useFormStyleContext()

    const {
        control
    } = useFormContext<TForm>()

    const selectId = useId()
    return (
        <div className={
            cn(
                '',
                inputFieldClasses
            )
        }>
            {children && <label className='block' htmlFor={selectId}>{children}</label>}

            <Controller 
                control={control}
                name={nameId}
                render={({ field }) =>{ 
                    const selectedValues = (field.value ?? []) as TValue[];

                    const toggleValue = (value: TValue) => {
                    const exists = selectedValues.includes(value);

                    const newValues = exists
                        ? selectedValues.filter(item => item !== value)
                        : [...selectedValues, value];

                    field.onChange(newValues);
                    };
                    
                    return (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <input 
                                    type='button' 
                                    id={selectId} 
                                    className={
                                        cn(
                                            'text-left px-4 cursor-pointer',
                                            inputBoxClasses
                                        )
                                    }
                                    defaultValue={defaultTxt}
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    {options.map((option, i) => 
                                        <DropdownMenuItem 
                                            key={getOptionValue(option)} 
                                            className='cursor-pointer!' 
                                            onSelect={(e) => e.preventDefault()}
                                            asChild
                                        >
                                            <label htmlFor={String(i)} className='cursor-pointer'>
                                                <Checkbox
                                                    id={String(i)}
                                                    className={cn(
                                                        "data-[state=checked]:bg-white data-[state=checked]:text-primary border-primary",
                                                        'cursor-pointer')}
                                                    checked={field.value?.includes(getOptionValue(option)) ?? false}
                                                    onCheckedChange={() => toggleValue(getOptionValue(option))}
                                                />
                                                {getOptionLabel(option)}
                                            </label>
                                        </DropdownMenuItem>
                                    )}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )
                }
            }
            />
        </div>
    )
}

