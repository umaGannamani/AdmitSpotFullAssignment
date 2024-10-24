import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default User;
