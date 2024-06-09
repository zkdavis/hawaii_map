ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-17573569.422338, 2425936.745126, -17570432.472138, 2429079.472399]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1 = new ol.format.GeoJSON();
var features_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1 = format_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1.readFeatures(json_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1.addFeatures(features_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1);
var lyr_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1, 
                style: style_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1,
                popuplayertitle: "Neighborhood_Board_Subdistricts — Neighborhood_Board_SubDistrict",
                interactive: true,
    title: 'Neighborhood_Board_Subdistricts — Neighborhood_Board_SubDistrict<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_0.png" /> Aiea<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_1.png" /> Ala Moana-Kakaako<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_2.png" /> AliamanuSaltLakeFostrVillAirpr<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_3.png" /> Dmnd Head-Kapahulu-St Louis Ht<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_4.png" /> Downtown-Chinatown<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_5.png" /> Ewa<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_6.png" /> Hawaii Kai<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_7.png" /> Kahaluu<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_8.png" /> Kailua<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_9.png" /> Kaimuki<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_10.png" /> Kalihi Valley<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_11.png" /> Kalihi-Palama<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_12.png" /> Kaneohe<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_13.png" /> Koolauloa<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_14.png" /> Kuliouou-Kalani Iki<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_15.png" /> Liliha-Kapalama<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_16.png" /> Makakilo-Kapolei-Honokai Hale<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_17.png" /> Makiki-Lwr Punchbowl-Tantalus<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_18.png" /> Manoa<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_19.png" /> Mccully-Moiliili<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_20.png" /> Mililani Mauka-Launani Valley<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_21.png" /> Mililani-Waipio-Melemanu<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_22.png" /> Moanalua<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_23.png" /> Mokapu<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_24.png" /> Nanakuli-Maili<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_25.png" /> North Shore<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_26.png" /> Nuuanu-Punchbowl<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_27.png" /> Palolo<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_28.png" /> Pearl City<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_29.png" /> Wahiawa<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_30.png" /> Waialae-Kahala<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_31.png" /> Waianae<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_32.png" /> Waikiki<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_33.png" /> Waimanalo<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_34.png" /> Waipahu<br />\
    <img src="styles/legend/Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1_35.png" /> <br />'
        });
