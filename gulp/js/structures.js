console.log('structures');

window.Spot = function (name, title, next, map, center, zoom, coords, type, color, highlightColor, icon){
    this.name = name; // String: 'broadRipple'
    this.title = title;
    this.getTitle = function() {
        return this.title;
    };
    this.getName = function() {
        return this.name;
    };
    this.el = function() {
    return $('.' + this.name);
    };
    this.init = function() {
        // Populates Spot onto map
        this.constructGooglePoly();
        this.setMarker();
    };
    this.next = next; // Spot obj or null
    this.initNext = function() {
        this.next.init();
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
        var finalPolyline = new google.maps.Polyline(polyline);
        return finalPolyline;
    };
    this.generatePolygon = function() {
        var polygon = this.getPoly();
            color = this.getColor();
        console.log(polygon);
        polygon.path = this.getCoords();
        polygon.strokeColor = color.strokeColor;
        polygon.fillColor = color.fillColor;
        polygon.fillOpacity = 0.35;
        console.log(polygon)
        var finalPoly = new google.maps.Polygon(polygon);
        console.log(finalPoly);
        return finalPoly;
    };
    this.constructGooglePoly = function() {
        console.log(this.map);
        this.getGooglePoly().setMap(this.map);
        return 1;
    };
    this.clearGooglePoly = function () {
        this.getGooglePoly().setMap(null);
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
        var finalPolyline = new google.maps.Polyline(polyline);
        return finalPolyline;
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
        var finalPoly = new google.maps.Polygon(polygon);
        return finalPoly;
    };
    this.constructHighlightGooglePoly = function() {
        this.getHighlightGooglePoly().setMap(this.map);
        return 1;
    };
    this.clearHighlightGooglePoly = function () {
        this.getHighlightGooglePoly().setMap(null);
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
//    constructPoly: function() {
//    meridianPoly.setMap(map);
//    if (this.next) {
//        this.next.constructPoly();
//    }
//},
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
            this.getMarker().setMap(map);
            return 1;
        }
        else return -1;
    };
    //constructMarker: function () {
    //    var myLatlng = new google.maps.LatLng(this.center.lat,this.center.lng);
    //
    //    this.marker = new google.maps.Marker({
    //        position: myLatlng,
    //        title: this.getTitle(),
    //
    //        icon: 'images/marker.png'
    //    });
    //
    //    this.marker.setMap(map);
    //
    //    if (this.next) {
    //        this.next.constructMarker();
    //    }
    //},
    this.resetMarker = function () {
        // Not sure what this will do...yet...
    };
    this.unhighlight = function() {
        // Will reset the coloring of a poly
    };
    this.highlight = function () {
        this.unhighlight();
        this.clearGooglePoly();
        this.constructHighlightGooglePoly();
        //this.panTo();
    };
    //highlight: function() {
    //    this.unhighlight();
    //    this.clearGooglePoly();
    //
    //    this.poly.strokeColor = this.highlightColor;
    //    this.poly.strokeOpacity = 0.5;
    //    this.poly.strokeWeight = 10;
    //    meridianPoly = new google.maps.Polyline(this.poly);
    //    meridianPoly.setMap(map);
    //
    //    this.panTo();
    //},
    //reset: function() {
    //    meridianPoly.setMap(null);
    //    if (this.marker) {this.resetMarker();};
    //
    //    this.poly.strokeColor = '#92D300';
    //    this.poly.strokeOpacity = 1;
    //    this.poly.strokeWeight = 2;
    //    meridianPoly = new google.maps.Polyline(this.poly);
    //    meridianPoly.setMap(map);
    //},
    //setZoom: function () {
    //    map.setZoom(this.zoom)
    //},
    //panTo: function () {
    //    map.panTo(this.center);
    //    this.setZoom();
    //},
    //moveToSlide: function () {
    //    console.log('move Slide')
    //    var index = $('.swiper-slide').index(this.el()) - 1;
    //    mySwiper.slideTo(index, 500);
    //}
};

var collegeCoords = [
    new google.maps.LatLng(39.91253784835588, -86.1458158493042),

    new google.maps.LatLng(39.9007031172086, -86.14585876464844),

    new google.maps.LatLng(39.88572159734742, -86.1458158493042),

    new google.maps.LatLng(39.88144056165907, -86.14579439163208),

    new google.maps.LatLng(39.877488599164494, -86.14613771438599),

    new google.maps.LatLng(39.87536432521706, -86.14613771438599),

    new google.maps.LatLng(39.87407984858469, -86.14618062973022),

    new google.maps.LatLng(39.872581262110266, -86.14624500274658),

    new google.maps.LatLng(39.863869050598446, -86.14607334136963),

    new google.maps.LatLng(39.85713238576469, -86.14594459533691),

    new google.maps.LatLng(39.84785809547373, -86.1458158493042),

    new google.maps.LatLng(39.842816836594174, -86.1457085609436),

    new google.maps.LatLng(39.84232257560377, -86.1457085609436),

    new google.maps.LatLng(39.8406420616243, -86.14532232284546),

    new google.maps.LatLng(39.840032453250814, -86.14517211914062),

    new google.maps.LatLng(39.839505220023106, -86.14521503448486),

    new google.maps.LatLng(39.82502119962214, -86.14506483078003),

    new google.maps.LatLng(39.80911656829775, -86.1449146270752),

    new google.maps.LatLng(39.80717150073159, -86.14478588104248),

    new google.maps.LatLng(39.785475323257955, -86.14474296569824),

    new google.maps.LatLng(39.78174869538038, -86.14472150802612),

    new google.maps.LatLng(39.780709820662594, -86.14512920379639),

    new google.maps.LatLng(39.77924217726969, -86.14508628845215),

    new google.maps.LatLng(39.77836817251456, -86.1451506614685),

    new google.maps.LatLng(39.77721380960049, -86.14523649215698),

    new google.maps.LatLng(39.775234856701566, -86.14532232284546),

    new google.maps.LatLng(39.770996407821016, -86.14551544189453),

    new google.maps.LatLng(39.75794958308906, -86.14598751068115),
];

google.maps.event.addDomListener(window, 'click', setBrendan);

function setBrendan() {
    console.log('im a map')
    window.brendan = new Spot('brendan', 'Brendan Quinn', null, map, {lat: 39.863869050598446, lng: -86.14607334136963}, 11, collegeCoords, 'line', {strokeColor: '#FF0DFF'}, {strokeColor: '#FF530D'}, 'images/marker.png');
}