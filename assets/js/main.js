'use strict';
(function(){
 const menuBtn=document.querySelector('[data-menu-toggle]');
 const nav=document.querySelector('[data-main-nav]');
 if(menuBtn&&nav){
   function closeMenu(){nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Mở menu');document.body.classList.remove('menu-open')}
   menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Đóng menu':'Mở menu');document.body.classList.toggle('menu-open',open)});
   nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
   document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
 }
 const choices={
  mypham:{title:'Hộp mỹ phẩm có cấu trúc gọn, bề mặt in chỉn chu',text:'Ưu tiên kích thước lọt lòng theo lọ hoặc tuýp thực tế. Với hộp gấp trưng bày, thử Ivory hoặc Duplex; nếu cần trải nghiệm mở hộp đặc biệt, cân nhắc hộp cứng có khay đỡ.',material:'Ivory / Duplex, hoặc hộp cứng bồi giấy',check:'Khay giữ sản phẩm, nếp gấp, vị trí thông tin bắt buộc'},
  quatang:{title:'Hộp quà tạo ấn tượng từ khoảnh khắc mở nắp',text:'Nên bắt đầu bằng cách sắp xếp trọn bộ vật phẩm, rồi mới chọn hộp âm dương, ngăn kéo hay nắp nam châm. Đừng quên tính phần khay và khoảng hở khi mở.',material:'Hộp cứng bồi giấy; tùy nhu cầu có ép kim hoặc UV',check:'Vị trí khay, độ khít nắp, điểm cầm mở hộp'},
  thucpham:{title:'Hộp thực phẩm: công năng và điều kiện tiếp xúc là ưu tiên',text:'Phân biệt hộp giấy bao ngoài với phần bao gói chạm trực tiếp thực phẩm. Quy cách chịu ẩm, dầu hoặc nhiệt cần được xác minh theo cách sử dụng thực tế.',material:'Kraft / Ivory hoặc cấu trúc phù hợp mục đích',check:'An toàn tiếp xúc, thông tin nhãn, điều kiện bảo quản'},
  banle:{title:'Hộp bán lẻ cần vận hành tốt từ kệ trưng bày đến giao hàng',text:'Tập trung vào sự đồng đều khi xếp kệ, nắp đáy đủ chắc và thao tác đóng gói nhanh. Với đơn thương mại điện tử, có thể cần thêm lớp hộp ngoài bảo vệ.',material:'Ivory / Duplex / Kraft theo tải trọng',check:'Kích thước lọt lòng, mã vạch, vận chuyển, độ bền đáy'}
 };
 const tabs=document.querySelectorAll('[data-choice]');
 if(tabs.length){const title=document.querySelector('[data-choice-title]'),text=document.querySelector('[data-choice-text]'),material=document.querySelector('[data-choice-material]'),check=document.querySelector('[data-choice-check]');tabs.forEach(tab=>tab.addEventListener('click',()=>{const d=choices[tab.dataset.choice];if(!d)return;tabs.forEach(t=>t.setAttribute('aria-selected',String(t===tab)));title.textContent=d.title;text.textContent=d.text;material.textContent=d.material;check.textContent=d.check}))}
 const list=document.querySelector('[data-checklist]');
 if(list){const checks=Array.from(list.querySelectorAll('input[type="checkbox"]')),fill=document.querySelector('[data-progress-fill]'),count=document.querySelector('[data-progress-count]');function update(){const value=checks.filter(i=>i.checked).length;fill.style.width=(value/checks.length*100)+'%';count.textContent=value+' / '+checks.length+' mục';}checks.forEach(c=>c.addEventListener('change',update));update()}
 const copy=document.querySelector('[data-copy-template]');
 if(copy){copy.addEventListener('click',async()=>{const t=document.querySelector('[data-template-text]');try{await navigator.clipboard.writeText(t.textContent.trim());copy.textContent='Đã sao chép ✓';setTimeout(()=>copy.textContent='Sao chép mẫu yêu cầu',2200)}catch(e){copy.textContent='Hãy chọn và sao chép phần nội dung';setTimeout(()=>copy.textContent='Sao chép mẫu yêu cầu',2500)}})}
})();
