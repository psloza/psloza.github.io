var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GOOGLEMAPS_1 = new ol.layer.Tile({
            'title': 'GOOGLE MAPS',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_buffer10_2 = new ol.format.GeoJSON();
var features_buffer10_2 = format_buffer10_2.readFeatures(json_buffer10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer10_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer10_2.addFeatures(features_buffer10_2);
var lyr_buffer10_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buffer10_2, 
                style: style_buffer10_2,
                interactive: false,
                title: '<img src="styles/legend/buffer10_2.png" /> buffer10'
            });
var format_buffer5_3 = new ol.format.GeoJSON();
var features_buffer5_3 = format_buffer5_3.readFeatures(json_buffer5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer5_3.addFeatures(features_buffer5_3);
var lyr_buffer5_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buffer5_3, 
                style: style_buffer5_3,
                interactive: false,
                title: '<img src="styles/legend/buffer5_3.png" /> buffer5'
            });
var format_buffer3_4 = new ol.format.GeoJSON();
var features_buffer3_4 = format_buffer3_4.readFeatures(json_buffer3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer3_4.addFeatures(features_buffer3_4);
var lyr_buffer3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buffer3_4, 
                style: style_buffer3_4,
                interactive: false,
                title: '<img src="styles/legend/buffer3_4.png" /> buffer3'
            });
var format_medicion9_5 = new ol.format.GeoJSON();
var features_medicion9_5 = format_medicion9_5.readFeatures(json_medicion9_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medicion9_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medicion9_5.addFeatures(features_medicion9_5);
var lyr_medicion9_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_medicion9_5, 
                style: style_medicion9_5,
                interactive: false,
                title: '<img src="styles/legend/medicion9_5.png" /> medicion9'
            });
var format_medicion8_6 = new ol.format.GeoJSON();
var features_medicion8_6 = format_medicion8_6.readFeatures(json_medicion8_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medicion8_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medicion8_6.addFeatures(features_medicion8_6);
var lyr_medicion8_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_medicion8_6, 
                style: style_medicion8_6,
                interactive: false,
                title: '<img src="styles/legend/medicion8_6.png" /> medicion8'
            });
var format_medicion7_7 = new ol.format.GeoJSON();
var features_medicion7_7 = format_medicion7_7.readFeatures(json_medicion7_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medicion7_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medicion7_7.addFeatures(features_medicion7_7);
var lyr_medicion7_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_medicion7_7, 
                style: style_medicion7_7,
                interactive: false,
                title: '<img src="styles/legend/medicion7_7.png" /> medicion7'
            });
var format_medicion12_8 = new ol.format.GeoJSON();
var features_medicion12_8 = format_medicion12_8.readFeatures(json_medicion12_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medicion12_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medicion12_8.addFeatures(features_medicion12_8);
var lyr_medicion12_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_medicion12_8, 
                style: style_medicion12_8,
                interactive: false,
                title: '<img src="styles/legend/medicion12_8.png" /> medicion12'
            });
var format_medicion11_9 = new ol.format.GeoJSON();
var features_medicion11_9 = format_medicion11_9.readFeatures(json_medicion11_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medicion11_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medicion11_9.addFeatures(features_medicion11_9);
var lyr_medicion11_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_medicion11_9, 
                style: style_medicion11_9,
                interactive: false,
                title: '<img src="styles/legend/medicion11_9.png" /> medicion11'
            });
var format_medicion10_10 = new ol.format.GeoJSON();
var features_medicion10_10 = format_medicion10_10.readFeatures(json_medicion10_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medicion10_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medicion10_10.addFeatures(features_medicion10_10);
var lyr_medicion10_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_medicion10_10, 
                style: style_medicion10_10,
                interactive: false,
                title: '<img src="styles/legend/medicion10_10.png" /> medicion10'
            });