var format_Bus_Routes_2 = new ol.format.GeoJSON();
var features_Bus_Routes_2 = format_Bus_Routes_2.readFeatures(json_Bus_Routes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bus_Routes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bus_Routes_2.addFeatures(features_Bus_Routes_2);
var lyr_Bus_Routes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bus_Routes_2, 
                style: style_Bus_Routes_2,
                popuplayertitle: "Bus_Routes",
                interactive: true,
    title: 'Bus_Routes<br />\
    <img src="styles/legend/Bus_Routes_2_0.png" /> 1_EB<br />\
    <img src="styles/legend/Bus_Routes_2_1.png" /> 1_WB<br />\
    <img src="styles/legend/Bus_Routes_2_2.png" /> 10_EB<br />\
    <img src="styles/legend/Bus_Routes_2_3.png" /> 10_WB<br />\
    <img src="styles/legend/Bus_Routes_2_4.png" /> 102_EB<br />\
    <img src="styles/legend/Bus_Routes_2_5.png" /> 102_WB<br />\
    <img src="styles/legend/Bus_Routes_2_6.png" /> 11_EB<br />\
    <img src="styles/legend/Bus_Routes_2_7.png" /> 11_WB<br />\
    <img src="styles/legend/Bus_Routes_2_8.png" /> 122_EB<br />\
    <img src="styles/legend/Bus_Routes_2_9.png" /> 122_WB<br />\
    <img src="styles/legend/Bus_Routes_2_10.png" /> 123_EB<br />\
    <img src="styles/legend/Bus_Routes_2_11.png" /> 123_WB<br />\
    <img src="styles/legend/Bus_Routes_2_12.png" /> 13_EB<br />\
    <img src="styles/legend/Bus_Routes_2_13.png" /> 13_WB<br />\
    <img src="styles/legend/Bus_Routes_2_14.png" /> 14_EB<br />\
    <img src="styles/legend/Bus_Routes_2_15.png" /> 14_WB<br />\
    <img src="styles/legend/Bus_Routes_2_16.png" /> 18_EB<br />\
    <img src="styles/legend/Bus_Routes_2_17.png" /> 18_WB<br />\
    <img src="styles/legend/Bus_Routes_2_18.png" /> 1L_EB<br />\
    <img src="styles/legend/Bus_Routes_2_19.png" /> 1L_WB<br />\
    <img src="styles/legend/Bus_Routes_2_20.png" /> 2_EB<br />\
    <img src="styles/legend/Bus_Routes_2_21.png" /> 2_WB<br />\
    <img src="styles/legend/Bus_Routes_2_22.png" /> 20_EB<br />\
    <img src="styles/legend/Bus_Routes_2_23.png" /> 20_WB<br />\
    <img src="styles/legend/Bus_Routes_2_24.png" /> 23_EB<br />\
    <img src="styles/legend/Bus_Routes_2_25.png" /> 23_WB<br />\
    <img src="styles/legend/Bus_Routes_2_26.png" /> 234_WB<br />\
    <img src="styles/legend/Bus_Routes_2_27.png" /> 24_EB<br />\
    <img src="styles/legend/Bus_Routes_2_28.png" /> 24_WB<br />\
    <img src="styles/legend/Bus_Routes_2_29.png" /> 2L_EB<br />\
    <img src="styles/legend/Bus_Routes_2_30.png" /> 2L_WB<br />\
    <img src="styles/legend/Bus_Routes_2_31.png" /> 3_EB<br />\
    <img src="styles/legend/Bus_Routes_2_32.png" /> 3_WB<br />\
    <img src="styles/legend/Bus_Routes_2_33.png" /> 301_EB<br />\
    <img src="styles/legend/Bus_Routes_2_34.png" /> 301_WB<br />\
    <img src="styles/legend/Bus_Routes_2_35.png" /> 302_EB<br />\
    <img src="styles/legend/Bus_Routes_2_36.png" /> 302_WB<br />\
    <img src="styles/legend/Bus_Routes_2_37.png" /> 303_EB<br />\
    <img src="styles/legend/Bus_Routes_2_38.png" /> 303_WB<br />\
    <img src="styles/legend/Bus_Routes_2_39.png" /> 306_EB<br />\
    <img src="styles/legend/Bus_Routes_2_40.png" /> 306_WB<br />\
    <img src="styles/legend/Bus_Routes_2_41.png" /> 32_EB<br />\
    <img src="styles/legend/Bus_Routes_2_42.png" /> 32_WB<br />\
    <img src="styles/legend/Bus_Routes_2_43.png" /> 4_EB<br />\
    <img src="styles/legend/Bus_Routes_2_44.png" /> 4_WB<br />\
    <img src="styles/legend/Bus_Routes_2_45.png" /> 40_EB<br />\
    <img src="styles/legend/Bus_Routes_2_46.png" /> 40_WB<br />\
    <img src="styles/legend/Bus_Routes_2_47.png" /> 401_EB<br />\
    <img src="styles/legend/Bus_Routes_2_48.png" /> 401_WB<br />\
    <img src="styles/legend/Bus_Routes_2_49.png" /> 402_EB<br />\
    <img src="styles/legend/Bus_Routes_2_50.png" /> 402_WB<br />\
    <img src="styles/legend/Bus_Routes_2_51.png" /> 403_EB<br />\
    <img src="styles/legend/Bus_Routes_2_52.png" /> 403_WB<br />\
    <img src="styles/legend/Bus_Routes_2_53.png" /> 41_EB<br />\
    <img src="styles/legend/Bus_Routes_2_54.png" /> 41_WB<br />\
    <img src="styles/legend/Bus_Routes_2_55.png" /> 411_EB<br />\
    <img src="styles/legend/Bus_Routes_2_56.png" /> 411_WB<br />\
    <img src="styles/legend/Bus_Routes_2_57.png" /> 413_EB<br />\
    <img src="styles/legend/Bus_Routes_2_58.png" /> 413_WB<br />\
    <img src="styles/legend/Bus_Routes_2_59.png" /> 414_EB<br />\
    <img src="styles/legend/Bus_Routes_2_60.png" /> 414_WB<br />\
    <img src="styles/legend/Bus_Routes_2_61.png" /> 415_EB<br />\
    <img src="styles/legend/Bus_Routes_2_62.png" /> 415_WB<br />\
    <img src="styles/legend/Bus_Routes_2_63.png" /> 416_EB<br />\
    <img src="styles/legend/Bus_Routes_2_64.png" /> 416_WB<br />\
    <img src="styles/legend/Bus_Routes_2_65.png" /> 42_EB<br />\
    <img src="styles/legend/Bus_Routes_2_66.png" /> 42_WB<br />\
    <img src="styles/legend/Bus_Routes_2_67.png" /> 43_EB<br />\
    <img src="styles/legend/Bus_Routes_2_68.png" /> 43_WB<br />\
    <img src="styles/legend/Bus_Routes_2_69.png" /> 432_EB<br />\
    <img src="styles/legend/Bus_Routes_2_70.png" /> 432_WB<br />\
    <img src="styles/legend/Bus_Routes_2_71.png" /> 433_EB<br />\
    <img src="styles/legend/Bus_Routes_2_72.png" /> 433_WB<br />\
    <img src="styles/legend/Bus_Routes_2_73.png" /> 44_EB<br />\
    <img src="styles/legend/Bus_Routes_2_74.png" /> 44_WB<br />\
    <img src="styles/legend/Bus_Routes_2_75.png" /> 444_EB<br />\
    <img src="styles/legend/Bus_Routes_2_76.png" /> 444_WB<br />\
    <img src="styles/legend/Bus_Routes_2_77.png" /> 46_EB<br />\
    <img src="styles/legend/Bus_Routes_2_78.png" /> 46_WB<br />\
    <img src="styles/legend/Bus_Routes_2_79.png" /> 461_EB<br />\
    <img src="styles/legend/Bus_Routes_2_80.png" /> 461_WB<br />\
    <img src="styles/legend/Bus_Routes_2_81.png" /> 5_EB<br />\
    <img src="styles/legend/Bus_Routes_2_82.png" /> 5_WB<br />\
    <img src="styles/legend/Bus_Routes_2_83.png" /> 501_EB<br />\
    <img src="styles/legend/Bus_Routes_2_84.png" /> 501_WB<br />\
    <img src="styles/legend/Bus_Routes_2_85.png" /> 503_EB<br />\
    <img src="styles/legend/Bus_Routes_2_86.png" /> 503_WB<br />\
    <img src="styles/legend/Bus_Routes_2_87.png" /> 504_EB<br />\
    <img src="styles/legend/Bus_Routes_2_88.png" /> 504_WB<br />\
    <img src="styles/legend/Bus_Routes_2_89.png" /> 51_EB<br />\
    <img src="styles/legend/Bus_Routes_2_90.png" /> 51_WB<br />\
    <img src="styles/legend/Bus_Routes_2_91.png" /> 511_EB<br />\
    <img src="styles/legend/Bus_Routes_2_92.png" /> 511_WB<br />\
    <img src="styles/legend/Bus_Routes_2_93.png" /> 512_EB<br />\
    <img src="styles/legend/Bus_Routes_2_94.png" /> 512_WB<br />\
    <img src="styles/legend/Bus_Routes_2_95.png" /> 52_EB<br />\
    <img src="styles/legend/Bus_Routes_2_96.png" /> 52_WB<br />\
    <img src="styles/legend/Bus_Routes_2_97.png" /> 521_EB<br />\
    <img src="styles/legend/Bus_Routes_2_98.png" /> 521_WB<br />\
    <img src="styles/legend/Bus_Routes_2_99.png" /> 53_EB<br />\
    <img src="styles/legend/Bus_Routes_2_100.png" /> 53_WB<br />\
    <img src="styles/legend/Bus_Routes_2_101.png" /> 531_EB<br />\
    <img src="styles/legend/Bus_Routes_2_102.png" /> 531_WB<br />\
    <img src="styles/legend/Bus_Routes_2_103.png" /> 532_EB<br />\
    <img src="styles/legend/Bus_Routes_2_104.png" /> 532_WB<br />\
    <img src="styles/legend/Bus_Routes_2_105.png" /> 533_EB<br />\
    <img src="styles/legend/Bus_Routes_2_106.png" /> 533_WB<br />\
    <img src="styles/legend/Bus_Routes_2_107.png" /> 535_EB<br />\
    <img src="styles/legend/Bus_Routes_2_108.png" /> 535_WB<br />\
    <img src="styles/legend/Bus_Routes_2_109.png" /> 54_EB<br />\
    <img src="styles/legend/Bus_Routes_2_110.png" /> 54_WB<br />\
    <img src="styles/legend/Bus_Routes_2_111.png" /> 541_EB<br />\
    <img src="styles/legend/Bus_Routes_2_112.png" /> 541_WB<br />\
    <img src="styles/legend/Bus_Routes_2_113.png" /> 542_EB<br />\
    <img src="styles/legend/Bus_Routes_2_114.png" /> 542_WB<br />\
    <img src="styles/legend/Bus_Routes_2_115.png" /> 544_EB<br />\
    <img src="styles/legend/Bus_Routes_2_116.png" /> 544_WB<br />\
    <img src="styles/legend/Bus_Routes_2_117.png" /> 545_EB<br />\
    <img src="styles/legend/Bus_Routes_2_118.png" /> 545_WB<br />\
    <img src="styles/legend/Bus_Routes_2_119.png" /> 551_EB<br />\
    <img src="styles/legend/Bus_Routes_2_120.png" /> 551_WB<br />\
    <img src="styles/legend/Bus_Routes_2_121.png" /> 552_EB<br />\
    <img src="styles/legend/Bus_Routes_2_122.png" /> 552_WB<br />\
    <img src="styles/legend/Bus_Routes_2_123.png" /> 6_EB<br />\
    <img src="styles/legend/Bus_Routes_2_124.png" /> 6_WB<br />\
    <img src="styles/legend/Bus_Routes_2_125.png" /> 60_EB<br />\
    <img src="styles/legend/Bus_Routes_2_126.png" /> 60_WB<br />\
    <img src="styles/legend/Bus_Routes_2_127.png" /> 61_EB<br />\
    <img src="styles/legend/Bus_Routes_2_128.png" /> 61_WB<br />\
    <img src="styles/legend/Bus_Routes_2_129.png" /> 65_EB<br />\
    <img src="styles/legend/Bus_Routes_2_130.png" /> 65_WB<br />\
    <img src="styles/legend/Bus_Routes_2_131.png" /> 651_EB<br />\
    <img src="styles/legend/Bus_Routes_2_132.png" /> 651_WB<br />\
    <img src="styles/legend/Bus_Routes_2_133.png" /> 66_EB<br />\
    <img src="styles/legend/Bus_Routes_2_134.png" /> 66_WB<br />\
    <img src="styles/legend/Bus_Routes_2_135.png" /> 67_EB<br />\
    <img src="styles/legend/Bus_Routes_2_136.png" /> 67_WB<br />\
    <img src="styles/legend/Bus_Routes_2_137.png" /> 671_EB<br />\
    <img src="styles/legend/Bus_Routes_2_138.png" /> 671_WB<br />\
    <img src="styles/legend/Bus_Routes_2_139.png" /> 672_EB<br />\
    <img src="styles/legend/Bus_Routes_2_140.png" /> 672_WB<br />\
    <img src="styles/legend/Bus_Routes_2_141.png" /> 673_EB<br />\
    <img src="styles/legend/Bus_Routes_2_142.png" /> 673_WB<br />\
    <img src="styles/legend/Bus_Routes_2_143.png" /> 674_EB<br />\
    <img src="styles/legend/Bus_Routes_2_144.png" /> 674_WB<br />\
    <img src="styles/legend/Bus_Routes_2_145.png" /> 69_EB<br />\
    <img src="styles/legend/Bus_Routes_2_146.png" /> 69_WB<br />\
    <img src="styles/legend/Bus_Routes_2_147.png" /> 7_EB<br />\
    <img src="styles/legend/Bus_Routes_2_148.png" /> 7_WB<br />\
    <img src="styles/legend/Bus_Routes_2_149.png" /> 8_EB<br />\
    <img src="styles/legend/Bus_Routes_2_150.png" /> 8_WB<br />\
    <img src="styles/legend/Bus_Routes_2_151.png" /> 80_EB<br />\
    <img src="styles/legend/Bus_Routes_2_152.png" /> 80_WB<br />\
    <img src="styles/legend/Bus_Routes_2_153.png" /> 81_EB<br />\
    <img src="styles/legend/Bus_Routes_2_154.png" /> 81_WB<br />\
    <img src="styles/legend/Bus_Routes_2_155.png" /> 82_EB<br />\
    <img src="styles/legend/Bus_Routes_2_156.png" /> 82_WB<br />\
    <img src="styles/legend/Bus_Routes_2_157.png" /> 83_EB<br />\
    <img src="styles/legend/Bus_Routes_2_158.png" /> 83_WB<br />\
    <img src="styles/legend/Bus_Routes_2_159.png" /> 84_EB<br />\
    <img src="styles/legend/Bus_Routes_2_160.png" /> 84_WB<br />\
    <img src="styles/legend/Bus_Routes_2_161.png" /> 84A_EB<br />\
    <img src="styles/legend/Bus_Routes_2_162.png" /> 84A_WB<br />\
    <img src="styles/legend/Bus_Routes_2_163.png" /> 85_EB<br />\
    <img src="styles/legend/Bus_Routes_2_164.png" /> 85_WB<br />\
    <img src="styles/legend/Bus_Routes_2_165.png" /> 86_EB<br />\
    <img src="styles/legend/Bus_Routes_2_166.png" /> 86_WB<br />\
    <img src="styles/legend/Bus_Routes_2_167.png" /> 87_EB<br />\
    <img src="styles/legend/Bus_Routes_2_168.png" /> 87_WB<br />\
    <img src="styles/legend/Bus_Routes_2_169.png" /> 88_EB<br />\
    <img src="styles/legend/Bus_Routes_2_170.png" /> 88_WB<br />\
    <img src="styles/legend/Bus_Routes_2_171.png" /> 88A_EB<br />\
    <img src="styles/legend/Bus_Routes_2_172.png" /> 88A_WB<br />\
    <img src="styles/legend/Bus_Routes_2_173.png" /> 89_EB<br />\
    <img src="styles/legend/Bus_Routes_2_174.png" /> 89_WB<br />\
    <img src="styles/legend/Bus_Routes_2_175.png" /> 9_EB<br />\
    <img src="styles/legend/Bus_Routes_2_176.png" /> 9_WB<br />\
    <img src="styles/legend/Bus_Routes_2_177.png" /> 90_EB<br />\
    <img src="styles/legend/Bus_Routes_2_178.png" /> 90_WB<br />\
    <img src="styles/legend/Bus_Routes_2_179.png" /> 91_EB<br />\
    <img src="styles/legend/Bus_Routes_2_180.png" /> 91_WB<br />\
    <img src="styles/legend/Bus_Routes_2_181.png" /> 91A_EB<br />\
    <img src="styles/legend/Bus_Routes_2_182.png" /> 91A_WB<br />\
    <img src="styles/legend/Bus_Routes_2_183.png" /> 92_EB<br />\
    <img src="styles/legend/Bus_Routes_2_184.png" /> 92_WB<br />\
    <img src="styles/legend/Bus_Routes_2_185.png" /> 93_EB<br />\
    <img src="styles/legend/Bus_Routes_2_186.png" /> 93_WB<br />\
    <img src="styles/legend/Bus_Routes_2_187.png" /> 94_EB<br />\
    <img src="styles/legend/Bus_Routes_2_188.png" /> 94_WB<br />\
    <img src="styles/legend/Bus_Routes_2_189.png" /> 95_EB<br />\
    <img src="styles/legend/Bus_Routes_2_190.png" /> 95_WB<br />\
    <img src="styles/legend/Bus_Routes_2_191.png" /> 96_EB<br />\
    <img src="styles/legend/Bus_Routes_2_192.png" /> 96_WB<br />\
    <img src="styles/legend/Bus_Routes_2_193.png" /> 96A_EB<br />\
    <img src="styles/legend/Bus_Routes_2_194.png" /> 96A_WB<br />\
    <img src="styles/legend/Bus_Routes_2_195.png" /> 97_EB<br />\
    <img src="styles/legend/Bus_Routes_2_196.png" /> 97_WB<br />\
    <img src="styles/legend/Bus_Routes_2_197.png" /> 98_EB<br />\
    <img src="styles/legend/Bus_Routes_2_198.png" /> 98_WB<br />\
    <img src="styles/legend/Bus_Routes_2_199.png" /> 98A_EB<br />\
    <img src="styles/legend/Bus_Routes_2_200.png" /> 98A_WB<br />\
    <img src="styles/legend/Bus_Routes_2_201.png" /> 99_EB<br />\
    <img src="styles/legend/Bus_Routes_2_202.png" /> 99_WB<br />\
    <img src="styles/legend/Bus_Routes_2_203.png" /> 9s_EB<br />\
    <img src="styles/legend/Bus_Routes_2_204.png" /> 9s_WB<br />\
    <img src="styles/legend/Bus_Routes_2_205.png" /> A_EB<br />\
    <img src="styles/legend/Bus_Routes_2_206.png" /> A_WB<br />\
    <img src="styles/legend/Bus_Routes_2_207.png" /> C_EB<br />\
    <img src="styles/legend/Bus_Routes_2_208.png" /> C_WB<br />\
    <img src="styles/legend/Bus_Routes_2_209.png" /> E_EB<br />\
    <img src="styles/legend/Bus_Routes_2_210.png" /> E_WB<br />\
    <img src="styles/legend/Bus_Routes_2_211.png" /> PH1_EB<br />\
    <img src="styles/legend/Bus_Routes_2_212.png" /> PH1_WB<br />\
    <img src="styles/legend/Bus_Routes_2_213.png" /> PH2_EB<br />\
    <img src="styles/legend/Bus_Routes_2_214.png" /> PH2_WB<br />\
    <img src="styles/legend/Bus_Routes_2_215.png" /> PH3_EB<br />\
    <img src="styles/legend/Bus_Routes_2_216.png" /> PH3_WB<br />\
    <img src="styles/legend/Bus_Routes_2_217.png" /> PH4_EB<br />\
    <img src="styles/legend/Bus_Routes_2_218.png" /> PH4_WB<br />\
    <img src="styles/legend/Bus_Routes_2_219.png" /> PH6_EB<br />\
    <img src="styles/legend/Bus_Routes_2_220.png" /> PH6_WB<br />\
    <img src="styles/legend/Bus_Routes_2_221.png" /> PH7_EB<br />\
    <img src="styles/legend/Bus_Routes_2_222.png" /> PH7_WB<br />\
    <img src="styles/legend/Bus_Routes_2_223.png" /> PH8_EB<br />\
    <img src="styles/legend/Bus_Routes_2_224.png" /> PH8_WB<br />\
    <img src="styles/legend/Bus_Routes_2_225.png" /> W1_EB<br />\
    <img src="styles/legend/Bus_Routes_2_226.png" /> W1_WB<br />\
    <img src="styles/legend/Bus_Routes_2_227.png" /> W2_EB<br />\
    <img src="styles/legend/Bus_Routes_2_228.png" /> W2_WB<br />\
    <img src="styles/legend/Bus_Routes_2_229.png" /> W3_EB<br />\
    <img src="styles/legend/Bus_Routes_2_230.png" /> W3_WB<br />\
    <img src="styles/legend/Bus_Routes_2_231.png" /> <br />'
        });
