showNavbar = () => {
  $(".navbar--drop").on("click", function () {
    $(".navbar a:gt(0)").toggle();
  });
}

showAddressDetails = () => {
  $(".address__details__header").on("click", function () {
      $(".address__details__body").toggle();
  });
} 

showIndexSideBar = () => {
  $(".index__dropbtn").on("click", function () {
    $(".index__side").toggle();
  });
}

addSticky = () => {
  $(document).ready(function () {
    $(window).scroll(function () { 
      // console.log($(window).scrollTop());
      if ($(window).scrollTop() > 67) {
        $(".navbar").addClass("navbar__sticky");
      } else {
        $(".navbar").removeClass("navbar__sticky");
      }
      let headerHeight = $(".header").outerHeight();
      let bannerHeight = $(".index__banner").outerHeight();
      let rowHeight = $(".index__row").outerHeight();
      let height = headerHeight + bannerHeight + rowHeight - 200;
      let width = screen.width;
      if (width > 739) {
        $(".index__side").css("display", "block");
      } 
      else if (width <=739) {
        if (($(window).scrollTop() > 349) && ($(window).scrollTop() < height)) {
          $(".index__dropbtn").addClass("index__dropbtn__fixed");
          $(".index__side").addClass("index__side__fixed");
        } else {
          $(".index__dropbtn").removeClass("index__dropbtn__fixed");
          $(".index__side").removeClass("index__side__fixed");
        }
      }
    });
  });
}

let addNewsTopCenterItem = (background, text) => {
	$(".news__top__center").append("<a href='newsDetails.html' class='news__top__center__item'></a>");
	$(".news__top__center__item:last").append("<img class='news__top__center__item__img'></img>");
	$(".news__top__center__item__img:last").attr("src", background);
	$(".news__top__center__item:last").append("<div class='news__top__center__item__title'></div>");
	$(".news__top__center__item__title:last").text(text);
}

