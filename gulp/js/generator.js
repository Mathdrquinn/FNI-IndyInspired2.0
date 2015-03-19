console.log('generator');

function initSwipers () {
    console.log('swipers go')

    window.mySwiper_h = new Swiper('.swiper-container-h',{
        direction:'horizontal',
        loop: false,
        //pagination: '#dot-inner',
        //paginationClickable: true,
        keyboardControl: true,
        autoplay: false,
        autoplayDisableInteraction: true,
        mousewheelControl: true,
        slidesPerView: 1,
        pagination: '.pagination-h',
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
        paginationClickable: true
        //onClick: function(swiper, event) {
        //    swiper.updateActiveIndex()
        //    console.log(swiper.activeIndex)
        //
        //    name = $(swiper.slides[swiper.activeIndex]).data('name');
        //    activePair = window[name];
        //
        //    if (map.getCenter().k !== activePair.center.lat) {
        //        // Find prev place
        //        var $old = $('.highlighted');
        //        if($old.length > 0) {
        //            console.log($old)
        //            var old = $($old[0]).data('name');
        //            //Unhighlight it
        //            console.log(old)
        //            window[old].unhighlight();
        //            $old.removeClass('highlighted');
        //        }
        //
        //        activePair.panToAndHighlight();
        //        activePair.el().addClass('highlighted');
        //
        //    }
        //}
    });

    window.mySwiper = new Swiper('.swiper-container-v',{
        direction:'vertical',
        loop: false,
        slidesPerView: 3,
        stimulateTouch:false,
        mousewheelControl: true,
        //pagination: '#dot-inner',
        //paginationClickable: true,
        keyboardControl: true,
        autoplay: false,
        autoplayDisableInteraction: true,
        slideToClickedSlide: true,
        pagination: '.pagination-v',
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
        paginationClickable: true
        //onClick: function(swiper, event) {
        //    swiper.updateActiveIndex()
        //    console.log(swiper.activeIndex)
        //
        //    name = $(swiper.slides[swiper.activeIndex]).data('name');
        //    activePair = window[name];
        //
        //    if (map.getCenter().k !== activePair.center.lat) {
        //        // Find prev place
        //        var $old = $('.highlighted');
        //        if($old.length > 0) {
        //            var old = $($old[0]).data('name');
        //
        //            //Unhighlight it
        //            console.log(old)
        //            window[old].unhighlight();
        //            $old.removeClass('highlighted');
        //        }
        //
        //        activePair.panToAndHighlight();
        //        activePair.el().addClass('highlighted');
        //
        //    }
        //}
    });

    $('#glasses-container-v').on('click', '.pair-container', function() {
        mySwiper.updateActiveIndex()
        console.log($(this).data('name'));

        if($(this).data('name') === 'blank') {
            debugger;
            return;
        }

        name = $(mySwiper.slides[mySwiper.activeIndex]).data('name');
        activePair = window[name];

        if (map.getCenter().k !== activePair.center.lat) {
            // Find prev place
            var $old = $('.highlighted');
            if($old.length > 0) {
                var old = $($old[0]).data('name');

                //Unhighlight it
                console.log(old)
                window[old].unhighlight();
                $old.removeClass('highlighted');
            }

            activePair.panToAndHighlight();
            activePair.el().addClass('highlighted');

        }
    });

    $('#glasses-container-h').on('click', '.pair-container', function() {
        mySwiper_h.updateActiveIndex()
        console.log($(this).data('name'));

        if($(this).data('name') === 'blank') {
            debugger;
            return;
        }

        name = $(mySwiper_h.slides[mySwiper_h.activeIndex]).data('name');
        activePair = window[name];

        if (map.getCenter().k !== activePair.center.lat) {
            // Find prev place
            var $old = $('.highlighted');
            if($old.length > 0) {
                var old = $($old[0]).data('name');

                //Unhighlight it
                console.log(old)
                window[old].unhighlight();
                $old.removeClass('highlighted');
            }

            activePair.panToAndHighlight();
            activePair.el().addClass('highlighted');

        }
    });

    $('#glasses-container-h').on('click', '.pair-container', function() {
        mySwiper_h.updateActiveIndex()
        console.log($(this).data('name'));

        if($(this).data('name') === 'blank') {
            debugger;
            return;
        }

        name = $(mySwiper_h.slides[mySwiper_h.activeIndex]).data('name');
        activePair = window[name];

        if (map.getCenter().k !== activePair.center.lat) {
            // Find prev place
            var $old = $('.highlighted');
            if($old.length > 0) {
                var old = $($old[0]).data('name');

                //Unhighlight it
                console.log(old)
                window[old].unhighlight();
                $old.removeClass('highlighted');
            }

            activePair.panToAndHighlight();
            activePair.el().addClass('highlighted');

        }
    });
}