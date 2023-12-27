import { dbPool } from 'db';
import { UserRecord } from 'firebase-functions/v1/auth';

export class UserModel {
  async getAll(): Promise<any[]> {
    const query = 'SELECT * FROM Users';
    const result = await dbPool.query(query);
    return result.rows;
  }

  async create(user: UserRecord): Promise<any> {
    try {
      const tableName = 'Users';
      const columns = ['id', 'username', 'email', 'created_on'];

      const { uid, displayName, email } = user;
      const val = [`'${uid}'`, `'${displayName}'`, `'${uid}'`, 'NOW()'];

      const query = `INSERT INTO ${tableName} (${columns.join(
        ','
      )}) VALUES (${val.join(',')})`;
      return await dbPool.query(query);
    } catch (err) {
      console.log(err);
    }
  }
}
