console.log('structures');

window.Spot = function (name, pairName, title, next, map, center, zoom, coords, type, color, highlightColor, icon, imageUrl){
    this.name = name; // String: 'broadRipple'
    this.pairName = pairName;
    this.title = title;
    this.getTitle = function() {
        return this.title;
    };
    this.getName = function() {
        return this.name;
    };
    this.getPairName = function() {
        return this.pairName;
    };
    this.el = function() {
    return $('.' + this.name);
    };
    this.init = function() {
        // Populates Spot onto map
        this.constructGooglePoly();
        this.setMarker();
        this.appendBothSwiperSlides();
        this.initNext();
    };
    this.next = next; // Spot obj or null
    this.initNext = function() {
        if(this.next) {
            this.next.init();
        }
        else{return -1}
    };
    this.pairDescription = 'This is all about the pair of glasses you see above.  Aren\'t they beautiful?';
    this.getPairDescription = function(){
        return this.pairDescription
    };
    this.areaDescription = 'This is al about the area.  Hopefully this is completely full of good stuff.';
    this.getAreaDescription = function() {
        return this.areaDescription
    };
    this.toDoDescription = ['thing one is here.', 'thing two is here.', 'This is the last item.'];
    this.getToDoDescription = function () {
        var arr = this.toDoDescription;
        var html = [];
        for (var i = 0; i < arr.length; i++) {
            html.push('<li class=\'todo-item\'>' + arr[i] + '</li>');
        }
        return html.join('');
    };
    this.about = [
        '<div class="about">',
        '<p>' + this.getPairDescription() + '</p>',
        '<h4>About The Area</h4>',
        '<p>' + this.getAreaDescription() + '</p>',
        '<h4>Things To Do</h4>',
        '<ul>' + this.getToDoDescription() + '</ul>',
        //'<a class=\right\' href=\'\'>hide</a>',
        '<span class=\'hide-btn right\'>hide</span>',
        '</div>'
    ].join('');
    this.getAbout = function () {
        return this.about;
    };
    this.map = map; // GoogleMap
    this.center = center; // Obj: {lat: 39.76841991769641, lng: -86.15808963775635};
    this.getCenter = function() {
        return this.center;
    };
    this.getGoogleCenter = function() {
        return new google.maps.LatLng(this.getCenter().lat,this.getCenter().lng);
    };
    this.zoom = zoom; // int: 15
    this.getZoom = function() {
        return this.zoom;
    };
    this.coords = coords; // Array: [new google.maps.LatLng(39.86963339756685, -86.14609479904175), new google.maps.LatLng(39.8696992730187, -86.14171743392944)]
    this.getCoords = function() {
        return this.coords;
    };
    this.type = type; // String: 'line' or 'ngon'
    this.validateType = function (type) {
        //checks for either 'line' or 'ngon'
        if (type === 'line' || type === 'ngon') return type;
        else return 'line';
    };
    this.getType = function() {
        return this.validateType(this.type);
    };
    this.color = color; // Obj: {strokeColor: '#92D300', fillColor: '#92D300'}
    this.getColor = function() {
        return this.color;
    };
    this.poly = {
        geodesic: true,
        strokeOpacity: 1,
        strokeWeight: 2
    };
    this.getPoly = function() {
        return this.poly;
    };
    this.finalPoly = 'blah';
    this.getFinalPoly = function() {
        return this.finalPoly;
    };
    this.getGooglePoly = function() {
        if(this.getType() === 'line') {
            return this.generatePolyline();
        }
        else if(this.getType() === 'ngon') {
            return this.generatePolygon();
        }
        else {
            return 'Error, type not valid';
        }
    };
    this.generatePolyline = function() {
        var polyline = this.getPoly();
            color = this.getColor();
        polyline.path = this.getCoords();
        polyline.strokeColor = color.strokeColor;
        polyline.strokeOpacity = 1;
        polyline.strokeWeight = 1;
        this.poly = polyline;
        this.finalPoly = new google.maps.Polyline(polyline);
        return this.getFinalPoly();
    };
    this.generatePolygon = function() {
        var polygon = this.getPoly();
            color = this.getColor();
        //console.log(polygon);
        polygon.path = this.getCoords();
        polygon.strokeColor = color.strokeColor;
        polygon.fillColor = color.fillColor;
        polygon.fillOpacity = 0.35;
        polygon.strokeOpacity = 1;
        polygon.strokeWeight = 1;
        this.poly = polygon;
        this.finalPoly = new google.maps.Polygon(polygon);
        return this.getFinalPoly();
    };
    this.constructGooglePoly = function() {
        this.getGooglePoly().setMap(this.map);
        return 1;
    };
    this.clearGooglePoly = function () {
        this.getFinalPoly().setMap(null);
        return 1;
    };
    this.highlightColor = highlightColor; // Obj: {strokeColor: '#92D300', fillColor: '#92D300'}
    this.getHighlightColor = function() {
        return this.highlightColor;
    };
    this.getHighlightGooglePoly = function() {
        if(this.getType() === 'line') {
            return this.generateHighlightPolyline();
        }
        else if(this.getType() === 'ngon') {
            return this.generateHighlightPolygon();
        }
        else {
            return 'Error, type not valid';
        }
    };
    this.generateHighlightPolyline = function() {
        var polyline = this.getPoly();
            color = this.getHighlightColor();
        polyline.path = this.getCoords();
        polyline.strokeColor = color.strokeColor;
        polyline.strokeOpacity = 0.5;
        polyline.strokeWeight = 10;
        this.poly = polyline;
        this.finalPoly = new google.maps.Polyline(polyline);
        return this.getFinalPoly();
    };
    this.generateHighlightPolygon = function() {
        var polygon = this.getPoly();
            color = this.getHighlightColor();
        polygon.path = this.getCoords();
        polygon.strokeColor = color.strokeColor;
        polygon.fillColor = color.fillColor;
        polygon.fillOpacity = 0.35;
        polygon.strokeOpacity = 0.5;
        polygon.strokeWeight = 10;
        this.poly = polygon;
        this.finalPoly = new google.maps.Polygon(polygon);
        return this.getFinalPoly();
    };
    this.constructHighlightGooglePoly = function() {
        this.clearGooglePoly();
        this.getHighlightGooglePoly().setMap(this.map);
        return 1;
    };
    this.clearHighlightGooglePoly = function () {
        this.getFinalPoly().setMap(null);
        return 1;
    };
    this.marker = null;
    this.getMarker = function() {
        return this.marker;
    };
    this.icon = icon;
    this.getIcon = function() {
        return this.icon;
    };
    this.constructMarker = function() {
        var myLatlng = this.getGoogleCenter();

        this.marker = new google.maps.Marker({
            position: myLatlng,
            title: this.getTitle(),
            icon: this.getIcon()
        });
        return 1;
    };
    this.setMarker = function() {
        var ready = this.constructMarker();
        if(ready) {
            this.getMarker().setMap(this.map);
            return 1;
        }
        else return -1;
    };
    this.clearMarker = function () {
        // Not sure what this will do...yet...
        brightwood.getMarker().setMap(null);
        return 1;
    };
    this.resetPoly = function () {
        // Resets the Poly to original
        this.clearHighlightGooglePoly();
        this.constructGooglePoly();
    };
    this.unhighlight = function() {
        this.clearHighlightGooglePoly()
        this.constructGooglePoly();
    };
    this.highlight = function () {
        this.clearGooglePoly();
        this.constructHighlightGooglePoly();
        this.panTo();
    };
    this.panTo = function() {
        this.map.panTo(this.getCenter());
        this.setZoom();
    };
    this.panToAndHighlight = function() {
        this.map.panTo(this.getCenter());
        this.setZoom();
        this.highlight();
    };
    this.setZoom = function() {
        this.map.setZoom(this.zoom)
    };
    this.contentString = [
        '<div class=\'content\'>',
            '<div class=\'siteNotice\'></div>',
            '<h1 class=\'firstHeading\' class=\'firstHeading\'>Broad Ripple</h1>',
            '<div class=\'bodyContent\'>',
                '<p style=\'display: inline-block;width:49%;\'>Located in northern Indy, Broad Ripple is home to a fun mix',
                'of art galleries, restaurants, comedy clubs,  local shopping',
                'venues, and bars.  It’s a popular destination for those seeking',
                'some fun on the weekend.</p>',
                '<img style=\'display: inline-block;width:49%; vertical-align:top\' src=\'http://cdn.visitindy.com/web/2014/4/25/broad-ripple-village-1.jpg\'>',
            '</div>',
        '</div>'
    ].join('');
    this.getContentString = function() {
        return this.contentString
    };
    this.imageUrl = imageUrl || 'http://cdn.felixandiris.com/tn_-----images--W--BroadRipple-TOR---jpg_w705.jpg';
    this.getImageUrl = function() {
        return this.imageUrl;
    };
    this.swiperSlide = [
        '<!-- Begin Pair-->',
        '<div id="' + this.getName() + '-v" class="' + this.getName() + ' row pair-container swiper-slide" data-name="' + this.getName() + '">',
            '<div class="pair-img large-12 medium-12 small-12 columns">',
                '<div class="pair-img-container">',
                    '<img src="' + this.getImageUrl() + '" alt="' + this.getTitle() + '"/>',
                '</div>',
                '<h3><span>' + this.getPairName() + '</span></h3>',
            '</div>',
            '<!-- .pair-text-->',
            '<div class="large-12 medium-12 small-12 columns pair-text">',
                this.getAbout(),
            '</div>  <!-- End .pair-text-->',
        '</div> <!-- End Pair-->'
    ].join('');
    this.getSwiperSlide = function() {
        return this.swiperSlide;
    };
    this.appendSwiperSlide_v = function () {
        $('.swiper-container-v .swiper-wrapper').prepend(this.getSwiperSlide());
    };
    this.appendSwiperSlide_h = function () {
        $('.swiper-container-h .swiper-wrapper').append(this.getSwiperSlide());
    }
    this.appendBothSwiperSlides = function() {
        this.appendSwiperSlide_v();
        this.appendSwiperSlide_h();
    }
};