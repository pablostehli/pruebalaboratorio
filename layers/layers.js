var wms_layers = [];

var format_Prueba_0 = new ol.format.GeoJSON();
var features_Prueba_0 = format_Prueba_0.readFeatures(json_Prueba_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prueba_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prueba_0.addFeatures(features_Prueba_0);
var lyr_Prueba_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prueba_0, 
                style: style_Prueba_0,
                interactive: true,
    title: 'Prueba<br />\
    <img src="styles/legend/Prueba_0_0.png" /> Distribucion 0<br />\
    <img src="styles/legend/Prueba_0_1.png" /> Distribucion 1<br />\
    <img src="styles/legend/Prueba_0_2.png" /> Distribucion 2<br />\
    <img src="styles/legend/Prueba_0_3.png" /> Distribucion 3<br />'
        });
var format_provincia_1 = new ol.format.GeoJSON();
var features_provincia_1 = format_provincia_1.readFeatures(json_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincia_1.addFeatures(features_provincia_1);
var lyr_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_provincia_1, 
                style: style_provincia_1,
                interactive: true,
                title: '<img src="styles/legend/provincia_1.png" /> provincia'
            });

lyr_Prueba_0.setVisible(true);lyr_provincia_1.setVisible(true);
var layersList = [lyr_Prueba_0,lyr_provincia_1];
lyr_Prueba_0.set('fieldAliases', {'DN': 'DN', });
lyr_provincia_1.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Prueba_0.set('fieldImages', {'DN': 'Range', });
lyr_provincia_1.set('fieldImages', {'gid': 'Range', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Prueba_0.set('fieldLabels', {'DN': 'no label', });
lyr_provincia_1.set('fieldLabels', {'gid': 'header label', 'entidad': 'header label', 'objeto': 'header label', 'fna': 'header label', 'gna': 'header label', 'nam': 'header label', 'in1': 'header label', 'fdc': 'header label', 'sag': 'header label', });
lyr_provincia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});