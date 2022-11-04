import fetchData from '../js/http.js';
import getLevel from '../js/level.js';

jest.mock('../js/http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 30,
  });

  const result = getLevel(1);
  const standard = 'Ваш текущий уровень: 30';
  expect(result).toMatch(standard);
});

test('should call getLevel with responce not ok', () => {
  fetchData.mockReturnValue({
    status: 'not found',
  });

  const result = getLevel(1);
  const standard = 'Информация об уровне временно недоступна';
  expect(result).toMatch(standard);
});
