import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Contact = sequelize.define('Contact', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
  timezone: DataTypes.STRING,
  userId: DataTypes.INTEGER,
});

export default Contact;