var format_Bus_Stops_3 = new ol.format.GeoJSON();
var features_Bus_Stops_3 = format_Bus_Stops_3.readFeatures(json_Bus_Stops_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bus_Stops_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bus_Stops_3.addFeatures(features_Bus_Stops_3);
var lyr_Bus_Stops_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bus_Stops_3, 
                style: style_Bus_Stops_3,
                popuplayertitle: "Bus_Stops",
                interactive: true,
                    title: '<img src="styles/legend/Bus_Stops_3.png" /> Bus_Stops'
                });
var format_ParksPark_Types_Data_4 = new ol.format.GeoJSON();
var features_ParksPark_Types_Data_4 = format_ParksPark_Types_Data_4.readFeatures(json_ParksPark_Types_Data_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParksPark_Types_Data_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParksPark_Types_Data_4.addFeatures(features_ParksPark_Types_Data_4);
var lyr_ParksPark_Types_Data_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParksPark_Types_Data_4, 
                style: style_ParksPark_Types_Data_4,
                popuplayertitle: "Parks — Park_Types_Data",
                interactive: true,
                title: 'Parks — Park_Types_Data'
            });
var format_Gyms_5 = new ol.format.GeoJSON();
var features_Gyms_5 = format_Gyms_5.readFeatures(json_Gyms_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gyms_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gyms_5.addFeatures(features_Gyms_5);
var lyr_Gyms_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gyms_5, 
                style: style_Gyms_5,
                popuplayertitle: "Gyms",
                interactive: true,
                    title: '<img src="styles/legend/Gyms_5.png" /> Gyms'
                });
