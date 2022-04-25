import { createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`

   :root{
    --black : #121212;
    --black200 : #151515; 
    /* --red : #780206; */
    --red : #FF050D;
    --blue : #061161;
    --darkgray : #1F1F1F;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: "Roboto", sans-serif;
        color: white;
        scroll-behavior:smooth;
    }

    #root{
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color: var(--black)
    }

    main{
        width:100%;
        display:flex;
        flex-direction: column;
        align-items:center;
        background-color: var(--black);
        overflow-y:scroll;
    }
    a, a:hover{
        text-decoration:none;
        color: white;
    }

    li{
        list-style-type:none;
    }

    section{
        width: 80%;
        max-width: 1366px;
        padding-top:100px;
    }

    .img-fluid{
        max-width:100%;
    }

    .active{
        color:var(--red);
    }

    .active rect{
        transition: .7s;
        fill:var(--red);

        &.lineone{
            transform:rotate(37deg);
            transform-origin:left;
            transform-box:fill-box;
            
        }
        &.linetwo{
           transform: scaleX(0);
            
        }
        &.linethree{
            transform:rotate(-33deg);
            transform-origin:left;
            transform-box:fill-box;
            
        }

    }

    .disabled rect{
        transition: .7s;
        animation: disabledmenu .7s forwards;
    }

    @keyframes disabledmenu{
        from{
            &.lineone{
            transform:rotate(37deg);
            transform-origin:left;
            transform-box:fill-box;
            
            }
            &.linetwo{
            transform: scaleX(0);
                
            }
            &.linethree{
                transform:rotate(-33deg);
                transform-origin:left;
                transform-box:fill-box;
            }
        }
        to{
            &.lineone{
            transform:rotate(0deg);
            transform-origin:left;
            transform-box:fill-box;
            
            }
            &.linetwo{
            transform: scaleX(100%);
                
            }
            &.linethree{
                transform:rotate(0deg);
                transform-origin:left;
                transform-box:fill-box;
                
            }
        }
    } 

    .gear{
       animation: rotategear 2s ease-in-out infinite ;
    }

    .smartbutton{
        animation: blinkbutton 2s ease-in-out infinite;
    }

    .phonename{
        animation: animetext 2s ease-in-out infinite;
    }

    @keyframes animetext {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
            fill:red
        }
    }

    @keyframes blinkbutton {
        from{
            fill: var(--black);
        }
        to {
            fill:var(--red);
        }
    }

    @keyframes rotategear {
        from {
            transform: rotate(0deg);
            transform-origin:center;
            transform-box:fill-box;
        }
        to {
            transform: rotate(360deg);
            transform-origin:center;
            transform-box:fill-box;
        }
    }   

    .animeleft{
        animation: fromleft 1.5s forwards ease-in-out;
    }
    .animeright{
        animation: fromright 1.5s forwards ease-in-out;
    }

    .animepop {
        animation: animepop 1.6s forwards ease-in-out;
    }

    @keyframes fromleft {
        from{
            opacity: 0;
            transform:translateX(-100%) scale(0);
        }
        95% {
            opacity: 1;
            transform:translateX(0%) scale(1.2);

        }
        to{
            opacity: 1;
            transform:translateX(0%) scale(1);
        }
    }

    @keyframes fromright {
        from{
            opacity: 0;
            transform:translateX(100%) scale(0);
        }
        95% {
            opacity: 1;
            transform:translateX(0%) scale(1.2);

        }
        to {
            opacity: 1;
            transform:translateX(0%) scale(1);
        }
    }

    @keyframes animepop{
        from{
            opacity: 0;
            transform: scale(0);
        }
        50%{
            opacity: .6;
            transform: scale(1.2);
        }
        to{
            opacity: 1;
            transform: scale(1);
        }
    }

    .an-toBottom{
        animation: tobottom 1s forwards;
    }

    .an-toTop{
        animation: totop 1s forwards;
    }

    @keyframes totop { 
        from{
            opacity: 1;
            transform: translateY(0%);
           
        }
       to{
           opacity: 0;
           transform: translateY(-103%);
       }
    }

    @keyframes tobottom {
        from{
            display: none;
            opacity: 0;
            transform: translateY(-103%);
        }
        to{
          opacity:1;
          display:flex;
        }
    }   

    ::-webkit-scrollbar{
        width: 5px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--red);
    }
    ::-webkit-scrollbar-track{
        background-color: var(--darkgray);
    }

    ::selection {
        color:var(--black);
        background:var(--red);
    }
`