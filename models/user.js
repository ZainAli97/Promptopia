import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
    email: {
        type: "string",
        unique: [true, "Email is already exists"],
        required: [true, "Email is required"],
    },
    username: {
        type: "string",
        required: [true, "Username is required"],
        // match: [/^(?=.{8,20}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain letters and can be unique."],
    },
    image: {
        type: "string",
    }
});

const User = models.User || model("User", UserSchema);
export default User; 