var format_CoffeeShops_6 = new ol.format.GeoJSON();
var features_CoffeeShops_6 = format_CoffeeShops_6.readFeatures(json_CoffeeShops_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoffeeShops_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoffeeShops_6.addFeatures(features_CoffeeShops_6);
var lyr_CoffeeShops_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoffeeShops_6, 
                style: style_CoffeeShops_6,
                popuplayertitle: "Coffee Shops",
                interactive: true,
                    title: '<img src="styles/legend/CoffeeShops_6.png" /> Coffee Shops'
                });
var format_Bars_7 = new ol.format.GeoJSON();
var features_Bars_7 = format_Bars_7.readFeatures(json_Bars_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bars_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bars_7.addFeatures(features_Bars_7);
var lyr_Bars_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bars_7, 
                style: style_Bars_7,
                popuplayertitle: "Bars",
                interactive: true,
                    title: '<img src="styles/legend/Bars_7.png" /> Bars'
                });
var format_Beach_8 = new ol.format.GeoJSON();
var features_Beach_8 = format_Beach_8.readFeatures(json_Beach_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beach_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beach_8.addFeatures(features_Beach_8);
var lyr_Beach_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beach_8, 
                style: style_Beach_8,
                popuplayertitle: "Beach",
                interactive: true,
                    title: '<img src="styles/legend/Beach_8.png" /> Beach'
                });
