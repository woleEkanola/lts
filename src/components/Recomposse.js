import styled from 'styled-components';


export const Background = styled.div`
@media screen and (max-width: 500px) {
    height: 100%;
}

min-height: 650px;
height: 100%;
width: 100%;
background-image: url(${props => props.bgImg ? props.bgImg : '0'});
background-position: center;
background-size: 100%;
background-attachment: fixed;
background-repeat: repeat;
 

z-index: -3;

`;

export const TitleWrapper = styled.div`
@media screen and (max-width: 500px) {
margin-top:45px;
height: 100px;
padding-top: 50px;
text-align: center;
}
width: 100%;
height: 130px;
margin: auto;
margin-top: 40px;
background: rgba(144, 39, 142, 0.9);
text-align: left;
padding-top: 50px;

position: fixed;



`;

export const Title = styled.h1`
@import url('https://fonts.googleapis.com/css?family=Bree+Serif|Pacifico|Work+Sans');
@media screen and (max-width: 500px) {
font-size: 20px;
margin-left: 0; 
}
font-family: 'Bree Serif', serif;
font-size: 40px;
margin-left: 200px; 
color: #fff;
text-shadow: 1px 2px 1px #000
`

export const ContentWrapper = styled.div`
@media screen and (max-width: 500px) {
    
    padding: ${props => props.paddingMobile ? props.paddingMobile : ''};
    height: auto; 
    padding-top: ${props => props.paddingTopMobile ? props.paddingTopMobile : ''};
}
  background-image: url(${props => props.bgImg ? props.bgImg : '0'});
background-position: ${props => props.bgPosition ? props.bgPosition : 'center'};
background-size: ${props => props.bgSize ? props.bgSize : '100%'};
background-attachment: ${props => props.bgAttachment ? props.bgAttachment : ''};
background-repeat: ${props => props.bgRepeat ? props.bgRepeat : ''};     
background-color: ${props => props.bgColor ? props.bgColor : ''};



   height: auto; 
    width: ${props => props.width ? props.width : '100%'};
margin: ${props => props.margin ? props.margin : 'auto'};
margin-top: ${props => props.marginTop ? props.marginTop : '0'};
margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
    z-index: -1;
     padding: ${props => props.padding ? props.padding : '0'};
     padding-top: ${props => props.paddingTop ? props.paddingTop : '0'};
     display: ${props => props.display ? props.display : ''};

    

`
export const BigWrapper = styled.div`
@media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 30px;
}
     background-color: rgba(66, 3, 65, 0.8);
    width: 63%; 
  height: 100%;
   color: #fff;
   
   flex-grow: 1;

`
export const Row = styled.div`
@media screen and (max-width: 500px) {

    padding: ${props => props.paddingMobile ? props.paddingMobile : ''};
     height: ${props => props.heightMobile ? props.heightMobile : ''};
     margin-top: ${props => props.marginTopMobile ? props.marginTopMobile : '0'};
     margin-bottom: ${props => props.marginBottomMobile ? props.marginBottomMobile : '0'};
     background-position: ${props => props.bgPositionMobile ? props.bgPositionMobile : ''};
     background-size: ${props => props.bgSizeMobile ? props.bgSizeMobile : ''};
     width: ${props => props.widthMobile ? props.widthMobile : ''};
}
background-image: url(${props => props.bgImg ? props.bgImg : '0'});
background-position: ${props => props.bgPosition ? props.bgPosition : 'center'};
background-size: ${props => props.bgSize ? props.bgSize : '100%'};
background-attachment: ${props => props.bgAttachment ? props.bgAttachment : 'fixed'};
background-repeat: ${props => props.bgRepeat ? props.bgRepeat : 'no-repeat'};     
background-color: ${props => props.bgColor ? props.bgColor : ''};

width: ${props => props.width ? props.width : 'auto'};
height: ${props => props.height ? props.height : 'auto'};
color: ${props => props.color ? props.color : '#fff'};
text-align: ${props => props.textAlign ? props.textAlign : 'center'};
padding: ${props => props.padding ? props.padding : '10px'};
margin: ${props => props.margin ? props.margin : '0'};
padding-top: ${props => props.paddingTop ? props.paddingTop : '0'};
margin-top: ${props => props.marginTop ? props.marginTop : '0'};
margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
display: ${props => props.display ? props.display : 'block'};
position: ${props => props.position ? props.position : ''};
`
export const Column = styled.div`
@media screen and (max-width: 500px) {

    padding: ${props => props.paddingMobile ? props.paddingMobile : '3px'};
     width: ${props => props.widthMobile ? props.widthMobile : ''};
     height: ${props => props.heightMobile ? props.heightMobile : 'auto'};
     margin-top: ${props => props.marginTop ? props.marginTop : '0'};
     margin-bottom: ${props => props.marginBottomMobile ? props.marginBottomMobile : '0'};
}
     background-color: ${props => props.bgColor ? props.bgColor : ''};
    width: ${props => props.width ? props.width : ''};
  height: ${props => props.height ? props.height : 'auto'};
   color: ${props => props.color ? props.color : '#fff'};
  text-align: ${props => props.textAlign ? props.textAlign : ''};
padding: ${props => props.padding ? props.padding : '10px'};
margin: ${props => props.margin ? props.margin : '0'};
margin-top: ${props => props.marginTop ? props.marginTop : '0'};
margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
margin-right: ${props => props.marginRight ? props.marginRight : '0'};
margin-left: ${props => props.marginLeft ? props.marginLeft : '0'};
flex: ${props => props.flex ? props.flex : ''};
position: ${props => props.position ? props.position : ''};
 display: ${props => props.display ? props.display : ''};
 overflow: ${props => props.overflow ? props.overflow : ''};
`

