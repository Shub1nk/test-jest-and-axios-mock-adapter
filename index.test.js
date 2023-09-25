const MockAdapter = require('axios-mock-adapter');
const axios = require('axios');

async function httpRequest () {
  var {data} = await axiosInstance.get(API);
  return data;
} 

const mockData = {status: 'Ок'}

describe('useEffect', () => {
  it('should make the api call to fetch the data value and set it in the state', async () => {
      const mock = new MockAdapter(axios);

      mock.onGet('API').reply(200, mock.onGet(API).reply(200, mockData));

      const result = await httpRequest()

      expect(result).toEqual(mockData)
  });
});