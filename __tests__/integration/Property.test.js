/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('PropertyController', () => {
  it('Property index', async () => {
    const response = await request(app).get('/properties');

    expect(response).toHaveProperty('result.property.id');
  });

  it('Property store', async () => {
    const response = await request(app)
      .post('/properties')
      .send({
        name: 'test',
      });
    expect(response).toHaveProperty('result.property.id');
  });

  it('Property update', async () => {
    const response = await request(app)
      .post('/properties')
      .send({
        name: 'test',
      });
    expect(response).toHaveProperty('result.property.id');
  });

  it('Property delete', async () => {
    const response = await request(app)
      .delete('/properties')
      .send({
        uid: 'lkhlhkjhkjkgj',
      });
    expect(response).toHaveProperty('result.property.id');
  });
});