export const Button = styled.button`
@media screen and (max-width: 500px) {

    padding: ${props => props.paddingMobile ? props.paddingMobile : '10px'};
     width: ${props => props.widthMobile ? props.widthMobile : ''};
     height: ${props => props.heightMobile ? props.heightMobile : 'auto'};
     margin-top: ${props => props.marginTop ? props.marginTop : '0'};
     margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
}
     background-color: ${props => props.bgColor ? props.bgColor : ''};
    width: ${props => props.width ? props.width : ''};
  height: ${props => props.height ? props.height : 'auto'};
   color: ${props => props.color ? props.color : '#fff'};
  text-align: ${props => props.textAlign ? props.textAlign : ''};
padding: ${props => props.padding ? props.padding : '10px'};
margin: ${props => props.margin ? props.margin : '0'};
margin-top: ${props => props.marginTop ? props.marginTop : '0'};
margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
margin-right: ${props => props.marginRight ? props.marginRight : '0'};
margin-left: ${props => props.marginLeft ? props.marginLeft : '0'};
flex: ${props => props.flex ? props.flex : ''};
position: ${props => props.position ? props.position : ''};
 display: ${props => props.display ? props.display : ''};
 
`

export const SmallWrapper = styled.div`

   @media screen and (max-width: 500px) {
    display: none
}
   width: 33%; 
 
   margin-left: 30px;
   background-color: rgba(0, 0, 0, 0.8);
   padding: 10px 40px;
    

`
export const TextWrapper = styled.div`
 @media screen and (max-width: 500px) {
    font-size: 12px;
   text-align: left;
     height: auto; 
     padding-bottom: 30px;
       width: ${props => props.widthMobile ? props.widthMobile : '100%'}; 
     padding: ${props => props.paddingMobile ? props.paddingMobile : '5px 5px'};
     padding-bottom: ${props => props.paddingBottomMobile ? props.paddingBottomMobile : ''};
     margin-bottom: ${props => props.marginBottomMobile ? props.marginBottomMobile : ''};
      margin: ${props => props.marginMobile ? props.marginMobile : ''};
}

   height: auto; 
   width: ${props => props.width ? props.width : '100%'}; 
   font-size: 20px;
   text-align: justify;
    font-size: ${props => props.fontSize ? props.fontSize : ''};
   color: ${props => props.color ? props.color : '#000'};
  display: ${props => props.display ? props.display : ''};
  padding: ${props => props.padding ? props.padding : '10px 40px'};

    

`
;

export const Avatar = styled.img`

   @media screen and (max-width: 500px) {
  
}
   width: 50px; 
   height: auto;
 
  
    

`