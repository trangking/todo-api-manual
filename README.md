1.Project Overview
โปรเจ็กต์ นี้คือ REST API สำหรับข้อมูล todo โดยโค้ชที่ลงมือทำนั้นอาจมีบางส่วนที่ยังไม่สมบูรณ์หรืออาจเขียนแปลกไปบ้าง เพราะอาศัยความเข้าใจและการค้นคว้าจากอินเทอร์เน็ตครับ  
ืโครงสร้างของโปรเจกต์ใช้รูปแบบ MVC เพื่อแยกส่วนการทำงานให้เข้าใจง่าย และใช้
in-memory-storage สำหรับเก็บข้อมูล

2.Project Structure
อย่างที่บอกในข้างต้นว่าโปรเจ็กต์นี้ทำในรูปแบบ MVC

- src/index.ts -> เป็นไฟล์หลักของเซิร์ฟเวอร์ ใช้ในการรัน Express app
  มี middleware สำหรับ log การเรียก API และเรียกใช้ router หลัก

- src/config/db.ts -> จะเป็นตัวจำลองฐานข้อมูลโดยมีข้อมูลในไฟล์ ตัวต้นคือ
  { id: 1, name: "pakornsit", lastname: "kositkool", age: 20 }
  ทำให้ตอนเริ่มมีข้อมูลมาแล้ว ซึ่งในนี้ยังมี function ที่ค่อยเพิ่มข้อมูล ลบ และ ค้นหาข้อมูล พยายามทำให้เหมือน db ที่มีพวกนี้ครับ
- saveTodo เพิ่มข้อมูล
- findId ค้นหาข้อมูลตาม id
- deleteTodo ลบข้อมูล
- updateTodo อัพเดทข้อมูล

- src/controller/todo.controller.ts -> เป็นตัวควบคุม (Controller) สำหรับรับ request จาก client และส่ง response กลับไป
  เช่น การเรียกใช้ฟังก์ชันจาก db.ts เพื่อเพิ่ม แก้ไข หรือลบข้อมูล
  จะเป็นส่วนที่เชื่อมระหว่าง router กับ logic จริงของระบบ

- src/models/todo.model.ts -> เก็บโครงสร้างข้อมูลของ Todo

- src/router/todo.router.ts -> เป็นตัวกำหนดเส้นทางของ API สำหรับจัดการ todo

- src/router/ -> เป็นตัวรวม router ทั้งหมดของระบบ และจัดโครงสร้าง version เช่น
  /api/v1

- src/view/response.ts -> เป็นไฟล์จัดการรูปแบบการตอบกลับของ API

3.How to run the project
  step 1 npm i or npm install
  step 2 npm start

4.Example requests
  4.1 gettodo
  GET http://localhost:5001/api/v1/todo  -> 
  {
    "success": true,
    "message": "Success",
    "data": [
        {
            "id": 1,
            "name": "pakornsit",
            "lastname": "kositkool",
            "age": 20
        },
    ]
  }
  postman
  curl --location 'http://localhost:5001/api/v1/todo'
  
  4.2 gettodobyid
  GET http://localhost:5001/api/v1/todo/1 -> 
  {
    "success": true,
    "message": "Success",
    "data": {
        "id": 1,
        "name": "pakornsit",
        "lastname": "testlastname",
        "age": 20
    }
  }
  postman
  curl --location 'http://localhost:5001/api/v1/todo/1'

  4.3 createtodo 
  POST http://localhost:5001/api/v1/todo ->
  {
    "success": true,
    "message": "Created",
    "data": {
        "id": 3,
        "name": "testname",
        "lastname": "testlastname",
        "age": 10
    }
  }
  postman
curl --location 'http://localhost:5001/api/v1/todo' \
--header 'Content-Type: application/json' \
--data '{
    "name": "testname",
    "lastname": "testlastname",
    "age": 10
}'

  4.4 updatetodo
  PUT http://localhost:5001/api/v1/todo/1 -> 
  {
    "success": true,
    "message": "Todo updated successfully",
    "data": {
        "id": 1,
        "name": "testname",
        "lastname": "testlastname",
        "age": 2
    }
  }
  postman
curl --location --request PUT 'http://localhost:5001/api/v1/todo/1' \
--header 'Content-Type: application/json' \
--data '{
    "name": "testname",
    "lastname": "testlastname",
    "age": 2
}'

  4.5 deletetodo 
  DELETE http://localhost:5001/api/v1/todo/2 ->
  {
    "success": true,
    "message": "Todo deleted successfully",
    "data": 2
  }
  postman 
  curl --location --request DELETE 'http://localhost:5001/api/v1/todo/2' \
--data ''
  