var format_Trails_9 = new ol.format.GeoJSON();
var features_Trails_9 = format_Trails_9.readFeatures(json_Trails_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trails_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trails_9.addFeatures(features_Trails_9);
var lyr_Trails_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trails_9, 
                style: style_Trails_9,
                popuplayertitle: "Trails",
                interactive: true,
                    title: '<img src="styles/legend/Trails_9.png" /> Trails'
                });
var format_MovieTheaters_10 = new ol.format.GeoJSON();
var features_MovieTheaters_10 = format_MovieTheaters_10.readFeatures(json_MovieTheaters_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MovieTheaters_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MovieTheaters_10.addFeatures(features_MovieTheaters_10);
var lyr_MovieTheaters_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MovieTheaters_10, 
                style: style_MovieTheaters_10,
                popuplayertitle: "Movie Theaters",
                interactive: true,
                    title: '<img src="styles/legend/MovieTheaters_10.png" /> Movie Theaters'
                });
var format_Hotels1Hotels_11 = new ol.format.GeoJSON();
var features_Hotels1Hotels_11 = format_Hotels1Hotels_11.readFeatures(json_Hotels1Hotels_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotels1Hotels_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotels1Hotels_11.addFeatures(features_Hotels1Hotels_11);
var lyr_Hotels1Hotels_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotels1Hotels_11, 
                style: style_Hotels1Hotels_11,
                popuplayertitle: "Hotels(1) — Hotels",
                interactive: true,
                    title: '<img src="styles/legend/Hotels1Hotels_11.png" /> Hotels(1) — Hotels'
                });
