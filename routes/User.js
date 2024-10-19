import express, { Router } from "express";
const router = express.Router();

const user = [
  {
    name: "Imam",
    age: 34,
    address: "Bogor",
    status: "Duda Anak 3",
  },
  {
    name: "Alvien",
    age: 19,
    status: "Halusinasi",
    address: "Isekai",
  },
  {
    cihuy: "Yafi",
    address: "F6",
    status: "Jomblo",
    age: 20,
  },
];

router.get("/", (req, res) => {
    res.send(user);
});

export default router;
