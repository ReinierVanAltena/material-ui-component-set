(() => ({
  name: 'Title',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Text',
      options: [
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'content',
          value: ['Type your content here...'],
          configuration: {
            as: 'MULTILINE',
          },
        },
        {
          value: 'Title2',
          label: 'Type',
          key: 'type',
          type: 'FONT',
        },
        {
          type: 'CUSTOM',
          label: 'Text Alignment',
          key: 'textAlignment',
          value: 'left',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Left', value: 'left' },
              { name: 'Center', value: 'center' },
              { name: 'Right', value: 'right' },
            ],
          },
        },
        {
          type: 'COLOR',
          label: 'Text Color',
          key: 'textColor',
          value: 'Black',
        },
        {
          value: ['0rem', '0rem', '0rem', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [],
    },
  ],
}))();
