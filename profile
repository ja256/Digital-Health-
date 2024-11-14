<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile Dashboard</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      color: #333;
    }
    .container {
      max-width: 800px;
      margin: auto;
    }
    h2 {
      text-align: center;
    }
    .section {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
    input, select, button {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .profile-pic {
      grid-column: span 2;
      text-align: center;
    }
    .profile-pic img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
    .buttons {
      grid-column: span 2;
      text-align: center;
    }
    .buttons button {
      width: 100px;
      margin: 5px;
    }
    .history-buttons {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    .history-buttons button {
      padding: 10px 20px;
    }
  </style>
</head>
<body>

<div class="container">
  <h2>Profile Dashboard</h2>
  
  <!-- Profile Section -->
  <div class="section">
    <h3>Profile</h3>
    <form>
      <!-- Profile Picture Section -->
      <div class="profile-pic">
        <img src="placeholder.png" alt="Profile Picture">
        <div>
          <button type="button">Upload</button>
          <button type="button">Delete</button>
        </div>
      </div>

      <!-- Form Fields -->
      <div>
        <label for="first-name">First Name *</label>
        <input type="text" id="first-name" name="first-name" required>
      </div>
      <div>
        <label for="last-name">Last Name *</label>
        <input type="text" id="last-name" name="last-name" required>
      </div>
      <div>
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username">
      </div>
      <div>
        <label for="dob">Date of Birth *</label>
        <input type="date" id="dob" name="dob" required>
      </div>
      <div>
        <label for="location">Location *</label>
        <select id="location" name="location" required>
          <option value="" disabled selected>Select location</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select>
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone">
      </div>

      <!-- Action Buttons -->
      <div class="buttons">
        <button type="button">Cancel</button>
        <button type="submit">Update</button>
      </div>
    </form>
  </div>

  
