"use client";
import { useState } from "react";


export default function SignUp() {

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");


  return (
    <div>
      <h1 className="font-bold text-2xl">회원가입</h1>
      <div className="mt-6">
        <form>

        </form>
      </div>
    </div>
  );
}
