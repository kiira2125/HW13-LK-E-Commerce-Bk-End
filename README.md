![GitHub top language](https://img.shields.io/github/languages/top/ajcuddeback/E-commerce-Back-End)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ajcuddeback/E-commerce-Back-End)
![GitHub issues](https://img.shields.io/github/issues/ajcuddeback/E-commerce-Back-End)
![YouTube Video Views](https://img.shields.io/youtube/views/Uz7rW3B_2tg?label=YT%20Views&logo=youtube&logoColor=red&style=flat-square)

# E-commerce-Back-End

## Description

This is a backend for an e-commerce site which will allow a front end developer connect to the api and have the ability to create, read, update, and delete categories, tags, and products for their online store

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Instructions](#instructions)
- [Questions](#questions)

## Installation

In order to install this project you must clone this project on to your local machine.

## Usage

This project usage is for anyone that needs a back-end for their front-end e-commerce site

## Instructions

- If you would like to view a video on how to install and use, go to my [Youtube Channel](.//images/)

- Step 1: Clone this repository

 ***** // need to place images on all my steps// ***** 

* ![step-1](images/step-1.png) 

- Step 2: Install dependencies with 'npm install'

* ![step-2](images/step-2.png)

- Step 3: Type code .

* ![step-3](images/step-3.png)

- Step 4: Create .env file

- Step 5: Add credentials using DB_NAME = 'ecommerce_db', DB_USER, DB_PW

* ![step-5](images/step-4.png)

- Step 6: Login to you mysql server and type 'source db/schema.sql

* ![step-6](images/step-6.png)

- Step 7: (Optional!) Type 'npm run seed' to create preset categories, tags, and products

* ![step-7](images/step-7.png)

- Step 8: Type 'npm start' once more to start the server

* ![step-8](images/step-5.png)

- Step 9: Open Insomnia core/postman

* ![step-9](images/step-9.png)

* Step 10: You can create, read, update, and delete categories, tags, and products using these urls:
  - http://localhost:3006/api/categories
  - http://localhost:3006/api/categories/:id (required to delete, update, or just to read one category)
  - http://localhost:3006/api/tags
  - http://localhost:3006/api/tags/:id (required to delete, update, or just to read one tag)
  - http://localhost:3006/api/products
  - http://localhost:3006/api/products/:id (required to delete, update, or just to read one tag)

## Questions

Created by: [ajcuddeback](https://github.com/ajcuddeback)

If you have any further questions please feel free to contact me at [ajcuddeback@gmail.com](ajcuddeback@gmail.com)
