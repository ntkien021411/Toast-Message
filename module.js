function toast({ 
    title = "",
     message = "",
      type = "",
       duration = 3000 }) {
  const main = document.getElementById('toast');
  if (main) {
    const toast = document.createElement("div");

    const autoRemove = setTimeout(() => { // vả về 1 thằng id của timeout
        main.removeChild(toast) // xóa 1 thằng con 
    }, duration + 1000);

    // làm ẩn thông báo 
    toast.onclick = (e) => {
       if(e.target.closest('.toast_close')){
        main.removeChild(toast);
        clearTimeout(autoRemove);
       }
    };
    const icons = {
        success : 'fas fa-check-circle',
        info : 'fas fa-info-circle',
        warning : 'fas fa-exclamation-circle',
        error : 'fas fa-exclamation-circle'
    }
    const icon = icons[type]
    const delay = (duration/1000).toFixed(2);
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s,
     fadeOut linear 1s ${delay}s forwards`;
    

    toast.innerHTML = `
<div class="toast_icon">
<i class="${icon}"></i>
</div>

<div class="toast_body">
 <h3 class="toast_title">${title}</h3>
 <p class="toast_msg">${message}</p>
</div>

<div class="toast_close">
<i class = "fas fa-times"></i>
</div>`;
main.appendChild(toast); // thêm 1 thằng con 


  }

   //         const html = `<div class="toast toast--4${type}">
    //         <div class="toast_icon">
    //            <i class="fas fa-check-circle"></i>
    //         </div>

    //         <div class="toast_body">
    //             <h3 class="toast_title">${title}</h3>
    //             <p class="toast_msg">${message}</p>
    //         </div>

    //         <div class="toast_close">
    //            <i class = "fas fa-times"></i>
    //         </div>
    //    </div>`;
}

// toast({
//   title: "Success",
//   message: "Máy vi tính kết nối internet(Windows,Ubuntu hoặc MacOS)",
//   type: "warning",
//   duration: 3000,
// });

function showSuccessToast() {
    toast({
        title: "Success",
        message: "Login Success!",
        type: "success",
        duration: 5000,
      });
}
function showErrorToast() {
    toast({
        title: "Error",
        message: "Big Error!",
        type: "error",
        duration: 5000,
      });
}
function showWarnToast() {
    toast({
        title: "Warning",
        message: "Warning , Dangereous! ",
        type: "warning",
        duration: 5000,
      });
}
function showInfoToast() {
    toast({
        title: "Info",
        message: "Info Please!",
        type: "info",
        duration: 5000,
      });
}