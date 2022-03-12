const multiple = 8;
const amount = 15;

const properties: [string, string] = ['margin', 'padding'];
const directions = [
  'Top',
  'Right',
  'Bottom',
  'Left',
  'Vertical',
  'Horizontal',
  '',
];

const styles: any = {
  margin: {},
  padding: {},
};

for (let i = 1; i <= amount; i++) {
  properties.forEach(property => {
    directions.forEach(direction => {
      const className =
        property.charAt(0) + direction.charAt(0).toLowerCase() + i;

      styles[property][className] = {
        [`${property}${direction}`]: i * multiple,
      };
    });
  });
}

export const margin = styles.margin;
export const padding = styles.padding;