listNewsTopCenterItem = [
	{
		background: "../../img/8f191c3a75507872f20ceb60da4549a4.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/190da29fd5a57101069640fd2a990bda.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
]

listNewsTopCenterItem.forEach((value) => {
	addNewsTopCenterItem(value.background, value.text);
});

let addNewsTopRightItem = (background, text) => {
	$(".news__top__right").append("<a href='newsDetails.html' class='news__top__right__item'></a>");
	$(".news__top__right__item:last").append("<img class='news__top__right__item__img'></img>");
	$(".news__top__right__item__img:last").attr("src", background);
	$(".news__top__right__item:last").append("<div class='news__top__right__item__title'></div>");
	$(".news__top__right__item__title:last").text(text);
}

listNewsTopRightItem = [
	{
		background: "../../img/d0f6564a26152ab5123891558255aaa3.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/c747b4e497c71103207ad2a3962439f0.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/60d332144895c522a1f94d22f38e5b16.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/6b959f991a4d0708bef548c47155e243.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/b58876b8d2504d03a8a9106014bba06b.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/1a50d2117479cec8d7d244356093d7ec.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	}
]

listNewsTopRightItem.forEach((value) => {
	addNewsTopRightItem(value.background, value.text);
});

let addNewsBottomLeftTopItem = (background, text) => {
	$(".news__bottom__left__top").append("<a href='newsDetails.html' class='news__bottom__left__top__item'></a>");
	$(".news__bottom__left__top__item:last").append("<img class='news__bottom__left__top__item__img'></img>");
	$(".news__bottom__left__top__item__img:last").attr("src", background);
	$(".news__bottom__left__top__item:last").append("<div class='news__bottom__left__top__item__title'></div>");
	$(".news__bottom__left__top__item__title:last").text(text);
}

listNewsBottomLeftTopItem = [
	{
		background: "../../img/26bf1bea30b63ce8631ff7d3985bf0a2.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/b33bf9962320efccc10c19cb885843f6.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/3fe16492ef165419683db3500955cdf3.png",
		text: "ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
]

listNewsBottomLeftTopItem.forEach((value) => {
	addNewsBottomLeftTopItem(value.background, value.text);
});

let addNewsBottomLeftItem = (selector, background) => {
	$(selector).append("<div class='newsItemBottom'></div>");
	$(selector + " .newsItemBottom:last").append("<div class='newsItemBottom__box'></div>");
	$(selector + " .newsItemBottom__box:last").append("<a href='newsDetails.html'></a>");
	$(selector + " a:last").append("<img class='newsItemBottom__box__img'></img>");
	$(selector + " .newsItemBottom__box__img:last").attr("src", background);
	$(selector + " .newsItemBottom__box:last").append("<div class='newsItemBottom__box__text'></div>");
	$(selector + " .newsItemBottom__box__text:last").append("<a href='newsDetails.html' class='newsItemBottom__box__text__title'>ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên</a>");
	$(selector + " .newsItemBottom__box__text:last").append("<div class='newsItemBottom__box__text__item'></div>");
	$(selector + " .newsItemBottom__box__text__item:last").append("<div class='newsItemBottom__box__text__item__box'></div>");
	$(selector + " .newsItemBottom__box__text__item__box:last").append("<i class='fa-regular fa-clock'></i>");
	$(selector + " .newsItemBottom__box__text__item__box:last").text("Thứ tư 223/08/2023");
}

let addLine = (selector) => {
	$(selector).append("<hr/>");
}

let addNewsBottomBtn = (selector) => {
	$(selector).append("<button class='btn--more'> Xem thêm bài viết <i class='fa-solid fa-chevron-down'></i> </button>");
}

listNewsBottomLeftItem_1 = [
	"../../img/b44d7888366ccbc311772376944f933d.png",
	"../../img/c87c4133e9dbf965a63edcec95855ff4.png",
	"../../img/d13333936146e078dea4dabcbc942ade.png",
	"../../img/ba20d296bfe4d8a7d26b29d8720e3f45.png",
	"../../img/6e399d7e73780f48d7485e465eddb5ee.png",
	"../../img/2aff12ed059937d431df6dc21bd7b5ee.png",
	"../../img/3a8008668488c4ef798dcd233d5248d6.png",
]

listNewsBottomLeftItem_1.forEach((value) => {
	addLine(".news__bottom__left");
	addNewsBottomLeftItem(".news__bottom__left", value);
});

addNewsBottomBtn(".news__bottom__left");

let addNewsBottomRightSidebarItem = (selector, background, text) => {
	$(selector).append("<a href='newsDetails.html' class='newsSidebar__item'></a>");
	$(".newsSidebar__item:last").append("<img class='newsSidebar__item__img'></img>");
	$(".newsSidebar__item__img:last").attr("src", background);
	$(".newsSidebar__item:last").append("<div class='newsSidebar__item__title'></div>");
	$(".newsSidebar__item__title:last").text(text);
}

listNewsBottomRightListItem_1 = [
	{
		background: "../../img/efc10348fe14879c4245475edee3b168.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/f2ccfde215f081ad72c8fee5dbf4a637.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/e23b4722a9b8107775155ee7b46307a4.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/e7ab4bc036b5a6df03a85223f027dc08.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/d4691da5fe88197410c6820f29dfceb0.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/76ee136881bd6a56df09fad09a63563c.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	}
]

listNewsBottomRightListItem_1.forEach((value) => {
	addNewsBottomRightSidebarItem(".newsSidebar:nth-child(1)" , value.background, value.text);
});

listNewsBottomRightListItem_2 = [
	{
		background: "../../img/0f27e93ba740269cb2da4357590c6fb9.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/1f18417b44d106be9aaedc3a4038b0b1.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/0123efe74d51ff8b2450dbd397803053.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/4284a9389c2dd9a85c86bc31b4e8bb1f.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/e252067a1d242cd30b57af7f797424ff.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/22a8793ef92615d9d967f5c4877b5ef1.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	}
]

listNewsBottomRightListItem_2.forEach((value) => {
	addNewsBottomRightSidebarItem(".newsSidebar:nth-child(2)" ,value.background, value.text);
});

listNewsBottomRightListItem_3 = [
	{
		background: "../../img/8f191c3a75507872f20ceb60da4549a4.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/190da29fd5a57101069640fd2a990bda.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/d0f6564a26152ab5123891558255aaa3.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/c747b4e497c71103207ad2a3962439f0.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/60d332144895c522a1f94d22f38e5b16.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	},
	{
		background: "../../img/6b959f991a4d0708bef548c47155e243.png",
		text:"ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên"
	}
]

listNewsBottomRightListItem_3.forEach((value) => {
	addNewsBottomRightSidebarItem(".newsSidebar:nth-child(3)" ,value.background, value.text);
});

let addVideoContentItem = (background) => {
	$(".video__content").append("<div class='video__content__item'></div>");
	$(".video__content__item:last").append("<a href='videoDetails.html'></a>");
	$(".video__content__item > a:last").append("<img class='video__content__item__img'></img>");
	$(".video__content__item > a:last").append("<div class='video__content__item__overlay'></div>");
	$(".video__content__item__img:last").attr("src", background);
	$(".video__content__item:last").append("<div class='video__content__item__text'></div>");
	$(".video__content__item__text:last").append("<a href='videoDetails.html' class='video__content__item__text--bold'>ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên</a>");
	$(".video__content__item__text:last").append("<div class='video__content__item__text--normal'>29N lượt xem 1 tháng trước</div>");
}

listVideoContentItem = [
	"../../img/783f5f9206c58dbbe92b1d58c37630d2.png",
	"../../img/69d4d4156e6656a30e167b6c1b471227.png",
	"../../img/c4e851a9fdd22eb443aa249d7d475c5c.png",
	"../../img/363bf0079022f3a295ad3f2f253d952f.png",
	"../../img/3ff9c4c64ac4082098e18603c30d0c67.png",
	"../../img/99e807c2c0e7a75d9d8244a865188a61.png",
	"../../img/1bc5bef670f79e11642ae8f1988ea715.png",
	"../../img/10ea4013a4b4b37a9a383bdb3abbc74d.png",
	"../../img/351c2c929dacb214f4048451929c86dc.png",
	"../../img/52846a4acbe6e512a5314251e3553b1f.png",
	"../../img/265426cfeda9459165400d539dc8e92f.png",
	"../../img/3105358c1ed8eccaaf1cf7762be533ec.png",
	"../../img/b362956068e676e25057d34359a77373.png",
	"../../img/3cd8b5419b205b3761baad63df7358b6.png",
	"../../img/7e11aa4ab0fab2bf26b4ba08a4c3a537.png",
	"../../img/38a09af3facb91d2a85786ae8b64d93a.png",
	"../../img/e11d849134100ea5bf8deb9732159a02.png",
	"../../img/4c43610bf6d65ab94845b16da7e76c61.png",
	"../../img/3340f84766e5f3dca2d8bd9c732db0ee.png",
	"../../img/ef93eb61545140238ab17f585e1c840a.png",
	"../../img/e58045bf863e53666870be898604e651.png",
	"../../img/7c7343172f9ac1719ac9c5ddb78c9fe1.png",
	"../../img/22b689ca15b204e64fa02dbbe738d567.png",
	"../../img/90abc910122ac63f0f2efd8689d03c55.png"
];

listVideoContentItem.forEach((value) => {
	addVideoContentItem(value);
});

let addVideoDetailsTopRightItem = () => {
	$(".videoDetails__top__right").append("<div class='videoDetails__top__right__item'></div>");
	$(".videoDetails__top__right__item:last").append("<a href=''></a>");
	$(".videoDetails__top__right__item > a:last").append("<img class='videoDetails__top__right__item__img'></img>");
	$(".videoDetails__top__right__item__img").attr("src","../../img/190da29fd5a57101069640fd2a990bda.png");
	$(".videoDetails__top__right__item > a:last").append("<div class='videoDetails__top__right__item__overlay'></div>");
	$(".videoDetails__top__right__item:last").append("<div class='videoDetails__top__right__item__content'></div>");
	$(".videoDetails__top__right__item__content:last").append("<a href='' class='videoDetails__top__right__item__content__title'>ASUS Vivobook S 15 OLED Bape Edition: Chiếc laptop khoác trên</a>");
	$(".videoDetails__top__right__item__content:last").append("<div class='videoDetails__top__right__item__content__des'>29N lượt xem 1 tháng trước</div>");
}

for (let i=0; i<5; i++) {
	addVideoDetailsTopRightItem();
}

let addNewsDetailsLeftContent = (background, text) => {
	$(".newsDetails__left").append("<div class='newsDetails__left__text'></div>");
	$(".newsDetails__left__text:last").text(text);
	$(".newsDetails__left").append("<img class='newsDetails__left__img'></img>");
	$(".newsDetails__left__img:last").attr("src", background);
}

listNewsDetailsLeftContent = [
	{
		background: "../../img/f93851104474f36909c9ef2ab6a90ed9.png",
		text: "Vừa qua, ASUS đã trình làng máy tính Vivobook S 15 OLED, sản phẩm sở hữu cấu hình mạnh mẽ cùng với đó là nhiều tính năng hấp dẫn. Nhà sản xuất đã kết hợp với thương hiệu thời trang nổi tiếng, BAPE, tạo nên phiên bản đặc biệt BAPE Edition. Hãy cùng Sforum trên tay phiên bản đặc biệt này nhé!"
	},
	{
		background: "../../img/044f2b74543dbbe81c79fc3b45fd9bed.png",
		text: "Đầu tiên chúng ta cần tìm hiểu BAPE là gì? BAPE là thương hiệu thời trang đường phố nổi tiếng toàn cầu của Nhật Bản, được thành lập bởi Nigo vào năm 1993 tại Tokyo, Nhật Bản. Trong hơn 30 năm qua, thương hiệu ngày càng lớn mạnh và mở rộng kinh doanh sang các ngành khác nhau. Bây giờ thương hiệu thuộc sở hữu của tập đoàn I.T và trụ sở chính có trụ sở tại Hồng Kông."
	},
	{
		background: "../../img/1d1d62aaf05c4b106f21b29ac62d98dc.png",
		text: "ASUS Vivobook S 15 OLED BAPE Edition có hai phiên bản là Midnight Black Set và Cool Silver Set. Phiên bản Sforum trên tay là Midnight Black Set. Thiết kế vỏ hộp cũng vô cùng đặc biệt với màu rằn ri xanh, logo BAPE kích thước lớn cùng với đó là tên máy."
	},
	{
		background: "../../img/a2b8e06509041071acc62b5b79e9144e.png",
		text: "Trong một set sản phẩm ngoài máy sẽ có một chiếc túi để đựng laptop, một con chuột , bộ sticker, hình nền và một món đồ chơi nhỏ đều được thiết kế bởi BAPE với tông màu xanh rằn ri."
	},
	{
		background: "../../img/d0d8d54d13665bb5fe572125268b2a2a.png",
		text: "Chiếc túi được thiết kế đặc biệt để bảo vệ máy khỏi tai nạn. Túi có các hoa văn độc đáo do BAPE và ASUS Design Center đồng thiết kế. Ngoài ra túi đựng có thể được mở ở góc 180 độ và có nhiều túi bên trong, cung cấp không gian rộng rãi để đựng chuột, bộ chuyển đổi và các phụ kiện. Với chiếc túi đựng này, bạn có thể mang theo chiếc máy của mình mọi lúc mọi nơi."
	},
	{
		background: "../../img/cf43416c18833269610d4bfce25ac46b.png",
		text: "Phiên bản BAPE Edition có thiết kế độc quyền trên bàn di chuột và khu vực chiếu nghỉ tay, với thiết kế ban đầu của BAPE được áp dụng để tạo ra một chiếc máy tính xách tay độc đáo và phiên bản giới hạn mà bạn sẽ không tìm thấy ở bất kỳ nơi nào khác trên thị trường. Hơn nữa, mỗi phím trên bàn phím đều có một sticker đặc biệt do BAPE thiết kế ban đầu. Bạn có thể tự do trang trí mỗi phím theo sở thích cá nhân của bạn."
	},
	{
		background: "../../img/76c626261fd54208df585ae1d9b3f2a4.png",
		text: "Phiên bản BAPE đi kèm với một con chuột nhỏ gọn có hai nắp trên có thể hoán đổi cho nhau. Chuột còn đi kèm dây đeo tiện dụng giúp bạn dễ dàng mang theo bên mình. Vỏ màu đen thể hiện phong cách huyền bí và mát mẻ của hoa văn đặc biệt, trong khi phiên bản màu xanh lá cây phù hợp với màu sắc của túi đựng."
	},
	{
		background: "../../img/2f4cda81d1ca702198f8de69be71a458.png",
		text: "Phối hợp với BAPE, Trung tâm Thiết kế ASUS đã tạo ra mô hình Baby Milo mang tính biểu tượng đang mang theo máy tính xách tay Vivobook."
	},
	{
		background: "../../img/e72bfde490819bbf2609a4267bbd77f2.png",
		text: "Ngoài ra máy tính cũng cũng có hình nền đặc biệt được thiết kế với tông màu xanh rằn ri như các phụ kiện khác."
	},
	{
		background: "../../img/f7dede35617aad010066727ee96d4767.png",
		text: "Cuối cùng cũng có một bộ sticker để người dùng trang trí máy theo sở thích. Về thiết kế, ASUS Vivobook S 15 OLED BAPE Edition sở hữu thiết kế cao cấp. Mặt A được hoàn thiện từ kim loại có thiết kế camo tuyến tính được khắc laser chính xác và cũng được trang trí bằng thẻ tag logo phản chiếu."
	},
	{
		background: "../../img/19ee28b72a47e27654f9cce95fae8904.png",
		text: "Chiếc máy sở hữu kích thước vô cùng mỏng nhẹ với độ dày chỉ 17.9mm và nặng 1.7kg giúp cho người dùng có thể đem đi một cách dễ dàng. Mức độ hoàn thiện cũng vô cùng tốt tạo cảm giác vô cùng cứng cáp."
	},
	{
		background: "../../img/5b1d54e8e1fed7b0042a7b48292cc757.png",
		text: "Cạnh phải là nơi đặt cổng nguồn, HDMI 1.4, USB 3.2 Gen 1 Type-A, Thunderbolt 4 USB-C và giắc âm thanh 3.5mm."
	},
	{
		background: "../../img/a1e56bda540ef7f086ae0286e0c12e5f.png",
		text: "Cạnh trái khá trống trải khi chỉ có USB 2.0 và lỗ tản nhiệt. Số lượng cổng kết nối này đủ để đáp ứng được tất cả các nhu cầu của người dùng văn phòng thông thường."
	},
	{
		background: "../../img/2adcdb0bd18169aa2669bbe4b2458783.png",
		text: "Mặt D là nơi đặt hệ thống tản nhiệt, hệ thống loa hai bên và chân đế cao su để cố định máy trong quá trình sử dụng cũng như nâng máy giúp quá trình thoát nhiệt diễn ra dễ dàng hơn. Ở dưới đáy máy nhà sản xuất cũng đã khéo léo in chìm logo của BAPE"
	},
	{
		background: "../../img/ce2b15830f161d188775e48c507fcc07.png",
		text: "ASUS Vivobook S 15 OLED BAPE Edition được trang bị màn hình OLED NanoEdge với kích thước 15.6 inch hỗ trợ tỉ lệ 16:9, độ phân giải 2.8K, tần số quét 120Hz, độ sáng tối đa 600 nit và 100% dải màu DCI-P3."
	},
	{
		background: "../../img/e1b0fec8bf35f76a4682e26b2642642a.png",
		text: "Màn hình chất lượng cao cùng với đó là tỷ lệ màn hình so với thân máy là 86% đem tới trải nghiệm sử dụng tràn viền. Màn hình này có thể đáp ứng được kể cả những người dùng yêu cầu cao. Tuy nhiên tấm nền OLED cũng sẽ có phần hơi nịnh mắt một chút so với tấm nền IPS cho nên người dùng cần màu sắc chính xác cao thì sẽ cần phải làm quen để tận dụng hết khả năng của màn hình này."
	},
	{
		background: "../../img/255538b8df633d2070e5eeb360e5be8a.png",
		text: "ASUS Vivobook S 15 OLED BAPE Edition sở hữu bàn phím ASUS ErgoSense kích thước full size với đầy đủ các phím và bàn phím số. Với độ cao phím 19.05mm, nắp phím 0.2mm và hành trình phím dài 1.4mm, bàn phím này đem tới trải nghiệm sử dụng khá tốt. Nhà sản xuất cũng biết tạo dấu ấn với phím ESC đặc biệt có màu cam. Ngoài ra trên bàn phím cũng có cảm biến vân tay được tích hợp với phím nguồn."
	},
	{
		background: "../../img/487212e39dc46eba59645b237cde247f.png",
		text: "Trackpad có kích thước lớn đem tới trải nghiệm sử dụng thoải mái và mượt mà."
	},
	{
		background: "../../img/52648bddd509962821d1540f7680e57f.png",
		text: "Về hiệu năng, ASUS Vivobook S 15 OLED BAPE Edition được trang bị CPU Intel Core i5-13500H thế hệ 13. Đi kèm với đó là 16GB RAM LPDDR5 và 512GB SSD M2 NVME PCIe 4.0. Cấu hình này dư sức đáp ứng được các nhu cầu sử dụng cơ bản của hầu hết người dùng hiện nay."
	},
	{
		background: "../../img/e7ba8b4370f49b8e4440e642f862b52a.png",
		text: "Công nghệ tản nhiệt ASUS IceCool giúp Vivobook S 15 OLED BAPE Edition luôn mát mẻ với các ống dẫn nhiệt 8 mm và 6 mm được nâng cấp cùng một quạt IceBlade giúp tăng tốc quá trình truyền nhiệt một cách hiệu quả. Quạt và cánh quạt 87 cánh nhẹ hơn và mỏng hơn so với quạt thông thường, cũng như ít rung hơn, nhờ đó Vivobook của bạn có thể chạy thoải mái ở mức TDP lên đến 45."
	},
	{
		background: "../../img/52648bddd509962821d1540f7680e57f.png",
		text: "ASUS Vivobook S 15 OLED BAPE Edition được trang bị viên pin với dung lượng 75Wh hứa hẹn sẽ đem tới thời gian sử dụng ấn tượng. Thêm vào đó, bộ nguồn 90W sẽ cho phép thời gian sạc máy nhanh chóng."
	},
	{
		background: "../../img/bb4c41d901eb1ae71d35c782b6af4952.png",
		text: "ASUS Vivobook S 15 OLED BAPE Edition là thể hiện một sự kết hợp hoàn hảo giữa công nghệ và thời trang. Sản phẩm sở hữu thiết kế đẹp mắt cùng với những phụ kiện độc đáo. Ở khía cạnh công nghệ, chiếc máy sở hữu cấu hình vô cùng mạnh mẽ cùng với đó là nhiều tính năng phục vụ tốt cho người dùng. Phiên bản đặc biệt ASUS Vivobook S 15 OLED BAPE Edition sẽ được bán tại thị trường Việt Nam với mức giá 26,990,000 đồng. Hiện sản phẩm chưa lên kệ tại thị trường Việt Nam, sản phẩm dự kiến sẽ mở bán trong thời gian sắp tới. Bạn đọc quan tâm đến sản phẩm ASUS vivobook có thể tham khảo phiên bản dưới đây có cấu hình tương tự. Một vài hình ảnh khác của ASUS Vivobook S 15 OLED BAPE Edition:"
	}
]

listNewsDetailsLeftContent.forEach((value) => {
	addNewsDetailsLeftContent(value.background, value.text);
});

addLine(".newsDetails__left");

$(".newsDetails__left").append("Bài viết liên quan");

listNewsContentLeftItem_2 = [
	"../../img/c87c4133e9dbf965a63edcec95855ff4.png",
	"../../img/d13333936146e078dea4dabcbc942ade.png",
	"../../img/ba20d296bfe4d8a7d26b29d8720e3f45.png",
	"../../img/6e399d7e73780f48d7485e465eddb5ee.png",
	"../../img/2aff12ed059937d431df6dc21bd7b5ee.png"
]

listNewsContentLeftItem_2.forEach((value) => {
	addLine(".newsDetails__left");
	addNewsBottomLeftItem(".newsDetails__left", value);
});

addLine(".newsDetails__left");
addNewsBottomBtn(".newsDetails__left");

let addPaymentInstructionsSectionWrapCard = (selector, background, text) => {
	$(selector).append("<div class='paymentInstructions__section__wrap__card'></div>");
	$(".paymentInstructions__section__wrap__card:last").append("<div class='paymentInstructions__section__wrap__card__header'></div>");
	$(".paymentInstructions__section__wrap__card__header:last").append("<div class='paymentInstructions__section__wrap__card__header__content'></div>");
	$(".paymentInstructions__section__wrap__card__header__content:last").text(text);
	$(".paymentInstructions__section__wrap__card__header:last").append("<div class='paymentInstructions__section__wrap__card__header__box'></div>");
	$(".paymentInstructions__section__wrap__card__header__box:last").append("<div class='paymentInstructions__section__wrap__card__header__box__img'></div>");
	$(".paymentInstructions__section__wrap__card__header__box__img:last").css("background", background);
	$(".paymentInstructions__section__wrap__card:last").append("<hr/>");
	$(".paymentInstructions__section__wrap__card:last").append("<div class='paymentInstructions__section__wrap__card__content'>Quý khách có thể chuyển khoản qua tài khoản của ngân hàng của bạn</div>");
	$(".paymentInstructions__section__wrap__card:last").append("<a href='#'>Chi tiết - thông tin  >></a>");
}

listPaymentInstructionsSectionWrapCard_1 = [
	{
		background: "../../img/1e3d7d069ec33b2c7f36ecf483a4a305.png",
		text: "Thanh toán chuyển khoản"
	},
	{
		background: "../../img/54cee625c4af5e6771d51f075f0e8da2.png",
		text: "Thanh toán trực tiếp"
	},
	{
		background: "../../img/7af46cd512918a3878d5574563e12b92.png",
		text: "Thanh toán khi nhận hàng"
	}
]
	
listPaymentInstructionsSectionWrapCard_1.forEach((value) => {
	addPaymentInstructionsSectionWrapCard(".paymentInstructions__section__wrap:first", value.background, value.text);
});

listPaymentInstructionsSectionWrapCard_2 = [
	{
		background: "../../img/a137739c9232eb6715ebeda9664c0131.png",
		text: "Thanh toán Ví điện tử MoMo"
	},
	{
		background: "../../img/c47eb93fd27f65a4f1b85cd84d49f899.png",
		text: "Thanh toán ứng dụng Zalopay"
	}
]
	
listPaymentInstructionsSectionWrapCard_2.forEach((value) => {
	addPaymentInstructionsSectionWrapCard(".paymentInstructions__section__wrap:last", value.background, value.text);
});

let addPaymentInstructionsSectionGroupImg = (selector, background) => {
	$(selector).css("background", background);
}

addPaymentInstructionsSectionGroupImg(".paymentInstructions__section__group__img:nth-child(1)", "../../img/c47eb93fd27f65a4f1b85cd84d49f899.png");
addPaymentInstructionsSectionGroupImg(".paymentInstructions__section__group__img:last", "../../img/7af46cd512918a3878d5574563e12b92.png') lightgray -16px -27.451px / 112.355% 121.198% no-repeat");

let addWarrantyPolicyBottomContactCardImg = (background) => {
	$(".warrantyPolicy__bottom__contact__card").append("<img class='warrantyPolicy__bottom__contact__card__img'></img>");
	$(".warrantyPolicy__bottom__contact__card__img:last").attr("src", background);
}

listWarrantyPolicyBottomContactCardImg = [
	"../../img/66adc58b74858ee4e7de6715d672c643.png",
	"../../img/957a73977007f9ea18dd77e024113eb0.png",
	"../../img/28719efd2e441f57aded97364a0af7a0.png",
	"../../img/97751cf5a7899f1955106b1ac8a3c03d.png",
	"../../img/4b2f484791a466d1f3c99a8d743f7637.png"
]

listWarrantyPolicyBottomContactCardImg.forEach((value) => {
	addWarrantyPolicyBottomContactCardImg(value);
});

let btnToTop = $(".to-top");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnToTop.addClass("show");
  } else {
    btnToTop.removeClass("show");
  }
});

btnToTop.on("click", function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

showNavbar();
showAddressDetails();
showIndexSideBar();
addSticky();