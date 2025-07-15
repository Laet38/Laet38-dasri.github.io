var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DASRI_ListevtospourcarteLaeticia_1 = new ol.format.GeoJSON();
var features_DASRI_ListevtospourcarteLaeticia_1 = format_DASRI_ListevtospourcarteLaeticia_1.readFeatures(json_DASRI_ListevtospourcarteLaeticia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DASRI_ListevtospourcarteLaeticia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DASRI_ListevtospourcarteLaeticia_1.addFeatures(features_DASRI_ListevtospourcarteLaeticia_1);
var lyr_DASRI_ListevtospourcarteLaeticia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DASRI_ListevtospourcarteLaeticia_1, 
                style: style_DASRI_ListevtospourcarteLaeticia_1,
                popuplayertitle: 'DASRI_Liste vétos pour carte-Laeticia',
                interactive: true,
                title: '<img src="styles/legend/DASRI_ListevtospourcarteLaeticia_1.png" /> DASRI_Liste vétos pour carte-Laeticia'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DASRI_ListevtospourcarteLaeticia_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DASRI_ListevtospourcarteLaeticia_1];
lyr_DASRI_ListevtospourcarteLaeticia_1.set('fieldAliases', {'Num�ro v�t�rinaire bovin': 'Num�ro v�t�rinaire bovin', 'Nom v�t�rinaire bovin': 'Nom v�t�rinaire bovin', 'Code postal v�t�rinaire bovin': 'Code postal v�t�rinaire bovin', 'Commune v�t�rinaire bovin': 'Commune v�t�rinaire bovin', 'Mail': 'Mail', 'Retour mail': 'Retour mail', 'Rappel le 02/07/2025': 'Rappel le 02/07/2025', 'nombre de kits � distribuer': 'nombre de kits � distribuer', 'XLAB': 'XLAB', 'XLAM': 'XLAM', });
lyr_DASRI_ListevtospourcarteLaeticia_1.set('fieldImages', {'Num�ro v�t�rinaire bovin': 'Range', 'Nom v�t�rinaire bovin': 'TextEdit', 'Code postal v�t�rinaire bovin': 'Range', 'Commune v�t�rinaire bovin': 'TextEdit', 'Mail': 'TextEdit', 'Retour mail': 'TextEdit', 'Rappel le 02/07/2025': 'TextEdit', 'nombre de kits � distribuer': 'Range', 'XLAB': 'TextEdit', 'XLAM': 'TextEdit', });
lyr_DASRI_ListevtospourcarteLaeticia_1.set('fieldLabels', {'Num�ro v�t�rinaire bovin': 'hidden field', 'Nom v�t�rinaire bovin': 'inline label - always visible', 'Code postal v�t�rinaire bovin': 'hidden field', 'Commune v�t�rinaire bovin': 'no label', 'Mail': 'inline label - always visible', 'Retour mail': 'inline label - always visible', 'Rappel le 02/07/2025': 'hidden field', 'nombre de kits � distribuer': 'inline label - always visible', 'XLAB': 'hidden field', 'XLAM': 'hidden field', });
lyr_DASRI_ListevtospourcarteLaeticia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});