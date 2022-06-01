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
var format_SolicitudesMinerasExploRacion_1 = new ol.format.GeoJSON();
var features_SolicitudesMinerasExploRacion_1 = format_SolicitudesMinerasExploRacion_1.readFeatures(json_SolicitudesMinerasExploRacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolicitudesMinerasExploRacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolicitudesMinerasExploRacion_1.addFeatures(features_SolicitudesMinerasExploRacion_1);
var lyr_SolicitudesMinerasExploRacion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolicitudesMinerasExploRacion_1, 
                style: style_SolicitudesMinerasExploRacion_1,
                interactive: true,
                title: '<img src="styles/legend/SolicitudesMinerasExploRacion_1.png" /> SolicitudesMinerasExploRacion'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SolicitudesMinerasExploRacion_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SolicitudesMinerasExploRacion_1];
lyr_SolicitudesMinerasExploRacion_1.set('fieldAliases', {'Codigo': 'Codigo', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'StatusGrp': 'StatusGrp', 'Status': 'Status', 'FechaSolic': 'FechaSolic', 'FechaOtorg': 'FechaOtorg', 'FechaExpir': 'FechaExpir', 'Partes': 'Partes', 'ValorArea': 'ValorArea', 'UnidadArea': 'UnidadArea', 'Referencia': 'Referencia', 'Sustancia': 'Sustancia', 'comentario': 'comentario', 'grouptype': 'grouptype', 'geomShape_': 'geomShape_', 'geomShape1': 'geomShape1', });
lyr_SolicitudesMinerasExploRacion_1.set('fieldImages', {'Codigo': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', 'StatusGrp': 'TextEdit', 'Status': 'TextEdit', 'FechaSolic': 'DateTime', 'FechaOtorg': 'DateTime', 'FechaExpir': 'DateTime', 'Partes': 'TextEdit', 'ValorArea': 'TextEdit', 'UnidadArea': 'TextEdit', 'Referencia': 'TextEdit', 'Sustancia': 'TextEdit', 'comentario': 'TextEdit', 'grouptype': 'TextEdit', 'geomShape_': 'TextEdit', 'geomShape1': 'TextEdit', });
lyr_SolicitudesMinerasExploRacion_1.set('fieldLabels', {'Codigo': 'no label', 'Nombre': 'no label', 'Tipo': 'no label', 'StatusGrp': 'no label', 'Status': 'no label', 'FechaSolic': 'no label', 'FechaOtorg': 'no label', 'FechaExpir': 'no label', 'Partes': 'no label', 'ValorArea': 'no label', 'UnidadArea': 'no label', 'Referencia': 'no label', 'Sustancia': 'no label', 'comentario': 'no label', 'grouptype': 'no label', 'geomShape_': 'no label', 'geomShape1': 'no label', });
lyr_SolicitudesMinerasExploRacion_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});