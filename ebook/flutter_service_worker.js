'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "22714114f1c55f11325b05a60741c0e1",
"assets/AssetManifest.bin.json": "1ba5552ffc80815c7afcabd9c54e17c9",
"assets/AssetManifest.json": "3755544f4fd2d3f0391cf988d941f295",
"assets/assets/images/1/1.png": "c51234560dd5e643a362f0a14898fb28",
"assets/assets/images/1/2.png": "4e8de3f79acc2f0dd9ed25151a188f48",
"assets/assets/images/1/3.png": "aa1e66f1a6ce75b646e84ac4965ce91e",
"assets/assets/images/1/4.png": "97715bde34c5d510c18b118aa2e71520",
"assets/assets/images/1/5.png": "fd281b7f7902a205587174562bdb97b3",
"assets/assets/images/1/6.png": "bd0452d14255b4ae9a6193a84834c385",
"assets/assets/images/1/7.png": "2bd64112eeb6d2f0ebdb9d059ba1c9f1",
"assets/assets/images/1/8.png": "10b70a3f4b56ffd831bbefffa7c772bb",
"assets/assets/images/1/9.png": "54c472812fdf0fd3c9c34c6dbc07f1d6",
"assets/assets/images/10/1.png": "058e3d2fda8f6609e04a546300699edf",
"assets/assets/images/10/10.png": "49841746b6187c1219dc97c78c49cc38",
"assets/assets/images/10/11.png": "389942b7544540b0c246650a8c896809",
"assets/assets/images/10/12.png": "ec6d9632f7d9f613fb2be2e08b523757",
"assets/assets/images/10/2.png": "a80264a530bc840ea168da1a9e669390",
"assets/assets/images/10/3.png": "7591b938fc2e62a56cbc841eb0142228",
"assets/assets/images/10/4.png": "2f4e3c8a22b2ec32102beed8bf34d954",
"assets/assets/images/10/5.png": "e76103146a6fcac22a6dbf7816b5de2e",
"assets/assets/images/10/6.png": "ecf237bfa8106acfaa86002cc8f1d9cc",
"assets/assets/images/10/7.png": "ca589af563241ce86d52d2b366cd63a9",
"assets/assets/images/10/8.png": "8e51cd06aa5cecac73f1b6645add3975",
"assets/assets/images/10/9.png": "bce30480c6d16d6d53f4b68454fa2705",
"assets/assets/images/11/1.png": "865b9422dd384fc457c8cb6aeb2ccfa4",
"assets/assets/images/11/10.png": "a2fa94da766f46db209cab73e0e00c59",
"assets/assets/images/11/11.png": "3c5446726ac44a39a37572d281d2a3c7",
"assets/assets/images/11/12.png": "c1f50db9d2ab8b225891912c7bed3b3a",
"assets/assets/images/11/13.png": "c9d9a2b5248e93d9fbcb45dff8457882",
"assets/assets/images/11/14.png": "b148b281dcbbec5c650c351730eb330e",
"assets/assets/images/11/15.png": "2799daa8bbb47ebc191a4c1fb3baa828",
"assets/assets/images/11/16.png": "65de7d26853d905caabc0bbf88137546",
"assets/assets/images/11/17.png": "957aedca4ab1b2651d43e2d68a13686e",
"assets/assets/images/11/18.png": "c158ec8b20fa77bb6bd643ed323e8b4b",
"assets/assets/images/11/19.png": "0c6774959ab345e17a421baa3487ce3c",
"assets/assets/images/11/2.png": "c44046774741e0d018ecbd55f2a863ff",
"assets/assets/images/11/20.png": "bed518c9d3460e42062051028ad1ad36",
"assets/assets/images/11/21.png": "8539ed027152ac3b6458bceb0620d55d",
"assets/assets/images/11/22.png": "5891fc390b6e6284c76add7e16de62e2",
"assets/assets/images/11/23.png": "8d2f61cf01a1f24e42615457d40b5108",
"assets/assets/images/11/24.png": "705cc466cc4d1ace33528fc298b3850b",
"assets/assets/images/11/25.png": "11790ccca8e694c02d1ed64cb76d5fb8",
"assets/assets/images/11/26.png": "0a65702d574d180fe083a3293cfe483b",
"assets/assets/images/11/27.png": "de12e52ff0511a90f64de1d7ed8aaa5b",
"assets/assets/images/11/28.png": "bc0c0fb08918a9f1300ff831e51edffb",
"assets/assets/images/11/29.png": "7701a9532d63b171e18796a85abcee60",
"assets/assets/images/11/3.png": "251f995e389f758171a25646d6e3e11d",
"assets/assets/images/11/30.png": "822a00953ea7cb7832aa5ab77b02f3d5",
"assets/assets/images/11/31.png": "daeffbf69616345f4a54d5fcc0487d73",
"assets/assets/images/11/32.png": "865b9422dd384fc457c8cb6aeb2ccfa4",
"assets/assets/images/11/4.png": "362b4a2f8b11abbd09b722e85f89922d",
"assets/assets/images/11/5.png": "7d3de3e629b3ab2d8c3a9f63edaf8772",
"assets/assets/images/11/6.png": "1674c770927096edc80290f3520f68d8",
"assets/assets/images/11/7.png": "694516a16a2562b06b7e7421d04b7dfc",
"assets/assets/images/11/8.png": "419c2cda528d210b872ddc7375b8fd67",
"assets/assets/images/11/9.png": "a67445fc423198ae524d0dc6f2213477",
"assets/assets/images/12/1.png": "e72b927adf034d86317ab35ae0db3c6d",
"assets/assets/images/12/10.png": "47fe90c428b940d595f13b342d3130ed",
"assets/assets/images/12/2.png": "d7e3055d952a329642a3251f4abf4e00",
"assets/assets/images/12/3.png": "c4df4687520ae5b41ae97bdc3ce1dfa9",
"assets/assets/images/12/4.png": "633ae2ed2321a66ef7c59a13d987a91e",
"assets/assets/images/12/5.png": "64bcc0b3d5ea34966ad42c4b9ba36089",
"assets/assets/images/12/6.png": "8ffb10b0625542b74623aea941f7b1a6",
"assets/assets/images/12/7.png": "8625d3331f92fe1c2fe1934f8edf64f7",
"assets/assets/images/12/8.png": "4e3cee5fbf2f37bc2945d168201feec7",
"assets/assets/images/12/9.png": "06b8daf2ed0add0b1bc78e88d69a820b",
"assets/assets/images/2/1.png": "ddf85a3647f769c6254da5e39f5ce22f",
"assets/assets/images/2/2.png": "5270b0e049aa4a1d0d550f62ffbe050e",
"assets/assets/images/2/3.png": "f79a539bef19a9bde02c7e1d845d6b22",
"assets/assets/images/2/4.png": "e4cae085f2a45dcbc334649b72d86037",
"assets/assets/images/2/5.png": "637182a1dc6310f4b7393450e6579f87",
"assets/assets/images/2/6.png": "b0f61a79aa807fa9d0f3cc17058c9bd0",
"assets/assets/images/2/7.png": "ea6f8de7cf171ae55727d286a230ad99",
"assets/assets/images/2/8.png": "5ac7a0045385c80d208126ff3ea822e3",
"assets/assets/images/2/9.png": "615c0bb0f2da5cdafeb3bb34074a9427",
"assets/assets/images/3/1.png": "1017f8c2207a05cfea143d38cdf1dd7b",
"assets/assets/images/3/10.png": "03ece6e9b37dfe09e66dbad37c3287ce",
"assets/assets/images/3/11.png": "647224bfa71ee0b8c98eb413a1a9c3c4",
"assets/assets/images/3/12.png": "b78390024cb53c395258141662ede897",
"assets/assets/images/3/13.png": "7fcb9aa6d56fcdf9ad4970461c0eac27",
"assets/assets/images/3/14.png": "56338161dfa29a77ad949cc0017e584a",
"assets/assets/images/3/15.png": "d1aa0320aeddf15a423eff0eacca5719",
"assets/assets/images/3/16.png": "2cf32029fe3b9eb51a43b939c687e6ac",
"assets/assets/images/3/17.png": "12a409a35c8b64bcb05d55d83b0352e3",
"assets/assets/images/3/18.png": "b97752721602b56cc2629e4e50d4b29b",
"assets/assets/images/3/19.png": "94b259a68f907f589c97cd44bc4cfbc0",
"assets/assets/images/3/2.png": "96fb1a1cf80391111f8891703595151f",
"assets/assets/images/3/20.png": "7cf77227023dbded52ae8103c76ce6a6",
"assets/assets/images/3/21.png": "fd4b131e62efd253a085a30b47a21d8d",
"assets/assets/images/3/22.png": "445f6d51d01b5cf44967cf6583c6f5fd",
"assets/assets/images/3/23.png": "77e5fc2698c958a1cf0edbe8822694a7",
"assets/assets/images/3/24.png": "dc2b6da7ba5982f4743e4c53bad7156d",
"assets/assets/images/3/25.png": "5f2cf24d9bc965d0284ed3068a0ec701",
"assets/assets/images/3/26.png": "ba3ed77259736c247921e0ac8db4525f",
"assets/assets/images/3/27.png": "ad2806afb2c844e4533fa326ad10c1fc",
"assets/assets/images/3/28.png": "b035cf57e2ac0bded136b94a449ff826",
"assets/assets/images/3/29.png": "080dbbde9c234bd44ccf9f3c55bf1284",
"assets/assets/images/3/3.png": "65ac5b6f43a16348c3144abed802ecec",
"assets/assets/images/3/30.png": "34de413a377bbb6467e497fe832fb5a5",
"assets/assets/images/3/31.png": "583b05df1b3cd829de31a64ea1babb36",
"assets/assets/images/3/32.png": "f75626ff6bdcccacc7a0d9637162db8d",
"assets/assets/images/3/33.png": "be05c997f868b5da69bb36331b223ac9",
"assets/assets/images/3/34.png": "8788c9fadb6462180f877958c1795b09",
"assets/assets/images/3/35.png": "4e335b98dbef8f445105c48bda91bb49",
"assets/assets/images/3/36.png": "be083146f42a4862995ed42c184b2dbc",
"assets/assets/images/3/37.png": "ba03876ee8d04b24b439a78057a9deb9",
"assets/assets/images/3/38.png": "0895eb225660d33b6cf09d10b253fdf3",
"assets/assets/images/3/39.png": "9c34409ad46d86209129787b63fef978",
"assets/assets/images/3/4.png": "267b2781fd68cd64d65c650fafcf8044",
"assets/assets/images/3/40.png": "48520a7cdfced348639af09358fa779f",
"assets/assets/images/3/41.png": "ef016492e56c8a9e3d02e510e39f8b22",
"assets/assets/images/3/42.png": "eb1a375bd810340e6e5e9de7c1fcd680",
"assets/assets/images/3/43.png": "7acb9b54d9a6ebc57b1cdd96842b8ad3",
"assets/assets/images/3/44.png": "2f8c7d6651167b6d7de26147cbbe1381",
"assets/assets/images/3/5.png": "ed34e60f80112a94f07ca10ab4226613",
"assets/assets/images/3/6.png": "a4c54766602c5984c9303dea151f4523",
"assets/assets/images/3/7.png": "f1c99bca7e7395b9c2348eea52d8436b",
"assets/assets/images/3/8.png": "3a7beb9bfcebb7108c59e76a188bca49",
"assets/assets/images/3/9.png": "800f51bbe03d349219566c473f3d6575",
"assets/assets/images/4/1.png": "f749e8deb097379c3f90fa415534ef11",
"assets/assets/images/4/10.png": "90675b160f66dac72426178dea360a4d",
"assets/assets/images/4/11.png": "4f22cc2b7193015384ccb4024b71e396",
"assets/assets/images/4/12.png": "5ea725b9ffebe34a76ce4d74b4976e29",
"assets/assets/images/4/2.png": "9c151d23054db423b5a9676035dc48df",
"assets/assets/images/4/3.png": "22154d686c04d75681b5450bc7e46396",
"assets/assets/images/4/4.png": "c2d27f4e432fa48ed0281175f1b22823",
"assets/assets/images/4/5.png": "997af282fd330f710751d9fa7c8a1f48",
"assets/assets/images/4/6.png": "ef3292aeb342c0975c6462bbefc16398",
"assets/assets/images/4/7.png": "db555d3f2f2931508ad495b3526c09cb",
"assets/assets/images/4/8.png": "9580f71a3dced9a141843125e542aa06",
"assets/assets/images/4/9.png": "4239f4f12b741309499b08b34b002b96",
"assets/assets/images/5/1.png": "ea4c860cdf56cd245dc64884db4aa2ae",
"assets/assets/images/5/10.png": "4207b3c0d95a337a145d006a51e06bbe",
"assets/assets/images/5/100.png": "943b1f76b9cdcbeee9581c2ecb373a96",
"assets/assets/images/5/101.png": "415153f70374650b1cfd454d0df8a6e8",
"assets/assets/images/5/102.png": "b5875cb3ee8f02167fa0d572f373abea",
"assets/assets/images/5/103.png": "bd80fd5c60401152462c38052d8b6e72",
"assets/assets/images/5/104.png": "2cfa76ce7b4cb229d6edd64d7f877363",
"assets/assets/images/5/105.png": "6202f8b89e18d9f27b8693822e784dc1",
"assets/assets/images/5/106.png": "b09118f3f90917e42d05568f4751dbc3",
"assets/assets/images/5/107.png": "686ae61af05bb0539fe6973d6ab0902b",
"assets/assets/images/5/108.png": "2ed441355eb07c1bc9cce005412017c6",
"assets/assets/images/5/109.png": "00c8328a824d8c2606abcf0003a44c62",
"assets/assets/images/5/11.png": "e2c358ca70f53b7dd339717dd95a120f",
"assets/assets/images/5/110.png": "fe9f25281e67641a897081b1942fbadc",
"assets/assets/images/5/111.png": "696370a819f379d728e9f59cff007e7a",
"assets/assets/images/5/112.png": "b713f58084211845250d7b97c4b72940",
"assets/assets/images/5/113.png": "9c0d342b107388d4d85b463d442f0e8f",
"assets/assets/images/5/114.png": "a4a237e732e81a9f1e24e6301cd21d37",
"assets/assets/images/5/115.png": "918f5d0dae2138b05e1e18bbf1c670a1",
"assets/assets/images/5/116.png": "d999c5e8325ef94a59910b77b146a087",
"assets/assets/images/5/117.png": "5764071e02b420d7e24765ef768f99a4",
"assets/assets/images/5/118.png": "18ea12701fbf01dfa3066714f5fece64",
"assets/assets/images/5/119.png": "e18a4ffb70c731a7d3fd84a5b2a5e11d",
"assets/assets/images/5/12.png": "82a59582efc446f9fc6a307ab2e768d3",
"assets/assets/images/5/120.png": "9903ef7e3b883c7ec46752de24d563d4",
"assets/assets/images/5/121.png": "8fb39d3853b71d1d3523dd6e26c0790f",
"assets/assets/images/5/122.png": "4677adb9d9ff4a6ce87471106152c402",
"assets/assets/images/5/123.png": "88405ee706b8f0bfa749c276c642e085",
"assets/assets/images/5/124.png": "2eca3942765e1d72a7965c6e6eb45760",
"assets/assets/images/5/125.png": "50611f2d60997cb428fb1978f6e1942f",
"assets/assets/images/5/126.png": "cbe733f46fa56d8e4d8cec015cff0744",
"assets/assets/images/5/13.png": "a776b381e295b14e1584de11df073e29",
"assets/assets/images/5/14.png": "a437d3f096cc135942079c2ff65cbdd3",
"assets/assets/images/5/15.png": "67398782add81757094df50bf00b9ac5",
"assets/assets/images/5/16.png": "f173147ad41d9e334ca3ddec630e0a40",
"assets/assets/images/5/17.png": "58fc14f28dd9ef3bf1ed09cba780b512",
"assets/assets/images/5/18.png": "abc79d7e4f2cd5e8d86270d634ae10f0",
"assets/assets/images/5/19.png": "20afd191df749e0ddcf83aceca76e364",
"assets/assets/images/5/2.png": "0dc23421762d5b8c0e68a1473da11297",
"assets/assets/images/5/20.png": "9e6752d387016bd149881eb74fe0b6ed",
"assets/assets/images/5/21.png": "b278bcd90aa9619508e9e97ada368ee8",
"assets/assets/images/5/22.png": "18977c6dbfce83bd9ec0b7b15438e061",
"assets/assets/images/5/23.png": "dd49f659c20eb77427a5ee1f624f03bf",
"assets/assets/images/5/24.png": "81bde65a1a65ecc963ee6facfaf4ea87",
"assets/assets/images/5/25.png": "0f4c49ccc5b37fbebec7a27d77f5a520",
"assets/assets/images/5/26.png": "20008eec7987ad228dbe2c483bdf92fe",
"assets/assets/images/5/27.png": "75f76ed84342fedb312ce6ee07eda57e",
"assets/assets/images/5/28.png": "8a088e7b41281e2208ca5aad447dbbf7",
"assets/assets/images/5/29.png": "067cddbaa762ff457229e37e2b7817b9",
"assets/assets/images/5/3.png": "0c79c8bf2edd9046e60567d255331676",
"assets/assets/images/5/30.png": "acfce7de169648a962e69559b3003f36",
"assets/assets/images/5/31.png": "7e04d8b6b30c28e0269c9f2881ece64f",
"assets/assets/images/5/32.png": "9072485d37e2f88bfff24e6bcae2a520",
"assets/assets/images/5/33.png": "c0f2c35dd909b8a0b6050a3466be9de0",
"assets/assets/images/5/34.png": "ae2faeaf2a7d8e1c3d9fcff8049d6374",
"assets/assets/images/5/35.png": "b97af657f132f50a57073327e2ffba0e",
"assets/assets/images/5/36.png": "786ac11b22dce21be2ccfe046da0d2cb",
"assets/assets/images/5/37.png": "33ce962f09b174ebb529b5f23cf5b610",
"assets/assets/images/5/38.png": "f3fc22a99442b5bbaeb598230992c021",
"assets/assets/images/5/39.png": "0f4c26e80cc95c0cc83ce378a75e0306",
"assets/assets/images/5/4.png": "a0a77f30bc999503ce3047c505134207",
"assets/assets/images/5/40.png": "7dd205eef7178d90e3e21c16ac9c44d8",
"assets/assets/images/5/41.png": "646e2c26761afbf28f596674b01b6d51",
"assets/assets/images/5/42.png": "61275360b2f66f5127fcda778514daa2",
"assets/assets/images/5/43.png": "f5f3beb032a9184a79503f8e98d27e9a",
"assets/assets/images/5/44.png": "000c7316a901a3a0179f4f0492dfc04d",
"assets/assets/images/5/45.png": "8637d4f40c2b6128dca5b4480e84f87a",
"assets/assets/images/5/46.png": "f25b520caff407c2dc0b06906418a1fe",
"assets/assets/images/5/47.png": "d3e304d6f7fa1e6bbf3258ede29137fc",
"assets/assets/images/5/48.png": "262de799d733fa622e574c81e162b165",
"assets/assets/images/5/49.png": "a4627cba0fa770f557e3957e1ebc9173",
"assets/assets/images/5/5.png": "341d58f12946244b4f50b0daa88d6511",
"assets/assets/images/5/50.png": "7e46c4ea565d7a626465d29494f011d5",
"assets/assets/images/5/51.png": "61cafb1d000c96c645f1d1f680453970",
"assets/assets/images/5/52.png": "8db26c93a26a93678de9eaa359c3d68e",
"assets/assets/images/5/53.png": "a897e7a60618595fee7da9da3bbeb3cc",
"assets/assets/images/5/54.png": "e6477a55c98bab9af53bd550b2818280",
"assets/assets/images/5/55.png": "33ee5196a7cb43b402908a766bb5a88e",
"assets/assets/images/5/56.png": "df2bb213f4bd119cd51b12a0c78d5628",
"assets/assets/images/5/57.png": "b3dafad8504bf23e8fea8957b2918edf",
"assets/assets/images/5/58.png": "75048d4c616cb2a56b3edcfd4fd79da6",
"assets/assets/images/5/59.png": "c65370bb7577a111511bde8f2b8ec1db",
"assets/assets/images/5/6.png": "e8e152bc2462ed6e8514a9d587da683a",
"assets/assets/images/5/60.png": "517bce81572a0bb3e30de6e3a2ff966d",
"assets/assets/images/5/61.png": "2ecd17034eb158fbb9b9436e72d75ce2",
"assets/assets/images/5/62.png": "3b533cf6a96964d6e55f12bbc5d5e077",
"assets/assets/images/5/63.png": "a782db954216599887411f1bf32ff3e0",
"assets/assets/images/5/64.png": "d159678dfec8ea7d69336b427af156e9",
"assets/assets/images/5/65.png": "9efbcd77b9dfdca96c45588e725d21e0",
"assets/assets/images/5/66.png": "5d3d2dd2527b112c6dfbcdec8854bb88",
"assets/assets/images/5/67.png": "c777b3c30e75d90050823ae2872fd494",
"assets/assets/images/5/68.png": "68dd801b1799ca6b2f2ac9efdaf320ef",
"assets/assets/images/5/69.png": "4aaeffce3a34eaa104e99b326de1aab6",
"assets/assets/images/5/7.png": "ca9d036ad121cbbe7747118493904ca8",
"assets/assets/images/5/70.png": "9899c6f4818a90c353893d5717c8cfca",
"assets/assets/images/5/71.png": "ea3374b857675cfdf89c0a7eb5a06f9e",
"assets/assets/images/5/72.png": "24dfebc1213fdac243a3c092e207fd7b",
"assets/assets/images/5/73.png": "457a9babdb1c79e1e935f5c953eab30c",
"assets/assets/images/5/74.png": "566bb0866b3d27f4f04da2e609977c06",
"assets/assets/images/5/75.png": "aabbf01a3b2b157ab5ce3a8432088da3",
"assets/assets/images/5/76.png": "2b9ea55c654dd51d24a270e5c03335f8",
"assets/assets/images/5/77.png": "8ce640e365223d985f6be07391361547",
"assets/assets/images/5/78.png": "e80373701484da6d4116889a24d2179f",
"assets/assets/images/5/79.png": "52072b04a5235da044e57b078eb68f08",
"assets/assets/images/5/8.png": "ab290f1b9b4381cc70d41b64832e94f3",
"assets/assets/images/5/80.png": "282b240ecae3361cd26a1da904a44949",
"assets/assets/images/5/81.png": "9f786a5b2570d6ed376adcaa088655ee",
"assets/assets/images/5/82.png": "a2772902761cd83965e64b7cebcd62d6",
"assets/assets/images/5/83.png": "ceaa214416baac7c593c9aadf8addab1",
"assets/assets/images/5/84.png": "a22ccb3073d68a3de45c823569530ebe",
"assets/assets/images/5/85.png": "eb18e3f610e81d8c22f21390bdfb6637",
"assets/assets/images/5/86.png": "b16e5b595d7f17c349d0d62fbe6636fd",
"assets/assets/images/5/87.png": "689f6e28ed1e9bcdda6367bb604cd016",
"assets/assets/images/5/88.png": "806e2bdcb79ba2eb5f7a0037c9a4c790",
"assets/assets/images/5/89.png": "2f270e4a472d31f99a484c483c47d1fc",
"assets/assets/images/5/9.png": "853f6e2d3028fa4b061d64fdd5e628e1",
"assets/assets/images/5/90.png": "889466a91c90cd7df9abc69da5d7edd5",
"assets/assets/images/5/91.png": "3183b9205e9955d2e201e9bdcff2fe52",
"assets/assets/images/5/92.png": "32b58728f296107720e41d1871d44c30",
"assets/assets/images/5/93.png": "061a6ba9697f7b3dd7b83b58b7eb416c",
"assets/assets/images/5/94.png": "cfdd41b43ea1a2c44f51ebd6e38274a8",
"assets/assets/images/5/95.png": "051ec674c14d2690b5789e68be5ece47",
"assets/assets/images/5/96.png": "fa2a1da0421c66708e5297b9b31dca2b",
"assets/assets/images/5/97.png": "8b6d2bc7b11fba0fb08034da1fa89133",
"assets/assets/images/5/98.png": "0925067a20dd6f999a89fc71081ff4c7",
"assets/assets/images/5/99.png": "7ad0b06d8ec9ee6b9517c00a838cab95",
"assets/assets/images/6/1.png": "b3f8c515c9cb3618618d674b4fff3453",
"assets/assets/images/6/10.png": "67dbeec690f0bdf7ddfb538203bcadcc",
"assets/assets/images/6/100.png": "89f78b2e969532b64d9d9cbecfd6936c",
"assets/assets/images/6/101.png": "22efa79a51adc57be8aa59206a7e5378",
"assets/assets/images/6/102.png": "897a1598d75426b83c0fc5ee58068bf1",
"assets/assets/images/6/103.png": "e1221c5ef9fcd8c0fb2b382a09ac0abb",
"assets/assets/images/6/104.png": "5f8cc5c55c5a4234baa44f45b0c27eda",
"assets/assets/images/6/105.png": "ced7ab21c94d32dbaede8f7d5a99d88f",
"assets/assets/images/6/106.png": "6523d7ead527c39c5058d2f08dcfc079",
"assets/assets/images/6/107.png": "bd4e6aa06ef7050c3b714a3b4e2d7b9d",
"assets/assets/images/6/108.png": "171c812f7f8457adbd3f3b83fd1659fb",
"assets/assets/images/6/109.png": "151dece36355c579f89f8d9768f35db9",
"assets/assets/images/6/11.png": "2d22058698f94f0d0cbc323926bf5f9b",
"assets/assets/images/6/12.png": "ce855235115b8aae2568cb6189e88260",
"assets/assets/images/6/13.png": "55cfe01272fd531437f0eb3720b758e1",
"assets/assets/images/6/14.png": "ba55a3924df0a95d2d91aed4a9dd0f56",
"assets/assets/images/6/15.png": "3a38f5071c941145aacac0cd1b700885",
"assets/assets/images/6/16.png": "417e5e9d4dcaebc7b9fbda2cbd8ea620",
"assets/assets/images/6/17.png": "31f3439f1f0e5e0651e0194fa13678a6",
"assets/assets/images/6/18.png": "dac130237cae9ef61e2ce007d5e85232",
"assets/assets/images/6/19.png": "086ea9557abc4c4bf8963bdf1d70ee70",
"assets/assets/images/6/2.png": "a8db8909f39ba03196c67c546ab7ac76",
"assets/assets/images/6/20.png": "55043cf2d14e8c7afc0cf3ef432c549a",
"assets/assets/images/6/21.png": "cda81356cc4a44085c595634538da292",
"assets/assets/images/6/22.png": "3d4e711528121e5d72c835e37e4f92f7",
"assets/assets/images/6/23.png": "774dba3e4f6bb691a14bf1ad9412d42d",
"assets/assets/images/6/24.png": "574d8d670d66b9a03c454a9a03a0277c",
"assets/assets/images/6/25.png": "1954e9c269145992163f438b7965a4fa",
"assets/assets/images/6/26.png": "d9b6ebd8c0cae79a3db576c18a22f0fd",
"assets/assets/images/6/27.png": "c92e74ba6014a4b76cbe247d0e28770d",
"assets/assets/images/6/28.png": "a4bc0a3f4fc4b2eee98090992476528b",
"assets/assets/images/6/29.png": "70a40667e69ec932eb0d6f7d11bd2bee",
"assets/assets/images/6/3.png": "c24994e5d9c6acd4712d5be93fde48c5",
"assets/assets/images/6/30.png": "f3ab16ce325bb6279b79f8684cef4300",
"assets/assets/images/6/31.png": "efe61a7767acaf9013636f413f4510c8",
"assets/assets/images/6/32.png": "9f175ee6c8adfeba5ea9c62e3222548c",
"assets/assets/images/6/33.png": "117ff1420852aca1aad4943345cd8d3e",
"assets/assets/images/6/34.png": "64c98308e3886f5a74c53b2f9f3f0e37",
"assets/assets/images/6/35.png": "a673d96b6d8ec664aabf5e4e2c0e7b8d",
"assets/assets/images/6/36.png": "1c53ca6bd0d59fc761bc4b00d7366a96",
"assets/assets/images/6/37.png": "1c4171137d0227ee2bae8ddcc37d8b33",
"assets/assets/images/6/38.png": "46810a845e7d179681efc9ce11911244",
"assets/assets/images/6/39.png": "7523c3a832015b51348701cc5332031f",
"assets/assets/images/6/4.png": "efd73c4485a77327610727e984c41823",
"assets/assets/images/6/40.png": "954a8542e262dc3163e9c9f8b1bf2368",
"assets/assets/images/6/41.png": "12e7b98dd0a71738de7b05f10b14479a",
"assets/assets/images/6/42.png": "dcbc63d80449b18fc6284cdf3df5c4e7",
"assets/assets/images/6/43.png": "0ccbea4539aba0c3acba71dad1fbf614",
"assets/assets/images/6/44.png": "c60e65c034191d17d72ecc640da446f7",
"assets/assets/images/6/45.png": "f325af92ea6d042767d39c3a64b83414",
"assets/assets/images/6/46.png": "cba4894dc62bff02765853b03abb3241",
"assets/assets/images/6/47.png": "cdce4a574a5b840ab6152606cf1370c9",
"assets/assets/images/6/48.png": "931e1526e656e23bf74e6d05302988b6",
"assets/assets/images/6/49.png": "fbf0f6fcf4075a02e3174c468cc6dcda",
"assets/assets/images/6/5.png": "4fffe73679d4bc9491cc084b93d6e932",
"assets/assets/images/6/50.png": "425214ed8d6baaa918cf5400e5b16f17",
"assets/assets/images/6/51.png": "c49ae58456573598486add5ee3abb2d5",
"assets/assets/images/6/52.png": "4fb64e034fa583a18f86c025ebb7129d",
"assets/assets/images/6/53.png": "df66bb32d2124b25a3daaf5fdddc18cc",
"assets/assets/images/6/54.png": "dc7447adda3777de4429a31c2133d449",
"assets/assets/images/6/55.png": "d05eb61ae25d3de8a04dc92c368b3550",
"assets/assets/images/6/56.png": "1263098a3319b1acdd0792ef23089e6e",
"assets/assets/images/6/57.png": "686c5441bb18e3eaff728077f076b124",
"assets/assets/images/6/58.png": "69a75b3f3184a2bb1bb83a783e4d8cd7",
"assets/assets/images/6/59.png": "52eb4c56729633f7a060cec621609eda",
"assets/assets/images/6/6.png": "a2f8e214269b79803fbcbde761a50757",
"assets/assets/images/6/60.png": "fb80efe27f2d0ad66fb3e1972f7538c0",
"assets/assets/images/6/61.png": "0a1b92e22140f8c3e4c0f0d3d8f937f7",
"assets/assets/images/6/62.png": "c1bb1c722d0ee8d867543feab94a63b4",
"assets/assets/images/6/63.png": "3d03f00248eccf38e8b6bd9354589fdf",
"assets/assets/images/6/64.png": "4e1818734e8ced46ffbe0e97a75e55e6",
"assets/assets/images/6/65.png": "a276dcd9d72a827982cd4bea269a90be",
"assets/assets/images/6/66.png": "191079b5d05a2f1c5e5771653fefc5dd",
"assets/assets/images/6/67.png": "4fcec667fbde2d816cd5ee302dfc802e",
"assets/assets/images/6/68.png": "4c3792ed479042ccf6343fd242060ee7",
"assets/assets/images/6/69.png": "7fdcd5ad74b722655fea05bc22abe8a5",
"assets/assets/images/6/7.png": "b7e3abf3284d8d86e73d68c2c3223063",
"assets/assets/images/6/70.png": "cbd19c91710a7ff47fb2b935e86d7bac",
"assets/assets/images/6/71.png": "b54e2ebc4ccebeca88d7c12b6ee4dda1",
"assets/assets/images/6/72.png": "9f91e218e77d647ed2cb0bbfb48c6a2d",
"assets/assets/images/6/73.png": "8a8a1928eef44f7fe48c1e126fa24e51",
"assets/assets/images/6/74.png": "46e8261d15a4426a592089c981ec9d20",
"assets/assets/images/6/75.png": "cc7b0f2e42471325364992aea266e481",
"assets/assets/images/6/76.png": "b79d19cefbc7526bd661825fb6d049fb",
"assets/assets/images/6/77.png": "b8fb560ffc7a161592a9be150ce8f2c1",
"assets/assets/images/6/78.png": "5716ea63cd6c7b72f99bf9b840b3bc30",
"assets/assets/images/6/79.png": "926d08a8057baf706151de0c53802b42",
"assets/assets/images/6/8.png": "8767204f0dbbc80bdd090c4b24310030",
"assets/assets/images/6/80.png": "9a7a8881bad8cb414e2c1d595b4f455d",
"assets/assets/images/6/81.png": "b98276daca48ee0693cc9f43b375039f",
"assets/assets/images/6/82.png": "0b0d8f36c3762015d3c88139c43cc195",
"assets/assets/images/6/83.png": "949c166999a949426c57b00f464cf613",
"assets/assets/images/6/84.png": "afc6d482bb17c7ce8e3dd155bbb89503",
"assets/assets/images/6/85.png": "1cb67f39b2c122a568dd94d5b8cd55ad",
"assets/assets/images/6/86.png": "ac95eab5a8710c8b7fa86785112e310e",
"assets/assets/images/6/87.png": "5e959104e44188fbf157f1e9e2fc6815",
"assets/assets/images/6/88.png": "8b4fa2fc3de9edaf8d0185ddedf2f734",
"assets/assets/images/6/89.png": "3f20ab96c34b5303ed9fc32513f195ae",
"assets/assets/images/6/9.png": "4187175bcd4b4e70c2935f0711c5cdbb",
"assets/assets/images/6/90.png": "31fec2a83d08a0fb43992cc5e457683d",
"assets/assets/images/6/91.png": "8eaf5edf74225a261e26485965bde133",
"assets/assets/images/6/92.png": "05e5a056d9e7c3a6e0b68e9e545a21f1",
"assets/assets/images/6/93.png": "61fa5cd9a8615e967c7a9d0779f5d477",
"assets/assets/images/6/94.png": "a33cefa055ac17787674bc5cec2fdf50",
"assets/assets/images/6/95.png": "adcb9d0e3f252f7b11fa22644f31fb6a",
"assets/assets/images/6/96.png": "b4fd7334b0dfc1878f2d58ab5eaecd4c",
"assets/assets/images/6/97.png": "05d3cf968ed1b8ae73399d9e144dfab1",
"assets/assets/images/6/98.png": "c585e9d8b401346b5967647738a9bfac",
"assets/assets/images/6/99.png": "8b322fd1f58e7a944cf8d6a8bacbd959",
"assets/assets/images/7/1.png": "8132a7bd6f3d65818c46de40a1e34e49",
"assets/assets/images/7/10.png": "874260c881cac316e37502b607b63a7f",
"assets/assets/images/7/11.png": "a5ee78a7fe03ecc7806ac8fe7956a27b",
"assets/assets/images/7/12.png": "22b11480dfa3e0b15b39b51b19056a0f",
"assets/assets/images/7/13.png": "bdee40da4153b53aba183ed91ea3aa62",
"assets/assets/images/7/14.png": "a3738efa42a7da0bf9847fbe55a06333",
"assets/assets/images/7/15.png": "841059b618747bc27dc6ed8dbb794d04",
"assets/assets/images/7/16.png": "168b1c11c2f28ffab653f4e1912a904e",
"assets/assets/images/7/17.png": "7c5d7bf2f04d3c44d58f82c2608d7c7d",
"assets/assets/images/7/18.png": "02525d59cd8da9dc5eabe88ac3f1a8ae",
"assets/assets/images/7/19.png": "1deda8098dbb9ca2da5ac97db7fa95b3",
"assets/assets/images/7/2.png": "7704057b03c37bba15b1bf9a64dc99fa",
"assets/assets/images/7/20.png": "2a978449418e28f93f71d500565a8d6c",
"assets/assets/images/7/21.png": "f7beb9b675afc1ecd2f2eee4c6c7e336",
"assets/assets/images/7/22.png": "fb4bcf0d4cb01a6f7bddc5b1a21e1f65",
"assets/assets/images/7/23.png": "1b53f8b0b34c1a8f510234b6e0fee5d6",
"assets/assets/images/7/24.png": "af2aebe8ef485dbef50686410e955681",
"assets/assets/images/7/25.png": "1c7a9ad269e5a4a6b6cb749c11b93eb9",
"assets/assets/images/7/26.png": "ba6f9e292cca2884547fd8effdb24e23",
"assets/assets/images/7/27.png": "4257439e8cee0e5453c46e09e9b9125d",
"assets/assets/images/7/28.png": "37f45d07ebdc99a94656def38bb7a2a1",
"assets/assets/images/7/29.png": "7651b3e4b038e093599b7df9989a7c38",
"assets/assets/images/7/3.png": "2886671334f778b734f1b742c5edb16e",
"assets/assets/images/7/30.png": "e13b524267f2cafbec42f8c1e646e880",
"assets/assets/images/7/31.png": "4c56ab793950f2312e1748a1a9389b44",
"assets/assets/images/7/32.png": "85ab4095e6328d5db27b73926125162a",
"assets/assets/images/7/33.png": "4dea43991b9c8607238792d77f146b3b",
"assets/assets/images/7/34.png": "8215042f86d65e12183b4fa92d9667a1",
"assets/assets/images/7/35.png": "356e28dee8889847179f171a10ca66a3",
"assets/assets/images/7/36.png": "e6a9c9b1bb8b7bedebd20f1454fe8f3f",
"assets/assets/images/7/37.png": "e3069b09f4f624368d34a3722676f8de",
"assets/assets/images/7/38.png": "ec5978968b24c83497059ca2f3ad7787",
"assets/assets/images/7/39.png": "510126ede28e63eada1a9433f87fbe81",
"assets/assets/images/7/4.png": "0c6b43843f927b2469b361d442b9945e",
"assets/assets/images/7/40.png": "f60ff10086085310cfc6b265b2573e44",
"assets/assets/images/7/41.png": "b6d5a40c897976f6777d50659345f099",
"assets/assets/images/7/42.png": "0b2d441c6464c78652ff3a1fc67a1907",
"assets/assets/images/7/43.png": "d02a14304eb9b0fd6549381473196ae3",
"assets/assets/images/7/44.png": "8a1c95d0883e34eb099d5f6c17776d76",
"assets/assets/images/7/45.png": "316c0f0a73fe65ae6252c162d2461895",
"assets/assets/images/7/46.png": "f005d548c09533b1c2dc784017b61a10",
"assets/assets/images/7/47.png": "03cb16c62d30dcc8c86ded4f85ac7724",
"assets/assets/images/7/48.png": "6ee0f31aa6f33a0da3bfe24330b08757",
"assets/assets/images/7/49.png": "2378f3ddbdf2e1ab49ee89a954a49c70",
"assets/assets/images/7/5.png": "b9205ab290eecc78d407f2ec57a0f3cf",
"assets/assets/images/7/50.png": "84f75e3bf95432d0fcb6e554df650dfc",
"assets/assets/images/7/51.png": "3a30003dd4d63450d61f8e3ba5e207d5",
"assets/assets/images/7/52.png": "d1616d90f64ad57efb2441e44fec14fe",
"assets/assets/images/7/53.png": "bc4e05c1e16941edc14e7ae3ba6fb603",
"assets/assets/images/7/54.png": "f7b02dab2c2830a9793a950747a31254",
"assets/assets/images/7/55.png": "737982b375cf16897c62f6ab3f99365e",
"assets/assets/images/7/56.png": "5796b36207dcf99b0c39a27d076b76bf",
"assets/assets/images/7/57.png": "18e29cf6cb2c8e6b95602e583e0c0a83",
"assets/assets/images/7/58.png": "62159fbcf9fcd16f1dfc0d02de14ae88",
"assets/assets/images/7/59.png": "2a85f9118bca2f0df8df63b27f0129cc",
"assets/assets/images/7/6.png": "5553f5e980ca2be4db3cbd5a1d3b939d",
"assets/assets/images/7/60.png": "01f68b2ae048c03905951d8d5fd4e179",
"assets/assets/images/7/61.png": "fba7e6e75de2cb795a90fce7d4cf25db",
"assets/assets/images/7/62.png": "4eb50dd1de034858845a4f87841713ec",
"assets/assets/images/7/63.png": "a274d407fb978acaa1c7416954a640ac",
"assets/assets/images/7/64.png": "f07da8ccfc115a08bbcbd666dab14c96",
"assets/assets/images/7/65.png": "1a39356c76343ac3b09a108b62dabf2d",
"assets/assets/images/7/66.png": "4db82b49ca9bb2b83c1e57f9b023442f",
"assets/assets/images/7/67.png": "cb2014670ee6cc10112e19b3905a024c",
"assets/assets/images/7/68.png": "cbc279977203e8d72948a3310f9262d7",
"assets/assets/images/7/69.png": "f66659ff61bb67831094ae2fa8e889e0",
"assets/assets/images/7/7.png": "e2bd24a348e8eb9e9ed0da27c3f3b9aa",
"assets/assets/images/7/70.png": "9b79de59241f10da02f8c62202bd55e1",
"assets/assets/images/7/71.png": "f1182ef3087887782265c7ce9b747f66",
"assets/assets/images/7/72.png": "4a9658dc10f9f8bad012f9ec248ef0ec",
"assets/assets/images/7/73.png": "8dcf9d39f68d56060ccab47c952936e5",
"assets/assets/images/7/74.png": "f22dc15e10e9995d33f00423f44777dc",
"assets/assets/images/7/75.png": "158ba3a117e66529ccf5a41bbecfd2fd",
"assets/assets/images/7/76.png": "222e32129c9cb7a34c3ed642e5012ab0",
"assets/assets/images/7/77.png": "3e8f53678ef27c18f553ef5ec9aa6dd7",
"assets/assets/images/7/78.png": "406ad1ffa9fa96eaa4bb7fbf84fc8486",
"assets/assets/images/7/8.png": "874c676a36696c6d5495b7347c23f60e",
"assets/assets/images/7/9.png": "25dc2611fe53751b7d7e148b7b92df9d",
"assets/assets/images/8/1.png": "8aa6727b81abbe01aee6d9f9fd51d75d",
"assets/assets/images/8/2.png": "852de4b17977476e310cc9a472eab40a",
"assets/assets/images/8/3.png": "dd6ca8540520de8b5516deeda06ab5e1",
"assets/assets/images/8/4.png": "cdc768eea15fecf7f877aec144e64555",
"assets/assets/images/8/5.png": "fc878be7babef51afde2e9d3de8e6f53",
"assets/assets/images/8/6.png": "42bd920205ff9624cda26d7aa8635163",
"assets/assets/images/8/7.png": "f8f5989abd33841a22bebc78e036b4f1",
"assets/assets/images/9/1.png": "00a1b1422ea415f04017aa799da2ba5f",
"assets/assets/images/9/10.png": "860d673319024959cc6cdd4a141ad9ae",
"assets/assets/images/9/11.png": "157d6de45aa24c953a956f5f3081dbeb",
"assets/assets/images/9/12.png": "75909585760adbbb8a5b9f29f657357a",
"assets/assets/images/9/13.png": "1faeefcfe58e54157f43afdc573d27dd",
"assets/assets/images/9/14.png": "6d8efd264fafa5b5e5911a73b497817f",
"assets/assets/images/9/2.png": "1ed3e4cb144d545069e7dd339a5a3dcc",
"assets/assets/images/9/3.png": "ab43fcb5e51f5318b2a4485f472fdb08",
"assets/assets/images/9/4.png": "438b822a715d1def077d3f4504b4f9dc",
"assets/assets/images/9/5.png": "3b4b503a9ee4e7547377e219bb3a28d3",
"assets/assets/images/9/6.png": "8f4000acea4f072ccb7ddac2b187bd20",
"assets/assets/images/9/7.png": "17845b2e20e9d853b898f89eef589fcd",
"assets/assets/images/9/8.png": "79dba6617e48f1fc53984ca498e37167",
"assets/assets/images/9/9.png": "bf71284a6c2175ce3417f638fdcea950",
"assets/assets/images/professor.jpg": "5ad4913b3942533d0169eb763c4cafb9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "f29a0c0fc3f611e5b3c60d0d43202499",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "8b4a7c3d35bd8b17c7f6f8013b8ed900",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac5d4a7b570fc4b67b53d24e22ef2599",
"/": "ac5d4a7b570fc4b67b53d24e22ef2599",
"main.dart.js": "8a89f43d98e641f139e664139d80fca2",
"manifest.json": "36c38a367338df2ed26f1993040854d6",
"version.json": "9ae7ecbaa50e9346fa9c670df7deba32"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
