console.log('brendan!')
var standardColor = '#92D300';
var highlightColor = '#FD7C08';
    viewPort = $(document).width();
    change = false;
$(document).ready(function() {

    var styles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#92d300"
                },
                {
                    "lightness": "100"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#92d300"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#0087ce"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];

    var kesslerCenter = {lat: 39.862053695703196, lng: -86.14397048950195};
    var kesslerCoords = [
        new google.maps.LatLng(39.85520154639845, -86.08376026153564),

        new google.maps.LatLng(39.85635460016761, -86.08468294143677),

        new google.maps.LatLng(39.8571617262798, -86.08519792556763),

        new google.maps.LatLng(39.85785354110664, -86.0858416557312),

        new google.maps.LatLng(39.858018257894656, -86.08633518218994),

        new google.maps.LatLng(39.85810061614039, -86.08807325363159),

        new google.maps.LatLng(39.858067672853956, -86.09210729598999),

        new google.maps.LatLng(39.85813355941101, -86.09264373779297),

        new google.maps.LatLng(39.85833121870268, -86.09384536743164),

        new google.maps.LatLng(39.858990078896575, -86.09459638595581),

        new google.maps.LatLng(39.85971481780381, -86.09508991241455),

        new google.maps.LatLng(39.86095015057128, -86.09513282775879),

        new google.maps.LatLng(39.862168990439265, -86.09607696533203),

        new google.maps.LatLng(39.862300755614704, -86.09657049179077),

        new google.maps.LatLng(39.862300755614704, -86.09880208969116),

        new google.maps.LatLng(39.86235016749027, -86.1221694946289),

        new google.maps.LatLng(39.862300755614704, -86.13083839416504),

        new google.maps.LatLng(39.862267814344584, -86.13798379898071),

        new google.maps.LatLng(39.86220193175684, -86.14652395248413),

        new google.maps.LatLng(39.86215251977454, -86.14892721176147),

        new google.maps.LatLng(39.86215251977454, -86.1501932144165),

        new google.maps.LatLng(39.8624819323178, -86.15163087844849),

        new google.maps.LatLng(39.8625807557724, -86.15257501602173),

        new google.maps.LatLng(39.86263016744631, -86.15379810333252),

        new google.maps.LatLng(39.86279487276908, -86.1544418334961),

        new google.maps.LatLng(39.86319016393065, -86.15562200546265),

        new google.maps.LatLng(39.86317369351106, -86.1562442779541),

        new google.maps.LatLng(39.86291016625977, -86.15701675415039),

        new google.maps.LatLng(39.86236663810754, -86.15819692611694),

        new google.maps.LatLng(39.86211957843325, -86.15907669067383),

        new google.maps.LatLng(39.86208663707611, -86.16019248962402),

        new google.maps.LatLng(39.86220193175684, -86.16257429122925),

        new google.maps.LatLng(39.86225134370357, -86.16536378860474),

        new google.maps.LatLng(39.86244899113463, -86.16746664047241),

        new google.maps.LatLng(39.862679579084656, -86.16838932037354),

        new google.maps.LatLng(39.862465461728185, -86.16952657699585),

        new google.maps.LatLng(39.86220193175684, -86.17019176483154),

        new google.maps.LatLng(39.861477219116935, -86.17072820663452),

        new google.maps.LatLng(39.86048896227286, -86.17150068283081),

        new google.maps.LatLng(39.858990078896575, -86.17321729660034),

        new google.maps.LatLng(39.85852887742504, -86.17424726486206),

        new google.maps.LatLng(39.858067672853956, -86.17516994476318),

        new google.maps.LatLng(39.85765588043917, -86.1772084236145),

        new google.maps.LatLng(39.85760646518334, -86.17976188659668),

        new google.maps.LatLng(39.85755704989193, -86.18145704269409),

        new google.maps.LatLng(39.85762293693925, -86.18476152420044),

        new google.maps.LatLng(39.85754057812022, -86.18692874908447),

        new google.maps.LatLng(39.85721114185585, -86.18838787078857),

        new google.maps.LatLng(39.85628871190268, -86.1898684501648),

        new google.maps.LatLng(39.85590985315163, -86.19124174118042),

        new google.maps.LatLng(39.855712186886066, -86.1935806274414),

        new google.maps.LatLng(39.85543215870204, -86.19555473327637),

        new google.maps.LatLng(39.85500387809296, -86.19714260101318),

        new google.maps.LatLng(39.85432850708711, -86.19834423065186),

        new google.maps.LatLng(39.85370254753791, -86.19954586029053),

        new google.maps.LatLng(39.85365312943563, -86.20413780212402),

        new google.maps.LatLng(39.85355429312432, -86.21192693710327),
    ];

    var mapOptions = {
        center: { lat: 39.8120, lng: -86.1480},
        zoom: 11,
        styles: styles
    };
    window.map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    /* Polylines and Polygon Coords
    //////////////////////////////////////////////*/

    // Meridian Coords
    meridianCoords = [
        new google.maps.LatLng(39.912409780019786, -86.15787506103516),
        new google.maps.LatLng(39.88012326613326, -86.15785360336304),
        new google.maps.LatLng(39.877488599164494, -86.15787506103516),

        new google.maps.LatLng(39.87020980562549, -86.15585803985596),

        new google.maps.LatLng(39.86899110859627, -86.15547180175781),

        new google.maps.LatLng(39.867410063971384, -86.1553430557251),

        new google.maps.LatLng(39.866125438383825, -86.1553430557251),

        new google.maps.LatLng(39.86556546585626, -86.1554503440857),

        new google.maps.LatLng(39.865005488758314, -86.15581512451172),

        new google.maps.LatLng(39.86459373797635, -86.15626573562622),

        new google.maps.LatLng(39.863770228999336, -86.15720987319946),

        new google.maps.LatLng(39.86312788513576, -86.1573600769043),

        new google.maps.LatLng(39.81885756170534, -86.1568021774292),

        new google.maps.LatLng(39.80311635241795, -86.15660905838013),

        new google.maps.LatLng(39.80258883587129, -86.15663051605225),

        new google.maps.LatLng(39.796175889240835, -86.15731716156006),

        new google.maps.LatLng(39.795631832831745, -86.15733861923218),

        new google.maps.LatLng(39.78839382450806, -86.15727424621582),

        new google.maps.LatLng(39.780017228804276, -86.15759611129761),

        new google.maps.LatLng(39.773057942793294, -86.15787506103516),

        new google.maps.LatLng(39.769083248135736, -86.15800380706787),

        new google.maps.LatLng(39.769056704732755, -86.1578106880188),

        new google.maps.LatLng(39.76896599322008, -86.15756392478943),

        new google.maps.LatLng(39.76866087180028, -86.15731716156006),

        new google.maps.LatLng(39.76852892698368, -86.1572527885437),

        new google.maps.LatLng(39.76833925586681, -86.15732789039612),

        new google.maps.LatLng(39.76818257063701, -86.15743517875671),

        new google.maps.LatLng(39.768058871519486, -86.15760684013367),

        new google.maps.LatLng(39.767976405317654, -86.15784287452698),

        new google.maps.LatLng(39.767935172179705, -86.15806818008423),

        new google.maps.LatLng(39.765906471296056, -86.15811109542847),

        new google.maps.LatLng(39.7614200261931, -86.1583149433136)
    ];

    // Broad Ripple Coords
    var broadRippleCenter = {lat: 39.86850990258248, lng: -86.13418579101562};
    var broadRippleCoords = [
        new google.maps.LatLng(39.86963339756685, -86.14609479904175),

        new google.maps.LatLng(39.8696992730187, -86.14171743392944),

        new google.maps.LatLng(39.86966633530071, -86.13869190216064),

        new google.maps.LatLng(39.869155798649196, -86.13676071166992),

        new google.maps.LatLng(39.868793480010815, -86.13459348678589),

        new google.maps.LatLng(39.86859585085607, -86.13412141799927),

        new google.maps.LatLng(39.868579381734136, -86.13158941268921),

        new google.maps.LatLng(39.86862878908807, -86.1283278465271),

        new google.maps.LatLng(39.86866172730424, -86.12236261367798)
    ];

    // College Coords
    var collegeCenter = {lat: 39.82502119962214, lng: -86.14506483078003};
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

    //Foxhill Coords
    window.foxHillCoords = [
        new google.maps.LatLng(39.864956078794926, -86.20023250579834),

        new google.maps.LatLng(39.865071368654114, -86.19774341583252),

        new google.maps.LatLng(39.86464314820064, -86.19353771209717),

        new google.maps.LatLng(39.864692558389365, -86.19197130203247),

        new google.maps.LatLng(39.86477490862484, -86.18332386016846),

        new google.maps.LatLng(39.86464314820064, -86.18019104003906),

        new google.maps.LatLng(39.86459373797635, -86.17913961410522),

        new google.maps.LatLng(39.86429727588325, -86.17828130722046),

        new google.maps.LatLng(39.86403375294735, -86.17572784423828),

        new google.maps.LatLng(39.86388552085113, -86.17366790771484),

        new google.maps.LatLng(39.863605526017835, -86.17210149765015),

        new google.maps.LatLng(39.86307847382023, -86.16961240768433),

        new google.maps.LatLng(39.86278200517997, -86.1682391166687)
    ];

    // Kessler Coords
    var kesslerCoords = [
        new google.maps.LatLng(39.85520154639845, -86.08376026153564),

        new google.maps.LatLng(39.85635460016761, -86.08468294143677),

        new google.maps.LatLng(39.8571617262798, -86.08519792556763),

        new google.maps.LatLng(39.85785354110664, -86.0858416557312),

        new google.maps.LatLng(39.858018257894656, -86.08633518218994),

        new google.maps.LatLng(39.85810061614039, -86.08807325363159),

        new google.maps.LatLng(39.858067672853956, -86.09210729598999),

        new google.maps.LatLng(39.85813355941101, -86.09264373779297),

        new google.maps.LatLng(39.85833121870268, -86.09384536743164),

        new google.maps.LatLng(39.858990078896575, -86.09459638595581),

        new google.maps.LatLng(39.85971481780381, -86.09508991241455),

        new google.maps.LatLng(39.86095015057128, -86.09513282775879),

        new google.maps.LatLng(39.862168990439265, -86.09607696533203),

        new google.maps.LatLng(39.862300755614704, -86.09657049179077),

        new google.maps.LatLng(39.862300755614704, -86.09880208969116),

        new google.maps.LatLng(39.86235016749027, -86.1221694946289),

        new google.maps.LatLng(39.862300755614704, -86.13083839416504),

        new google.maps.LatLng(39.862267814344584, -86.13798379898071),

        new google.maps.LatLng(39.86220193175684, -86.14652395248413),

        new google.maps.LatLng(39.86215251977454, -86.14892721176147),

        new google.maps.LatLng(39.86215251977454, -86.1501932144165),

        new google.maps.LatLng(39.8624819323178, -86.15163087844849),

        new google.maps.LatLng(39.8625807557724, -86.15257501602173),

        new google.maps.LatLng(39.86263016744631, -86.15379810333252),

        new google.maps.LatLng(39.86279487276908, -86.1544418334961),

        new google.maps.LatLng(39.86319016393065, -86.15562200546265),

        new google.maps.LatLng(39.86317369351106, -86.1562442779541),

        new google.maps.LatLng(39.86291016625977, -86.15701675415039),

        new google.maps.LatLng(39.86236663810754, -86.15819692611694),

        new google.maps.LatLng(39.86211957843325, -86.15907669067383),

        new google.maps.LatLng(39.86208663707611, -86.16019248962402),

        new google.maps.LatLng(39.86220193175684, -86.16257429122925),

        new google.maps.LatLng(39.86225134370357, -86.16536378860474),

        new google.maps.LatLng(39.86244899113463, -86.16746664047241),

        new google.maps.LatLng(39.862679579084656, -86.16838932037354),

        new google.maps.LatLng(39.862465461728185, -86.16952657699585),

        new google.maps.LatLng(39.86220193175684, -86.17019176483154),

        new google.maps.LatLng(39.861477219116935, -86.17072820663452),

        new google.maps.LatLng(39.86048896227286, -86.17150068283081),

        new google.maps.LatLng(39.858990078896575, -86.17321729660034),

        new google.maps.LatLng(39.85852887742504, -86.17424726486206),

        new google.maps.LatLng(39.858067672853956, -86.17516994476318),

        new google.maps.LatLng(39.85765588043917, -86.1772084236145),

        new google.maps.LatLng(39.85760646518334, -86.17976188659668),

        new google.maps.LatLng(39.85755704989193, -86.18145704269409),

        new google.maps.LatLng(39.85762293693925, -86.18476152420044),

        new google.maps.LatLng(39.85754057812022, -86.18692874908447),

        new google.maps.LatLng(39.85721114185585, -86.18838787078857),

        new google.maps.LatLng(39.85628871190268, -86.1898684501648),

        new google.maps.LatLng(39.85590985315163, -86.19124174118042),

        new google.maps.LatLng(39.855712186886066, -86.1935806274414),

        new google.maps.LatLng(39.85543215870204, -86.19555473327637),

        new google.maps.LatLng(39.85500387809296, -86.19714260101318),

        new google.maps.LatLng(39.85432850708711, -86.19834423065186),

        new google.maps.LatLng(39.85370254753791, -86.19954586029053),

        new google.maps.LatLng(39.85365312943563, -86.20413780212402),

        new google.maps.LatLng(39.85355429312432, -86.21192693710327),
    ];

    // Butler Coords
    butlerCoords = [
        new google.maps.LatLng(39.842602657268465, -86.1642050743103),

        new google.maps.LatLng(39.84657310385206, -86.16429090499878),

        new google.maps.LatLng(39.84662252705149, -86.16772413253784),

        new google.maps.LatLng(39.846895769774896, -86.16769194602966),

        new google.maps.LatLng(39.84746413174884, -86.16853952407837),

        new google.maps.LatLng(39.847114054277945, -86.16887211799622),

        new google.maps.LatLng(39.84662394281968, -86.16887748241425),

        new google.maps.LatLng(39.84664041721123, -86.17006838321686),

        new google.maps.LatLng(39.84484146752454, -86.17145776748657),

        new google.maps.LatLng(39.844750855947865, -86.17263793945312),

        new google.maps.LatLng(39.84456963243581, -86.17747664451599),

        new google.maps.LatLng(39.84252671612118, -86.17764830589294),

        new google.maps.LatLng(39.84221368325107, -86.17745518684387),

        new google.maps.LatLng(39.84068144914138, -86.17733716964722),

        new google.maps.LatLng(39.84026955242091, -86.17682218551636),

        new google.maps.LatLng(39.839305704440285, -86.17655396461487),

        new google.maps.LatLng(39.83901737121904, -86.17626428604126),

        new google.maps.LatLng(39.839124466556825, -86.17596387863159),

        new google.maps.LatLng(39.83951989404954, -86.17587804794312),

        new google.maps.LatLng(39.83970936891621, -86.17548108100891),

        new google.maps.LatLng(39.840055365149865, -86.17521286010742),

        new google.maps.LatLng(39.839791749129965, -86.17473006248474),

        new google.maps.LatLng(39.839626988603634, -86.17444038391113),

        new google.maps.LatLng(39.835936249213866, -86.17646813392639),

        new google.maps.LatLng(39.83499705619415, -86.1771011352539),

        new google.maps.LatLng(39.83451921621975, -86.17741227149963),

        new google.maps.LatLng(39.834494500268576, -86.17683291435242),

        new google.maps.LatLng(39.83423910158573, -86.17689728736877),

        new google.maps.LatLng(39.834337965704634, -86.17592096328735),

        new google.maps.LatLng(39.83573852543489, -86.17578148841858),

        new google.maps.LatLng(39.83581267191871, -86.16883993148804),

        new google.maps.LatLng(39.83604656750722, -86.16882920265198),

        new google.maps.LatLng(39.83605480597241, -86.16848587989807),

        new google.maps.LatLng(39.83661501928792, -86.16851806640625),

        new google.maps.LatLng(39.836635615278624, -86.16831958293915),

        new google.maps.LatLng(39.83701458040491, -86.16835176944733),

        new google.maps.LatLng(39.83701458040491, -86.16850197315216),

        new google.maps.LatLng(39.837467688137174, -86.16851806640625),

        new google.maps.LatLng(39.83745533069322, -86.16899013519287),

        new google.maps.LatLng(39.83757845450165, -86.16898745298386),

        new google.maps.LatLng(39.839465445672516, -86.1689418554306),

        new google.maps.LatLng(39.83945720761646, -86.16855025291443),

        new google.maps.LatLng(39.83981968114875, -86.1685448884964),

        new google.maps.LatLng(39.83983615717296, -86.1689043045044),

        new google.maps.LatLng(39.84006682109655, -86.1689043045044),

        new google.maps.LatLng(39.84148785853579, -86.16896867752075),

        new google.maps.LatLng(39.8415166908751, -86.16833567619324),

        new google.maps.LatLng(39.8422004256597, -86.1684000492096),

        new google.maps.LatLng(39.84258759775949, -86.16850733757019),

        new google.maps.LatLng(39.842645261502476, -86.1642587184906),

        new google.maps.LatLng(39.842602657268465, -86.1642050743103)
    ];

    // Fountain Square
    var fountainSquareCenter = {lat: 39.7521722541479, lng: -86.13959312438965};
    var fountainSquareCoords = [
        new google.maps.LatLng(39.75960273687801, -86.13993644714355),

        new google.maps.LatLng(39.75969810001129, -86.14045143127441),

        new google.maps.LatLng(39.76105069585544, -86.142897605896),

        new google.maps.LatLng(39.75983006175096, -86.1431336402893),

        new google.maps.LatLng(39.755095776158484, -86.14371299743652),

        new google.maps.LatLng(39.75130151447744, -86.14416360855103),

        new google.maps.LatLng(39.749750756062475, -86.14339113235474),

        new google.maps.LatLng(39.74848042794696, -86.14214658737183),

        new google.maps.LatLng(39.74688011113675, -86.1397647857666),

        new google.maps.LatLng(39.74471879953827, -86.13985061645508),

        new google.maps.LatLng(39.74557673286751, -86.1386489868164),

        new google.maps.LatLng(39.745956199971125, -86.1376404762268),

        new google.maps.LatLng(39.746170680453076, -86.13620281219482),

        new google.maps.LatLng(39.74646765232583, -86.13553762435913),

        new google.maps.LatLng(39.747771013741534, -86.13480806350708),

        new google.maps.LatLng(39.74813397075925, -86.13377809524536),

        new google.maps.LatLng(39.74872789630005, -86.13276958465576),

        new google.maps.LatLng(39.74937130985801, -86.13193273544312),

        new google.maps.LatLng(39.749437300652396, -86.13064527511597),

        new google.maps.LatLng(39.759335203923435, -86.13066673278809),

        new google.maps.LatLng(39.759711888993984, -86.13058626651764),

        new google.maps.LatLng(39.75960273687801, -86.13993644714355)
    ];

    // Tarkington Coords
    var tarkingtonCoords = [

        new google.maps.LatLng(39.828422345457334, -86.15922689437866),

        new google.maps.LatLng(39.826329511015935, -86.1592161655426),

        new google.maps.LatLng(39.82635422990499, -86.15684509277344),

        new google.maps.LatLng(39.82847178172062, -86.15687727928162)
    ];

    // Holiday Park
    holidayCenter = {lat: 39.871071,lng: -86.161234};
    holidayCoords = [
        new google.maps.LatLng(39.873154043017756, -86.15700602531433),

        new google.maps.LatLng(39.87348340273931, -86.15863680839539),

        new google.maps.LatLng(39.8734669347908, -86.15936636924744),

        new google.maps.LatLng(39.873417530921536, -86.16071820259094),

        new google.maps.LatLng(39.8732693191002, -86.16217732429504),

        new google.maps.LatLng(39.873154043017756, -86.16382956504822),

        new google.maps.LatLng(39.8730222986863, -86.16490244865417),

        new google.maps.LatLng(39.8718365883162, -86.16494536399841),

        new google.maps.LatLng(39.87050263964996, -86.16490244865417),

        new google.maps.LatLng(39.868724001076, -86.16490244865417),

        new google.maps.LatLng(39.868460495142934, -86.16485953330994),

        new google.maps.LatLng(39.868476964293386, -86.16419434547424),

        new google.maps.LatLng(39.86854284085576, -86.16322875022888),

        new google.maps.LatLng(39.86898750599691, -86.16245627403259),

        new google.maps.LatLng(39.86990976524938, -86.16127610206604),

        new google.maps.LatLng(39.870354421530195, -86.16054654121399),

        new google.maps.LatLng(39.8704038276057, -86.16005301475525),

        new google.maps.LatLng(39.870634388820875, -86.15928053855896),

        new google.maps.LatLng(39.8707826063357, -86.15848660469055),

        new google.maps.LatLng(39.87096376064113, -86.15795016288757),

        new google.maps.LatLng(39.871441346971324, -86.15737080574036),

        new google.maps.LatLng(39.87224829562869, -86.15689873695374),

        new google.maps.LatLng(39.873154043017756, -86.15700602531433)
    ];

    // Brighwood
    var brightwoodCenter = {lat:39.8033270488139, lng:-86.12274885177612};
    var brightwoodCoords = [
        new google.maps.LatLng(39.78129985807883, -86.14025831222534),

        new google.maps.LatLng(39.80014541298943, -86.14005446434021),

        new google.maps.LatLng(39.80731624944519, -86.13823056221008),

        new google.maps.LatLng(39.8106294178136, -86.1373507976532),

        new google.maps.LatLng(39.81076128190724, -86.10258936882019),

        new google.maps.LatLng(39.79612282332215, -86.10235333442688),

        new google.maps.LatLng(39.79605687726909, -86.11170887947083),

        new google.maps.LatLng(39.7957436326535, -86.11310362815857),

        new google.maps.LatLng(39.794424692306734, -86.11557126045227),

        new google.maps.LatLng(39.7918856609346, -86.12044215202332),

        new google.maps.LatLng(39.78984117795007, -86.124347448349),

        new google.maps.LatLng(39.78568607369944, -86.13183617591858),

        new google.maps.LatLng(39.78547171627656, -86.13202929496765),

        new google.maps.LatLng(39.78477917234618, -86.13217949867249),

        new google.maps.LatLng(39.78436694050669, -86.13252282142639),

        new google.maps.LatLng(39.78370736442645, -86.13368153572083),

        new google.maps.LatLng(39.78190998751883, -86.13653540611267),

        new google.maps.LatLng(39.781679128366896, -86.13711476325989),

        new google.maps.LatLng(39.78116793748865, -86.1372435092926),

        new google.maps.LatLng(39.78129985807883, -86.14025831222534)
    ];

    // Catham-Arch
    var chathamCenter = {lat: 39.77912313600137, lng:-86.14681363105774};
    var chathamCoords = [
        new google.maps.LatLng(39.77509931696009, -86.14533305168152),

        new google.maps.LatLng(39.775148791573464, -86.14872336387634),

        new google.maps.LatLng(39.7773256393548, -86.14855170249939),

        new google.maps.LatLng(39.777688440624644, -86.14867776632309),

        new google.maps.LatLng(39.778022381012214, -86.1487528681755),

        new google.maps.LatLng(39.78031869263502, -86.14865630865097),

        new google.maps.LatLng(39.78057429170315, -86.14872068166733),

        new google.maps.LatLng(39.781163814966106, -86.14941269159317),

        new google.maps.LatLng(39.782577825704365, -86.14941269159317),

        new google.maps.LatLng(39.78256133595066, -86.14753514528275),

        new google.maps.LatLng(39.782759212734234, -86.1462852358818),

        new google.maps.LatLng(39.78295296653343, -86.14546984434128),

        new google.maps.LatLng(39.78320443341677, -86.14474564790726),

        new google.maps.LatLng(39.78180280300891, -86.14468663930893),

        new google.maps.LatLng(39.780722703629635, -86.14511579275131),

        new google.maps.LatLng(39.77923856996154, -86.14512115716934),

        new google.maps.LatLng(39.77793992674619, -86.14521235227585),

        new google.maps.LatLng(39.77618362741847, -86.14526063203812),

        new google.maps.LatLng(39.77509931696009, -86.14533305168152)
    ];

    // Foxhill
    var foxHillCenter = {lat: 39.86475483576405, lng: -86.18375301361084};
    var foxHillCoords = [
        new google.maps.LatLng(39.864956078794926, -86.20023250579834),

        new google.maps.LatLng(39.865071368654114, -86.19774341583252),

        new google.maps.LatLng(39.86464314820064, -86.19353771209717),

        new google.maps.LatLng(39.864692558389365, -86.19197130203247),

        new google.maps.LatLng(39.86477490862484, -86.18332386016846),

        new google.maps.LatLng(39.86464314820064, -86.18019104003906),

        new google.maps.LatLng(39.86459373797635, -86.17913961410522),

        new google.maps.LatLng(39.86429727588325, -86.17828130722046),

        new google.maps.LatLng(39.86403375294735, -86.17572784423828),

        new google.maps.LatLng(39.86388552085113, -86.17366790771484),

        new google.maps.LatLng(39.863605526017835, -86.17210149765015),

        new google.maps.LatLng(39.86307847382023, -86.16961240768433),

        new google.maps.LatLng(39.86278200517997, -86.1682391166687)
    ];

    // Butler University
    var butlerCenter = {lat: 39.83882609235166, lng: -86.17130756378174};
    var butlerCoords = [
        new google.maps.LatLng(39.842602657268465, -86.1642050743103),

        new google.maps.LatLng(39.84657310385206, -86.16429090499878),

        new google.maps.LatLng(39.84662252705149, -86.16772413253784),

        new google.maps.LatLng(39.846895769774896, -86.16769194602966),

        new google.maps.LatLng(39.84746413174884, -86.16853952407837),

        new google.maps.LatLng(39.847114054277945, -86.16887211799622),

        new google.maps.LatLng(39.84662394281968, -86.16887748241425),

        new google.maps.LatLng(39.84664041721123, -86.17006838321686),

        new google.maps.LatLng(39.84484146752454, -86.17145776748657),

        new google.maps.LatLng(39.844750855947865, -86.17263793945312),

        new google.maps.LatLng(39.84456963243581, -86.17747664451599),

        new google.maps.LatLng(39.84252671612118, -86.17764830589294),

        new google.maps.LatLng(39.84221368325107, -86.17745518684387),

        new google.maps.LatLng(39.84068144914138, -86.17733716964722),

        new google.maps.LatLng(39.84026955242091, -86.17682218551636),

        new google.maps.LatLng(39.839305704440285, -86.17655396461487),

        new google.maps.LatLng(39.83901737121904, -86.17626428604126),

        new google.maps.LatLng(39.839124466556825, -86.17596387863159),

        new google.maps.LatLng(39.83951989404954, -86.17587804794312),

        new google.maps.LatLng(39.83970936891621, -86.17548108100891),

        new google.maps.LatLng(39.840055365149865, -86.17521286010742),

        new google.maps.LatLng(39.839791749129965, -86.17473006248474),

        new google.maps.LatLng(39.839626988603634, -86.17444038391113),

        new google.maps.LatLng(39.835936249213866, -86.17646813392639),

        new google.maps.LatLng(39.83499705619415, -86.1771011352539),

        new google.maps.LatLng(39.83451921621975, -86.17741227149963),

        new google.maps.LatLng(39.834494500268576, -86.17683291435242),

        new google.maps.LatLng(39.83423910158573, -86.17689728736877),

        new google.maps.LatLng(39.834337965704634, -86.17592096328735),

        new google.maps.LatLng(39.83573852543489, -86.17578148841858),

        new google.maps.LatLng(39.83581267191871, -86.16883993148804),

        new google.maps.LatLng(39.83604656750722, -86.16882920265198),

        new google.maps.LatLng(39.83605480597241, -86.16848587989807),

        new google.maps.LatLng(39.83661501928792, -86.16851806640625),

        new google.maps.LatLng(39.836635615278624, -86.16831958293915),

        new google.maps.LatLng(39.83701458040491, -86.16835176944733),

        new google.maps.LatLng(39.83701458040491, -86.16850197315216),

        new google.maps.LatLng(39.837467688137174, -86.16851806640625),

        new google.maps.LatLng(39.83745533069322, -86.16899013519287),

        new google.maps.LatLng(39.83757845450165, -86.16898745298386),

        new google.maps.LatLng(39.839465445672516, -86.1689418554306),

        new google.maps.LatLng(39.83945720761646, -86.16855025291443),

        new google.maps.LatLng(39.83981968114875, -86.1685448884964),

        new google.maps.LatLng(39.83983615717296, -86.1689043045044),

        new google.maps.LatLng(39.84006682109655, -86.1689043045044),

        new google.maps.LatLng(39.84148785853579, -86.16896867752075),

        new google.maps.LatLng(39.8415166908751, -86.16833567619324),

        new google.maps.LatLng(39.8422004256597, -86.1684000492096),

        new google.maps.LatLng(39.84258759775949, -86.16850733757019),

        new google.maps.LatLng(39.842645261502476, -86.1642587184906),

        new google.maps.LatLng(39.842602657268465, -86.1642050743103)
    ];

    var tarkingtonCenter = {lat: 39.827324696760776, lng: -86.1568021774292};
    var tarkingtonCoords = [

        new google.maps.LatLng(39.828422345457334, -86.15922689437866),

        new google.maps.LatLng(39.826329511015935, -86.1592161655426),

        new google.maps.LatLng(39.82635422990499, -86.15684509277344),

        new google.maps.LatLng(39.82847178172062, -86.15687727928162),
    ];

    // Meridian
    var meridianCenter = {lat: 39.76841991769641, lng: -86.15808963775635};
    var meridianCoords = [
        new google.maps.LatLng(39.912409780019786, -86.15787506103516),
        new google.maps.LatLng(39.88012326613326, -86.15785360336304),
        new google.maps.LatLng(39.877488599164494, -86.15787506103516),

        new google.maps.LatLng(39.87020980562549, -86.15585803985596),

        new google.maps.LatLng(39.86899110859627, -86.15547180175781),

        new google.maps.LatLng(39.867410063971384, -86.1553430557251),

        new google.maps.LatLng(39.866125438383825, -86.1553430557251),

        new google.maps.LatLng(39.86556546585626, -86.1554503440857),

        new google.maps.LatLng(39.865005488758314, -86.15581512451172),

        new google.maps.LatLng(39.86459373797635, -86.15626573562622),

        new google.maps.LatLng(39.863770228999336, -86.15720987319946),

        new google.maps.LatLng(39.86312788513576, -86.1573600769043),

        new google.maps.LatLng(39.81885756170534, -86.1568021774292),

        new google.maps.LatLng(39.80311635241795, -86.15660905838013),

        new google.maps.LatLng(39.80258883587129, -86.15663051605225),

        new google.maps.LatLng(39.796175889240835, -86.15731716156006),

        new google.maps.LatLng(39.795631832831745, -86.15733861923218),

        new google.maps.LatLng(39.78839382450806, -86.15727424621582),

        new google.maps.LatLng(39.780017228804276, -86.15759611129761),

        new google.maps.LatLng(39.773057942793294, -86.15787506103516),

        new google.maps.LatLng(39.769083248135736, -86.15800380706787),

        new google.maps.LatLng(39.769056704732755, -86.1578106880188),

        new google.maps.LatLng(39.76896599322008, -86.15756392478943),

        new google.maps.LatLng(39.76866087180028, -86.15731716156006),

        new google.maps.LatLng(39.76852892698368, -86.1572527885437),

        new google.maps.LatLng(39.76833925586681, -86.15732789039612),

        new google.maps.LatLng(39.76818257063701, -86.15743517875671),

        new google.maps.LatLng(39.768058871519486, -86.15760684013367),

        new google.maps.LatLng(39.767976405317654, -86.15784287452698),

        new google.maps.LatLng(39.767935172179705, -86.15806818008423),

        new google.maps.LatLng(39.765906471296056, -86.15811109542847),

        new google.maps.LatLng(39.7614200261931, -86.1583149433136)
    ];

    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        var strokeColor = '#92D300';
        var highlightColor = '#FD7C08';
        var icon = 'images/marker.png';
        window.college = new Spot('college','College', 'College Street', null, map, collegeCenter, 12, collegeCoords, 'line', {strokeColor: strokeColor}, {strokeColor: highlightColor}, icon);
        window.broadRipple = new Spot('broadRipple', 'Broad Ripple', 'Broad Ripple', college, map, broadRippleCenter, 15, broadRippleCoords, 'line', {strokeColor: strokeColor}, {strokeColor: highlightColor}, icon, null);
        window.fountainSquare = new Spot('fountainSquare', 'Fountain Square', 'Fountain Square', broadRipple, map, fountainSquareCenter, 15, fountainSquareCoords, 'ngon', {strokeColor: strokeColor, fillColor: strokeColor}, {strokeColor: highlightColor, fillColor:highlightColor}, icon, 'http://cdn.felixandiris.com/tn_-----images--W--FountainSquare-BLK---jpg_w705.jpg');
        window.holiday = new Spot('holiday', 'Holiday', 'Holiday Park', fountainSquare, map, holidayCenter, 15, holidayCoords, 'ngon', {strokeColor: strokeColor, fillColor: strokeColor}, {strokeColor: highlightColor, fillColor:highlightColor}, icon, null);
        window.brightwood = new Spot('brightwood', 'Brightwood', 'Brightwood', holiday, map, brightwoodCenter, 13, brightwoodCoords, 'ngon', {strokeColor: strokeColor, fillColor: strokeColor}, {strokeColor: highlightColor, fillColor:highlightColor}, icon, null);
        window.chatham = new Spot('chatham', 'Chatham-Arch', 'Chatham-Arch', brightwood, map, chathamCenter, 15, chathamCoords, 'ngon', {strokeColor: strokeColor, fillColor: strokeColor}, {strokeColor: highlightColor, fillColor:highlightColor}, icon, null);
        window.foxHill = new Spot('foxHill', 'Fox Hill', 'Fox Hill', chatham, map, foxHillCenter, 15, foxHillCoords, 'line', {strokeColor: strokeColor}, {strokeColor: highlightColor}, icon, 'http://cdn.felixandiris.com/tn_-----images--W--FoxHill-MSV---jpg_w705.jpg');
        window.kessler = new Spot('kessler', 'Kessler', 'Kessler', foxHill, map, kesslerCenter, 13, kesslerCoords, 'line', {strokeColor: strokeColor}, {strokeColor: highlightColor}, icon, 'http://cdn.felixandiris.com/tn_-----images--W--Kessler-COF---jpg_w705.jpg');
        window.butler = new Spot('butler', 'Butler', 'Butler University', kessler, map, butlerCenter, 14, butlerCoords, 'ngon', {strokeColor: strokeColor, fillColor: strokeColor}, {strokeColor: highlightColor, fillColor: highlightColor}, icon, 'http://cdn.felixandiris.com/tn_-----images--W--Butler-TOR---jpg_w705.jpg');
        window.meridian = new Spot('meridian', 'Meridian', 'Meridian Street', butler, map, meridianCenter, 15, meridianCoords, 'line', {strokeColor: strokeColor}, {strokeColor: highlightColor}, icon, 'http://cdn.felixandiris.com/tn_-----images--W--Meridian-TOP---jpg_w705.jpg');
        window.tarkington = new Spot('tarkington', 'Tarkington', 'Tarkington Park', meridian, map, tarkingtonCenter, 16, tarkingtonCoords, 'ngon', {strokeColor: strokeColor, fillColor: strokeColor}, {strokeColor: highlightColor, fillColor:highlightColor}, icon, 'http://cdn.felixandiris.com/tn_-----images--W--Tarkington-GUN-02---jpg_w705.jpg');

        tarkington.init();

        /*// Click Listener Function
        ///////////////////////////////////////////////////*/
        var link = meridian;
        window.locationsArr = [];

        while (link) {
            window.locationsArr.push(link)
            link = link.next
        } // End While Loop

        // Add functions to marker click events
        $.each(locationsArr, markerEvent)
        function markerEvent(y, x) {
            //console.log(x.name)
            var contentString = x.contentString;

            var infowindow = new google.maps.InfoWindow({
                content: x.getContentString()
            });

            //console.log(x.name + ': ' + x.center);
            google.maps.event.addListener(x.marker, 'click', function() {
                x.panTo();
                infowindow.open(map, x.marker);
            });
        } // End markerEvent

        // Initialize Swiper
        initSwipers();
        $(document).foundation();

    } // End initialize of googleMaps


    ///* Add Coordinate on click
    ////////////////////////////////////////////////*/
    //google.maps.event.addListener(map, 'click', function(event) {
    //
    //    // Get Coordinates of Click
    //    window.marker = new google.maps.Marker({position: event.latLng, map: map});
    //    var lat = marker.position.k;
    //    var Lng = marker.position.D;
    //
    //    console.log('before: ' + placeCoords)
    //
    //    // Add click locaiton to array
    //    placeCoords.push(new google.maps.LatLng(lat, Lng));
    //    console.log('after: ' + placeCoords)
    //
    //    // Make array into Polyline
    //    placePoly = new google.maps.Polyline({
    //        path: placeCoords,
    //        geodesic: true,
    //        strokeColor: '#92D300',
    //        strokeOpacity: 1,
    //        strokeWeight: 2
    //    });
    //
    //    // Set Polyline on Map
    //    placePoly.setMap(map);
    //
    //    //// Show point
    //    $('#list').append('<p>new google.maps.LatLng(' + lat + ', ' + Lng + '),</p>');
    //
    //
    //});

});