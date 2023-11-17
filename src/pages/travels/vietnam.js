'use client'
import { Carousel } from '../../Components';
import '../../assets/travels.scss';

const Vietnam = () => {

    const slideshows = [[
        { "src": "01_hanoi_01.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_02.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_03.jpg", "alt": "Hanoi" }
    ], [
        { "src": "01_hanoi_04.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_05.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_06.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_07.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_08.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_09.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_10.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_11.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_12.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_13.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_14.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_15.jpg", "alt": "Hanoi" },
        { "src": "01_hanoi_16.jpg", "alt": "Hanoi" }
    ], [
        { "src": "02_ho-chi-minh_01.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_02.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_03.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_04.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_05.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_06.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_07.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_08.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_09.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_10.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_11.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_12.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_13.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_14.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_15.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_16.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_17.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_18.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_19.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_20.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_21.jpg", "alt": "Ho Chi Minh" },
        { "src": "02_ho-chi-minh_22.jpg", "alt": "Ho Chi Minh" }
    ], [
        { "src": "03_nha-trang_01.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_02.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_03.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_04.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_05.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_06.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_07.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_08.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_09.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_10.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_11.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_12.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_13.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_14.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_15.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_16.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_17.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_18.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_19.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_20.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_21.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_22.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_23.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_24.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_25.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_26.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_27.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_28.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_29.jpg", "alt": "Nha Trang" },
        { "src": "03_nha-trang_30.jpg", "alt": "Nha Trang" }
    ], [
        { "src": "04_da-nang_01.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_02.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_03.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_04.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_05.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_06.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_07.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_08.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_09.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_10.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_11.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_12.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_13.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_14.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_15.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_16.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_17.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_18.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_19.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_20.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_21.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_22.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_23.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_24.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_25.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_26.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_27.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_28.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_29.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_30.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_31.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_32.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_33.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_34.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_35.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_36.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_37.jpg", "alt": "Da Nang" },
        { "src": "04_da-nang_38.jpg", "alt": "Da Nang" }
    ], [
        { "src": "05_hoi-an_01.jpg", "alt": "Hoi An" },
        { "src": "05_hoi-an_02.jpg", "alt": "Hoi An" },
        { "src": "05_hoi-an_03.jpg", "alt": "Hoi An" },
        { "src": "05_hoi-an_04.jpg", "alt": "Hoi An" },
        { "src": "05_hoi-an_05.jpg", "alt": "Hoi An" },
        { "src": "05_hoi-an_06.jpg", "alt": "Hoi An" },
        { "src": "05_hoi-an_07.jpg", "alt": "Hoi An" },
        { "src": "05_hoi-an_08.jpg", "alt": "Hoi An" },
        { "src": "05_hoi-an_09.jpg", "alt": "Hoi An" }
    ], [
        { "src": "06_hue_01.jpg", "alt": "Hue" },
        { "src": "06_hue_02.jpg", "alt": "Hue" },
        { "src": "06_hue_03.jpg", "alt": "Hue" },
        { "src": "06_hue_04.jpg", "alt": "Hue" },
        { "src": "06_hue_05.jpg", "alt": "Hue" },
        { "src": "06_hue_06.jpg", "alt": "Hue" },
        { "src": "06_hue_07.jpg", "alt": "Hue" },
        { "src": "06_hue_08.jpg", "alt": "Hue" },
        { "src": "06_hue_09.jpg", "alt": "Hue" },
        { "src": "06_hue_10.jpg", "alt": "Hue" },
        { "src": "06_hue_11.jpg", "alt": "Hue" },
        { "src": "06_hue_12.jpg", "alt": "Hue" },
        { "src": "06_hue_13.jpg", "alt": "Hue" },
        { "src": "06_hue_14.jpg", "alt": "Hue" },
        { "src": "06_hue_15.jpg", "alt": "Hue" },
        { "src": "06_hue_16.jpg", "alt": "Hue" },
        { "src": "06_hue_17.jpg", "alt": "Hue" },
        { "src": "06_hue_18.jpg", "alt": "Hue" },
        { "src": "06_hue_19.jpg", "alt": "Hue" },
        { "src": "06_hue_20.jpg", "alt": "Hue" },
        { "src": "06_hue_21.jpg", "alt": "Hue" },
        { "src": "06_hue_22.jpg", "alt": "Hue" }
    ], [
        { "src": "07_dong-hoi_01.jpg", "alt": "Dong Hoi" },
        { "src": "07_dong-hoi_02.jpg", "alt": "Dong Hoi" },
        { "src": "07_dong-hoi_03.jpg", "alt": "Dong Hoi" },
        { "src": "07_dong-hoi_04.jpg", "alt": "Dong Hoi" }
    ], [
        { "src": "08_phong-nha_01.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_02.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_03.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_04.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_05.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_06.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_07.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_08.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_09.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_10.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_11.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_12.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_13.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_14.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_15.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_16.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_17.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_18.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_19.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_20.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_21.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_22.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_23.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_24.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_25.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_26.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_27.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_28.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_29.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_30.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_31.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_32.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_33.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_34.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_35.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_36.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_37.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_38.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_39.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_40.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_41.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_42.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_43.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_44.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_45.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_46.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_47.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_48.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_49.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_50.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_51.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_52.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_53.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_54.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_55.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_56.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_57.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_58.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_59.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_60.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_61.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_62.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_63.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_64.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_65.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_66.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_67.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_68.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_69.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_70.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_71.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_72.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_73.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_74.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_75.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_76.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_77.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_78.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_79.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_80.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_81.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_82.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_83.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_84.jpg", "alt": "Phong Nha" },
        { "src": "08_phong-nha_85.jpg", "alt": "Phong Nha" }
    ], [
        { "src": "09_ninh-binh_01.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_02.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_03.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_04.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_05.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_06.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_07.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_08.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_09.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_10.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_11.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_12.jpg", "alt": "Ninh Binh" },
        { "src": "09_ninh-binh_13.jpg", "alt": "Ninh Binh" }
    ], [
        { "src": "10_ha-long-bay_01.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_02.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_03.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_04.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_05.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_06.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_07.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_08.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_09.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_10.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_11.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_12.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_13.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_14.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_15.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_16.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_17.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_18.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_19.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_20.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_21.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_22.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_23.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_24.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_25.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_26.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_27.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_28.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_29.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_30.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_31.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_32.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_33.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_34.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_35.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_36.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_37.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_38.jpg", "alt": "Ha Long Bay" },
        { "src": "10_ha-long-bay_39.jpg", "alt": "Ha Long Bay" }
    ], [
        { "src": "11_hanoi_01.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_02.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_03.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_04.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_05.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_06.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_07.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_08.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_09.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_10.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_11.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_12.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_13.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_14.jpg", "alt": "Hanoi" },
        { "src": "11_hanoi_15.jpg", "alt": "Hanoi" }
    ], [
        { "src": "12_ha-giang_001.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_002.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_003.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_004.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_005.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_006.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_007.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_008.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_009.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_010.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_011.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_012.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_013.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_014.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_015.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_016.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_017.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_018.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_019.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_020.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_021.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_022.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_023.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_024.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_025.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_026.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_027.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_028.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_029.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_030.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_031.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_032.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_033.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_034.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_035.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_036.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_037.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_038.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_039.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_040.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_041.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_042.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_043.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_044.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_045.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_046.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_047.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_048.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_049.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_050.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_051.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_052.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_053.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_054.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_055.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_056.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_057.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_058.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_059.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_060.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_061.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_062.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_063.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_064.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_065.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_066.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_067.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_068.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_069.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_070.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_071.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_072.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_073.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_074.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_075.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_076.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_077.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_078.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_079.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_080.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_081.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_082.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_083.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_084.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_085.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_086.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_087.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_088.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_089.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_090.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_091.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_092.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_093.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_094.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_095.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_096.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_097.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_098.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_099.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_100.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_101.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_102.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_103.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_104.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_105.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_106.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_107.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_108.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_109.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_110.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_111.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_112.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_113.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_114.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_115.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_116.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_117.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_118.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_119.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_120.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_121.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_122.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_123.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_124.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_125.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_126.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_127.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_128.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_129.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_130.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_131.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_132.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_133.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_134.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_135.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_136.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_137.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_138.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_139.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_140.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_141.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_142.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_143.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_144.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_145.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_146.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_147.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_148.jpg", "alt": "Ha Giang" },
        { "src": "12_ha-giang_149.jpg", "alt": "Ha Giang" }
    ], [
        { "src": "13_hanoi_01.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_02.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_03.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_04.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_05.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_06.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_07.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_08.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_09.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_10.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_11.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_12.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_13.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_14.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_15.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_16.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_17.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_18.jpg", "alt": "Hanoi" },
        { "src": "13_hanoi_19.jpg", "alt": "Hanoi" }
    ]];

    return (<main>
        <div className="travel-background" style={{'backgroundImage': 'url(/data/travels/panoramas/vietnam-ha-giang-1.jpg)'}}></div>
        <div className="article">
            <h1>Vietnam</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#hanoi">Hanoi</a></li>
                <li><a href="#ho-chi-minh">Ho Chi Minh</a></li>
                <li><a href="#nha-trang">Nha Trang</a></li>
                <li><a href="#da-nang-and-hoi-an">Da Nang &amp; Hoi An</a></li>
                <li><a href="#hue">Hue</a></li>
                <li><a href="#dong-hoi">Dong Hoi</a></li>
                <li><a href="#phong-nha">Phong Nha</a></li>
                <li><a href="#ninh-binh">Ninh Binh</a></li>
                <li><a href="#ha-long-bay">Ha Long Bay</a></li>
                <li><a href="#back-in-hanoi">Back in Hanoi</a></li>
                <li><a href="#ha-giang">Ha Giang</a></li>
                <li><a href="#back-in-hanoi-again">Back in Hanoi again</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p><img src="/data/travels/vietnam/images/map_vietnam.png" alt="Route"/></p>
            <p>
                At Saturday morning we arrived in Hanoi after making a quick stop in Taipei, I hoped to see the 101 tower but no such luck. I thought 
                Thailand was a culture shock with the traffic, but Hanoi was utter chaos, cars and scooters everywhere. The sidewalk was a parking 
                space for scooters and sometimes even cars, so pedestrians also use the road. When manouvring the sidewalks you could end up in the 
                middle of a terrace or even a dishwashing tray, the people live on the streets in front of their home. There is a lot of 
                <a href="https://tuoitrenews.vn/news/audio/20140414/vietnamese%E2%80%99s-bad-habits-honking-horns-in-saigon/25383.html#:~:text=To%20me%2C%20honking%20a%20horn,as%20you%20pass%20an%20acquaintance">honking</a> 
                going on during the day, usually this is quite annoying but with the sharp corners in the mountains you're glad that you can count 
                on people honking before they pass by.
            </p>
            <Carousel gallery={slideshows[0]} directory="vietnam" />
            <h2 id="hanoi">Hanoi</h2>
            <p>
                After one night in Hanoi we took the plane to Ho Chi Minh and then travel up north and visit Hanoi once more at the end. The first 
                food experience was a nightmare, I ordered fried beef and vegetables and got cows intestines, I guess you could also see that as fried 
                beef. It's pretty hard to find a good meal here, they eat absolutely anything. Nothing like Thailand, where anything you could order 
                would taste good. Next stop is Nhà Tráng, a city at the beach, an 8 hour train ride which is an attraction in itself.
            </p>
            <Carousel gallery={slideshows[1]} directory="vietnam" />
            <h2 id="hoi-chi-minh">Ho Chi Minh</h2>
            <p>
                We stayed in Ho Chi Minh for 2 nights, got a hotel in District 1 which is more or less the old town. We didn't do too much there, walking 
                around town for a bit.
            </p>
            <Carousel gallery={slideshows[2]} directory="vietnam" />
            <h2 id="nha-trang">Nha Trang</h2>
            <p>
                After the second night in Ho Chi Minh we had to wake up early to take the train to Nhà Tráng at 6am. We enjoyed our first bowl of 
                <a href="https://www.phopalace.menu/product-category/pho/">pho</a> there, we also walked around for a bit, got a speedboat ferry to 
                the island at the island there was an amusement park and a swimming paradise. Wouldn't have been my first choice, but the sky wheel 
                was very nice, it offered a nice view over the skyline of Nhà Tráng. The second day we rented a scooter for the first time, which was 
                way too scary in Hanoi or Ho Chi Minh, we climbed a mountain with the scooter and climbed the other half to the lookout point, where 
                we enjoyed the view of the other side of town.
            </p>
            <p>
                On the first day someone tried to sell us something on the streets, it was a tour of a couple of hours including a mountain and waterfalls, 
                maybe some swimming, but also making our own rice paper and having a good meal with those. It's a custom to put dry rice paper on the tabel, 
                so you could roll your own spring roll. When dipping in soy sauce or some other watery sauce, the rice paper became soft.
            </p>
            <p>
                They sell a lot on the streets, often sunglasses. I got some sandals on a market and got a Vietnamese cap for free. Another guy on the 
                beach tried to sell us 
                <a href="https://www.google.com/search?q=Vietnamese+painting&amp;prmd=isvn&amp;source=lnms&amp;tbm=isch&amp;sa=X&amp;ved=2ahUKEwix1Nr03I77AhWvplYBHQ6uALsQ_AUoAXoECAIQAQ&amp;biw=393&amp;bih=720&amp;dpr=2.75#imgrc=vhI7Z-amq2zJvM&amp;imgdii=ENUZC1fkigDVOM">silk paintings</a> 
                which were beautiful, but unfortunately a bit of a drag to haul around for 3 weeks.
            </p>
            <p>
                Unfortunately we didn't make it to the tour on the second day due to sickness and the plan was to leave to Da Nang on the third day, the 
                evening after I went for a dive at the other side of that island.
            </p>
            <Carousel gallery={slideshows[3]} directory="vietnam" />
            <h2 id="da-nang-and-hoi-an">Da Nang &amp; Hoi An</h2>
            <p>
                Da Nang was similar to Nhà Tráng (although much less like a resort) so we combined it with a scooter trip to Hoi An, which is an old 
                town. Everything was preserved because of Unesco world heritage. We took a boat tour there and it was very nice to see. I felt the 
                Vietnam vibe here more than before, I think it would have been even more beautiful at night with the many lanterns hanging everywhere. 
                The next day we went to <a href="https://en.m.wikipedia.org/wiki/Marble_Mountains_(Vietnam)">marble mountains</a>. The five mountains 
                are named after the five elements: Kim (metal), Thuy (water), Moc (wood), Hoa (fire) and Tho (earth). From above they would resemble a 
                hand. All of the mountains have cave entrances and numerous tunnels. Several Buddhist sanctuaries can be found there.
            </p>
            <Carousel gallery={slideshows[4]} directory="vietnam" />
            <Carousel gallery={slideshows[5]} directory="vietnam" />
            <h2 id="hue">Hue</h2>
            <p>
                One thing we noticed throughout the journey is the outdoorsy lifestyle they have here, half of the living room is outside, they 
                don't even bother putting in a front wall. Often the living room is used as a store, a restaurant, a massage salon, barbershop or 
                even a garage for a scooter rental. Also a lot of people have a little shrine in the middle of their living room. Restaurants use 
                the sidewalks to do the dishes in huge tubs. It needs some getting used to, but it just works here. Even in little alleys where a 
                person could barely walk they have these stores. They manage to squeeze their scooters through. I don't think I will ever get used 
                to the menu though.
            </p>
            <Carousel gallery={slideshows[6]} directory="vietnam" />
            <h2 id="dong-hoi">Dong Hoi</h2>
            <p>
                From Da Nang we took a sleeper train to Dong Hoi, it was during the day and took only 3 hours, but a sleeper is so much more 
                comfortable and it barely costs more.
            </p>
            <Carousel gallery={slideshows[7]} directory="vietnam" />
            <h2 id="phong-nha">Phong Nha</h2>
            <p>
                We didn't really had anything planned for Dong Hoi, but we needed to go there to be able to go on to Phòng Nhà. Phòng meaning 
                wind and Nhà meaning teeth, referring to stalactites and stalagmites. There are kilometers of cave to be found there, though the 
                biggest one would cost about 3000 USD to explore. But there were a lot of alternatives. We chose to explore Paradise Cave and 
                Phòng Nhà cave. First one was by foot and the second one by boat. The day before that we rented a scooter to explore around the 
                village. We slept at a home stay and it was very nice, they arranged everything for us. The brother of the hostess brought us 
                back to Dong Hoi, where we could take the sleeper train to Ninh Binh.
            </p>
            <Carousel gallery={slideshows[8]} directory="vietnam" />
            <h2 id="ninh-binh">Ninh Binh</h2>
            <p>
                The sleeper train arrived at 3am, so we spent the rest of the night in a hotel. Ninh Binh was recommended for the scenery, but it couldn't 
                compete with Phòng Nhà. Something that is worth mentioning however, is that we rented a scooter to explore and we ordered a coffee half 
                way. We were given a <a href="https://www.cremashop.eu/en/shop-by-brand/trung-nguyen">Vietnamese coffee</a> with a 
                <a href="https://www.tokogembira.nl/nl/trung-nguyen-vietnamese-koffiefilter.html">tiny filter</a>. She said she could have given us ready 
                made coffee, but she gave us this so we could enjoy the scenery while waiting.
            </p>
            <p>
                At the end of our road trip it started raining, at a certain point we were soaking wet and it wouldn't stop raining, so at the end of the 
                day we took the bus to Ha Long Bay.
            </p>
            <Carousel gallery={slideshows[9]} directory="vietnam" />
            <h2 id="ha-long-bay">Ha Long Bay</h2>
            <p>
                In Ha Long Bay we booked a 5-star hotel which was on a hilltop, it had a lot of facilities and offered a nice view over the city and the 
                bay. Also there was an all you can eat breakfast so we made good use of that. It was also the busiest hotel so far, which was quite nice. 
                Most of the hotels we booked were empty, still suffering from the consequences of COVID-19.
            </p>
            <p>
                The second day we booked a cruise through the bay, which is more or less a must when you go to Ha Long. We were the only 2 on the boat, so 
                it was more or less a private cruise. We walked through another cave and we also rented a canoe to be able to see yet another cave.
            </p>
            <Carousel gallery={slideshows[10]} directory="vietnam" />
            <h2 id="back-in-hanoi">Back in Hanoi</h2>
            <p>
                The first time we were in Hanoi we missed the 
                <a href="https://www.tripadvisor.com/Attraction_Review-g293924-d15190048-Reviews-Train_Street-Hanoi.html">train street</a>, although in 
                hindsight we noticed that our hotel was just one street away. This time around we booked a hotel in the same area, we wanted to be in 
                the old town again and old town Hanoi isn't too big. When we went to our room and sat down on the balcony, we noticed a train passing 
                by, so we booked a hotel next to train street by accident.
            </p>
            <p>
                At first it was a happy accident, but every 30 minutes a train came passing by. Because people are living on train street and use the 
                tracks as their terrace, the train always passes by with a lot of loud honking to notice the people that they have to move their stuff 
                inside. This left us with not a lot of sleep.
            </p>
            <Carousel gallery={slideshows[11]} directory="vietnam" />
            <h2 id="ha-giang">Ha Giang</h2>
            <p>
                We went to the far north of Vietnam to do the <a href="https://vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip">Ha Giang 
                loop tour</a>, it is a route of around 450 kilometers in total. Usually people do that on a bike or they choose to be driven by a guide 
                (an easy rider). We also chose to be driven, but in our case we chose a car. I don't really like to be on the back of a bike, I'd rather 
                drive myself, but I'm not really comfortable driving a non-automatic bike. This choice was quite fortunate, because the second day it was 
                really foggy and rainy. With a view of around 5 meters it's quite scary drive alongside cliffs. We were in a group with 3 others, who chose 
                to go by bike.
            </p>
            <p>
                It was a really nice tour, in total it took 3 days, including meals and spending nights in home stays. In the home stays we met other 
                people who also did the tour, we did a lot of karaoke, drank 'happy water' which is called rượu Vietnam, had great meals like we didn't 
                have before and spent time between the locals. It was like being really submerged in the culture. I'm glad we started in the south and went 
                up north, because everything became increasingly beautiful.
            </p>
            <Carousel gallery={slideshows[12]} directory="vietnam" />
            <h2 id="back-in-hanoi-again">Back in Hanoi again</h2>
            <p>
                We had to go back to Hanoi again, because our plane left from Hanoi airport. This time we decided to go to a hotel in a newer part of 
                town, it was a 5-star hotel but it had absolutely no facilities and it was empty, I don't have a clue why this hotel ever got 5 stars. 
                There wasn't anything going on in the neighbourhood either, so we decided to get up early and go back to the old town again to explore 
                some more and to get some souvenirs on the market.
            </p>
            <Carousel gallery={slideshows[12]} directory="vietnam" />
        </div>
        <a href="/" className="homeButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
                <polygon points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30" transform="rotate(180 10 15)"></polygon>
            </svg>
            <span>Back home</span>
        </a>
    </main>);
}

export default Vietnam;
