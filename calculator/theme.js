function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  
    // Update the --theme-background-light variable in the :root style
    document.documentElement.style.setProperty('--theme-background', getBackgroundColor(theme));
    document.documentElement.style.setProperty('--theme-backgroundRepeat', getBackgroundColorRepeat(theme));
    document.documentElement.style.setProperty('--theme-backgroundAcutal', getBackgroundAcutal(theme));
    document.documentElement.style.setProperty('--theme-backgroundTransparent', getBackgroundTransparent(theme));
    document.documentElement.style.setProperty('--theme-backgroundModal', getBackgroundModal(theme));
    document.documentElement.style.setProperty('--theme-text', getTextColor(theme));
    document.documentElement.style.setProperty('--theme-FilterColor', getFilterColor(theme));
    document.documentElement.style.setProperty('--theme-textoption', getTextOptionColor(theme));
    document.documentElement.style.setProperty('--theme-Filteroption', getFilterOptionColor(theme));
    document.documentElement.style.setProperty('--theme-textoptionTwo', getTextOptionTwoColor(theme));
    document.documentElement.style.setProperty('--theme-FilteroptionTwo', getFilterOptionTwoColor(theme));
    document.documentElement.style.setProperty('--theme-textoptionThree', getTextOptionTreeColor(theme));
    document.documentElement.style.setProperty('--theme-textoptionFour', getTextOptionFourColor(theme));
    document.documentElement.style.setProperty('--theme-textoptionFive', getTextOptionFiveColor(theme));
    document.documentElement.style.setProperty('--theme-Bar', getBarColor(theme));
    document.documentElement.style.setProperty('--theme-BarTransparent', getBarTransparentColor(theme));
    document.documentElement.style.setProperty('--theme-Secondary', getSecondaryColor(theme));
    document.documentElement.style.setProperty('--theme-StyleColor', getStyleColor(theme));
    document.documentElement.style.setProperty('--theme-WflBorder', getWflBorder(theme));
    document.documentElement.style.setProperty('--theme-AddFilter', getAddFilter(theme));
    document.documentElement.style.setProperty('--theme-SharkColor', getSharkColor(theme));
    document.documentElement.style.setProperty('--theme-SharkBack', getSharkBackColor(theme));
    document.documentElement.style.setProperty('--theme-SharkBackTransparent', getSharkBackColorTransparentColor(theme));
    document.documentElement.style.setProperty('--theme-TextMid', getTextMidColor(theme));
    document.documentElement.style.setProperty('--theme-TextMidBack', getTextMidBackColor(theme));
    document.documentElement.style.setProperty('--theme-borderColor', getborderColor(theme));
    document.documentElement.style.setProperty('--theme-WflOverlay', getWflOverlay(theme));
    document.documentElement.style.setProperty('--theme-Arrow', getArrow(theme));
    document.documentElement.style.setProperty('--theme-HomeNavigatBorder', getHomeNavigatBorder(theme));
    document.documentElement.style.setProperty('--theme-Highlight', getHighlightColor(theme));
    document.documentElement.style.setProperty('--theme-HighlightFilter', getHighlightFilter(theme));
    document.documentElement.style.setProperty('--theme-ScrollingArrowFilter', getScrollingArrowFilter(theme));
    document.documentElement.style.setProperty('--theme-OutlineColor', getOutlineColor(theme));
    document.documentElement.style.setProperty('--theme-ExpandFilter', getExpandFilter(theme));
  
    document.documentElement.style.setProperty('--theme-Brightness', getBrightness(theme));
    
    
    
  
  }
  function getTextColor(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(54, 53, 55)';
      case 'silver':
        return 'rgb(253, 249, 234)';
      case 'dark':
        return 'rgb(255 ,255 , 255)';
      case 'gold':
        return 'rgb(232, 223, 179)';
      default:
        return 'rgb(109, 107, 112)';
    }
  }
  
  
  function getFilterColor(theme) {
    switch (theme) {
      case 'light':
        return 'invert(16%) sepia(12%) saturate(153%) hue-rotate(227deg) brightness(95%) contrast(85%)';
      case 'silver':
        return 'invert(100%) sepia(11%) saturate(140%) hue-rotate(326deg) brightness(96%) contrast(106%)';
      case 'dark':
        return 'invert(100%) sepia(0%) saturate(0%) hue-rotate(201deg) brightness(105%) contrast(105%)';
      case 'gold':
        return 'brightness(0) saturate(100%) invert(89%) sepia(17%) saturate(453%) hue-rotate(7deg) brightness(104%) contrast(82%)';
      default:
        return 'invert(16%) sepia(12%) saturate(153%) hue-rotate(227deg) brightness(95%) contrast(85%)';
    }
  }
  
  
  function getTextOptionColor(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(255, 255, 255)';
      case 'silver':
        return 'rgb(253, 249, 234)';
      case 'dark':
        'rgb(255, 255, 255)';
      case 'gold':
        return 'rgb(244, 232, 207)';
      default:
        return 'rgb(255, 255, 255)';
    }
  }
  
  function getFilterOptionColor(theme) {
    switch (theme) {
      case 'light':
        return 'invert(93%) sepia(100%) saturate(0%) hue-rotate(223deg) brightness(106%) contrast(108%)';
      case 'silver':
        return 'brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(2217%) hue-rotate(318deg) brightness(95%) contrast(109%)';
      case 'dark':
        return 'invert(100%) sepia(100%) saturate(0%) hue-rotate(312deg) brightness(104%) contrast(101%)';
      case 'gold':
        return 'invert(91%) sepia(18%) saturate(237%) hue-rotate(2deg) brightness(99%) contrast(94%)';
      default:
        return 'invert(93%) sepia(100%) saturate(0%) hue-rotate(223deg) brightness(106%) contrast(108%)';
    }
  }
  
  function getTextOptionTwoColor(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(54, 53, 55)';
      case 'silver':
        return 'rgb(253, 249, 234)';
      case 'dark':
        return 'rgb(54, 53, 55)';
      case 'gold':
        return 'rgb(253, 249, 234)';
      default:
        return 'rgb(54, 53, 55)';
    }
  }
  
  function getFilterOptionTwoColor(theme) {
    switch (theme) {
      case 'light':
        return 'invert(17%) sepia(5%) saturate(321%) hue-rotate(227deg) brightness(93%) contrast(85%)';
      case 'silver':
        return 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(283%) hue-rotate(323deg) brightness(111%) contrast(103%)';
      case 'dark':
        return 'invert(17%) sepia(5%) saturate(321%) hue-rotate(227deg) brightness(93%) contrast(85%)';
      case 'gold':
        return 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(283%) hue-rotate(323deg) brightness(111%) contrast(103%)';
      default:
        return 'invert(17%) sepia(5%) saturate(321%) hue-rotate(227deg) brightness(93%) contrast(85%)';
    }
  }
  
  function getTextOptionTreeColor(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(109, 107, 112)';
      case 'silver':
        return 'rgb(205, 199, 187)';
      case 'dark':
        return 'rgb(109, 107, 112)';
      case 'gold':
        return 'rgb(139, 132, 108)';
      default:
        return 'rgb(109, 107, 112)';
    }
  }


  function getTextOptionFourColor(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(109, 107, 112)';
      case 'silver':
        return 'rgb(253, 249, 234)';
      case 'dark':
        return 'rgb(109, 107, 112)';
      case 'gold':
        return 'rgb(232, 223, 179)';
      default:
        return 'rgb(109, 107, 112)';
    }
  }

  function getTextOptionFiveColor(theme) {
    switch (theme) {
      case 'light':
        return '#ccc';
      case 'silver':
        return 'rgb(205, 199, 187)';
      case 'dark':
        return 'rgb(109, 107, 112)';
      case 'gold':
        return 'rgb(139, 132, 108)';
      default:
        return 'rgb(109, 107, 112)';
    }
  }
  
 


  function getBackgroundColorRepeat(theme) {
    switch (theme) {
      case 'light':
        return 'repeating-linear-gradient(135deg,rgb(243, 231, 214) 0vw, rgb(235, 229, 220) 50vw, rgb(253, 249, 234) 100vw, rgb(235, 229, 220) 150vw, rgb(243, 231, 214) 200vw)';
      case 'silver':
        return 'repeating-linear-gradient(135deg,rgb(128, 120, 112) 0vw, rgb(163, 155, 146) 50vw, rgb(247, 240, 231) 100vw, rgb(163, 155, 146) 150vw,rgb(128, 120, 112) 200vw)';
      case 'dark':
        return 'repeating-linear-gradient(135deg,rgb(0, 0, 0) 0vw, rgb(19, 18, 21) 50vw, rgb(40, 38, 43) 100vw,rgb(19, 18, 21) 150vw, rgb(0, 0, 0) 200vw)';
      case 'gold':
        return 'repeating-linear-gradient(135deg,rgb(0, 0, 0) 0vw, rgb(55, 51, 48) 50vw, rgb(151, 128, 98) 100vw,rgb(55, 51, 48) 150vw,rgb(0, 0, 0) 200vw)';
      default:
        return 'repeating-linear-gradient(135deg,rgb(243, 231, 214) 0vw, rgb(235, 229, 220) 50vw, rgb(253, 249, 234) 100vw, rgb(235, 229, 220) 150vw, rgb(243, 231, 214) 200vw)';
    }
  }



  function getBackgroundAcutal(theme) {
    switch (theme) {
      case 'light':
        return 'linear-gradient(135deg, rgb(226, 217, 205) 0%, rgb(241, 237, 230) 50%, rgb(246, 243, 233) 100%)';
      case 'silver':
        return 'linear-gradient(135deg, rgb(128, 120, 112) 0%, rgb(163, 155, 146) 50%, rgb(247, 240, 231) 100%) 0px 0px';
      case 'dark':
        return 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(19, 18, 21) 50%, rgb(40, 38, 43) 100%) 0px 0px';
      case 'gold':
        return 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(55, 51, 48) 50%, rgb(151, 128, 98) 100%) 0px 0px';
      default:
        return 'linear-gradient(135deg, rgb(226, 217, 205) 0%, rgb(241, 237, 230) 50%, rgb(246, 243, 233) 100%)';
    }
  }
  
  function getBackgroundTransparent(theme) {
    switch (theme) {
      case 'light':
        return 'linear-gradient(135deg, rgba(255, 145, 0, 0.2) 0%, rgba(255, 102, 102, 0.2) 50%, rgba(255, 102, 102, 0.2) 100%) 0px 0px / 100% 100%;';
      case 'silver':
        return 'linear-gradient(135deg, rgba(128, 120, 112, 0.3) 0%, rgba(163, 155, 146, 0.2) 50%, rgba(247, 240, 231, 0.2) 100%) 0px 0px';
      case 'dark':
        return 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(19, 18, 21, 0.5) 50%, rgba(40, 38, 43, 0.5) 100%) 0px 0px';
      case 'gold':
        return 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(55, 51, 48, 0.2) 50%, rgba(151, 128, 98, 0.2) 100%) 0px 0px';
      default:
        return 'linear-gradient(135deg, rgba(255, 145, 0, 0.2) 0%, rgba(255, 102, 102, 0.2) 50%, rgba(255, 102, 102, 0.2) 100%) 0px 0px / 100% 100%;';
    }
  }
  
  function getBackgroundModal(theme) {
    switch (theme) {
      case 'light':
        return 'linear-gradient(135deg, rgb(243, 231, 214) 0%, rgb(205, 192, 192) 50%, rgb(253, 249, 234) 100%)';
      case 'silver':
        return 'linear-gradient(135deg, rgb(128, 120, 112) 0%, rgb(163, 155, 146) 50%, rgb(247, 240, 231) 100%) 0px 0px';
      case 'dark':
        return 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(19, 18, 21) 50%, rgb(40, 38, 43) 100%) 0px 0px';
      case 'gold':
        return 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(55, 51, 48) 50%, rgb(151, 128, 98) 100%) 0px 0px';
      default:
        return 'linear-gradient(135deg, rgb(243, 231, 214) 0%, rgb(205, 192, 192) 50%, rgb(253, 249, 234) 100%)';
    }
  }
  
  function getBarColor(theme) {
    switch (theme) {
      case 'light':
        return 'linear-gradient(135deg, rgb(255, 145, 0) 0%, rgb(255, 102, 102) 50%, rgb(255, 102, 102) 100%) 0px 0px';
      case 'silver':
        return 'linear-gradient(135deg, rgb(128, 120, 112) 0%, rgb(163, 155, 146) 50%, rgb(247, 240, 231) 100%) 0px 0px';
      case 'dark':
        return 'linear-gradient(135deg, rgba(182, 170, 153, 0.2) 0%, rgba(253, 249, 234, 0.02) 50%, rgba(182, 170, 153, 0.2) 100%) 0px 0px';
      case 'gold':
        return 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(55, 51, 48) 50%, rgb(151, 128, 98) 100%) 0px 0px';
      default:
        return 'linear-gradient(135deg, rgb(255, 145, 0) 0%, rgb(255, 102, 102) 50%, rgb(255, 102, 102) 100%) 0px 0px';
    }
  }
  
  function getBarTransparentColor(theme) {
    switch (theme) {
      case 'light':
        return 'linear-gradient(135deg, rgba(255, 145, 0, 0.3) 0%, rgba(255, 102, 102, 0.3) 50%, rgba(255, 102, 102, 0.3) 100%)';
      case 'silver':
        return 'linear-gradient(135deg, rgba(128, 120, 112, 0.3) 0%, rgba(163, 155, 146, 0.3) 50%, rgba(247, 240, 231, 0.3) 100%)';
      case 'dark':
        return 'linear-gradient(135deg, rgba(182, 170, 153, 0.075) 0%, rgba(253, 249, 234, 0.075) 50%, rgba(182, 170, 153, 0.075) 100%) 0px 0px';
      case 'gold':
        return 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(55, 51, 48, 0.3) 50%, rgba(151, 128, 98, 0.3) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(255, 145, 0, 0.3) 0%, rgba(255, 102, 102, 0.3) 50%, rgba(255, 102, 102, 0.3) 100%)';
    }
  }
  
  
  
  function getSecondaryColor(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(255, 102, 102)';
      case 'silver':
        return '#FDF9EA';
      case 'dark':
        return 'black';
      case 'gold':
        return 'rgb(232, 223, 179)';
      default:
        return 'rgb(255, 102, 102)';
    }
  }
  
  function getStyleColor(theme) {
    switch (theme) {
      case 'light':
        return 'white';
      case 'silver':
        return 'white';
      case 'dark':
        return 'black';
      case 'gold':
        return 'black';
      default:
        return 'white';
    }
  }

  function getWflBorder(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(234, 234, 235)';
      case 'silver':
        return 'white';
      case 'dark':
        return 'black';
      case 'gold':
        return 'black';
      default:
        return 'white';
    }
  }

  
  function getAddFilter(theme) {
    switch (theme) {
      case 'light':
        return 'invert(100%) sepia(59%) saturate(855%) hue-rotate(299deg) brightness(108%) contrast(98%)';
      case 'silver':
        return 'invert(93%) sepia(7%) saturate(380%) hue-rotate(2deg) brightness(88%) contrast(85%)';
      case 'dark':
        return 'invert(43%) sepia(9%) saturate(8%) hue-rotate(336deg) brightness(95%) contrast(92%)';
      case 'gold':
        return 'invert(57%) sepia(12%) saturate(602%) hue-rotate(9deg) brightness(89%) contrast(87%)';
      default:
        return 'invert(100%) sepia(59%) saturate(855%) hue-rotate(299deg) brightness(108%) contrast(98%)';
    }
  }
  
  function getSharkColor(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(253, 249, 234)';
      case 'silver':
        return 'rgb(253, 249, 234)';
      case 'dark':
        return '#6D6B70';
      case 'gold':
        return 'rgb(232, 223, 179)';
      default:
        return 'rgb(253, 249, 234)';
    }
  }
  
  function getSharkBackColor(theme) {
    switch (theme) {
      case 'light':
        return 'linear-gradient(135deg, rgb(255, 145, 0) 0%, rgb(255, 102, 102) 50%, rgb(255, 102, 102) 100%) 0px 0px';
      case 'silver':
        return 'linear-gradient(135deg, rgb(128, 120, 112) 0%, rgb(163, 155, 146) 50%, rgb(247, 240, 231) 100%) 0px 0px';
      case 'dark':
        return 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(19, 18, 21) 50%, rgb(40, 38, 43) 100%';
      case 'gold':
        return 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(55, 51, 48) 50%, rgb(151, 128, 98) 100%) 0px 0px';
      default:
        return 'linear-gradient(135deg, rgb(255, 145, 0) 0%, rgb(255, 102, 102) 50%, rgb(255, 102, 102) 100%) 0px 0px';
    }
  }
  
  function getSharkBackColorTransparentColor(theme) {
    switch (theme) {
      case 'light':
        return 'linear-gradient(135deg, rgba(255, 145, 0, 0.3) 0%, rgba(255, 102, 102, 0.3) 50%, rgba(255, 102, 102, 0.3) 100%)';
      case 'silver':
        return 'linear-gradient(135deg, rgba(128, 120, 112, 0.3) 0%, rgba(163, 155, 146, 0.3) 50%, rgba(247, 240, 231, 0.3) 100%)';
      case 'dark':
        return 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgb(19, 18, 21, 0.3) 50%, rgb(40, 38, 43, 0.3) 100%';
      case 'gold':
        return 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(55, 51, 48, 0.3) 50%, rgba(151, 128, 98, 0.3) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(255, 145, 0, 0.3) 0%, rgba(255, 102, 102, 0.3) 50%, rgba(255, 102, 102, 0.3) 100%)';
    }
  }
  
  function getTextMidBackColor(theme) {
  switch (theme) {
    case 'light':
      return '#FDF9EA';
    case 'silver':
      return 'rgb(253 249 234)';
    case 'dark':
      return 'black';
    case 'gold':
      return 'rgb(253 249 234)';
    default:
      return '#FDF9EA';
  }
  }
  function getTextMidColor(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(54, 53, 55)';
      case 'silver':
        return 'rgb(107, 107, 107)';
      case 'dark':
        return 'rgb(54, 53, 55)';
      case 'gold':
        return 'rgb(29, 28, 26)';
      default:
        return 'rgb(54, 53, 55)';
    }
  }
  
  function getborderColor(theme) {
    switch (theme) {
      case 'light':
        return 'white';
      case 'silver':
        return 'rgb(253, 249, 234)';
      case 'dark':
        return 'rgb(109, 107, 112)';
      case 'gold':
        return 'rgb(232, 223, 179)';
      default:
        return 'white';
    }
  }
  
  
  
  function getWflOverlay(theme) {
    switch (theme) {
      case 'light':
        return 'linear-gradient(var(--gradient-degree), rgba(182, 170, 153, 0.5) 0%, rgba(253, 249, 234, 0) 50%, rgba(182, 170, 153, 0.5) 100%) 0px 0px / 100% 100%';
      case 'silver':
        return 'linear-gradient(var(--gradient-degree), rgba(182, 170, 153, 0.5) 0%, rgba(253, 249, 234, 0) 50%, rgba(182, 170, 153, 0.5) 100%) 0px 0px / 100% 100%';
      case 'dark':
        return 'linear-gradient(var(--gradient-degree), rgba(182, 170, 153, 0.5) 0%, rgba(253, 249, 234, 0) 50%, rgba(182, 170, 153, 0.5) 100%) 0px 0px / 100% 100%';
      case 'gold':
        return 'linear-gradient(var(--gradient-degree), rgba(232, 223, 178, 0.7) 0%, rgba(253, 249, 234, 0.094) 50%, rgba(232, 223, 178, 0.7) 100%) 0px 0px / 100% 100%';
      default:
        return 'linear-gradient(var(--gradient-degree), rgba(182, 170, 153, 0.5) 0%, rgba(253, 249, 234, 0) 50%, rgba(182, 170, 153, 0.5) 100%) 0px 0px / 100% 100%';
    }
  }
  
  function getArrow(theme) {
    switch (theme) {
      case 'light':
        return 'invert(43%) sepia(8%) saturate(200%) hue-rotate(222deg) brightness(94%) contrast(84%)';
      case 'silver':
        return 'invert(94%) sepia(8%) saturate(1161%) hue-rotate(312deg) brightness(103%) contrast(114%)';
      case 'dark':
        return 'invert(19%) sepia(7%) saturate(198%) hue-rotate(227deg) brightness(94%) contrast(93%)';
      case 'gold':
        return 'invert(4%) sepia(8%) saturate(1066%) hue-rotate(2deg) brightness(89%) contrast(84%)';
      default:
        return 'invert(43%) sepia(8%) saturate(200%) hue-rotate(222deg) brightness(94%) contrast(84%)';
    }
  }

  function getHomeNavigatBorder(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(54, 53, 55)';
      case 'silver':
        return 'rgb(255, 255, 255)';
      case 'dark':
        return 'rgb(255, 255, 255)';
      case 'gold':
        return 'rgb(255, 255, 255)';
      default:
        return 'rgb(54, 53, 55)';
    }
  }

  function getHighlightColor(theme) {
    switch (theme) {
      case 'light':
        return 'rgb(255, 102, 102)';
      case 'silver':
        return 'rgb(177, 228, 240)';
      case 'dark':
        return 'rgb(255, 102, 102)';
      case 'gold':
        return 'rgb(255, 102, 102)';
      default:
        return 'rgb(255, 102, 102)';
    }
  }

  function getHighlightFilter(theme) {
    switch (theme) {
      case 'light':
        return 'invert(59%) sepia(47%) saturate(4578%) hue-rotate(323deg) brightness(108%) contrast(107%)';
      case 'silver':
        return 'brightness(0) saturate(100%) invert(100%) sepia(94%) saturate(1321%) hue-rotate(167deg) brightness(95%) contrast(98%)';
      case 'dark':
        return 'invert(59%) sepia(47%) saturate(4578%) hue-rotate(323deg) brightness(108%) contrast(107%)';
      case 'gold':
        return 'invert(59%) sepia(47%) saturate(4578%) hue-rotate(323deg) brightness(108%) contrast(107%)';
      default:
        return 'invert(59%) sepia(47%) saturate(4578%) hue-rotate(323deg) brightness(108%) contrast(107%)';
    }
  }

  function getScrollingArrowFilter(theme) {
    switch (theme) {
      case 'light':
        return 'invert(89%) sepia(25%) saturate(218%) hue-rotate(330deg) brightness(108%) contrast(98%)';
      case 'silver':
        return 'invert(91%) sepia(17%) saturate(307%) hue-rotate(330deg) brightness(107%) contrast(98%) opacity(0.3)';
      case 'dark':
        return 'invert(17%) sepia(5%) saturate(288%) hue-rotate(227deg) brightness(100%) contrast(89%)';
      case 'gold':
        return 'invert(95%) sepia(19%) saturate(506%) hue-rotate(340deg) brightness(93%) contrast(95%)';
      default:
        return 'invert(89%) sepia(25%) saturate(218%) hue-rotate(330deg) brightness(108%) contrast(98%)';
    }
  }

  function getOutlineColor(theme) {
    switch (theme) {
      case 'light':
        return '#FDF9EA';
      case 'silver':
        return '#363537';
      case 'dark':
        return '#363537';
      case 'gold':
        return '#363537';
      default:
        return '#FDF9EA';
    }
  }

  function getExpandFilter(theme) {
    switch (theme) {
      case 'light':
        return 'invert(18%) sepia(7%) saturate(184%) hue-rotate(227deg) brightness(94%) contrast(89%)';
      case 'silver':
        return 'invert(90%) sepia(8%) saturate(694%) hue-rotate(329deg) brightness(111%) contrast(98%)';
      case 'dark':
        return 'invert(18%) sepia(7%) saturate(184%) hue-rotate(227deg) brightness(94%) contrast(89%)';
      case 'gold':
        return 'invert(86%) sepia(17%) saturate(403%) hue-rotate(12deg) brightness(101%) contrast(93%)';
      default:
        return 'invert(18%) sepia(7%) saturate(184%) hue-rotate(227deg) brightness(94%) contrast(89%)';
    }
  }
  
  
  function getBrightness(theme) {
    switch (theme) {
      case 'light':
        return 1;
      case 'silver':
        return 1;
      case 'dark':
        return 0;
      case 'gold':
        return 0;
      default:
        return 1;
    }
  }
  
  
  
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    else {setTheme()}
  }
  
  loadTheme();
