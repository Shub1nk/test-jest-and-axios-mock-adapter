const MockAdapter = require('axios-mock-adapter');
const axiosInstance = require('axios');

const API = 'API';
const mockData = {status: 'Ок'}

async function httpRequest () {
  var { data } = await axiosInstance.get(API);
  return data;
} 

describe('Test', () => {
  it('Some test', async () => {
      const mock = new MockAdapter(axiosInstance);

      mock.onGet(API).reply(200, mockData);

      const result = await httpRequest()

      expect(result).toEqual(mockData)
  });
});