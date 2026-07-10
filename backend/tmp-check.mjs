import { register } from "./controllers/auth.controller.js";

const req = {
  body: { name: "Test", email: "test@example.com", password: "123456" },
};
const res = {
  cookie() {},
  status() {
    return this;
  },
  json(x) {
    console.log("json", JSON.stringify(x));
  },
};
const next = (err) => {
  console.log("next called", err && err.message);
};

await register(req, res, next);
