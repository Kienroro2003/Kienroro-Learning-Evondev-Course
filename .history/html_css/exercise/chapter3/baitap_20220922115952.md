1. Tạo ra 6 buttons với kiến thức đã học, và có gradient đẹp như hình, có thể sử dụng BEM như `btn btn--green` chẳng hạn, trong các buttons này đều có `box-shadow` tương ứng với màu gradient luôn nên chú ý nhé: assets.materialup.com/uploads/cc065902-1545-4f0f-adc3-b9344a4f0a56/preview.png

2. Tạo ra text gradient đơn giản như hình: evondev.com/wp-content/uploads/2021/09/TextFill_image6.png

3. Sử dụng CSS về `child` hoặc `type` để làm các màu như hình ví dụ `color__item:first-child{background-color:red}`: cdn.dribbble.com/users/757683/screenshots/5942067/attachments/1281258/style_02.jpg

4. Sử dụng :hover để khi hover vào các màu ở các bài 3 thì đổi màu bât kỳ mà các bạn thích, lưu ý có `transition` cho nó mượt

5. Cho HTML như sau

`

<div data-link="google.com">google.com</div>

<div data-link="vnexpress.vn">facebook.com</div>

<div data-name="hello">hello</div>

<div data-name="againhello">again hello</div>

<input type="email" name="email">

<input type="text" name="fullname">

`

- Dùng kiến thức về Selectors để chọn ra các thẻ `div` có `data-link` bắt đầu bằng https

- Chọn ra các thẻ `div` có `data-link` kết thúc bằng `.vn`

- Chọn ra các thẻ `div` có `data-name` có chứa chữ `hello`

- Chọn ra `input` có `type` là email

- Chọn ra `input` có `name` là fullname