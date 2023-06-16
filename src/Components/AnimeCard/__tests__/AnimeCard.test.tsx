/* eslint-disable react/react-in-jsx-scope */
import {render} from '@testing-library/react-native';
import AnimeCard from '..';
import {TAnime} from '../../../Types';

describe('Anime Card', () => {
  it('Renders Correctly', () => {
    // Mocking data
    const anime: TAnime = {title: 'Anime', image: null, mal_id: 2, rating: ''};
    const tree = render(<AnimeCard anime={anime} onPress={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });
});
