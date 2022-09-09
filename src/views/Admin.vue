<template>
  <h1>Easy Mobile Responsive Table</h1>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Gender</th>
        <th>Date Of Birth</th>
      </tr>
    </thead>
    <tbody data-user-table></tbody>
  </table>

  <template data-user-row>
    <tr>
      <td data-id></td>
      <td data-name></td>
      <td data-email></td>
      <td data-phone></td>
      <td data-gender></td>
      <td data-dob></td>
    </tr>
  </template>
</template>
<script>
const userTable = document.querySelector("[data-user-table]");
const userRowTemplate = document.querySelector("[data-user-row]");
const loader = document.querySelector("[loader]");

const people = new Promise(async (res, rej) => {
  const response = await fetch("https://smangele-api.herokuapp.com/");
  const data = await response.json();
  const { results } = data;
  console.log(results);
  results.forEach((person) => createRow(person));
});

const createRow = async (person) => {
  const row = userRowTemplate.content.cloneNode(true).children[0];

  // Get elements from row
  const row_id = row.querySelector("[data-id]");
  const name = row.querySelector("[data-name]");
  const email = row.querySelector("[data-email]");
  const phone = row.querySelector("[data-phone]");
  const gender = row.querySelector("[data-gender]");
  const dob = row.querySelector("[data-dob]");
  // Give Rows IDs
  let cardIdx = document.createAttribute("data-id");
  cardIdx.value = person.login.uuid;
  row_id.setAttributeNode(cardIdx);
  //     Add Row Data
  row_id.textContent = person.login.uuid;
  name.textContent = `${person.name.title} ${person.name.first} ${person.name.last}`;
  email.textContent = person.email;
  phone.textContent = person.cell;
  gender.textContent = person.gender;
  dob.textContent = person.dob.date;
  // Add row to table
  userTable.append(row);
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  padding: 2rem;
}

table {
  width: 100%;
  border-spacing: 0;
  border: 1px solid red;
}

th {
  background: #333;
  color: white;
}

tr:nth-child(even) {
  background: rgba(255, 0, 0, 0.4);
}

td,
th {
  padding: 1rem;
}

@media screen and (max-width: 780px) {
  thead {
    display: none;
  }
  tr {
    display: flex;
    flex-direction: column;
    border: 1px solid;
    margin-bottom: 2rem;
  }
  tr:nth-child(even) {
    background: white;
  }
  tr td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    padding-right: 1rem;
    text-align: end;
  }
  tr td:nth-child(even) {
    background: rgba(255, 0, 0, 0.4);
  }
  tr td:before {
    background: #333;
    color: white;
    padding: 1rem;
    min-width: 110px;
    height: 100%;
    text-align: start;
  }
  tr td:nth-child(1):before {
    content: "ID:";
  }
  tr td:nth-child(2):before {
    content: "Full Name:";
  }
  tr td:nth-child(3):before {
    content: "Email:";
  }
  tr td:nth-child(4):before {
    content: "Phone:";
  }
  tr td:nth-child(5):before {
    content: "Gender:";
  }
  tr td:nth-child(6):before {
    content: "DOB:";
  }
}

@media screen and (max-width: 500px) {
  td {
    word-break: break-all;
  }
}
</style>