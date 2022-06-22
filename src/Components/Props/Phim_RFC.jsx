import React from "react";

export default function Phim_RFC(props) {
    // Cách 1
    // let phim = props.phim_input;

    // Cách 2: bóc tách phần tử
    let {phim_input} = props;
  return (
    <div class="card mt-5">
      <img className="card-img-top" src={phim_input.hinhAnh} height={200} width={300} alt />
      <div class="card-body">
        <h4 class="card-title">{phim_input.ten}</h4>
        <p class="card-text">Thể loại: {phim_input.loai}</p>
        <span class="card-text">Xem thêm: <a href="">{phim_input.moTa}</a></span>
      </div>
    </div>
  );
}
// Cách 3:
// export default function Phim_RFC({phim_input, ...restParam}) {
//   return (
//     <div class="card mt-5">
//       <img className="card-img-top" src={phim_input.hinhAnh} height={200} width={300} alt />
//       <div class="card-body">
//         <h4 class="card-title">{phim_input.ten}</h4>
//         <p class="card-text">Thể loại: {phim_input.loai}</p>
//         <span class="card-text">Xem thêm: <a href="">{phim_input.moTa}</a></span>
//       </div>
//     </div>
//   );
// }
