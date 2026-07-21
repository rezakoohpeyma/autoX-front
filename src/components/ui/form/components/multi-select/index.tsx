'use client';

import { ComponentProps, JSX, useId } from 'react';
import { 
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger
} from '../../../dropdown-menu'; 
import { useFormStyleContext } from '../../hooks/use-form-style-context';
import { 
    Controller,
    FieldValues,
    Path, 
    useFormContext 
} from 'react-hook-form';
import { cn } from '@/lib/utils';
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

export default function MultiSelect<
    TForm extends FieldValues, 
    TOptions, 
    TValue extends string | number
>({ 
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
        <div className={inputFieldClasses}>
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
                                <DropdownMenuGroup className='h-40'>
                                    {options.map((option, i) => 
                                        <DropdownMenuCheckboxItem
                                            key={getOptionValue(option)} 
                                            id={String(i)}
                                            onSelect={(e: Event) => e.preventDefault()}
                                            className='cursor-pointer'
                                            checked={field.value?.includes(getOptionValue(option)) ?? false}
                                            onCheckedChange={() => toggleValue(getOptionValue(option))}
                                        >
                                            {getOptionLabel(option)}
                                        </DropdownMenuCheckboxItem>
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

