let lastScrollTop = 0;
        const sticky1 = document.querySelector('.sticky1');

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                sticky1.style.top = '-500px'; // Hide navbar
            } else {
                // Scrolling up
                sticky1.style.top = '8.4vh'; // Show navbar
            }
            lastScrollTop = scrollTop;
        })
      
        