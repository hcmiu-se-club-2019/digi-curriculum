Drag and drop note:

A. Giới thiệu giao diện drag and drop:
Tại URL http://localhost:8080/curriculum/edit giao diện chính sẽ được chia làm 2 phần.

-Phần bên trái: chứa danh sách môn học của các khoa, được dùng để add môn học cho chương trình đào tạo.

-Phần bên phải: chưa chương trình đào tạo theo: ngành > chuyên ngành > hệ đào tạo > tiếng anh đầu vào. Phần này sẽ cho phép user thêm, xóa, sửa môn học bằng cách kéo thả. 

-1 CTĐT sẽ có những năm học, mỗi năm học sẽ có 3 học kì, mỗi học kì chứa danh sách các môn cần học. 

B. Logic load data cho panel bên phải:

  1. Ở file /CurriculumEdit/index.jsx: khi bắt đầu click vô "Edit Curriculum", browser fetch data của "course" và "curriculum" tại constructor(props).
  
  2. Khi gọi 2 hàm this.props.receiveCourses() và this.props.receiveCurriculums(), tại file /CurriculumEdit/_index.js, mapDispatchToProps sẽ dispatch 2 hàm vừa được nêu trên.
  
  3.1. Ở file /redux/courses/action.js, gọi hàm receiveCourses(). Ở file /redux/courses/reducer.js, lấy fake data gắn vào state của nhánh "courses". 
  
  3.2. Ở file /redux/curriculums/action.js, gọi hàm receiveCurriculums(). Ở file /redux/curriculums/reducer.js, lấy fake data gắn vào state của nhánh "curriculums". 
  
  4. Sau khi update state của "courses" và "curriculums", update component của panel bên phải.
  (Note: ở file /CurriculumEdit/CourseDragSource.jsx, panel bên trái KHÔNG lấy data từ redux, thay vào đó import data trực tiếp từ file /data-courses.js và /data-majors.js
  
C. Logic khi drag and drop:

D. Vấn đề cần làm: 

-Clean code.

-Fetch data từ backend và map data.

-Kéo môn học từ danh sách môn học ở bên trái sang bên phải.

-Thay đổi vị trí năm học (có thể thay đổi code UI cho component).

-Update cách thiết kế state (Optional).