var format_Museum_12 = new ol.format.GeoJSON();
var features_Museum_12 = format_Museum_12.readFeatures(json_Museum_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museum_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museum_12.addFeatures(features_Museum_12);cluster_Museum_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Museum_12
});
var lyr_Museum_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Museum_12, 
                style: style_Museum_12,
                popuplayertitle: "Museum",
                interactive: true,
                    title: '<img src="styles/legend/Museum_12.png" /> Museum'
                });
var format_ZooandGardens_13 = new ol.format.GeoJSON();
var features_ZooandGardens_13 = format_ZooandGardens_13.readFeatures(json_ZooandGardens_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZooandGardens_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZooandGardens_13.addFeatures(features_ZooandGardens_13);cluster_ZooandGardens_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ZooandGardens_13
});
var lyr_ZooandGardens_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ZooandGardens_13, 
                style: style_ZooandGardens_13,
                popuplayertitle: "Zoo and Gardens",
                interactive: true,
                    title: '<img src="styles/legend/ZooandGardens_13.png" /> Zoo and Gardens'
                });
var format_GroceryStores_14 = new ol.format.GeoJSON();
var features_GroceryStores_14 = format_GroceryStores_14.readFeatures(json_GroceryStores_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroceryStores_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroceryStores_14.addFeatures(features_GroceryStores_14);cluster_GroceryStores_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GroceryStores_14
});
var lyr_GroceryStores_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GroceryStores_14, 
                style: style_GroceryStores_14,
                popuplayertitle: "Grocery Stores",
                interactive: true,
                    title: '<img src="styles/legend/GroceryStores_14.png" /> Grocery Stores'
                });
