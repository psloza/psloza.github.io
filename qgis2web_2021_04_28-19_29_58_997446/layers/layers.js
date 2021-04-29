var wms_layers = [];


        var lyr_CartoDarkBaseMap_0 = new ol.layer.Tile({
            'title': 'Carto Dark Base Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Parroquias_DMQ_geograficas_3 = new ol.format.GeoJSON();
var features_Parroquias_DMQ_geograficas_3 = format_Parroquias_DMQ_geograficas_3.readFeatures(json_Parroquias_DMQ_geograficas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parroquias_DMQ_geograficas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parroquias_DMQ_geograficas_3.addFeatures(features_Parroquias_DMQ_geograficas_3);
var lyr_Parroquias_DMQ_geograficas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parroquias_DMQ_geograficas_3, 
                style: style_Parroquias_DMQ_geograficas_3,
                interactive: false,
    title: 'Parroquias_DMQ_geograficas<br />\
    <img src="styles/legend/Parroquias_DMQ_geograficas_3_0.png" /> CALDERON<br />\
    <img src="styles/legend/Parroquias_DMQ_geograficas_3_1.png" /> ELOY ALFARO<br />\
    <img src="styles/legend/Parroquias_DMQ_geograficas_3_2.png" /> EUGENIO ESPEJO<br />\
    <img src="styles/legend/Parroquias_DMQ_geograficas_3_3.png" /> LA DELICIA<br />\
    <img src="styles/legend/Parroquias_DMQ_geograficas_3_4.png" /> LOS CHILLOS<br />\
    <img src="styles/legend/Parroquias_DMQ_geograficas_3_5.png" /> MANUELA SAENZ<br />\
    <img src="styles/legend/Parroquias_DMQ_geograficas_3_6.png" /> QUITUMBE<br />\
    <img src="styles/legend/Parroquias_DMQ_geograficas_3_7.png" /> TUMBACO<br />'
        });
var format_BarriosQuito_4 = new ol.format.GeoJSON();
var features_BarriosQuito_4 = format_BarriosQuito_4.readFeatures(json_BarriosQuito_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarriosQuito_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarriosQuito_4.addFeatures(features_BarriosQuito_4);
var lyr_BarriosQuito_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BarriosQuito_4, 
                style: style_BarriosQuito_4,
                interactive: false,
                title: '<img src="styles/legend/BarriosQuito_4.png" /> Barrios Quito'
            });
var format_ComerciantesInformales_5 = new ol.format.GeoJSON();
var features_ComerciantesInformales_5 = format_ComerciantesInformales_5.readFeatures(json_ComerciantesInformales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComerciantesInformales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComerciantesInformales_5.addFeatures(features_ComerciantesInformales_5);cluster_ComerciantesInformales_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ComerciantesInformales_5
});
var lyr_ComerciantesInformales_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ComerciantesInformales_5, 
                style: style_ComerciantesInformales_5,
                interactive: true,
                title: '<img src="styles/legend/ComerciantesInformales_5.png" /> Comerciantes Informales'
            });

lyr_CartoDarkBaseMap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Parroquias_DMQ_geograficas_3.setVisible(true);lyr_BarriosQuito_4.setVisible(true);lyr_ComerciantesInformales_5.setVisible(true);
var layersList = [lyr_CartoDarkBaseMap_0,lyr_GoogleHybrid_1,lyr_OpenStreetMap_2,lyr_Parroquias_DMQ_geograficas_3,lyr_BarriosQuito_4,lyr_ComerciantesInformales_5];
lyr_Parroquias_DMQ_geograficas_3.set('fieldAliases', {'Id': 'Id', 'Admi_zonal': 'Admi_zonal', 'PARROQUIA': 'PARROQUIA', 'ACDC': 'ACDC', 'CODIGO_LIS': 'CODIGO_LIS', 'cantidad': 'cantidad', 'Area': 'Area', });
lyr_BarriosQuito_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'BARRIO_ID': 'BARRIO_ID', 'Lat_y': 'Lat_y', 'Long_x': 'Long_x', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ComerciantesInformales_5.set('fieldAliases', {'ID': 'ID', 'Parroquia': 'Parroquia', 'Sexo': 'Sexo', 'Tipo de Comerciante': 'Tipo de Comerciante', 'Edad': 'Edad', 'Tiene Permiso?': 'Tiene Permiso?', 'Posición en Hogar': 'Posición en Hogar', 'Estado Civil': 'Estado Civil', 'Nivel de Instrucción': 'Nivel de Instrucción', 'Autoidentificación': 'Autoidentificación', 'Tiene alguna Discapacidad': 'Tiene alguna Discapacidad', 'Donde Vive Actualmente': 'Donde Vive Actualmente', 'Provincia de Nacimiento': 'Provincia de Nacimiento', 'Nombres': 'Nombres', 'Apellidos': 'Apellidos', 'Identificación': 'Identificación', 'Telefono': 'Telefono', 'Rango de Edad': 'Rango de Edad', 'Nacionalidad': 'Nacionalidad', 'Foto': 'Foto', });
lyr_Parroquias_DMQ_geograficas_3.set('fieldImages', {'Id': 'Range', 'Admi_zonal': 'TextEdit', 'PARROQUIA': 'TextEdit', 'ACDC': 'TextEdit', 'CODIGO_LIS': 'TextEdit', 'cantidad': 'TextEdit', 'Area': 'TextEdit', });
lyr_BarriosQuito_4.set('fieldImages', {'NOMBRE': 'TextEdit', 'BARRIO_ID': 'TextEdit', 'Lat_y': 'TextEdit', 'Long_x': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ComerciantesInformales_5.set('fieldImages', {'ID': '', 'Parroquia': '', 'Sexo': '', 'Tipo de Comerciante': '', 'Edad': '', 'Tiene Permiso?': '', 'Posición en Hogar': '', 'Estado Civil': '', 'Nivel de Instrucción': '', 'Autoidentificación': '', 'Tiene alguna Discapacidad': '', 'Donde Vive Actualmente': '', 'Provincia de Nacimiento': '', 'Nombres': '', 'Apellidos': '', 'Identificación': '', 'Telefono': '', 'Rango de Edad': '', 'Nacionalidad': '', 'Foto': '', });
lyr_Parroquias_DMQ_geograficas_3.set('fieldLabels', {'Id': 'no label', 'Admi_zonal': 'no label', 'PARROQUIA': 'no label', 'ACDC': 'no label', 'CODIGO_LIS': 'no label', 'cantidad': 'no label', 'Area': 'no label', });
lyr_BarriosQuito_4.set('fieldLabels', {'NOMBRE': 'no label', 'BARRIO_ID': 'no label', 'Lat_y': 'no label', 'Long_x': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ComerciantesInformales_5.set('fieldLabels', {'ID': 'header label', 'Parroquia': 'inline label', 'Sexo': 'inline label', 'Tipo de Comerciante': 'inline label', 'Edad': 'inline label', 'Tiene Permiso?': 'inline label', 'Posición en Hogar': 'inline label', 'Estado Civil': 'inline label', 'Nivel de Instrucción': 'inline label', 'Autoidentificación': 'inline label', 'Tiene alguna Discapacidad': 'inline label', 'Donde Vive Actualmente': 'inline label', 'Provincia de Nacimiento': 'inline label', 'Nombres': 'inline label', 'Apellidos': 'inline label', 'Identificación': 'inline label', 'Telefono': 'inline label', 'Rango de Edad': 'inline label', 'Nacionalidad': 'inline label', 'Foto': 'inline label', });
lyr_ComerciantesInformales_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});