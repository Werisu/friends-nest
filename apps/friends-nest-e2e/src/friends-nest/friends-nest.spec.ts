import axios from 'axios';

const DefaultUser = {
  username: 'john',
  password: 'Test1234',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@dispostable.com',
  active: true,
  salt: 'salt',
};

describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/api`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });

  it('GET /api/user', async () => {
    const res = await axios.get(`/api/user`);

    expect(res.status).toBe(200);
  });

  it('GET /api/user/1', async () => {
    const res = await axios.post(`/api/user/`, DefaultUser);
    const res2 = await axios.get(`/api/user/${res.data.id}`);

    expect(res2.status).toBe(200);
  });
});
