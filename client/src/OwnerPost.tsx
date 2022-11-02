import React from 'react';
import Header from "./components/Header";
import './App.css';

function OwnerPost() {
  return (
    <div>
      <header>
        <Header />
        <h1>taberu</h1>
      </header>
      <main className="OwnerPost">
        <h1 className='logo'>Register</h1>
        <form action="/">
          <label htmlFor="recipeName">Recipe Name *</label>
          <input type="text" name="name" id="recipeName" required />
          <input type="file" name="photo" id="" />
        </form>
        <ul>
          <li><a href="/user/main">&gt; Top</a></li>
          <li><a href="#">&gt; Register</a></li>
        </ul>
      </main>

    </div>
  );
}

export default OwnerPost;
