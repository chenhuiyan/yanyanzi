(async function(){
  var res=await ajax({
    url:"http://localhost:3000/index/",
    type:"get",
    dataType:"json"
  });
  var p=res[0];  //取第一个商品
  /**
   * <main id="main"
   *  <div id="carousel
   *  <div>
   *    <h3 class="pb-3">
   *      <nav class="navbar
   *      <div class="row mb-2">
   *        <div class="col-md-7">
   */
  var parent=document.querySelector(
    "#main>div:nth-child(2)>h3:first-child>div:nth-child(2)>div:first-child"
  );
  //解构第一个商品的属性
  var {title,details,price,href,pic}=p;
  //58~68
  var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
    <div class="card-body d-flex flex-column align-items-start">
      <h5 class="d-inline-block mb-2">${title}</h5>
      <h6 class="mb-5"><a class="text-dark" href="javascript:;">${details}</a>/h6>
      <span class="text-primary">¥${price.toFixed(2)}</span>
      <a class="btn btn-primary" href="${href}">查看详情</a>
    </div>
    <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${pic}" data-holder-rendered="true">
  </div>`;
  parent.innerHTML=html;

  var p=res[1];
  /**
   * <main id="main"
   *  <div id="carousel
   *  <div>
   *    <h3 class="pb-3">
   *      <nav class="navbar
   *      <div class="row mb-2">
   *        <div class="col-md-7">
   *        <div class="col-md-5">
   */
  parent=parent.nextElementSibling;
  var {title,details,price,href,pic}=p;
  //71~81
  var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
    <div class="card-body d-flex flex-column align-items-start">
      <h5 class="d-inline-block mb-2">${title}</h5>
      <h6 class="mb-5"><a class="text-dark" href="javascript:;">${details}</a></h6>
      <span class="text-primary">¥${price.toFixed(2)}</span>
      <a class="btn btn-primary" href="${href}">查看详情</a>
    </div>
    <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${pic}" data-holder-rendered="true">
  </div>`;
  parent.innerHTML=html;

  var p=res[2];
  /**
   * <main id="main"
   *  <div id="carousel
   *  <div>
   *    <h3 class="pb-3">
   *      <nav class="navbar
   *      <div class="row mb-2">
   *        <div class="col-md-7">
   *        <div class="col-md-5">
   *      <div class="row mb-2">
   *        <div class="col-md-5">
   */
  parent=
    parent.parentNode.nextElementSibling.children[0];
  var {title,details,price,href,pic}=p;
  //86~93
  var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
    <div class="card-body d-flex flex-column align-items-start">
      <h5 class="d-inline-block mb-3">${title}</h5>
      <span class="text-primary">¥${price.toFixed(2)}</span>
      <a class="btn btn-primary" href="${href}">查看详情</a>
    </div>
    <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"src="${pic}" data-holder-rendered="true">
  </div>`;
  parent.innerHTML=html;

  
  /**
   * <main id="main"
   *  <div id="carousel
   *  <div>
   *    <h3 class="pb-3">
   *      <nav class="navbar
   *      <div class="row mb-2">
   *        <div class="col-md-7">
   *        <div class="col-md-5">
   *      <div class="row mb-2">
   *        <div class="col-md-5">
   *        <div class="col-md-7 pl-0">
   *          <div class="row pr-3">
   *             <div>
   *             <div>
   *             <div>
   */
  parent=parent.nextElementSibling.children[0];
  html=``;
  for(var p of res.slice(3)){
    var {title,details,price,href,pic}=p;
    //97~106
    html+=`<div class="col-md-4 p-0 pl-2">
    <div class="card border-0 text-center">
      <img class="card-img-top" src="${pic}" alt="Card image cap">
      <div class="card-body p-0 pr-1 pl-1">
        <span class="d-inline-block">${title}</span>
        <span class="text-primary small">¥${price.toFixed(2)}</span>
        <a class="btn btn-sm btn-primary" href="${href}">查看详情</a>
      </div>
    </div>
  </div>`
  }
  parent.innerHTML=html;
})()
//测试: http://localhost:3000/index.html->F12
//结果:[{},{},{},{},{},{}]