var format_ESCOMBRERA_PRINCIPAL_P2_11 = new ol.format.GeoJSON();
var features_ESCOMBRERA_PRINCIPAL_P2_11 = format_ESCOMBRERA_PRINCIPAL_P2_11.readFeatures(json_ESCOMBRERA_PRINCIPAL_P2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESCOMBRERA_PRINCIPAL_P2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESCOMBRERA_PRINCIPAL_P2_11.addFeatures(features_ESCOMBRERA_PRINCIPAL_P2_11);
var lyr_ESCOMBRERA_PRINCIPAL_P2_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESCOMBRERA_PRINCIPAL_P2_11, 
                style: style_ESCOMBRERA_PRINCIPAL_P2_11,
                interactive: true,
                title: '<img src="styles/legend/ESCOMBRERA_PRINCIPAL_P2_11.png" /> ESCOMBRERA_PRINCIPAL_P2'
            });
var format_plano_cart_12 = new ol.format.GeoJSON();
var features_plano_cart_12 = format_plano_cart_12.readFeatures(json_plano_cart_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plano_cart_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plano_cart_12.addFeatures(features_plano_cart_12);
var lyr_plano_cart_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_plano_cart_12, 
                style: style_plano_cart_12,
                interactive: false,
                title: '<img src="styles/legend/plano_cart_12.png" /> plano_cart'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GOOGLEMAPS_1.setVisible(false);lyr_buffer10_2.setVisible(true);lyr_buffer5_3.setVisible(true);lyr_buffer3_4.setVisible(true);lyr_medicion9_5.setVisible(true);lyr_medicion8_6.setVisible(true);lyr_medicion7_7.setVisible(true);lyr_medicion12_8.setVisible(true);lyr_medicion11_9.setVisible(true);lyr_medicion10_10.setVisible(true);lyr_ESCOMBRERA_PRINCIPAL_P2_11.setVisible(true);lyr_plano_cart_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GOOGLEMAPS_1,lyr_buffer10_2,lyr_buffer5_3,lyr_buffer3_4,lyr_medicion9_5,lyr_medicion8_6,lyr_medicion7_7,lyr_medicion12_8,lyr_medicion11_9,lyr_medicion10_10,lyr_ESCOMBRERA_PRINCIPAL_P2_11,lyr_plano_cart_12];
