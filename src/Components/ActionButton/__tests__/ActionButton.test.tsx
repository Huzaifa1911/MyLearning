/* eslint-disable react/react-in-jsx-scope */
import {fireEvent, render} from '@testing-library/react-native';

import ActionButton from '..';

describe('Action Button', () => {
  it('Renders Correctly', () => {
    const tree = render(<ActionButton title="Title" onPress={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });

  // Checking onPress
  it('Calls onPress', async () => {
    // Mocking onPress, so that we will able to test.
    const onPress = jest.fn();
    const {getByTestId} = render(
      <ActionButton title="ActionButton" onPress={onPress} />,
    );

    const button = getByTestId('ActionButton');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
});
