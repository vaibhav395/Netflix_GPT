export const logo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const usericon = "https://media.licdn.com/dms/image/v2/D5635AQEY4Phfw2SU5w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727288103546?e=1736161200&v=beta&t=yD1LYV0pG0JzOmkOSo_Ej4w2ACGsVcRKlUZ1BMVPQOU"

export const API_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const NETFLIX_BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]


export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;