'use client';
import { ComponentProps, JSX, useId, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../../../dropdown-menu'; 
import { useFormStyleContext } from '../../hooks/use-form-style-context';
import { FieldValues, useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Button } from '../../../button';
import { Checkbox } from '../../../checkbox';

type  MultiSelectProps<TOptions> = {
    defaultTxt?: string;
    options: TOptions[]
    getOptionValue: (options: TOptions) => string;
    getOptionLabel: (options: TOptions) => string | number;
} & ComponentProps<'div'>

export default function MultiSelect<TForm extends FieldValues, TOptions>({ 
        children,
        defaultTxt = 'Select',
        options,
        getOptionValue,
    } : MultiSelectProps<TOptions>
    ): JSX.Element {
        
    const { 
        inputFieldClasses,
        inputBoxClasses,
    } = useFormStyleContext()

    const {
        control
    } = useFormContext<TForm>()
    const [SelectedValues, setSelectedValues] = useState<string[]>([]);


    function handleCheckedChange(newValue: string){
        setSelectedValues(lastValues => lastValues.includes(newValue) ? lastValues.filter(value => value !== newValue) : [...lastValues, newValue])
    }
    const selectId = useId()
    return (
        <div className={
            cn(
                '',
                inputFieldClasses
            )
        }>
            {children && <label id={selectId}>{children}</label>}

            <DropdownMenu>
            <DropdownMenuTrigger>
                <Button 
                    type='button' 
                    id={selectId} 
                    variant='outline'
                    className={
                        cn(
                            '',
                            inputBoxClasses
                        )
                    }
                >
                    {defaultTxt}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    {options.map((option) => 
                        <DropdownMenuItem key={getOptionValue(option)}>
                            <Checkbox 
                                checked={SelectedValues?.includes(getOptionValue(option))} 
                                onCheckedChange={() => handleCheckedChange(getOptionValue(option))}
                            />
                        </DropdownMenuItem>
                    )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}