var format_University_15 = new ol.format.GeoJSON();
var features_University_15 = format_University_15.readFeatures(json_University_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_University_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_University_15.addFeatures(features_University_15);cluster_University_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_University_15
});
var lyr_University_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_University_15, 
                style: style_University_15,
                popuplayertitle: "University",
                interactive: true,
                    title: '<img src="styles/legend/University_15.png" /> University'
                });
var group_Added_Location = new ol.layer.Group({
                                layers: [lyr_Gyms_5,lyr_CoffeeShops_6,lyr_Bars_7,lyr_Beach_8,lyr_Trails_9,lyr_MovieTheaters_10,lyr_Hotels1Hotels_11,lyr_Museum_12,lyr_ZooandGardens_13,lyr_GroceryStores_14,lyr_University_15,],
                                fold: "open",
                                title: "Added_Location"});
var group_Added_KMLs = new ol.layer.Group({
                                layers: [lyr_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1,lyr_Bus_Routes_2,lyr_Bus_Stops_3,lyr_ParksPark_Types_Data_4,],
                                fold: "open",
                                title: "Added_KMLs"});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,],
                                fold: "open",
                                title: "BaseMaps"});

lyr_GoogleRoad_0.setVisible(true);lyr_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1.setVisible(true);lyr_Bus_Routes_2.setVisible(true);lyr_Bus_Stops_3.setVisible(false);lyr_ParksPark_Types_Data_4.setVisible(true);lyr_Gyms_5.setVisible(true);lyr_CoffeeShops_6.setVisible(true);lyr_Bars_7.setVisible(true);lyr_Beach_8.setVisible(true);lyr_Trails_9.setVisible(true);lyr_MovieTheaters_10.setVisible(true);lyr_Hotels1Hotels_11.setVisible(true);lyr_Museum_12.setVisible(true);lyr_ZooandGardens_13.setVisible(true);lyr_GroceryStores_14.setVisible(true);lyr_University_15.setVisible(true);
var layersList = [group_BaseMaps,group_Added_KMLs,group_Added_Location];
lyr_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'objectid': 'objectid', 'towns': 'towns', 'board_num': 'board_num', 'dist_num': 'dist_num', 'sd_desc': 'sd_desc', 'globalid': 'globalid', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'sd_desc2': 'sd_desc2', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Bus_Routes_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'objectid': 'objectid', 'rte_dir': 'rte_dir', 'rte': 'rte', 'dir': 'dir', 'Shape__Length': 'Shape__Length', });
lyr_Bus_Stops_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'objectid': 'objectid', 'stopid': 'stopid', 'stopname': 'stopname', 'lat': 'lat', 'lon': 'lon', });
lyr_ParksPark_Types_Data_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'objectid': 'objectid', 'park_cat': 'park_cat', 'tmk': 'tmk', 'park_type': 'park_type', 'park_name': 'park_name', 'main_dist': 'main_dist', 'link_id': 'link_id', 'legal_acres': 'legal_acres', 'dedicated': 'dedicated', 'globalid': 'globalid', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Gyms_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CoffeeShops_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bars_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Beach_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Trails_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MovieTheaters_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hotels1Hotels_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Museum_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZooandGardens_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GroceryStores_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_University_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'objectid': 'Range', 'towns': 'TextEdit', 'board_num': 'TextEdit', 'dist_num': 'TextEdit', 'sd_desc': 'TextEdit', 'globalid': 'TextEdit', 'created_user': 'TextEdit', 'created_date': 'TextEdit', 'last_edited_user': 'TextEdit', 'last_edited_date': 'TextEdit', 'sd_desc2': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Bus_Routes_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'objectid': 'Range', 'rte_dir': 'TextEdit', 'rte': 'TextEdit', 'dir': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Bus_Stops_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'objectid': 'Range', 'stopid': 'Range', 'stopname': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_ParksPark_Types_Data_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'objectid': '', 'park_cat': '', 'tmk': '', 'park_type': '', 'park_name': '', 'main_dist': '', 'link_id': '', 'legal_acres': '', 'dedicated': '', 'globalid': '', 'created_user': '', 'created_date': '', 'last_edited_user': '', 'last_edited_date': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Gyms_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CoffeeShops_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Bars_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Beach_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Trails_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MovieTheaters_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Hotels1Hotels_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Museum_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ZooandGardens_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_GroceryStores_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_University_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Neighborhood_Board_SubdistrictsNeighborhood_Board_SubDistrict_1.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'objectid': 'hidden field', 'towns': 'inline label - always visible', 'board_num': 'hidden field', 'dist_num': 'hidden field', 'sd_desc': 'hidden field', 'globalid': 'hidden field', 'created_user': 'hidden field', 'created_date': 'hidden field', 'last_edited_user': 'hidden field', 'last_edited_date': 'hidden field', 'sd_desc2': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Bus_Routes_2.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'objectid': 'hidden field', 'rte_dir': 'inline label - always visible', 'rte': 'hidden field', 'dir': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_Bus_Stops_3.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'objectid': 'hidden field', 'stopid': 'hidden field', 'stopname': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_ParksPark_Types_Data_4.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'objectid': 'hidden field', 'park_cat': 'hidden field', 'tmk': 'hidden field', 'park_type': 'hidden field', 'park_name': 'inline label - always visible', 'main_dist': 'hidden field', 'link_id': 'hidden field', 'legal_acres': 'hidden field', 'dedicated': 'hidden field', 'globalid': 'hidden field', 'created_user': 'hidden field', 'created_date': 'hidden field', 'last_edited_user': 'hidden field', 'last_edited_date': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Gyms_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CoffeeShops_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Bars_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Beach_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Trails_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_MovieTheaters_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Hotels1Hotels_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Museum_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_ZooandGardens_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_GroceryStores_14.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_University_15.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_University_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});