lyr_buffer10_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'buffer': 'buffer', });
lyr_buffer5_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'buffer5': 'buffer5', });
lyr_buffer3_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'buffer': 'buffer', });
lyr_medicion9_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', });
lyr_medicion8_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', });
lyr_medicion7_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', });
lyr_medicion12_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', });
lyr_medicion11_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', });
lyr_medicion10_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', });
lyr_ESCOMBRERA_PRINCIPAL_P2_11.set('fieldAliases', {'Punto': 'Punto', 'Fecha_I': 'Fecha_I', 'Yi': 'Yi', 'Xi': 'Xi', 'Zi': 'Zi', 'Fecha_7': 'Fecha_7', 'Y7': 'Y7', 'X7': 'X7', 'Z7': 'Z7', 'Delta_Y7': 'Delta_Y7', 'Delta_X7': 'Delta_X7', 'Delta_Z7': 'Delta_Z7', 'Fecha_8': 'Fecha_8', 'Y8': 'Y8', 'X8': 'X8', 'Z8': 'Z8', 'Delta_Y8': 'Delta_Y8', 'Delta_X8': 'Delta_X8', 'Delta_Z8': 'Delta_Z8', 'Fecha_9': 'Fecha_9', 'Y9': 'Y9', 'X9': 'X9', 'Z9': 'Z9', 'Delta_Y9': 'Delta_Y9', 'Delta_X9': 'Delta_X9', 'Delta_Z9': 'Delta_Z9', 'Fecha_10': 'Fecha_10', 'Y10': 'Y10', 'X10': 'X10', 'Z10': 'Z10', 'Delta_Y10': 'Delta_Y10', 'Delta_X10': 'Delta_X10', 'Delta_Z10': 'Delta_Z10', 'Fecha_11': 'Fecha_11', 'Y11': 'Y11', 'X11': 'X11', 'Z11': 'Z11', 'Delta_Y11': 'Delta_Y11', 'Delta_X11': 'Delta_X11', 'Delta_Z11': 'Delta_Z11', 'Fecha_12': 'Fecha_12', 'Y12': 'Y12', 'X12': 'X12', 'Z12': 'Z12', 'Delta_Y12': 'Delta_Y12', 'Delta_X12': 'Delta_X12', 'Delta_Z12': 'Delta_Z12', });
lyr_plano_cart_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', });
lyr_buffer10_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'buffer': '', });
lyr_buffer5_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'buffer5': '', });
lyr_buffer3_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'buffer': 'TextEdit', });
lyr_medicion9_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', });
lyr_medicion8_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', });
lyr_medicion7_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', });
lyr_medicion12_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', });
lyr_medicion11_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', });
lyr_medicion10_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', });
lyr_ESCOMBRERA_PRINCIPAL_P2_11.set('fieldImages', {'Punto': 'TextEdit', 'Fecha_I': 'DateTime', 'Yi': 'TextEdit', 'Xi': 'TextEdit', 'Zi': 'TextEdit', 'Fecha_7': 'DateTime', 'Y7': 'TextEdit', 'X7': 'TextEdit', 'Z7': 'TextEdit', 'Delta_Y7': 'TextEdit', 'Delta_X7': 'TextEdit', 'Delta_Z7': 'TextEdit', 'Fecha_8': 'DateTime', 'Y8': 'TextEdit', 'X8': 'TextEdit', 'Z8': 'TextEdit', 'Delta_Y8': 'TextEdit', 'Delta_X8': 'TextEdit', 'Delta_Z8': 'TextEdit', 'Fecha_9': 'DateTime', 'Y9': 'TextEdit', 'X9': 'TextEdit', 'Z9': 'TextEdit', 'Delta_Y9': 'TextEdit', 'Delta_X9': 'TextEdit', 'Delta_Z9': 'TextEdit', 'Fecha_10': 'DateTime', 'Y10': 'TextEdit', 'X10': 'TextEdit', 'Z10': 'TextEdit', 'Delta_Y10': 'TextEdit', 'Delta_X10': 'TextEdit', 'Delta_Z10': 'TextEdit', 'Fecha_11': 'DateTime', 'Y11': 'TextEdit', 'X11': 'TextEdit', 'Z11': 'TextEdit', 'Delta_Y11': 'TextEdit', 'Delta_X11': 'TextEdit', 'Delta_Z11': 'TextEdit', 'Fecha_12': 'DateTime', 'Y12': 'TextEdit', 'X12': 'TextEdit', 'Z12': 'TextEdit', 'Delta_Y12': 'TextEdit', 'Delta_X12': 'TextEdit', 'Delta_Z12': 'TextEdit', });
lyr_plano_cart_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_buffer10_2.set('fieldLabels', {'OBJECTID': 'no label', 'Punto': 'no label', 'Fecha_I': 'no label', 'Yi': 'no label', 'Xi': 'no label', 'Zi': 'no label', 'Fecha_7': 'no label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'no label', 'Delta_X7': 'no label', 'Delta_Z7': 'no label', 'Fecha_8': 'no label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'no label', 'Delta_X8': 'no label', 'Delta_Z8': 'no label', 'Fecha_9': 'no label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'no label', 'Delta_X9': 'no label', 'Delta_Z9': 'no label', 'Fecha_10': 'no label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'no label', 'Delta_X10': 'no label', 'Delta_Z10': 'no label', 'Fecha_11': 'no label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'no label', 'Delta_X11': 'no label', 'Delta_Z11': 'no label', 'Fecha_12': 'no label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'no label', 'Delta_X12': 'no label', 'Delta_Z12': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'buffer': 'no label', });
lyr_buffer5_3.set('fieldLabels', {'OBJECTID': 'no label', 'Punto': 'no label', 'Fecha_I': 'no label', 'Yi': 'no label', 'Xi': 'no label', 'Zi': 'no label', 'Fecha_7': 'no label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'no label', 'Delta_X7': 'no label', 'Delta_Z7': 'no label', 'Fecha_8': 'no label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'no label', 'Delta_X8': 'no label', 'Delta_Z8': 'no label', 'Fecha_9': 'no label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'no label', 'Delta_X9': 'no label', 'Delta_Z9': 'no label', 'Fecha_10': 'no label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'no label', 'Delta_X10': 'no label', 'Delta_Z10': 'no label', 'Fecha_11': 'no label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'no label', 'Delta_X11': 'no label', 'Delta_Z11': 'no label', 'Fecha_12': 'no label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'no label', 'Delta_X12': 'no label', 'Delta_Z12': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'buffer5': 'no label', });
lyr_buffer3_4.set('fieldLabels', {'OBJECTID': 'no label', 'Punto': 'no label', 'Fecha_I': 'no label', 'Yi': 'no label', 'Xi': 'no label', 'Zi': 'no label', 'Fecha_7': 'no label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'no label', 'Delta_X7': 'no label', 'Delta_Z7': 'no label', 'Fecha_8': 'no label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'no label', 'Delta_X8': 'no label', 'Delta_Z8': 'no label', 'Fecha_9': 'no label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'no label', 'Delta_X9': 'no label', 'Delta_Z9': 'no label', 'Fecha_10': 'no label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'no label', 'Delta_X10': 'no label', 'Delta_Z10': 'no label', 'Fecha_11': 'no label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'no label', 'Delta_X11': 'no label', 'Delta_Z11': 'no label', 'Fecha_12': 'no label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'no label', 'Delta_X12': 'no label', 'Delta_Z12': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'buffer': 'no label', });
lyr_medicion9_5.set('fieldLabels', {'OBJECTID': 'no label', 'Punto': 'no label', 'Fecha_I': 'no label', 'Yi': 'no label', 'Xi': 'no label', 'Zi': 'no label', 'Fecha_7': 'no label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'no label', 'Delta_X7': 'no label', 'Delta_Z7': 'no label', 'Fecha_8': 'no label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'no label', 'Delta_X8': 'no label', 'Delta_Z8': 'no label', 'Fecha_9': 'no label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'no label', 'Delta_X9': 'no label', 'Delta_Z9': 'no label', 'Fecha_10': 'no label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'no label', 'Delta_X10': 'no label', 'Delta_Z10': 'no label', 'Fecha_11': 'no label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'no label', 'Delta_X11': 'no label', 'Delta_Z11': 'no label', 'Fecha_12': 'no label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'no label', 'Delta_X12': 'no label', 'Delta_Z12': 'no label', });
lyr_medicion8_6.set('fieldLabels', {'OBJECTID': 'no label', 'Punto': 'no label', 'Fecha_I': 'no label', 'Yi': 'no label', 'Xi': 'no label', 'Zi': 'no label', 'Fecha_7': 'no label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'no label', 'Delta_X7': 'no label', 'Delta_Z7': 'no label', 'Fecha_8': 'no label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'no label', 'Delta_X8': 'no label', 'Delta_Z8': 'no label', 'Fecha_9': 'no label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'no label', 'Delta_X9': 'no label', 'Delta_Z9': 'no label', 'Fecha_10': 'no label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'no label', 'Delta_X10': 'no label', 'Delta_Z10': 'no label', 'Fecha_11': 'no label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'no label', 'Delta_X11': 'no label', 'Delta_Z11': 'no label', 'Fecha_12': 'no label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'no label', 'Delta_X12': 'no label', 'Delta_Z12': 'no label', });
lyr_medicion7_7.set('fieldLabels', {'OBJECTID': 'no label', 'Punto': 'no label', 'Fecha_I': 'no label', 'Yi': 'no label', 'Xi': 'no label', 'Zi': 'no label', 'Fecha_7': 'no label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'no label', 'Delta_X7': 'no label', 'Delta_Z7': 'no label', 'Fecha_8': 'no label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'no label', 'Delta_X8': 'no label', 'Delta_Z8': 'no label', 'Fecha_9': 'no label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'no label', 'Delta_X9': 'no label', 'Delta_Z9': 'no label', 'Fecha_10': 'no label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'no label', 'Delta_X10': 'no label', 'Delta_Z10': 'no label', 'Fecha_11': 'no label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'no label', 'Delta_X11': 'no label', 'Delta_Z11': 'no label', 'Fecha_12': 'no label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'no label', 'Delta_X12': 'no label', 'Delta_Z12': 'no label', });
lyr_medicion12_8.set('fieldLabels', {'OBJECTID': 'no label', 'Punto': 'no label', 'Fecha_I': 'no label', 'Yi': 'no label', 'Xi': 'no label', 'Zi': 'no label', 'Fecha_7': 'no label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'no label', 'Delta_X7': 'no label', 'Delta_Z7': 'no label', 'Fecha_8': 'no label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'no label', 'Delta_X8': 'no label', 'Delta_Z8': 'no label', 'Fecha_9': 'no label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'no label', 'Delta_X9': 'no label', 'Delta_Z9': 'no label', 'Fecha_10': 'no label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'no label', 'Delta_X10': 'no label', 'Delta_Z10': 'no label', 'Fecha_11': 'no label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'no label', 'Delta_X11': 'no label', 'Delta_Z11': 'no label', 'Fecha_12': 'no label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'no label', 'Delta_X12': 'no label', 'Delta_Z12': 'no label', });
lyr_medicion11_9.set('fieldLabels', {'OBJECTID': 'no label', 'Punto': 'no label', 'Fecha_I': 'no label', 'Yi': 'no label', 'Xi': 'no label', 'Zi': 'no label', 'Fecha_7': 'no label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'no label', 'Delta_X7': 'no label', 'Delta_Z7': 'no label', 'Fecha_8': 'no label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'no label', 'Delta_X8': 'no label', 'Delta_Z8': 'no label', 'Fecha_9': 'no label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'no label', 'Delta_X9': 'no label', 'Delta_Z9': 'no label', 'Fecha_10': 'no label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'no label', 'Delta_X10': 'no label', 'Delta_Z10': 'no label', 'Fecha_11': 'no label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'no label', 'Delta_X11': 'no label', 'Delta_Z11': 'no label', 'Fecha_12': 'no label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'no label', 'Delta_X12': 'no label', 'Delta_Z12': 'no label', });
lyr_medicion10_10.set('fieldLabels', {'OBJECTID': 'no label', 'Punto': 'no label', 'Fecha_I': 'no label', 'Yi': 'no label', 'Xi': 'no label', 'Zi': 'no label', 'Fecha_7': 'no label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'no label', 'Delta_X7': 'no label', 'Delta_Z7': 'no label', 'Fecha_8': 'no label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'no label', 'Delta_X8': 'no label', 'Delta_Z8': 'no label', 'Fecha_9': 'no label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'no label', 'Delta_X9': 'no label', 'Delta_Z9': 'no label', 'Fecha_10': 'no label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'no label', 'Delta_X10': 'no label', 'Delta_Z10': 'no label', 'Fecha_11': 'no label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'no label', 'Delta_X11': 'no label', 'Delta_Z11': 'no label', 'Fecha_12': 'no label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'no label', 'Delta_X12': 'no label', 'Delta_Z12': 'no label', });
lyr_ESCOMBRERA_PRINCIPAL_P2_11.set('fieldLabels', {'Punto': 'header label', 'Fecha_I': 'inline label', 'Yi': 'inline label', 'Xi': 'inline label', 'Zi': 'inline label', 'Fecha_7': 'inline label', 'Y7': 'no label', 'X7': 'no label', 'Z7': 'no label', 'Delta_Y7': 'inline label', 'Delta_X7': 'inline label', 'Delta_Z7': 'inline label', 'Fecha_8': 'inline label', 'Y8': 'no label', 'X8': 'no label', 'Z8': 'no label', 'Delta_Y8': 'inline label', 'Delta_X8': 'inline label', 'Delta_Z8': 'inline label', 'Fecha_9': 'inline label', 'Y9': 'no label', 'X9': 'no label', 'Z9': 'no label', 'Delta_Y9': 'inline label', 'Delta_X9': 'inline label', 'Delta_Z9': 'inline label', 'Fecha_10': 'inline label', 'Y10': 'no label', 'X10': 'no label', 'Z10': 'no label', 'Delta_Y10': 'inline label', 'Delta_X10': 'inline label', 'Delta_Z10': 'inline label', 'Fecha_11': 'inline label', 'Y11': 'no label', 'X11': 'no label', 'Z11': 'no label', 'Delta_Y11': 'inline label', 'Delta_X11': 'inline label', 'Delta_Z11': 'inline label', 'Fecha_12': 'inline label', 'Y12': 'no label', 'X12': 'no label', 'Z12': 'no label', 'Delta_Y12': 'inline label', 'Delta_X12': 'inline label', 'Delta_Z12': 'inline label', });
lyr_plano_cart_12.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', });
lyr_plano_cart_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});