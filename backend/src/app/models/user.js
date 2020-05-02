const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
   },
   password: {
      type: String,
      required: true,
      select: false,
   },
   passwordResetToken: {
      type: String,
      select: false,
   },
   passwordRestExpiress: {
      type: Date,
      select: false,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   specialty: {
     type: String,
     required: true, 
   },
   born: {
      type: Date,
      required: true, 
   },

});

userSchema.pre('save', async function(next){
   const hash = await bcrypt.hash(this.password, 10);
   this.password = hash;

   next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
