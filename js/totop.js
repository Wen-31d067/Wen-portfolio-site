const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        
        // 監聽頁面滾動事件
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopBtn.style.display = "block";
                scrollToTopBtn.style.opacity = "1";
            } else {
                scrollToTopBtn.style.display = "none";
                scrollToTopBtn.style.opacity = "0";
            }
        }

        // 點擊按鈕時執行滾動到頂部功能
        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });