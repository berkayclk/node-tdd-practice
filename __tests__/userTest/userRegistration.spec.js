const request = require('supertest');
const bcrypt = require('bcrypt');
const app = require('../../src/app');

const sequelize = require('../../src/config/database');
const User = require('../../src/domains/User/User');

beforeAll(() => {
  return sequelize.sync();
});

beforeEach(() => {
  return User.destroy({ truncate: true });
});

describe('User success registration', () => {
  const userInfo = {
    username: 'testuser',
    email: 'testuser@mail.com',
    password: 'testpassword',
  };

  const postUser = (userInfo) => {
    return request(app).post('/users').send(userInfo);
  };

  test('returns response with 200 status code', (done) => {
    postUser(userInfo).expect(200, done);
  });

  test('returns response with success true', (done) => {
    postUser(userInfo).end((err, res) => {
      if (err) {
        return done(err);
      }

      try {
        expect(res.body.success).toBe(true);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  test('returns player information with response', (done) => {
    postUser(userInfo).end((err, res) => {
      if (err) {
        return done(err);
      }

      try {
        expect(res.body.data.username).toBe(userInfo.username);
        expect(res.body.data.email).toBe(userInfo.email);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  test('saves player to db correctly', (done) => {
    postUser(userInfo).end((err, res) => {
      if (err) {
        return done(err);
      }

      try {
        User.findAll({
          where: {
            email: userInfo.email,
          },
        })
          .then((users) => {
            expect(users).not.toBeNull();
            expect(users.length).toBe(1);

            const user = users[0];
            expect(user.email).toBe(userInfo.email);
            expect(user.username).toBe(userInfo.username);
            expect(user.id).toBe(res.body.data.id);
            done();
          })
          .catch((err) => {
            done(err);
          });
      } catch (error) {
        done(error);
      }
    });
  });

  test('hashes password of the user', (done) => {
    postUser(userInfo).end((err, res) => {
      if (err) {
        return done(err);
      }

      try {
        User.findAll({
          where: {
            email: userInfo.email,
          },
        })
          .then((users) => {
            expect(users).not.toBeNull();
            expect(users.length).toBe(1);

            const user = users[0];
            expect(user.password).not.toBe(userInfo.password);
            bcrypt.compare(userInfo.password, user.password, (err, isSame) => {
              if (err) return done(err);
              expect(isSame).toBe(true);
              done();
            });
          })
          .catch((err) => {
            done(err);
          });
      } catch (error) {
        done(error);
      }
    });
  });
});
