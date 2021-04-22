'use strict';

const pictureEl = document.querySelector('img');
const firstNameEl = document.querySelector('.first-name');
const lastNameEl = document.querySelector('.last-name');
const emailEl = document.querySelector('.email');
const genderEl = document.querySelector('.gender');
const button = document.querySelector('button');

let first;
let last;
let email;
let gender;
let picture;
let name;

const getUser = async () => {
  try {
    const res = await fetch('https://randomuser.me/api');
    const { results } = await res.json();

    ({
      name: { first, last },
      email,
      gender,
      picture,
    } = results[0]);

    pictureEl.src = picture.medium;
    pictureEl.alt = `${first} ${last}`;
  } catch {
    first = 'not found';
    last = '';
    email = 'not found';
    gender = 'not found';
  }

  firstNameEl.textContent = first;
  lastNameEl.textContent = last;
  emailEl.textContent = email;
  genderEl.textContent = gender;
};

button.addEventListener('click', getUser);
getUser();
