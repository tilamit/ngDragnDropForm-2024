import { FormlyFieldConfig } from '@ngx-formly/core';

export type DndInputType =
  | 'Text'
  | 'Number'
  | 'DatePicker'
  | 'Radio'
  | 'Checkbox'
  | 'Button';

export type DnDFormConfig = FormlyFieldConfig & {
  dndName: DndInputType;
  dndIcon: string;
  dndTemp: boolean;
  fieldGroup?: DnDFormConfig[];
};

export const dndFormInputText: DnDFormConfig = {
  dndName: 'Text',
  dndIcon: 'text_fields',
  dndTemp: false,
  type: 'input',
  templateOptions: {
    type: 'text',
    label: 'Text Label',
    required: true,
  },
};

export const dndFormInputNumber: DnDFormConfig = {
  dndName: 'Number',
  dndTemp: false,
  dndIcon: 'numbers',
  type: 'input',
  templateOptions: {
    type: 'number',
    label: 'Number Label',
    required: true,
  },
};

export const dndFormInputDatepicker: DnDFormConfig = {
  dndName: 'DatePicker',
  dndTemp: false,
  dndIcon: 'today',
  type: 'datepicker',
  templateOptions: {
    label: 'Date Picker Label',
    required: true,
  },
};

export const dndFormInputRadio: DnDFormConfig = {
  dndName: 'Radio',
  dndTemp: false,
  dndIcon: 'radio_button_checked',
  type: 'radio',
  templateOptions: {
    label: 'Radio Label',
    required: true,
    options: [{ label: 'Option 1...', value: 1 }],
  },
};

export const dndFormInputCheckbox: DnDFormConfig = {
  dndName: 'Checkbox',
  dndIcon: 'check_box',
  dndTemp: false,
  type: 'checkbox',
  defaultValue: false,
  templateOptions: {
    label: 'Checkbox Label',
    required: true,
  },
};

export const dndFormInputButton: DnDFormConfig = {
  dndName: 'Button',
  dndIcon: 'button',
  dndTemp: false,
  type: 'button',
  templateOptions: {
    type: 'button',
    value: 'Button',
    required: true,
  },
};

export const DndFormInputs: DnDFormConfig[] = [
  dndFormInputText,
  dndFormInputRadio,
  dndFormInputDatepicker
];
