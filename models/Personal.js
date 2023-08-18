import mongoose, { Schema } from "mongoose";

const personalSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  resume_desc: {
    type: String,
    required: true,
  },
  about_desc: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
    required: true,
  },
  full_address: {
    street: {
      type: String,
      required: true,
    },
    city_province: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  skills: [
    {
      type: String,
      required: true,
    },
  ],
  educational: [
    {
      type: String,
      required: true,
    },
  ],
  goals: [
    {
      type: String,
      required: true,
    },
  ],
  social_media: [
    {
      type: String,
      required: true,
    },
  ],
},
{
    timestamps: true
});

const Personal = mongoose.models.Personal || mongoose.model("Personal", personalSchema);

export default Personal;
