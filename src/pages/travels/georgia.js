'use client'
import { Carousel } from '../../Components';
import '../../assets/travels.scss';

const Georgia = () => {

    const slideshows = [[
        { "src": "01_kutaisi_01.jpg", "alt": "Kutaisi" },
        { "src": "01_kutaisi_14.jpg", "alt": "Kutaisi" },
        { "src": "01_kutaisi_15.jpg", "alt": "Kutaisi" }
    ], [
        { "src": "01_kutaisi_05.jpg", "alt": "Kutaisi" },
        { "src": "01_kutaisi_07.jpg", "alt": "Kutaisi" },
        { "src": "01_kutaisi_09.jpg", "alt": "Kutaisi" },
        { "src": "01_kutaisi_10.jpg", "alt": "Kutaisi" },
        { "src": "01_kutaisi_11.jpg", "alt": "Kutaisi" }
    ], [
        { "src": "02_batumi_12.jpg", "alt": "Batumi" },
        { "src": "02_batumi_15.jpg", "alt": "Batumi" },
        { "src": "02_batumi_16.jpg", "alt": "Batumi" },
        { "src": "02_batumi_17.jpg", "alt": "Batumi" },
        { "src": "02_batumi_20.jpg", "alt": "Batumi" },
        { "src": "02_batumi_21.jpg", "alt": "Batumi" },
        { "src": "02_batumi_22.jpg", "alt": "Batumi" },
        { "src": "02_batumi_23.jpg", "alt": "Batumi" },
        { "src": "02_batumi_25.jpg", "alt": "Batumi" },
        { "src": "02_batumi_26.jpg", "alt": "Batumi" }
    ], [
        { "src": "02_batumi_27.jpg", "alt": "Batumi" },
        { "src": "02_batumi_28.jpg", "alt": "Batumi" },
        { "src": "02_batumi_30.jpg", "alt": "Batumi" },
        { "src": "02_batumi_32.jpg", "alt": "Batumi" },
        { "src": "02_batumi_33.jpg", "alt": "Batumi" },
        { "src": "02_batumi_34.jpg", "alt": "Batumi" },
        { "src": "02_batumi_35.jpg", "alt": "Batumi" },
        { "src": "02_batumi_36.jpg", "alt": "Batumi" },
        { "src": "02_batumi_37.jpg", "alt": "Batumi" },
        { "src": "02_batumi_38.jpg", "alt": "Batumi" },
        { "src": "02_batumi_39.jpg", "alt": "Batumi" },
        { "src": "02_batumi_40.jpg", "alt": "Batumi" },
        { "src": "02_batumi_41.jpg", "alt": "Batumi" },
        { "src": "02_batumi_42.jpg", "alt": "Batumi" },
        { "src": "02_batumi_43.jpg", "alt": "Batumi" },
        { "src": "02_batumi_44.jpg", "alt": "Batumi" }
    ], [
        { "src": "01_kutaisi_02.jpg", "alt": "Kutaisi" },
        { "src": "01_kutaisi_03.jpg", "alt": "Kutaisi" },
        { "src": "02_batumi_54.jpg", "alt": "Batumi" }
    ], [
        { "src": "02_batumi_57.jpg", "alt": "Batumi" },
        { "src": "02_batumi_58.jpg", "alt": "Batumi" },
        { "src": "02_batumi_59.jpg", "alt": "Batumi" },
        { "src": "02_batumi_60.jpg", "alt": "Batumi" },
        { "src": "02_batumi_61.jpg", "alt": "Batumi" },
        { "src": "02_batumi_62.jpg", "alt": "Batumi" },
        { "src": "02_batumi_63.jpg", "alt": "Batumi" },
        { "src": "02_batumi_64.jpg", "alt": "Batumi" },
        { "src": "02_batumi_65.jpg", "alt": "Batumi" },
        { "src": "02_batumi_66.jpg", "alt": "Batumi" },
        { "src": "02_batumi_67.jpg", "alt": "Batumi" },
        { "src": "02_batumi_68.jpg", "alt": "Batumi" },
        { "src": "02_batumi_69.jpg", "alt": "Batumi" },
        { "src": "02_batumi_70.jpg", "alt": "Batumi" },
        { "src": "02_batumi_71.jpg", "alt": "Batumi" }
    ], [
        { "src": "02_batumi_72.jpg", "alt": "Batumi" },
        { "src": "02_batumi_73.jpg", "alt": "Batumi" },
        { "src": "02_batumi_74.jpg", "alt": "Batumi" },
        { "src": "02_batumi_75.jpg", "alt": "Batumi" },
        { "src": "02_batumi_76.jpg", "alt": "Batumi" },
        { "src": "02_batumi_77.jpg", "alt": "Batumi" },
        { "src": "02_batumi_78.jpg", "alt": "Batumi" },
        { "src": "02_batumi_79.jpg", "alt": "Batumi" },
        { "src": "02_batumi_80.jpg", "alt": "Batumi" },
        { "src": "02_batumi_81.jpg", "alt": "Batumi" }
    ], [
        { "src": "02_batumi_01.jpg", "alt": "Batumi" },
        { "src": "02_batumi_04.jpg", "alt": "Batumi" },
        { "src": "02_batumi_09.jpg", "alt": "Batumi" },
        { "src": "02_batumi_10.jpg", "alt": "Batumi" },
        { "src": "02_batumi_11.jpg", "alt": "Batumi" },
        { "src": "02_batumi_13.jpg", "alt": "Batumi" },
        { "src": "02_batumi_14.jpg", "alt": "Batumi" },
        { "src": "02_batumi_46.jpg", "alt": "Batumi" },
        { "src": "02_batumi_47.jpg", "alt": "Batumi" },
        { "src": "02_batumi_48.jpg", "alt": "Batumi" },
        { "src": "02_batumi_49.jpg", "alt": "Batumi" },
        { "src": "02_batumi_50.jpg", "alt": "Batumi" },
        { "src": "02_batumi_53.jpg", "alt": "Batumi" }
    ], [
        { "src": "03_tbilisi_001.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_002.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_003.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_005.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_007.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_009.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_010.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_011.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_012.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_013.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_014.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_015.jpg", "alt": "Tbilisi" }
    ], [
        { "src": "03_tbilisi_053.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_050.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_051.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_052.jpg", "alt": "Tbilisi" }
    ], [
        { "src": "03_tbilisi_017.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_018.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_020.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_021.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_022.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_023.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_024.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_025.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_026.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_027.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_028.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_029.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_030.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_031.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_032.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_034.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_036.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_037.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_038.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_039.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_040.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_041.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_042.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_043.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_044.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_045.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_046.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_048.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_049.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_055.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_056.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_057.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_058.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_060.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_062.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_063.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_064.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_065.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_066.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_067.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_068.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_070.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_071.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_072.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_073.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_074.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_076.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_078.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_079.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_080.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_081.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_082.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_083.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_084.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_086.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_087.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_088.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_089.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_090.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_091.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_092.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_093.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_094.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_095.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_096.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_097.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_098.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_099.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_100.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_101.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_102.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_103.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_104.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_105.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_106.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_107.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_108.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_109.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_110.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_111.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_112.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_113.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_114.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_115.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_116.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_117.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_118.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_119.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_120.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_121.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_122.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_123.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_124.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_125.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_126.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_127.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_128.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_129.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_130.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_131.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_132.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_133.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_134.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_135.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_136.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_137.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_138.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_139.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_140.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_141.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_142.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_143.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_144.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_145.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_146.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_147.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_148.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_149.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_150.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_151.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_152.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_153.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_154.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_155.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_156.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_157.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_158.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_159.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_160.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_161.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_162.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_163.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_164.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_165.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_166.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_167.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_168.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_169.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_170.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_171.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_172.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_173.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_174.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_175.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_176.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_177.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_178.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_179.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_180.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_181.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_182.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_183.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_184.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_185.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_186.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_187.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_188.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_189.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_190.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_191.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_192.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_193.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_194.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_195.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_196.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_197.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_198.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_199.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_200.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_201.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_202.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_203.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_204.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_205.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_206.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_207.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_208.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_209.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_210.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_211.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_212.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_213.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_214.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_215.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_216.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_217.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_218.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_219.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_220.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_221.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_222.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_223.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_224.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_225.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_226.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_227.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_228.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_229.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_230.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_231.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_232.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_233.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_234.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_235.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_236.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_237.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_238.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_239.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_240.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_241.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_242.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_243.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_244.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_245.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_246.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_247.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_248.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_249.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_250.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_251.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_252.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_253.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_254.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_255.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_256.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_257.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_258.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_259.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_260.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_261.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_262.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_263.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_264.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_265.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_266.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_267.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_268.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_269.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_270.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_271.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_272.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_273.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_274.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_275.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_276.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_277.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_278.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_279.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_280.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_281.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_282.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_283.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_284.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_285.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_286.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_287.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_288.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_289.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_290.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_291.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_292.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_293.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_294.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_295.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_296.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_297.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_298.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_299.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_300.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_301.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_302.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_303.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_304.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_305.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_306.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_307.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_308.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_309.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_310.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_311.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_312.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_313.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_314.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_315.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_316.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_317.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_318.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_319.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_320.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_321.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_322.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_323.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_324.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_325.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_326.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_327.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_328.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_329.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_330.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_331.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_332.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_333.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_334.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_335.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_336.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_337.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_338.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_339.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_340.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_341.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_342.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_343.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_344.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_345.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_346.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_347.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_348.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_349.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_350.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_351.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_352.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_353.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_354.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_355.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_356.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_357.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_358.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_359.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_360.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_361.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_362.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_363.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_364.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_365.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_366.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_367.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_368.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_369.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_370.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_371.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_372.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_373.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_374.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_375.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_376.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_377.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_378.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_379.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_380.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_381.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_382.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_383.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_384.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_385.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_386.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_387.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_388.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_389.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_390.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_391.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_392.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_393.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_394.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_395.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_396.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_397.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_398.jpg", "alt": "Tbilisi" },
        { "src": "03_tbilisi_399.jpg", "alt": "Tbilisi" }
    ]];

    return (<main>
        <div className="travel-background" style={{'backgroundImage': 'url(/data/travels/panoramas/georgia_tbilisi_13.jpg)'}}></div>
        <div className="article">
            <h1>Georgia</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#kutaisi">Kutaisi</a></li>
                <li><a href="#batumi">Batumi</a></li>
                <li><a href="#tbilisi">Tbilisi</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p><img src="/data/travels/vietnam/images/map_georgia.png" alt="Route"/></p>
            <p>
                On December 19th we took the plane from Brussels to Kutaisi, a city in Georgia. I've never thought of going to Georgia before, but the 
                flight was pretty cheap. The plan was to combine it with Armenia, but with the current situation that didn't seem feasible. I've heard 
                many stories about Eastern Europe being beautiful and had already had a couple of experiences myself, so that promised to be a great holiday.
            </p>
            <h2 id="kutaisi">Kutaisi</h2>
            <p>
                So we started off in Kutaisi, which was the second biggest city in Georgia before Batumi caught up. In Kutaisi we just spent one day
                and we booked one night in guesthouse Daisy S Home. Daisy was a very friendly lady, she absolutely wanted us to see every room for
                us to pick, to make it as comfortable as possible.
            </p>
            <Carousel gallery={slideshows[0]} directory="georgia" />
            <p>
                Because our return flight would depart from there so we would come back later. We 
                had our first Georgian meal there, they sure like their bread and cheese. I had Khinkali, which is like dumplings, but in this case 
                with cheese filling. They have their own cheese, called Sulguni. You can order a minimum of 5 Khinkali, there are other variants with 
                mushroom, beef or potato fillings. They all contain a broth, you need to bite a hole and suck out the broth. Legend goes that the person 
                that can eat the most Khinkali with spilling the least soup, must be the best kisser in town. Another dish that I had was again, cheese. 
                This time mixed up with polenta to create some sort of pancake.
            </p>
            <p>
                Apart from some nice views, that was pretty much all we saw in Kutaisi.
            </p>
            <Carousel gallery={slideshows[1]} directory="georgia" />
            <h2 id="batumi">Batumi</h2>
            <p>
               The next day, on December 21st, we took a ride to Batumi, it's a coastal city with pebble beaches at the Black Sea. It is very touristy 
               and it attracts a lot of Turks and Armenians, as it is close to the borders of those countries, that allowed it to outgrow Kutaisi and 
               become the second largest city in Georgia. At first we went for some sightseeing along the beach promenade and downtown, where we saw 
               the moving statue of Ali & Nino, a university building with a ferris wheel built into it what later on became a hotel, we've seen several 
               churches, both orthodox and Catholic and a synagoge. Georgia is a mix between orthodox, Catholic, Jewish and Muslim people that live together 
               peacefully.
            </p>
            <blockquote>
                Ali & Nino, The sculpture was created by famous Georgian artist and sculptor Tamar Kvesitadze. The monument has got the name of the novel 
                "Ali and Nino" by famous Azerbaijan writer Kurban Said. The novel "Ali and Nino" tells about the tragic love story of Azerbaijan Muslim Ali 
                Shirvashir and Georgian Christian Nino Kipiani. The events written in the book happened during the First World War in the Caucasus. The statue 
                of Ali and Nino was created in 2010 and represents a symbol of love, despite nationality or belief.
            </blockquote>
            <Carousel gallery={slideshows[2]} directory="georgia" />
            <p>
                The second day we went to Sarpi, even closer to the Turkish border, we went to see a waterfall, with a statue of apostle Andrew, the waterfall 
                led to a tunnel that serves a purpose of being the path of enlightenment. Also we saw Gonio Fortress and Sarpi Rock.
            </p>
            <Carousel gallery={slideshows[3]} directory="georgia" />
            <p>
                Initially we booked 3 nights in Batumi, but because we didn't like Kutaisi that much, that would mean that we would have 15 days left
                to spend in Tbilisi. That's why we decided to book another 3 nights in Batumi, it also seemed like a nice place to spend Christmas. 
                There are both the Catholic and Orthodox religions in Georgia, but Christmas is celebrated on January 7th. They do celebrate New Years Eve 
                at December 31th, but on January 14th they also celebrate Old New Year. One day of Christmas we decided to stay in and create our own 
                meal based on Georgian ingredients. They pickle a lot of things and pomegranates are used in a variety of recipes. Of course there had
                to be cheese.
            </p>
            <Carousel gallery={slideshows[4]} directory="georgia" />
            <p>
                The second day of Christmas we wanted to go to the Botanic garden, we wanted to do that before, but there was a lot of rain. We spent an
                hour in the bus and two hours of walking, only to find out that the garden was closed. We were allowed to visit the beach, but there was
                trash literally everywhere.
            </p>
            <Carousel gallery={slideshows[5]} directory="georgia" />
            <p>
                After that we went to several 
                pubs, they have a lot of artisan beers here, among which a tomato beer. My expectations were a bit too high, because to me it tasted like 
                tomato juice with beer added. Same for all other types of fruity beer. So then we came to discover chacha, a byproduct of the way they make 
                their wine in Georgia. I will elaborate on that in the Tbilisi chapter. There is plain chacha, chacha aged in oak and tarragon, peach and 
                honey are also very popular. There are a lot of other flavours as well, like four chilies, chily-berry, garlic, ginger, orange-cloves, kiwi, 
                anything you can think of. They put chacha with those ingredients in a big jar and let it age for a while. The ones that I found most 
                interesting and also liked most were the chily one and the garlic one.
            </p>
            <Carousel gallery={slideshows[6]} directory="georgia" />
            <p>
                We stayed in Royal Orbi Hotel and for the second booking we needed to move from tower A to tower C. It was a very weird experience, every tower 
                had it's own reception, but for our booking we needed to go to a reception on the floor itself, which was setup pretty sketchy in a hotel room. 
                For the second booking there wasn't even a reception, we arrived on time for our appointment, but the owner wasn't there and he decided to call 
                us after midnight, when we were going out downtown, to collect his money. When we arrived back in the hotel, he was waiting for us in the lobby 
                to collect his cash. After payment, we went upstairs and our keycard appeared to be disabled. We could resolve the issue, but this was our first 
                encounter with the weird Georgian customs. Both rooms looked the same (just mirrored), but one had a fridge and a hairdryer, the other had a 
                washing machine and a microwave. Georgians seem very fond of toilet paper was only one role present, we had to go to the reception on each next 
                day to pickup a new one and these weren't the last bookings where this was a thing.
            </p>
            <Carousel gallery={slideshows[7]} directory="georgia" />
            <h2 id="tbilisi">Tbilisi</h2>
            <p>
                On December 27th we took the train to Tbilisi, where we arrived in the weirdest hostel ever, called "Modely". The room was empty with only 2 
                camping beds with the mattresses covered in plastic, I think we should have been glad they were, to have some sense of hygiene. A weird contraption 
                should have functioned as a shelving unit. If you put something on, it would collapse. The shower had only cold water, there was no toilet paper
                and the lobby was used for the owner to chill out with his friends. Watch the last slide in the carousel below.
            </p>
            <Carousel gallery={slideshows[8]} directory="georgia" />
            <p>
                This didn't feel right at all, so we decided to pay for the night and leave right away. We came across a guesthouse "Tents in Georgia", which was 
                infinitely better. We slept in a tent inside the house, which was quite a nice concept. THe owner was very friendly and helpful and we ended up in a
                pubcrawl with them and other guests and people who live there.
            </p>
            <Carousel gallery={slideshows[9]} directory="georgia" />
            <p>
                ...
            </p>
            {/* <Carousel gallery={slideshows[10]} directory="georgia" /> */}
        </div>
        <a href="/" className="homeButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
                <polygon points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30" transform="rotate(180 10 15)"></polygon>
            </svg>
            <span>Back home</span>
        </a>
    </main>);
}

export default Georgia;
