/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('ExampleController', () => {
  it('test route index from Example', async () => {
    const response = await request(app).get('/example/');

    expect(response.body).toHaveProperty('result');
  });
});
