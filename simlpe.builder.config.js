// https://github.com/vueform/builder#text
import {
  TypeField,
  NameField,
  LabelField,
  InfoField,
  DescriptionField,
  BeforeField,
  BetweenField,
  AfterField,
  SizeField,
  ColumnsField,
  ConditionsField
} from '@vueform/builder';

export default {
  label: 'custom selector',
  description: 'sample test',
  icon: 'https://domain.com/user-element-icon.svg',
  category: 'custom',
  schema: {
    type: 'custom'
  },
  sections: {
    properties: {
      name: 'properties',
      label: 'Properties',
      fields: {
        type: { type: TypeField },
        name: { type: NameField },
        label: { type: LabelField },
        tooltip: { type: InfoField },
        description: { type: DescriptionField }
      }
    },
    options: {
      name: 'options',
      label: 'Logo options',
      fields: {
        // ... custom fields will come here
      }
    },
    decorators: {
      name: 'decorators',
      label: 'Decorators',
      fields: {
        before: { type: BeforeField },
        between: { type: BetweenField },
        after: { type: AfterField }
      }
    },
    layout: {
      name: 'layout',
      label: 'Layout',
      fields: {
        size: { type: SizeField },
        columns: { type: ColumnsField }
      }
    },
    conditions: {
      name: 'conditions',
      label: 'Conditions',
      fields: {
        conditions: { type: ConditionsField }
      }
    }
  },
  separators: {
    properties: [
      ['type', 'name'],
      ['label', 'tooltip'],
      ['description']
    ]
  }
};
