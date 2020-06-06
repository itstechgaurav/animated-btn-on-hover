(() => {


$box = document.getElementById("outer-box");
$btn = document.getElementById("btn");
$bdr = document.getElementById("bdr");


$box.addEventListener("mousemove", (e)=> {
    // if(e.target !== $box) return 0;
    rect = $box.getBoundingClientRect();
    _top = e.clientY - rect.top;
    _left = e.clientX - rect.left;
    _bottom = rect.bottom - e.clientY;
    _right = rect.right - e.clientX;
    btn.style.top = _top + "px";
    btn.style.left = _left + "px";
    bdr.style.top = _top + ($btn.clientHeight / 2) + "px";
    bdr.style.left = _left + "px";
    console.dir($btn);
    // clientWidth
})



})();