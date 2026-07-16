'use client';
import { ComponentProps, JSX, useId } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../../../dropdown-menu'; 
import { useFormStyleContext } from '../../hooks/use-form-style-context';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Checkbox } from '../../../checkbox';
import { Badge } from '@/components/ui/badge';
import { LuCircleMinus } from 'react-icons/lu';

type MultiSelectProps<
  TForm extends FieldValues,
  TOption,
  TValue extends string | number
> = {
  nameId: Path<TForm>;
  options: TOption[];
  defaultTxt?: string;
  getOptionValue(option: TOption): TValue;
  disabled?: boolean;
  getOptionLabel(option: TOption): React.ReactNode;
} & ComponentProps<"div">;

export default function MultiSelect<TForm extends FieldValues, TOptions, TValue extends string | number>({ 
        nameId,
        children,
        defaultTxt = 'Select',
        options,
        getOptionValue,
        getOptionLabel,
        disabled,
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

                    const removeValue = (value: TValue) => {
                        field.onChange(
                            selectedValues.filter(item => item !== value)
                        );
                    };
                    
                    return (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div
                                    className={
                                        cn(
                                            'text-left px-4 cursor-pointer flex items-center gap-2 overflow-x-scroll',
                                            inputBoxClasses
                                        )
                                    }
                                    onClick={(e) => disabled && e.preventDefault()}
                                >
                                    {selectedValues.length > 0 
                                        ?   options.map((option, i) => 
                                                selectedValues.includes(getOptionValue(option)) &&
                                                <Badge 
                                                    key={i}
                                                    className="text-[12px]! px-2 py-1 h-6 border-primary! text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                                                    variant={'outline'} 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeValue(getOptionValue(option))

                                                    }}
                                                    onPointerDown={(e) => e.stopPropagation()}
                                                >
                                                    <span><LuCircleMinus/></span>
                                                    <span className='capitalize'>{getOptionLabel(option)}</span>
                                                </Badge>
                                            )
                                        :   defaultTxt
                                }
                                </div>
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

