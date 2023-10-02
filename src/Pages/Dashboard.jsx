import React from 'react'

import { useNavigate } from 'react-router-dom';
import {
  Box,
  Text,
  Button,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
  Link,
  Container,
  useBreakpointValue
} from "@chakra-ui/react";
import { useState,useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { AddToCart } from '../Redux/Cart/action';
import { useDispatch } from 'react-redux';
export const Dashboard = () => {
  const Navigate=useNavigate()
  const images=["https://m.media-amazon.com/images/G/31/img21/MA2023/AW23/AF/AW_2023_Desktop_Men._SX3000_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/BOTW23/27thsept/Men_2_3000x900_1695858530844_0._CB577170120_.png"
,"https://m.media-amazon.com/images/G/31/img21/MA2023/Sept/world-cup/updated/woMen_Desktop_800._CB578332367_.jpg"]
const images2 = [
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Van-Heusen_2._SX846_QL85_FMpng_.png',
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Allen-Solly_47._SX846_QL85_FMpng_.png',
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/USPA_14._SX846_QL85_FMpng_.png',
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/Peter-England_17._SX846_QL85_FMpng_.png',
  'https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/Pepe-Jeans_19._SX846_QL85_FMpng_.png',
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Arrow_37._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/sports/Adidas_2._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Lee_3._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/Dennis-Lingo._SX846_QL85_.jpg",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/Symbol_52._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/brands_mfd/Levi-s_54._SX846_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/brandsinfocus/PUMA_29._SX846_QL85_FMpng_.png"

];
const bloginfo = [
  {
    title: "Handlooms from Bharat",
    image: "https://indbiz.gov.in/wp-content/uploads/2018/10/109.jpg",
    date: "Sept 17, 2023",
    desc: "Discover the rich handloom heritage of Bharat in our latest collection."
  },
  {
    title: "Paris Fashion Week",
    image: "https://www.filmibeat.com/img/2023/09/pfwmain1-1695646750.jpg",
    date: "August 17, 2023",
    desc: "Explore the latest trends and highlights from the glamorous Paris Fashion Week."
  },
  {
    title: "Gucci Expanding in India",
    image: "https://wwd.com/wp-content/uploads/2016/12/41a2739.jpg?w=1000&h=563&crop=1&resize=1000%2C563",
    date: "May 17, 2023",
    desc: "Gucci's exciting expansion plans in India: What's in store for fashion enthusiasts."
  },
  {
    title: "Fashion in the '80s",
    image: "https://preview.redd.it/jgb50tzskklb1.jpg?width=960&crop=smart&auto=webp&s=5fbcf3f3b6c1905a22d624d6d22b69762b30a4fc",
    date: "Feb 17, 2023",
    desc: "A nostalgic journey back to the fashion trends that defined the '80s era."
  }
];
const images3=["https://m.media-amazon.com/images/G/31/img21/MA2023/EOSS/PC_PO-4PC._CB603300969_.gif"
,"https://m.media-amazon.com/images/G/31/Symbol/2023/Shirts__polos_PC._CB598719434_.png",
"https://m.media-amazon.com/images/G/31/Symbol/2023/WRS_June/Cat_Pages/Men/3_new._CB587534106_.png"]
const data=[{"id":1,"rating":4.5,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23811198/2023/6/29/aa6f6470-5f77-49b0-aa05-1f74b5f0e0e11688046247683PantaloonsJuniorBoysMaroonOpaqueCasualShirt1.jpg","brand":"Pantaloons Junior","name":"Boys Band Collar Cotton Shirt","price":599,"gender":"kids"},{"id":2,"rating":5,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24387794/2023/8/7/c5f1c2ff-f2db-461e-9647-98a7a5cf4e591691421901089PantaloonsBoysBlackOpaquePrintedCasualShirt1.jpg","brand":"Pantaloons","name":"Boys Cotton Casual Shirt","price":700,"gender":"kids"},{"id":3,"rating":4.2,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14672762/2021/8/16/b58769a6-6a39-45a8-b64a-80808e2a115b1629097397254-HERENOW-Boys-Navy-Blue-Solid-Cotton-Casual-Shirt-77016290973-1.jpg","brand":"HERE&NOW","name":"Boys Solid Cotton Casual Shirt","price":700,"gender":"kids"},{"id":4,"rating":3.4,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24710810/2023/8/29/ca751801-65e5-4bde-bcd4-628d2de34d331693292756998taffykidsBoysBlueOpaquePrintedCasualShirt1.jpg","brand":"taffykids","name":"Boys Cotton Casual Shirt","price":799,"gender":"kids"},{"id":5,"rating":3.7,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19662806/2022/8/25/c76e1cfa-1bff-486a-aa55-fdae796cd70f1661432199225ATUNBoysShirt1.jpg","brand":"A.T.U.N.","name":"Floral Printed Casual Shirt","price":700,"gender":"kids"},{"id":6,"rating":700,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24387808/2023/8/7/4be90b43-180c-4565-bb70-aecfa680762b1691421915835PantaloonsBoysBlueOpaquePrintedCasualShirt1.jpg","brand":"Pantaloons","name":"Boys Cotton Casual Shirt","price":700,"gender":"kids"},{"id":7,"rating":4.5,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23811200/2023/6/29/2bf0b26d-aafd-4cdf-b723-8aa439dc107a1688046247084PantaloonsJuniorBoysOliveGreenOpaqueCasualShirt1.jpg","brand":"Pantaloons Junior","name":"Boys Band Collar Cotton Shirt","price":599,"gender":"kids"},{"id":8,"rating":3.9,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23218482/2023/5/16/7dd2a3b7-b19d-43ca-b908-f866b0daab741684238991659CrayonFlakesBoysOffWhiteFloralOpaquePrintedCasualShirt1.jpg","brand":"CrayonFlakes","name":"Boys Floral Printed Shirt","price":700,"gender":"kids"},{"id":9,"rating":4.7,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24655900/2023/8/26/c78a00fd-aad0-400e-a0f9-10bbe994e5261693015559072PantaloonsJuniorBoysMaroonOpaquePrintedCasualShirt1.jpg","brand":"Pantaloons Junior","name":"Boys Cotton Casual Shirt","price":599,"gender":"kids"},{"id":10,"rating":4.3,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21947748/2023/2/12/4dfa4844-5874-40c8-bd83-0bf4b092f2cc1676141209114CrayonFlakesBoysGreyFloralPrintedCasualShirt1.jpg","brand":"CrayonFlakes","name":"Boys Cotton Casual Shirt","price":700,"gender":"kids"},{"id":11,"rating":700,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24387840/2023/8/7/a6aff27c-8ad3-4a06-be1c-e354882b59cb1691420056909PantaloonsBoysBlueOpaquePrintedCasualShirt1.jpg","brand":"Pantaloons","name":"Boys Printed Pure Cotton Shirt","price":700,"gender":"kids"},{"id":12,"rating":4.3,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19662810/2022/8/25/62f4ec2a-cdf3-4cdc-a35c-3144b02d736d1661432266938ATUNBoysShirt1.jpg","brand":"A.T.U.N.","name":"Boys Casual Shirt","price":700,"gender":"kids"},{"id":13,"rating":700,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24695528/2023/8/28/14972277-f774-4837-b1f0-2051fbc2bc911693231592426CAVIOBoysBlackComfortOpaqueCasualShirt1.jpg","brand":"CAVIO","name":"Boys Cotton Shacket & T-Shirt","price":700,"gender":"kids"},{"id":14,"rating":700,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24695528/2023/8/28/14972277-f774-4837-b1f0-2051fbc2bc911693231592426CAVIOBoysBlackComfortOpaqueCasualShirt1.jpg","brand":"CAVIO","name":"Boys Cotton Shacket & T-Shirt","price":700,"gender":"kids"},{"id":15,"rating":700,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24695528/2023/8/28/14972277-f774-4837-b1f0-2051fbc2bc911693231592426CAVIOBoysBlackComfortOpaqueCasualShirt1.jpg","brand":"CAVIO","name":"Boys Cotton Shacket & T-Shirt","price":700,"gender":"kids"},{"id":16,"name":"India Cricket ODI Fan Jersey","rating":4.5,"brand":"ADIDAS","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23833538/2023/8/11/5542aadc-da2c-4007-bdbe-0b3b3a84928e1691729586790-ADIDAS-Men-Tshirts-1791691729586332-1.jpg","price":423,"gender":"male"},{"id":17,"name":"Slim Tropical Printed Pure Cotton T-shirt","rating":4,"brand":"Urbano Fashion","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg","price":340,"gender":"male"},{"id":18,"name":"Printed Pure Cotton T-shirt","rating":4.2,"brand":"HRX by Hrithik Roshan","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg","price":314,"gender":"male"},{"id":19,"name":"Men Cotton Pure Cotton T-shirt","rating":4.2,"brand":"Roadster","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg","price":279,"gender":"male"},{"id":20,"name":"Printed Pure Cotton T-Shirt","rating":4.4,"brand":"THE HOLLANDER","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24476078/2023/8/12/4b24938d-bcfb-4c55-bdbb-1e4dea3233541691849292482THEHOLLANDERMenLavenderCheckedDrop-ShoulderSleevesAppliqueT-1.jpg","price":499,"gender":"male"},{"id":21,"name":"Knitted Polo Collar T-shirt","rating":4.5,"brand":"Louis Philippe Sport","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21474618/2023/2/6/3fc0ad84-eb64-49db-8810-8b0085bc3d9f1675661229788-Louis-Philippe-Sport-Men-Tshirts-2481675661229099-1.jpg","price":343,"gender":"male"},{"id":22,"name":"Round Neck Lounge Tshirts","rating":4.4,"brand":"max","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22809172/2023/4/18/29fe0927-cb6b-460e-a584-d2c265563ffc1681810840196MenSolidCrewNeckRegularFitLoungeT-shirt1.jpg","price":239,"gender":"male"},{"id":23,"name":"Printed Cotton T-Shirt","rating":4.1,"brand":"Powerlook","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23603528/2023/6/12/f37986d3-42be-48f8-bf7b-f4e6a985e3c41686568609848PowerlookMenWhitePrintedMandarinCollarPocketsT-shirt1.jpg","price":274,"gender":"male"},{"id":24,"name":"Solid Round Neck T-shirt","rating":4,"brand":"Roadster","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9901805/2019/7/16/8139e933-b2a1-4d35-8a9f-d01cf3e1ace81563256634726-Roadster-Men-Tshirts-5541563256633223-1.jpg","price":469,"gender":"male"},{"id":25,"rating":4.4,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17786152/2022/7/2/b137cf3d-6243-41bb-8a20-82cfcc4032e21656746823524BitiyabyBhamagirlBlackEmbroideredFlutterSleevesMaxiDress7.jpg","brand":"Bitiya by Bhama","name":"girl Embroidered Maxi Dress","price":919,"gender":"girl"},{"id":26,"rating":3.9,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21574848/2023/1/16/be1ed213-266f-48bc-a6f9-a4e65557f8151673888685137ATUNCream-ColouredDress1.jpg","brand":"A.T.U.N.","name":"Dress","price":699,"gender":"girl"},{"id":27,"rating":4.3,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17775244/2022/4/6/efb7e9b0-470b-4bb5-99a7-8186f4a122ea1649224516381pspeachesYellowFloralMidiDress1.jpg","brand":"pspeaches","name":"girl Midi Dress With Shrug","price":800,"gender":"girl"},{"id":28,"rating":4.4,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24381592/2023/8/7/844ffc97-beb2-49a7-ac8e-0d31c082cb711691414421264taffykidsYellowPrintNetPeplumDress1.jpg","brand":"taffykids","name":"girl Embellished Dress","price":799,"gender":"girl"},{"id":29,"rating":4.4,"image":"https://images.meesho.com/images/products/277918274/gy56c_400.webp","brand":"Sangria","name":"girl Cotton Printed Dress","price":398,"gender":"girl"},{"id":30,"rating":3.8,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22422926/2023/3/18/16465e2e-83c5-4f7c-87c9-86a8ffe2334b1679158696335Dresses1.jpg","brand":"FASHION DREAM","name":"Shirt Style Midi Dress","price":599,"gender":"girl"},{"id":31,"rating":4.4,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21817592/2023/2/2/0357204b-b308-4e5f-b151-3c13f86d30b41675349448232IW-PURPLESHIBORI1.jpg","brand":"pspeaches","name":"girl A-Line Midi Dress","price":964,"gender":"girl"},{"id":32,"rating":4,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18003400/2022/4/23/090191e5-9c59-4f1b-bfcd-d51cb4aa96d61650704469691BitiyabyBhamaOffWhiteFloralMaxiDress1.jpg","brand":"Bitiya by Bhama","name":"Floral Maxi Dress","price":827,"gender":"girl"},{"id":33,"rating":4.1,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17273786/2022/5/13/5e23e5a6-5e0f-4ba3-ac1e-79d5938fcfd81652447098732CUTECUMBERgirlBlueDenimSheathDress6.jpg","brand":"CUTECUMBER","name":"girl Denim Sheath Dress","price":1350,"gender":"girl"},{"id":34,"rating":4.5,"image":"https://images.meesho.com/images/products/191450279/bix9t_400.webp","brand":"Sangria","name":"girl Printed A-Line Dress","price":298,"gender":"girl"},{"id":35,"rating":4.2,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21574840/2023/1/16/3076e98e-aaa5-4e36-acf7-8f73a76971581673888686565ATUNMulticolouredStripedKeyholeNeckDress1.jpg","brand":"A.T.U.N.","name":"Striped Keyhole Neck Dress","price":699,"gender":"girl"},{"id":36,"rating":4.3,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24528756/2023/8/17/34189c01-c194-424c-a8d7-0fc1631ef0321692278563595PantaloonsJuniorPinkA-LineDress1.jpg","brand":"Pantaloons Junior","name":"girl Embroidered A-Line Dress","price":799,"gender":"girl"},{"id":37,"rating":4.2,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22422914/2023/3/18/b7f79728-be96-4810-9725-81b8fd8a5e141679158659001Dresses1.jpg","brand":"FASHION DREAM","name":"Georgette Fit & Flare Midi Flared Sleeve Dress","price":679,"gender":"girl"},{"id":38,"rating":4.2,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19792526/2022/9/5/be858363-243c-4b54-8c66-e9ae32e499ef1662352460783POMYJINNYPinkDress1.jpg","brand":"POMY & JINNY","name":"Cotton  Dress","price":399,"gender":"girl"},{"id":39,"rating":4.4,"image":"https://images.meesho.com/images/products/167572823/a1vdw_400.webp","brand":"Sangria","name":"Girl Ethnic Motifs ALine Dress","price":329,"gender":"girl"},{"id":40,"rating":4.4,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20695836/2022/11/10/ba1724c2-c606-481c-a0ca-63424b61a8661668078028270WomensRayonPrintedEmbroideredKurtaWithPantAndDupatta1.jpg","brand":"SINGNI","name":"Women Embroidered Kurta Set","price":999,"gender":"female"},{"id":41,"rating":4.2,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22120556/2023/2/25/986d6f97-fe9b-487a-9c64-f577e0a32c491677314970316KhushalKwomenEmbroideryKurtaandpalazzowithdupattaset7.jpg","brand":"Khushal K","name":"Kurta with Palazzos & Dupatta","price":1525,"gender":"female"},{"id":42,"rating":4.2,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24476720/2023/8/12/a4c2c7a1-0252-40da-952f-f3e5ab61d3b01691847823767KALINIWomenPurpleEthnicMotifsEmbroideredKurtawithTrouserDupa1.jpg","brand":"KALINI","name":"Embroidered Kurta Sets","price":850,"gender":"female"},{"id":43,"rating":4.3,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg","brand":"Indo Era","name":"Women Yoke Design Kurta with Palazzos With Dupatta","price":799,"gender":"female"},{"id":44,"rating":4.4,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24962840/2023/9/13/a9074516-a96b-4fb9-8adc-70d49ddf75921694600318355KurtaSets1.jpg","brand":"FASHOR","name":"Kurta & Trousers With Dupatta","price":2131,"gender":"female"},{"id":45,"rating":4.5,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16707380/2022/2/3/de9d67d7-394c-422e-a016-d5bf5f2ec7491643888592182-Anouk-Women-Kurta-Sets-6761643888591217-1.jpg","brand":"Anouk","name":"Women Yoke Design Kurta with Palazzos With Dupatta","price":1375,"gender":"female"},{"id":46,"rating":4.1,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21082388/2022/12/5/7f77e6a6-7198-4aa0-a2df-76c6f58850da1670251734080KurtaSets1.jpg","brand":"KALINI","name":"Striped Kurta Sets","price":639,"gender":"female"},{"id":47,"rating":4.5,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17487194/2022/3/21/2dd80782-75be-496b-8bac-2978541418161647846846121-Libas-Women-Kurta-Sets-7321647846845273-1.jpg","brand":"Libas","name":"Zari Woven Design Kurta Set","price":1799,"gender":"female"},{"id":48,"rating":4.2,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.jpg","brand":"Varanga","name":"Women Yoke Design Kurta with Trousers With Dupatta","price":1349,"gender":"female"},{"id":49,"rating":4.5,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22858200/2023/4/27/190af50d-4a62-42b2-93f6-aca26ae7c5961682582082917-Anaya-Womens-Cotton-Straight-Sleeveless-Suit-Set-46116825820-1.jpg","brand":"anayna","name":"Women Printed Kurta with Trousers","price":1022,"gender":"female"},{"id":50,"rating":4.2,"image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24962866/2023/9/13/2a3a9c1c-ba11-4693-961e-58026a501d4f1694604108841KurtaSets1.jpg","brand":"FASHOR","name":"Women Kurta with Trousers","price":1709,"gender":"female"},{"id":51,"name":"Pure Cotton T-shirt","rating":4.2,"brand":"Roadster","image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg","price":398,"gender":"male"}]
const [currentIndex, setCurrentIndex] = useState(0);
const [cardsData,setcarddata]=useState([])
const [activeCategory, setActiveCategory] = useState("male");
const[filtereddata,setfiltereddata]=useState([])
const [currentProductIndex1, setCurrentProductIndex1] = useState(0);
const [currentProductIndex2, setCurrentProductIndex2] = useState(5);
const fontSize = useBreakpointValue({ base: "10px", md: "md", lg: "lg" });
const imageSize = useBreakpointValue({ base: "100%", md: "80%", lg: "60%" });
const isAuth = useSelector((store) => store.AuthReducer.isAuth);
const dispatch = useDispatch()
useEffect(() => {
  // axios.get(`https://65151b4adc3282a6a3cddbd1.mockapi.io/products`)
  // .then((res)=>{
    // setcarddata(res.data)
    setfiltereddata(data.filter((e)=>e.gender===activeCategory))
 // })
 // .catch((err)=>[
  //  console.log(err)
 // ])
  const interval = setInterval(() => {
    goToNextSlide();
    setCurrentProductIndex1((prevIndex) =>
    prevIndex >= data.length - 1 ? 0 : prevIndex + 1
  );
  setCurrentProductIndex2((prevIndex) =>
  prevIndex >= data.length - 1 ? 0 : prevIndex + 1
);
  }, 2000);

  return () => {
    clearInterval(interval);
    
  };
}, [activeCategory]);
const goToNextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const goToPrevSlide = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
};

const handleSwipe = (e) => {
  if (e.deltaX > 50) {
    goToPrevSlide();
  } else if (e.deltaX < -50) {
    goToNextSlide();
  }
};
const handletab=(e)=>{
  setActiveCategory(e)
}
const [currentPage, setCurrentPage] = useState(0);
const cardsPerPage = 3;
const totalPages = Math.ceil(data.length / cardsPerPage);
const handleNextPage = () => {
  if (currentPage < totalPages - 1) {
    setCurrentPage(currentPage + 1);
  }
};

const handlePrevPage = () => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
  }
};
const handleAddToCart = (card) => {
 

  if (isAuth) {
    axios.get(`https://6517e61b582f58d62d353538.mockapi.io/users/${card.id}`).then((res) => {
    
   let data =[...res.data.cart,card]
      dispatch(AddToCart(card.id,data));
    })
  }
  else {
    Navigate("/login")
  }

}
const renderCards = () => {
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  return filtereddata.slice(startIndex, endIndex).map((card) => (
     <CARDDIV key={card.id}>
        <Box
    className="card"
    borderWidth="1px"
    borderRadius="md"
    p="4"
    boxShadow="md"
    mb="4"
    textAlign="left"
  >
    <Image src={card.image} alt={card.name} className="image" />
    <Text className='name' fontWeight="bold" mt="2">
      {card.name}
    </Text>
    <Text color="gray.600" className='brand'>
      {card.brand}
    </Text>
    <Text display="flex" textAlign={'center'} className='rating'>
    <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>{card.rating}
    </Text>
    <Text color="teal.500" mt="2" display="flex" className='price'>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/></svg>{card.price}
    </Text>
    <div className='buttons'>
      <button className='buttonadd' onClick={()=>{handleAddToCart(card)}}>Add To Cart</button>
    </div>
  </Box>
     </CARDDIV>
  ))
};
const blogsPerPage = 3;
const [currentPage1, setCurrentPage1] = useState(0);

  const nextSlide = () => {
    if (currentPage1 < bloginfo.length - blogsPerPage) {
      setCurrentPage1(currentPage1 + blogsPerPage);
    }
  };
  const prevSlide = () => {
    if (currentPage1 > 0) {
      setCurrentPage1(currentPage1 - blogsPerPage);
    }
  };
  function rotateImage(element, rotate) {
    if (rotate) {
      element.style.transform = 'rotate(10deg)';
      element.parentNode.style.borderRadius = '50%';
      element.parentNode.style.overflow = 'hidden';
    } else {
      element.style.transform = 'rotate(0deg)';
      element.parentNode.style.borderRadius = '0';
      element.parentNode.style.overflow = 'visible';
    }
  }
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
 
  const currentData = bloginfo.slice(currentPage1, currentPage1 + blogsPerPage);
  return (
    <>
    <script src="https://kit.fontawesome.com/6374a7542c.js" crossOrigin="anonymous"></script>
    <CARTICON>
    {
        isAuth ? <Box
        position="fixed"       
        right="0"     
        transform="translateY(-50%)" 
        zIndex="9999" 
        display={'flex'}
        justifyContent={'end'}
        cursor={'pointer'}  
        color={'white'} 
        bgColor={'white'}
      >
        
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512" onClick={()=>Navigate("/cart")}><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        
      </Box> : ""
      }
    
    </CARTICON>
      <Box position="relative" overflow="hidden" onTouchMove={handleSwipe} mt={"20px"}>
      <Carousel
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
       selectedItem={currentIndex}
       onChange={setCurrentIndex}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
    </Box>
    <DIV1>
    <Box
  className="section-container"
  color="white"
  mt={"20px"}
  bgImage="url('https://images.pexels.com/photos/8886963/pexels-photo-8886963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
  bgSize="revert"
  bgPosition="cover"
  maxH={'-moz-fit-content'}
  fontFamily={"monospace"}
>
  <Text className="section-title">
    Elevate Your Style, <br /> Embrace the Extraordinary.
  </Text>
  <Text className="section-text">
    Pioneering the fashion frontier, our platform brings together style enthusiasts, designers, and brands, igniting a revolution in unique, ownable fashion finds.
  </Text>
  <Button className="section-button" onClick={()=>{Navigate('/product')}}>
    Shop Now
  </Button>
</Box>

    </DIV1>
    <DIV>
    <Box textAlign="center" padding="2rem">
  <Text
    fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
    fontWeight="bold"
    color="green.500"
  >
    We Got You Covered
  </Text>
</Box>
<DIV10>
<div className="image-container">
        <div>
          <div className='image-wrap'>
          <img
            src="https://m.media-amazon.com/images/I/71etIJtcrBL._AC_UF226,226_FMjpg_.jpg"
            alt="1"
            className="responsive-image"
            onMouseEnter={(e)=>{rotateImage(e.target, true)}}
            onMouseLeave={(e)=>{rotateImage(e.target, false)}}
          />
          </div>
          <p className="image-text">Something For Partner?</p>
        </div>
        <div className="image-card">
        <div className='image-wrap'>
          <img
            src="https://m.media-amazon.com/images/I/71jmhrRaSmL._AC_UF226,226_FMjpg_.jpg"
            alt="1"
            className="responsive-image"
            onMouseEnter={(e)=>{rotateImage(e.target, true)}}
            onMouseLeave={(e)=>{rotateImage(e.target, false)}}
          />
          </div>
          <p className="image-text">Something For Siblings?</p>
        </div>
        <div>
        <div className='image-wrap'>
          <img
            src="https://m.media-amazon.com/images/I/71KXIckY8PL._AC_UF226,226_FMjpg_.jpg"
            alt="1"
            className="responsive-image"
            onMouseEnter={(e)=>{rotateImage(e.target, true)}}
            onMouseLeave={(e)=>{rotateImage(e.target, false)}}
          />
          </div>
          <p className="image-text">Or For Family?</p>
        </div>
      </div>
</DIV10> 
    </DIV>
 <DIVFADE>
      <div><Text fontSize={"xl"} mb={'20px'} color={'green.400'}  fontWeight={'bold'}>Top Picks For You</Text>
       <Box
      borderWidth="1px"
      borderRadius="md"
      p="2"
      boxShadow="md"
      mb="4"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="70%"
      margin="auto"
      fontSize={fontSize}
      cursor={"pointer"}
    >
      <Image
        src={data[currentProductIndex1].image}
        alt={data[currentProductIndex1].name}
        style={{ width: imageSize, alignSelf: 'center', height: 'auto' }}
        
      />
      <Text className='name' fontWeight="bold" mt="2">
        {data[currentProductIndex1].name}
      </Text>
      <Text color="gray.600" className='brand'>
        {data[currentProductIndex1].brand}
      </Text>
      <Text display="flex" textAlign="center" className='rating'>
      <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
        {data[currentProductIndex1].rating}
      </Text>
      <Text color="teal.500" mt="2" display="flex" className='price'>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/></svg>
        {data[currentProductIndex1].price}
      </Text>
    </Box></div>
    <div><Text fontSize={"xl"} mb={'20px'} color={'green.400'}  fontWeight={'bold'}>Just Arrived</Text>
       <Box
      borderWidth="1px"
      borderRadius="md"
      p="2"
      boxShadow="md"
      mb="4"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="70%"
      margin="auto"
      fontSize={fontSize}
      cursor={"pointer"}
    >
      <Image
        src={data[currentProductIndex2].image}
        alt={data[currentProductIndex2].name}
        style={{ width: imageSize, alignSelf: 'center', height: 'auto' }}
        
      />
      <Text className='name' fontWeight="bold" mt="2">
        {data[currentProductIndex2].name}
      </Text>
      <Text color="gray.600" className='brand'>
        {data[currentProductIndex2].brand}
      </Text>
      <Text display="flex" textAlign="center" className='rating'>
      <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
        {data[currentProductIndex2].rating}
      </Text>
      <Text color="teal.500" mt="2" display="flex" className='price'>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/></svg>
        {data[currentProductIndex2].price}
      </Text>
    </Box></div>
     </DIVFADE>
    <Box textAlign="center" padding="2rem">
  <Text
    fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
    fontWeight="bold"
    color="green.500"
  >
    Top Brands From Around The Globe
  </Text>
</Box>
    <div style={imageContainerStyles}>
      {images2.map((imagep, index) => (
        <Imagep key={index} href="#">
          <Image src={imagep} alt={`Image ${index + 1}`} />
        </Imagep>
      ))}
    </div>
    <div>
    <Box textAlign="center" padding="2rem">
  <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="green.500">
    TOP INTERESTING
  </Text>
  <Text
    fontSize={{ base: "md", md: "lg", lg: "xl" }}
    color="green.400"
    mt="1rem"
    fontFamily={"monospace"}
    w={'60%'}
    margin={'auto'}
  >
    Browse the collection of our dark best-selling and top interesting products.
    You’ll definitely find what you are looking for.
  </Text>
</Box>
<Tabs
      isFitted
      isLazy
      variant="enclosed"
      colorScheme="blue"
      alignContent="center"
      w="80%"
      margin="auto"
    >
      <TabList
        w="100%"
        fontSize="xl"
        display="flex"
        justifyContent="space-between"
        bg="gray.200"
        borderRadius="md"
      >
        <Tab
          w="100%"
          onClick={() => handletab('male')}
          _selected={{ bg: 'green.500', color: 'white' }}
        >
          Men
        </Tab>
        <Tab
          w="100%"
          onClick={() => handletab('female')}
          _selected={{ bg: 'green.500', color: 'white' }}
        >
          Women
        </Tab>
        <Tab
          w="100%"
          onClick={() => handletab('kids')}
          _selected={{ bg: 'green.500', color: 'white' }}
        >
          Kids
        </Tab>
      </TabList>
        <TabPanels>
        <TabPanel>
        <TABDIV>
        <div className="card-carousel" >
          <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={4}>{renderCards()}</Grid>
          </div>
      {currentPage > 0 && (
        <button className="prev-button" onClick={handlePrevPage}>
         <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button className="next-button" onClick={handleNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>
        </button>
      )}
        </TABDIV>
        </TabPanel>
          <TabPanel>
          <TABDIV>
          <div className="card-carousel" >
          <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={4}>{renderCards()}</Grid>
          </div>
          {currentPage > 0 && (
        <button className="prev-button" onClick={handlePrevPage}>
         <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button className="next-button" onClick={handleNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>
        </button>
      )}
    </TABDIV>
          </TabPanel>
          <TabPanel>
          <TABDIV>
          <div className="card-carousel" >
          <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={4}>{renderCards()}</Grid>
          </div>
          {currentPage > 0 && (
        <button className="prev-button" onClick={handlePrevPage}>
         <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button className="next-button" onClick={handleNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>
        </button>
      )}
    </TABDIV>
      </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    <Box position="relative" overflow="hidden" onTouchMove={handleSwipe} m={"20px"}>
      <Carousel
      emulateTouch={true}
       selectedItem={currentIndex}
       showStatus={false}
       showThumbs={false}
       onChange={setCurrentIndex}>
      {images3.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
    </Box>
  <DIV5>
    <Box fontFamily={"monospace"}>
    <div className="image-container">
    <div className="image-wrapper">
      <img src="https://xstore.8theme.com/demos/dark/wp-content/uploads/sites/5/2016/05/banner-man.jpg" alt="1" className="animated-image"/>
      <div  className="overlay">
      <div className="text">HOME TO BRANDS FROM AROUND THE WORLD</div>
      </div>
    </div>
    <div className="image-wrapper">
      <img src="https://xstore.8theme.com/demos/dark/wp-content/uploads/sites/5/2016/05/banner-x.jpg" alt=" 2" className="animated-image"/>
      <div className="overlay">
      <div className="text">MIN 30% OFF ON ALL PRODUCTS</div>
      </div>
    </div>
    <div className="image-wrapper">
      <img src="https://xstore.8theme.com/demos/dark/wp-content/uploads/sites/5/2016/05/banner-girl.jpg" alt=" 3" className="animated-image"/>
      <div className="overlay">
      <div className="text">BRACE YOURSELF WINTER 2023 SALE IS HERE</div>
      </div>
    </div>
  </div>
    </Box>
  </DIV5>
  <Box m={"20px"} mt={"30px"}> 
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/PD23/sbcheader/Ethnic-Auto_Hero_Scroll-_PC.gif" alt='banner'/>
  </Box>
  <DIV6>
  <Box textAlign="center" padding="2rem">
  <Text
    fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
    fontWeight="bold"
    color="green.500"
  >
    Best In The Business
  </Text>
</Box>
    <div className='maindiv'>
    <div>
      <h2>1.</h2>
      <h3>Place Order</h3>
      <h4>Explore our vast selection of products to make your order truly unique.</h4>
      <button>Read More</button>
    </div>
    <div>
      <h2>2.</h2>
      <h3>Payment process</h3>
      <h4>Enjoy a seamless and secure payment process for your fashion choices.</h4>
      <button>Read More</button>
    </div>
    <div>
      <h2>3.</h2>
      <h3>24 Hours Delivery</h3>
      <h4>Experience lightning-fast 24-hour delivery for your fashion desires</h4>
      <button>Read More</button>
    </div>
    </div>
  </DIV6>
  <DIV7>
  <div>
  <Box textAlign="center" py="4" color="black">
  <Text
  color="green.500"
    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
    fontWeight="bold"
  >
    Our Blogs
  </Text>
  <Text
    fontSize={{ base: "md", md: "lg", lg: "xl" }}
    color="green.400"
    mt="1rem"
    fontFamily={"monospace"}
  >
    We explore the world of fashion every month and bring the best stories from around the world for our readers.
  </Text>
</Box>
  <div className="blog-container">
      <div className="navigation">
        {currentPage1 > 0 && (
          <button className="prev-button" onClick={prevSlide}>
           {`<`}
          </button>
        )}
         <div className="blog-slides">
        {currentData.map((blog, index) => (
            <Box
            key={index}
            className="blog"
            borderWidth="1px"
            borderRadius="md"
            p="4"
            boxShadow="md"
            mb="4"
            textAlign="left"
          >
            <Image src={blog.image} alt={blog.title} className="image" />
            <Text fontSize="lg" fontWeight="bold" mt="2">
              {blog.title}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {blog.date}
            </Text>
            <Text fontSize="md" mt="2">
              {blog.desc}
            </Text>
            <Text fontSize="sm" color="teal.500" mt="2">
              Continue reading...
            </Text>
          </Box>
        ))}
      </div>
        {currentPage1 < bloginfo.length - blogsPerPage && (
          <button className="next-button" onClick={nextSlide}>
           {`>`}
          </button>
        )}
      </div>
    </div>
</div>
</DIV7>
<Box backgroundColor="gray.800" color="white" justifyContent={"space-around"}>
      <Container maxW="container.xl" py="8">
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box flexBasis={{ base: '100%', md: '30%' }} mb={{ base: '4', md: '0' }}>
            <Text fontSize="xl" fontWeight="bold" align={"start"}>clickit</Text>
            <Text fontSize={"lg"} align={"start"} mt={"10px"}>Discover globally renowned brands at incredibly competitive prices, with swift delivery right to your doorstep.</Text>
            <Text fontSize={"sm"}  align={"start"} mt={"10px"}>Shop 2, Trillium Mall, Medical Square, Kurla, Mumbai-400070</Text>
          </Box>
          <Box  m={"10px"}>
  <Text fontWeight="bold" mb="2" align={"start"} >Quick Links</Text>
  <Flex flexDirection="column" align={"start"}>
    <Box mb="2">
      <Link href="#">Home</Link>
    </Box>
    <Box mb="2">
      <Link href="#">About Us</Link>
    </Box>
    <Box mb="2">
      <Link href="#">Delivery Info</Link>
    </Box>
    <Box mb="2">
      <Link href="#">Conditions</Link>
    </Box>
    <Box mb="2">
      <Link href="#">Order Tracking</Link>
    </Box>
    <Box mb="2">
      <Link href="#">My Account</Link>
    </Box>
    <Box mb="2">
      <Link href="#">My Wishlist</Link>
    </Box>
    <Box mb="2">
      <Link href="#">Careers</Link>
    </Box>
  </Flex>
</Box>
          <Box flexBasis={{ base: '100%', md: '25%' }} mb={{ base: '4', md: '0' }}>
            <Text fontWeight="bold" mb="2" align={"start"} textAlign={'center'} w={'80%'}>Latest Posts</Text>
            <Box align={"start"} mt={'10px'} border={'1px'} textAlign={'center'} w={'80%'}>
              <Text className="title">Indian handlooms</Text>
              <Text className="date">Sept 17, 2023</Text>
            </Box>
            <Box align={"start"} mt={'10px'} border={'1px'} textAlign={'center'} w={'80%'}>
              <Text className="title">Paris Fashion Week</Text>
              <Text className="date">August 17, 2023</Text>
            </Box>
            <Box align={"start"} mt={'10px'} border={'1px'} textAlign={'center'} w={'80%'}>
              <Text className="title">Gucci expanding in India</Text>
              <Text className="date">Feb 17, 2023</Text>
            </Box>
          </Box>
          
          <Box flexBasis={{ base: '100%', md: '25%' }} mb={{ base: '4', md: '0' }}>
            <Text fontWeight="bold" mb="2">Tags</Text>
            <Flex flexWrap="wrap">
              <Button variant="solid" size="sm" mr="2" mb="2">accessories</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">black</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">fashion</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">menfashion</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">sale</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">menfashion</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">jacket</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">denim</Button>
              <Button variant="solid" size="sm" mr="2" mb="2">shirt</Button>
            </Flex>
          </Box>
          <Box color={'white'} bgColor={"white"} h={"20px"} w={"20px"}>
          <svg onClick={scrollToTop} style={{margin:"auto",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
          </Box>
        </Flex>
      </Container>
      <Box backgroundColor="gray.700" textAlign="center" py={['2', '4']}>
      <Container maxW="container.xl" py={['2', '4']}>
        <Flex justifyContent={['center', 'space-between']} alignItems="center" flexWrap="wrap">
          <Text fontSize="sm" color="white" textAlign={['center', 'left']} mb={['2', '0']}>Copyright 2023 of clickit</Text>
          <Flex alignItems="center" justifyContent="flex-end">
            <Text fontSize="sm" color="white" mr="2">Payments Accepted</Text>
            <DIVIMG>
            <Image className='img'  src="https://cdn.myshoptet.com/usr/www.led-grower.eu/user/documents/upload/img/logo-platebni-karty.png" alt="payments" />
            </DIVIMG>
          </Flex>
        </Flex>
      </Container>
    </Box>
    </Box>
    </>
  )
}
const DIV = styled.div`
* {
  text-align: center;
}
h1 {
  margin: 2rem 0;
  font-size: 100px;
  background-color: tomato;
}
.image-container {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  font-size: 100px;
  width: 80%;
  margin: auto;
}
.responsive-image {
  width: 0 0 0 33%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: rotate(10deg);
  }
}
.image-text {
  background-color: teal;
  color: white;
  text-align: center;
}
@media screen and (max-width: 499px) {
  .image-container{
    font-size: 8px;
  }
  h1{
    font-size: 20px;
  }

}
@media screen and (min-width: 500px) and (max-width: 1023px) {
  .image-container{
    font-size: 15px;
  }
  h1{
    font-size: 30px;
  }
}
@media screen and (min-width: 1024px) {
  .image-container{
    font-size: 20px;
  }
}
`
const DIV1=styled.div`
.section-container {
  /* text-align: start; */
  padding: 2rem;
  color:black
}
.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  
}
.section-text {
  font-size: 1.2rem;
  font-weight: 100;
  margin: auto;
  width: 50%;
  text-align: center;
  /* text-align:start; */
  color:white
}
.section-button {
  border: 2px solid black;
  background-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
}
.section-button:hover {
  transform: scale(1.1);
  background-color: white;
  color:black
}
@media screen and (max-width: 767px) {
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .section-text {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .section-button {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .section-text {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .section-button {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .section-text {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .section-button {
    font-size: 1.2rem;
  }
}
`
const imageContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '1rem',
  padding: '1rem',
  
};
const responsiveImageStyles = {
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
  borderRadius: '8px',
  textDecoration: 'none',
};
const Imagep = styled.a(responsiveImageStyles);
const Image = styled.img`
  width: 90%;
  height: auto;
  &:hover {
    transform: scale(1.1);
  }
`
const CARDDIV=styled.div`
.card {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
}
.buttons {
  display: flex;
  justify-content: space-around;
}

.buttonadd,
.buttonbuy {
  background-color: #e7e7e7;
  color: #000000;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  border-radius: 10px;
}

.buttonadd:hover,
.buttonbuy:hover {
  background-color: #f53737;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .card {
    width: 80%;
  }
}
@media screen and (max-width: 767px) {
  .card {
    width: 80%;
  }
}

`
const TABDIV=styled.div`
 .card-carousel{
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
 }
 @media screen and (max-width: 767px) {
  .card-carousel{
    flex-direction: column;
  }
 }
`
const DIV5=styled.div`
margin: 20px;
.image-container {
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-around;
  
}
.image-container img {
  width: 100%;
  height: 100%;
}
.image-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.animated-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000000;
  font-size: 38px;
  z-index: 1;
  font-weight: bolder;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ffffff 5%, transparent 90%);
  background-size: 150% 150%;
  transition: transform 0.3s ease-in-out;
  transform-origin: 0 100%;
  transform: scaleX(0);
}

.image-wrapper:hover .animated-image {
  transform: scale(1.5);
}

.image-wrapper:hover .overlay {
  transform: scaleX(1);
}

.overlay::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  top: 50%;
  transform-origin: 0 10%;
  animation: slideStripe 2s linear infinite;
  opacity: 0.8;
}

@keyframes slideStripe {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@media screen and (max-width: 767px) {
    .image-container {
      flex-direction: column;
      align-items: center;
    }

    .image-wrapper {
      width: 100%;
      max-width: 300px;
    }
  }
`
const DIV6=styled.div`

.maindiv {
  background-color: #ffffff;
  color: #000000;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  font-size: 80px;
}

h2 {
  font-size: 70%;
  color: tomato;
}
h1{
   font-size: 50px;
}
h3{
  font-size: 50%;
}
h4{
  font-size: 30%;
}

button {
  background-color: transparent;
  color: #000000;
  border: 2px solid #000000;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 30%;
}

button:hover {
  transform: scale(1.1);
  background-color: tomato;
  color: #fff;
}
@media screen and (max-width: 767px) {
  .maindiv{
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 40px;
  }
  div > div:not(:last-child) {
    margin-bottom: 2rem;
  }
  h1{
   font-size: 30px;
}
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  div > div {
    width: 50%;
    margin-right: 0;
    text-align: center
  }
  .maindiv{
    font-size: 50px;
  }
  h1{
   font-size: 30px;
}
}
@media screen and (min-width: 1024px) {
  div > div {
    width: 30%;
    margin-right: 1rem;
    text-align: center;
  }
  .maindiv{
    font-size: 80px;
  }
}
`
const DIV7=styled.div`
.blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 80px;
  width: 100%;
  background-color: #ffffff;
}
.image{
  width: 100%;
}
.blog:hover .image{
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
.title{
  font-size: 30%;
}
.date{
  font-size: 15%;
}
.description{
  font-size: 20%;
}
.continue{
  font-size: 15%;
  font-weight: bold;
}
.continue:hover{
  color: tomato;
}
.blog-slides {
  display: flex;
  width: 100%;
  gap: 10px;
}
.blog {
  flex: 0 0 31%;
  width: 100%;
  background-color: #ffffff;
  cursor: pointer;
  color: #000000;
  margin:10px;
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;
}

.slide-left {
  transform: translateX(-33.33%);
}

.slide-right {
  transform: translateX(33.33%);
}

.navigation {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px 0;
}

.prev-button,
.next-button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 20%;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #000000;
}
.blog-slides {
  display: flex;
  flex-direction: column;
}
.blog{
  width: 50%;
  margin: auto;
  overflow: visible;
}
}
@media screen and (max-width: 767px) {
  .blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 30px;
  width: 100%;
  background-color: #ffffff;
  color: #ffffff;
}
.blog-slides {
  display: flex;
  flex-direction: column;
}
.blog{
  width: 50%;
  margin: auto;
  overflow: visible;
}
}
`
const DIVIMG=styled.div`
.img{
  width: 15%;
}

`
const DIV10=styled.div`
margin-bottom: 50px;
  .image-container {
   text-align: center;
}
.image-wrap {
  display: inline-block;
  border: 2px solid #3498db;
  overflow: hidden;
  transition: border-radius 0.3s ease-in-out;
}

.responsive-image {
  width: 226px;
  height: 226px;
}
.image-text {
  text-align: center;
}
@media screen and (max-width: 767px) {
  .image-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
}
`
const DIVFADE=styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin: auto;
  @media screen and (max-width: 500px) {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
`

const CARTICON=styled.div`
  
`