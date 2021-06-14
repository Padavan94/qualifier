import connectDB from '../../middleware/mongodb';
import User from '../../models/user';

export default connectDB(async (req, res) => {
  const newUser = new User({
    name: 'Vadym',
  });

  await newUser.save();

  const users = await User.find({});

  res.status(200).json(users);
});
