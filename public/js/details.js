(async function(){
  if(location.search.indexOf("lid=")!=-1){
    var lid=location.search.split("=")[1];
          //         ?lid=5   ?lid,5   5
    var res=await ajax({
      url:"http://localhost:3000/details",
      type:"get",
      data:`lid=${lid}`,
      dataType:"json"
    });
    var {product,specs,pics}=res;
    var {title,subtitle,price,promise}=product;
    //66~81
    var html=`<h6 class="font-weight-bold">${title}</h6>
    <h6><a class="small text-dark font-weight-bold" href="javascript:;">${subtitle}</a></h6>
    <div class="alert alert-secondary small" role="alert">
      <div>
        <span>学员售价：</span>
        <h2 class="d-inline text-primary font-weight-bold">¥${price.toFixed(2)}</h2>
      </div>
      <div>
        <span>服务承诺：</span>
        <span>${promise}</span>
      </div>
    </div>`
    var div=document.getElementById("details");
    div.innerHTML=html+div.innerHTML;

    var html="";
    //遍历specs中每个规格对象
    for(var s of specs){//每遍历一个规格对象，就创建一个a元素拼接到结果html字符串上
      //复制92行a到此，去掉开始a标签结尾的class="active"
      html+=`<a class="btn btn-sm btn-outline-secondary ${s.lid==lid?'active':''}" href="product_details.html?lid=${s.lid}">${s.spec}</a>`;
    }
    div.children[4].children[1].innerHTML=html;

    var html="";
    for(var p of pics){
      var {sm,md,lg}=p
      html+=`<li class="float-left p-1">
        <img src="${sm}" data-md="${md}" data-lg="${lg}">
      </li>`;
    }
    var ul=document.querySelector(
      "#div-lg+div>div>ul"
    );
    ul.innerHTML=html;
    ul.style.width=`${62*pics.length}px`;
    var mImg=document.querySelector(
      "#preview>div>img"
    );
    mImg.src=pics[0].md;
    var lgDiv=document.getElementById("div-lg");
    lgDiv.style.backgroundImage=`url(${pics[0].lg})`;
  }
//测试: http://localhost:3000/product_details.html?lid=5
})()